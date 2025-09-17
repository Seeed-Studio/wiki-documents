---
description: 本维基提供华馨京 StarAI 机械臂的调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: StarAI 机械臂Lerobot入门教程
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /cn/lerobot_starai_arm
last_update:
  date: 9/15/2025
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

1. **开源 & 便于二次开发**
   本系列舵机由[华馨京科技](https://fashionrobo.com/)提供，是一套开源、便于二次开发的6+1自由度机器臂解决方案。
2. **支持 LeRobot 平台集成**
   专为与 [LeRobot 平台](https://github.com/huggingface/lerobot) 集成而设计。该平台提供 PyTorch 模型、数据集与工具，面向现实机器人任务的模仿学习（包括数据采集、仿真、训练与部署）。
3. **丰富的学习资源**
   提供全面的开源学习资源，包括环境搭建，安装与调试与自定义夹取任务案例帮助用户快速上手并开发机器人应用。
4. **兼容 Nvidia 平台**
   支持通过 reComputer Mini J4012 Orin NX 16GB 平台进行部署。

## 特点内容

- **零组装**:  即刻上手｜一开箱即踏入AI时代。
- 6+1自由度结构设计，470mm臂展，赋予无限操作可能。
- 配备2颗全金属无刷总线舵机，稳定驱动，轻松承重300g。
- 智能平行夹爪，最大开合66mm，模块化指尖，精准抓取不设限。
- 独家悬停控制系统，指尖一按，Leader Arm稳停于任意姿态。


## 规格参数

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>


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
git clone https://github.com/servodevelop/lerobot.git
```

并切换到starai-arm-develop分支

```bash
git checkout starai-arm-develop
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

如果你遇到以下报错，也可以使用上述命令解决。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5.安装带有 fashionstar 电机依赖的 LeRobot：

```bash
cd ~/lerobot && pip install -e ".[starai]"
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

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115207481328973&bvid=BV1N7puzGEG4&cid=32397135257&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 手臂端口设置

进入`src`目录：

```bash
cd src
```

在终端输入以下指令来找到两个机械臂对应的端口号：

```bash
python -m lerobot.find_port
```

:::tip
需要拔出USB，再按下回车，否则将无法检测到接口。
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
sudo chmod 666 /dev/ttyUSB1
```
:::

### 单臂校准设置

如果是第一次校准，请对每个关节左右转动到对应位置。

如果是重新校准，按照命令提示输入字母c后按Enter键。

下面是参考值,通常情况下，真实的限位参考值的±10°范围内。

| 舵机ID  | 角度下限参考值 | 角度上限参考值 | 备注                               |
| ------- | -------------: | -------------: | ---------------------------------- |
| motor_0 |          -180° |           180° | 转动到限位处                       |
| motor_1 |           -90° |            90° | 转动到限位处                       |
| motor_2 |           -90° |            90° | 转动到限位处                       |
| motor_3 |          -180° |           180° | 没有限位，需转动到角度上下限参考值 |
| motor_4 |           -90° |            90° | 转动到限位处                       |
| motor_5 |          -180° |           180° | 没有限位，需转动到角度上下限参考值 |
| motor_6 |             0° |           100° | 转动到限位处                       |

:::tip
以PC(linux)和jetson板卡为例，`第一个`插入usb接口会映射为`ttyUSB0`，`第二个`插入usb接口会映射为`ttyUSB1`。

在运行代码前请注意leader和follower的映射接口。
:::

#### leader机械臂

将leader连接到`/dev/ttyUSB0`，或者修改`--teleop.port`，然后执行：

```bash
python -m lerobot.calibrate --teleop.type=starai_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

#### follower机械臂

将follower连接到`/dev/ttyUSB1`，或者修改`--teleop.port`，然后执行：

```bash
python -m lerobot.calibrate --robot.type=starai_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

在运行命令后，需要**手动掰机械臂**，让每个关节达到**极限值**，终端会显示记录的范围数据，做完此操作后按下回车即可。

:::tip
校准的文件会保存到以下路径`~/.cache/huggingface/lerobot/calibration/robots`和`~/.cache/huggingface/lerobot/calibration/teleoperators`下。
:::

### 双臂校准设置

<details>
<summary> 教程 </summary>

#### leader机械臂

将left_arm_port连接到`/dev/ttyUSB0`，right_arm_port连接到`/dev/ttyUSB2`，或者修改`--teleop.left_arm_port` `--teleop.right_arm_port`，然后执行：

```bash
python -m lerobot.calibrate --teleop.type=bi_starai_leader --teleop.left_arm_port=/dev/ttyUSB0 --teleop.right_arm_port=/dev/ttyUSB2 --teleop.id=bi_starai_leader
```

#### follower机械臂

将left_arm_port连接到`/dev/ttyUSB1`，right_arm_port连接到`/dev/ttyUSB3`，或者修改`--robot.left_arm_port` `--robot.right_arm_port`，然后执行：

```bash
python -m lerobot.calibrate --robot.type=bi_starai_follower --robot.left_arm_port=/dev/ttyUSB1 --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_follower
```

:::tip

单臂和双臂的区别在于`--teleop.type`和`--robot.type`不一样，同时双臂需要给左右手各一个usb口，总共需要4个usb口`--teleop.left_arm_port` `--teleop.right_arm_port` `--robot.left_arm_port` `--robot.right_arm_port`。

若使用双臂，需要手动修改机械臂文件类型`--teleop.type` `--robot.type`和usb口`--teleop.left_arm_port` `--teleop.right_arm_port` `--robot.left_arm_port` `--robot.right_arm_port`，来适配遥操，收集数据，训练和评估命令。

:::

</details>

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
python -m lerobot.teleoperate \
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
python -m lerobot.teleoperate \
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

远程操作命令将自动检测下列参数:

1. 识别任何缺失的校准并启动校准程序。
2. 连接机器人和远程操作设备并开始远程操作。

程序启动后，悬停按钮依旧生效。


## 添加摄像头

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

在插入您的两个 USB 摄像头后，运行以下脚本以检查摄像头的端口号，切记摄像头避免插在USB Hub上，USB Hub速率太慢会导致读不到图像数据。

```bash
python -m lerobot.find_cameras opencv # or realsense for Intel Realsense cameras
```

终端将打印出以下信息。以我的笔记本为例，笔记本摄像头为Camera0和Camera1，index_or_path分别为2和4。

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

您可以在 `outputs/images_from_opencv_cameras` 目录中找到每个摄像头拍摄的图片，并确认不同位置摄像头对应的端口索引信息。

确认外接摄像头后，将摄像头信息替换下方cameras信息您将能够在遥操作时在计算机上显示摄像头：

```bash
python -m lerobot.teleoperate \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

<details>
<summary> 双臂 </summary>

```bash
python -m lerobot.teleoperate \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --display_data=true
```
</details>

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

记录 10 个回合并上传数据集到 Hub：

```bash
python -m lerobot.record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/starai \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> 双臂 </summary>

```bash
python -m lerobot.record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

:::tip

为了区分单双臂，这里的`--dataset.repo_id`命名为`starai/record-test_bi_arm`。

:::

</details>

:::tip
如果你不想使用 Hugging Face Hub 的上传数据集功能，可以选择 `--dataset.push_to_hub=false`。同时将 `--dataset.repo_id=${HF_USER}/starai` 替换为一个自定义的本地文件夹名称，例如 `--dataset.repo_id=starai/record-test`。数据将存储在系统主目录下的 `~/.cache/huggingface/lerobot`。
:::

不上传到Hub:
**（推荐，下文的教程会以本地数据为主）** 

```bash
python -m lerobot.record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \#修改push_to_hub为false
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> 双臂 </summary>

```bash
python -m lerobot.record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \#修改push_to_hub为false
    --dataset.single_task="Grab the black cube"
```

:::tip

为了区分单双臂，这里的`--dataset.repo_id`命名为`starai/record-test_bi_arm`。

:::

</details>

- `record` 提供了一套用于在机器人操作过程中捕获和管理数据的工具:

#### 1.数据存储

- 数据使用 `LeRobotDataset` 格式存储，并在录制过程中存储在磁盘上。

#### 2.检查点和恢复

- 记录期间会自动创建检查点。
- 如果出现问题，可以通过使用`--resume=true`重新运行相同的命令来恢复。恢复录制时，必须设置为**要录制的额外集数**`--dataset.num_episodes`，而不是数据集中的目标总剧集数！ 
- 要从头开始录制，请**手动删除**数据集目录。

#### 3.记录参数 

使用命令行参数设置数据记录流：

```markdown
参数说明
- warmup-time-s: 指初始化时间。
- episode-time-s: 表示每次收集数据的时间。
- reset-time-s: 是每次数据收集之间的准备时间。
- num-episodes: 表示预期收集多少组数据。
- push-to-hub: 决定是否将数据上传到 HuggingFace Hub。
``` 

#### 4.录制期间的键盘控制

使用键盘快捷键控制数据记录流：

- 按**右方向键(→)** ： 提前停止当前情节或重置时间,然后移动到下一个。

- 按**左方向键(←)** ：取消当前插曲并重新录制。
- 按**ESC**：立即停止会话,编码视频并上传数据集。

:::tip
在 Linux 上,如果左右箭头键和转义键在数据记录过程中没有任何效果,请确保已设置$DISPLAY环境变量。参见 pynput 限制。

一旦你熟悉了数据记录,你就可以创建一个更大的数据集进行训练。一个好的开始任务是抓住一个物体在不同的位置,并把它放在一个小盒子里。我们建议录制至少50集,每个地点10集。保持相机固定,并在整个录制中保持一致的抓握行为。还要确保你操纵的对象在相机上可见。一个好的经验法则是,你应该能够只看相机图像自己完成任务。
:::


## 可视化数据集

:::tip
不稳定，可跳过，可尝试。
:::

```bash
echo ${HF_USER}/starai  
```

如果您使用了 `--dataset.push_to_hub=true` ，并上传了数据，您可以在本地通过以下命令进行可视化：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/starai
```

如果您使用了 `--dataset.push_to_hub=false` ，没有上传数据，您可以通过以下命令在本地进行可视化：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id starai/record-test
```

这里的`starai/record-test`为采集数据时候自定义的`repo_id`名。

## 重播一个回合

现在尝试在您的机器人上重播第一个回合:

```bash
python -m lerobot.replay \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=0 # choose the episode you want to replay
```
<details>
<summary> 双臂 </summary>

```bash
python -m lerobot.replay \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```
</details>

## 训练

要训练一个控制您机器人策略，以下是一个示例命令：

```bash
python -m lerobot.scripts.train \
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
python -m lerobot.scripts.train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_viola_test \
  --job_name=act_bi_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy
```
</details>

1. 我们提供了数据集作为参数。`dataset.repo_id=starai/record-test`
2. 我们将从 [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py) 加载配置。重要的是，此策略将自动适应机器人的电机状态、电机动作和相机的数量，并保存在您的数据集中。
3. 我们提供了 `wandb.enable=true` 来使用 [Weights and Biases](https://docs.wandb.ai/quickstart) 可视化训练图表。这是可选的，但如果您使用它，请确保您已通过运行 `wandb login` 登录。

从某个检查点恢复训练。

```bash
python -m lerobot.scripts.train \
  --config_path=outputs/train/act_viola_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## 评估

运行以下命令记录 10 个评估回合：

```bash
python -m lerobot.record  \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Grab the black cube" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
```

<details>
<summary> 双臂 </summary>

```bash
python -m lerobot.record  \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30}}" \
    --robot.id=bi_starai_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model
```
</details>

如您所见，这几乎与之前用于记录训练数据集的命令相同，注意几处变化：

1.  `--policy.path` 参数，指示您的策略训练结果权重文件的路径（例如 `outputs/train/act_viola_test/checkpoints/last/pretrained_model`）。如果您将模型训练结果权重文件上传到 Hub，也可以使用模型仓库（例如 `${HF_USER}/starai`）。
2. 评估数据集的名称`dataset.repo_id`以 `eval_` 开头，这个操作会在你评估的时候为你单独录制评估时候的视频和数据，将保存在eval_开头的文件夹下，例如`starai/eval_record-test`。
3. 如果评估阶段遇到`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'`请先删除`eval_`开头的这个文件夹再次运行程序。
4. 当遇到`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`请注意`--robot.cameras`这个参数中的up和front等关键词必须和采集数据集的时候保持严格一致。

## FAQ

- 如果使用本文档教程，请git clone本文档推荐的github仓库`https://github.com/servodevelop/lerobot.git`。

- 如果遥操作正常，而带Camera的遥操作无法显示图像界面，请参考[这里](https://github.com/huggingface/lerobot/pull/757/files)

- 如果在数据集遥操作过程中出现libtiff的问题，请更新libtiff版本。

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- 执行完安装LeRobot可能会自动卸载gpu版本的pytorch，所以需要在手动安装torch-gpu。

- 对于Jetson，请先安装[Pytorch和Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)再执行`conda install -y -c conda-forge ffmpeg`,否则编译torchvision的时候会出现ffmpeg版本不匹配的问题。

- 在3060的8G笔记本上训练ACT的50组数据的时间大概为6小时，在4090和A100的电脑上训练50组数据时间大概为2~3小时。

- 数据采集过程中要确保摄像头位置和角度和环境光线的稳定，并且减少摄像头采集到过多的不稳定背景和行人，否则部署的环境变化过大会导致机械臂无法正常抓取。

- 数据采集命令的`num-episodes`要确保采集数据足够，不可中途手动暂停，因为在数据采集结束后才会计算数据的均值和方差，这在训练中是必要的数据。

- 如果程序提示无法读取USB摄像头图像数据，请确保USB摄像头不是接在Hub上的，USB摄像头必须直接接入设备，确保图像传输速率快。


## 参考文档

矽递科技中文Wiki文档：[如何在最新版Lerobot中使用SO10xArm机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

lerobot starai github: [lerobot starai](https://github.com/servodevelop/lerobot/tree/develop)

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


