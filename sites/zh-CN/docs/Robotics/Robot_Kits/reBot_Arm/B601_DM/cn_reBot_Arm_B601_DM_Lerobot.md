---
description: 本wiki提供 reBot Arm B601-DM 在 Lerobot 框架内实现数据收集和训练的完整流程。
title: 在Lerobot 中使用 reBot Arm B601-DM和reBot 102 leader
keywords:
  - Lerobot
  - Huggingface
  - 机械臂
  - rebot arm
  - 机器人
image: TODO
slug: /lerobot_so100m
sku: TODO
last_update:
  date: 2026-04-09
  author: LiuJunjie
createdAt: '2026-04-09'
updatedAt: '2026-04-09'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_lerobot_102/
---

# 基于 LeRobot 的 reBot Arm B601-DM 和 reBot 102 leader入门教程

[reBot Arm B601-DM](TODO)是由Seeed开源的是一个致力于降低具身智能学习门槛的机械臂项目。我们毫无保留地开源了所有结构设计和代码，一起让机器人技术触手可及。

reBot 102 leader是由fashionrobo设计的一款低成本直观的机器人遥控臂，它采用无电机的关节设计，没有阻尼。在软件上与Seeed rebot Arm B601 兼容。支持lerobot。

[LeRobot](https://github.com/huggingface/lerobot/tree/main) 致力于为真实世界的机器人提供 PyTorch 中的模型、数据集和工具。其目标是降低机器人学的入门门槛，使每个人都能通过共享数据集和预训练模型进行贡献和受益。LeRobot 集成了经过验证的前沿方法，专注于模仿学习和强化学习。它提供了一套预训练模型、包含人类收集的示范数据集和仿真环境，使用户无需进行机器人组装即可开始使用。


### 📖 项目简介 (Introduction)

**reBot-DevArm (reBot Arm B601 DM 和reBot Arm B601 RS)** 是一个致力于降低具身智能学习门槛的机械臂项目。我们主打 **"真·开源"** —— 不仅仅是代码，我们无保留地开源了所有的：
- 🦾 **两个版本电机的开源机械臂**：我们会提供Robostride和Damiao两个版本的同样外观的机械臂所有开源文件。
- 🛠️ **硬件图纸**：钣金件、3D打印件源文件。
- 🔩 **BOM 清单**：详细到每一个螺丝的规格和购买链接。
- 💻 **软件及算法**：Python SDK、ROS1/2、Isaac Sim、Lerobot等

## 搭建属于你的 reBot 机械臂

- 我们提供五种套件方案：
  - **机械臂本体电机套件**：仅包含机械臂所需的电机与线束。
  - **机械臂本体结构件套件**：仅包含机械结构零部件。
  - **夹持器完整套件**：包含夹持器的电机、线束及结构件。
  - **整机完整套件**：包含机械臂本体与夹持器全套组件。
  - **成品组装机械臂**：已完成组装的成品机械臂。


reBot-DevArm 和 reComputer Jetson AI 智能机器人套件无缝结合了高精度的机器人手臂控制与强大的 AI 计算平台，提供了全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 reBot-DevArm 和 LeRobot AI 框架，为用户提供适用于教育、科研和工业自动化等多种场景的智能机器人系统。

本维基提供了 reBot-DevArm 调试教程，并在 Lerobot 框架内实现数据收集和训练。

<!-- <div align="center">
    <img width={800} 
    src="TODO" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://s.click.taobao.com/j6b5cCs" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 淘宝来一单 🖱️</font></span></strong>
</a></div> -->

:::caution
Seeed Studio **仅对硬件质量负责**。教程严格按官方文档更新，如遇无法解决的软件或环境问题，请先查阅文末FAQ，或者联系客服加入SeeedStudio Lerobot交流群询问，也可以在这里询问：[LeRobot GitHub](https://github.com/huggingface/lerobot) 或 [Discord频道](https://discord.gg/8TnwDdjFGU)。  
:::

## 🔧 SO-ARM10x 系列特点：

1. **开源 & 低成本**  
   本系列由 [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100) 提供，是一套开源、低成本的机器人臂解决方案。

2. **支持 LeRobot 平台集成**  
   专为与 [LeRobot 平台](https://github.com/huggingface/lerobot) 集成而设计。该平台提供 PyTorch 模型、数据集与工具，面向现实机器人任务的模仿学习（包括数据采集、仿真、训练与部署）。

3. **丰富的学习资源**  
   提供全面的开源学习资源，包括组装与校准指南、测试与数据采集教程、训练与部署文档，帮助用户快速上手并开发机器人应用。

4. **兼容 Nvidia 平台**  
   支持通过 reComputer Mini J4012 Orin NX 16GB 平台进行部署。


<!-- :::danger 
若购买 **SO101 Arm Kit 标准版**，所有电源均为5V。若购买 **SO101 Arm Kit Pro 版**，Leader机械臂的校准及每一步骤均使用5V电源，Follower机械臂的校准及每一步骤均使用12V电源。  
::: -->


# 初始系统环境
TODO
For Ubuntu X86:
  - Ubuntu 22.04
  - CUDA 12+
  - Python 3.10
  - Troch 2.6


For Jetson Orin:
  - Jetson Jetpack 6.0 和 6.1，暂不支持6.2
  - Python 3.10
  - Torch 2.3+


# 步骤目录
TODO
  <!-- - [A. 安装 Lerobot](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#安装 lerobot)
  - [B. 校准机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#校准机械臂)
  - [C. 遥操作](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#遥操作)
  - [D. 添加摄像头](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#添加摄像头)
  - [E. 数据集制作采集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#数据集制作采集)
  - [F. 可视化数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#可视化数据集)
  - [G. 重播一个回合](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#重播一个回合)
  - [H. 训练](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#训练)
  - [I. 评估](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#评估) -->

## 安装 LeRobot

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115607819257025&bvid=BV1r6UUBFEBM&cid=34226636693&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


需要根据你的 CUDA 版本安装 pytorch 和 torchvision 等环境。

<!-- 1. 安装 Miniconda：
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

2. 创建并激活一个新的 conda 环境用于 lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. 克隆 Lerobot 仓库：

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. 使用 miniconda 时，在环境中安装 ffmpeg：
 
```bash
conda install ffmpeg -c conda-forge
``` -->
对于 X86 Ubuntu 22.04
安装UV

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

使用 Python 3.10 创建虚拟环境：

```bash
uv venv --python 3.10
source .venv/bin/activate
```



以可编辑模式安装rebot arm 102的leader功能包
:::tip

关于功能包的详细功能，请参考[github](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)。

:::


```bash
git clone https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102.git

cd lerobot-teleoperator-rebot-arm-102
pip install -e .
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

5. 安装带有 feetech 电机依赖的 LeRobot：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

6. (电脑端可跳过这一步) 对于 Jetson Jetpack 6.0+ 设备（请确保在执行此步骤前按照[此链接教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch)的第 5 步安装了 Pytorch-gpu 和 Torchvision）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # 通过 conda 安装 OpenCV 和其他依赖，仅适用于 Jetson Jetpack 6.0+
conda remove opencv   # 卸载 OpenCV
pip3 install opencv-python==4.10.0.84  # 使用 pip3 安装指定版本 OpenCV
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # 该版本需与 torchvision 兼容
```

7. 检查 Pytorch 和 Torchvision

由于通过 pip 安装 lerobot 环境时会卸载原有的 Pytorch 和 Torchvision 并安装 CPU 版本，因此需要在 Python 中进行检查。

```python
import torch
print(torch.cuda.is_available())
```

如果输出结果为 False，需要根据[官网教程](https://pytorch.org/index.html)重新安装 Pytorch 和 Torchvision。

如果你使用的是 Jetson 设备，请根据[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)安装 Pytorch 和 Torchvision。


## 校准机械臂


<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115607819322806&bvid=BV1w6UUBcEGR&cid=34229387906&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

接下来，你需要对你的 SO-10x 机器人接上电源和数据线进行校准，以确保在相同的物理位置时，Leader 臂和 Follower 臂的位置信息一致。这个校准过程至关重要，因为它可以让在一个 SO-10x 机器人上训练的神经网络在另一个机器人上也能正常工作。如果需要重新校准机械臂，请完全删除`~/.cache/huggingface/lerobot/calibration/robots`或者`~/.cache/huggingface/lerobot/calibration/teleoperators`下的文件并重新校准机械臂，否者会出现报错提示，校准的机械臂信息会存储该目录下的json文件中。

请通过 3 针接口连接 6 个机器人舵机的接口，并将底盘舵机连接到舵机驱动板，然后运行以下命令或 API 示例来校准机械臂：

:::tip
以PC(linux)和jetson板卡为例，`第一个`插入usb接口会映射为`ttyACM0`，`第二个`插入usb接口会映射为`ttyACM1`。

在运行代码前请注意leader和follower的映射接口。
:::

首先，您需要授予接口权限，运行以下命令：

```bash
sudo chmod 666 /dev/ttyACM*
```

### 校准从动臂

接下来，通过运行以下 Python 命令来校准从动臂：

```python
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm
```

下面的视频演示了如何执行校准。首先，您需要将机器人移动到所有关节都位于其活动范围中间的位置。然后，按下回车键后，您必须将每个关节在其完整的运动范围内移动。


###  校准领导臂

对主机械臂进行校准的步骤与上述相同，请运行以下命令或 API 示例：

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115607819322806&bvid=BV1w6UUBcEGR&cid=34229387906&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 遥控操作

现在，您就可以遥控操作您的机器人了！运行这个简单的脚本（它不会连接和显示摄像头）：

请注意，与机器人关联的 **ID** 用于存储校准文件。在使用相同设置进行遥控操作、录制和评估时，使用相同的 **ID** 至关重要。

先对串口给予权限：
```bash
sudo chmod 666 /dev/ttyACM*
```


运行遥操作：

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

遥控操作命令将自动执行以下步骤：

1.  识别任何缺失的校准文件并启动校准程序。
2.  连接机器人和遥控设备，并开始遥控操作。


## 添加摄像头

<details>

<summary> 如果是Orbbec Gemini2深度相机 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?abbucket=16&id=877820346195&mi_id=0000Ou_lIzqedYPuPAA8fpFm7RLR5dXIVA-SAX_AOiJab6M&ns=1&skuId=6069820106496&spm=a21n57.1.hoverItem.5&utparam=%7B%22aplus_abtest%22%3A%2275f755ae980dafcddefac00fe2ec6540%22%7D&xxc=taobaoSearch" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> 淘宝来一单 🖱️</font></span></strong>
</a></div>


- 🚀 步骤 1：安装 Orbbec SDK 依赖环境

1. 拉取 `pyorbbec` 仓库
   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. 下载并安装 SDK 对应的 **.whl 文件**  
   前往 [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases)，  
   根据 Python 版本选择并安装，例如：
   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. 在 `pyorbbec` 目录下安装依赖
   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

  强制降低`numpy`版本到`1.26.0`
    ```bash
    pip install numpy==1.26.0
    ```
  可以忽略红色报错。

4.将orbbec sdk克隆到`~/lerobot/src/cameras`目录下

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5.修改utils.py和__init__.py
- 在`~/lerobot/src/lerobot/cameras`目录下找到`utils.py`，在`40`行处添加如下代码：

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- 在`~/lerobot/src/lerobot/cameras`目录下找到`__init__.py`，在`18`行处添加如下代码：

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>




-  🚀 步骤 2：函数调用与示例

以下示例均需将 `so101_follower` 替换为你所使用实际机械臂型号（如 `so100` / `so101`）。


我们加入了focus_area超参数，因为过远的深度数据对于机械臂没有意义（抓取不到），因此小于或者大于focus_area的深度数据将会变为黑色,默认的focus_area是(20,600)
目前支持的分辨率只限于 width: 640, height: 880

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


后续采集数据、训练及评估任务与常规RGB命令一样，只需要把:

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

替换到常规rgb命令中即可，你也可以再后面添加额外的单目RGB相机。



**💡 作者与贡献**

- 作者: 张家铨，王文钊 - 华南师范大学   


</details>

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115607819258545&bvid=BV1r6UUBFE8r&cid=34229454301&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


为了实例化摄像头，您需要一个摄像头标识符。这个标识符可能会在您重启电脑或重新插拔摄像头时发生变化，这主要取决于您的操作系统。

要查找连接到您系统的摄像头的**摄像头索引**，请运行以下脚本：

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

终端会打印相关摄像头信息。

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

您可以在 `~/lerobot/outputs/captured_images` 目录中找到每台摄像头拍摄的图片。

:::warning
在 **macOS** 中使用 Intel RealSense 摄像头时，您可能会遇到 **“Error finding RealSense cameras: failed to set power state”** 的错误。这可以通过使用 `sudo` 权限运行相同的命令来解决。请注意，在 **macOS** 中使用 RealSense 摄像头是不稳定的。
:::

之后，您就可以在遥控操作时在电脑上显示摄像头画面了，只需运行以下代码即可。这对于在录制第一个数据集之前准备您的设置非常有用。

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

:::tip
`fourcc: "MJPG"`格式图像是经过压缩后的图像，你可以尝试更高分辨率，当然你可以尝试`YUYV`格式图像，但是这会导致图像的分辨率和FPS降低导致机械臂运行卡顿。目前`MJPG`格式下可支持`3`个摄像头`1920*1080`分辨率并且保持`30FPS`, 但是依然不推荐2个摄像头通过同一个USB HUB接入电脑
:::

如果您有更多摄像头，可以通过更改 `--robot.cameras` 参数来添加。您应该注意`index_or_path` 的格式，它由 `python -m lerobot.find_cameras opencv` 命令输出的摄像头 ID 的最后一位数字决定。

例如，如果你想添加摄像头:  
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
`fourcc: "MJPG"`格式图像是经过压缩后的图像，你可以尝试更高分辨率，当然你可以尝试`YUYV`格式图像，但是这会导致图像的分辨率和FPS降低导致机械臂运行卡顿。目前`MJPG`格式下可支持`3`个摄像头`1920*1080`分辨率并且保持`30FPS`, 但是依然不推荐2个摄像头通过同一个USB HUB接入电脑
:::



## 数据集制作采集


<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115607819257003&bvid=BV1r6UUBFEzq&cid=34229456824&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


- 如果你想数据集保存在本地，可以直接运行：

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

其中`repo_id`可以自定义修改，`push_to_hub=false`，最后数据集会保存在主目录的`~/.cache/huggingface/lerobot`下会创建上述`seeedstudio123/test`文件夹

- 如果您想使用 Hugging Face Hub 的功能来上传您的数据集，并且您之前尚未这样做，请确保您已使用具有写入权限的令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 中生成：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在一个变量中，以运行以下命令：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

记录 5 个回合并将您的数据集上传到 Hub：

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

你会看到类似如下数据:
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**记录功能**

**record**功能提供了一套工具，用于在机器人运行期间捕获和管理数据。

**1. 数据存储**

- 数据以 `LeRobotDataset` 格式存储，并在记录过程中保存到磁盘中。
- 默认情况下，数据集在记录完成后会推送到你的 Hugging Face 页面。
- 若要禁用上传，请使用：`--dataset.push_to_hub=False`。

**2. 检查点与恢复**

- 在记录过程中会自动创建检查点。
- 如果记录过程中断，可以通过重新运行相同的命令并添加 `--resume=true` 来恢复记录。

⚠️ **重要提示**：在恢复时，需将 `--dataset.num_episodes` 设置为要额外记录的剧集数量（而不是数据集中目标的总剧集数量）。
- 若要从头开始记录，请**手动删除**数据集目录。

**3. 记录参数**

通过命令行参数设置数据记录的流程：

| 参数 | 描述 | 默认值 |
|------|------|--------|
| --dataset.episode_time_s | 每个数据剧集的持续时间（秒） | 60 |
| --dataset.reset_time_s | 每个剧集后环境重置时间（秒） | 60 |
| --dataset.num_episodes | 要记录的总剧集数量 | 50 |

**4. 记录过程中的键盘控制**

使用键盘快捷键控制数据记录流程：

| 键 | 动作 |
|----|------|
| →（右箭头） | 提前终止当前剧集/重置；进入下一个。 |
| ←（左箭头） | 取消当前剧集；重新录制。 |
| ESC | 立即停止会话，编码视频，并上传数据集。 |

:::tip
如果你的键盘按下后没有反应，可能你需要降低你pynput的版本，例如安装个1.6.8版本的。
```bash
pip install pynput==1.6.8
```
:::

**数据收集技巧**

- **任务建议**：在不同位置抓取物体并将其放入箱子中。
- **规模**：记录 ≥50 个剧集（每个位置 10 个剧集）。
- **一致性**：
  - 保持摄像头固定。
  - 保持相同的抓取行为。
  - 确保操作的物体在摄像头画面中可见。
- **逐步推进**：
  - 先从可靠的抓取开始，然后再增加变化（新位置、抓取技巧、摄像头调整）。
  - 避免复杂性急剧增加，以防止失败。

💡 **经验法则**：仅使用摄像头画面作为指导，只根据屏幕反馈的视频图像，来控制机械臂完成任务。

如果你想要深入了解这个重要主题，可以查看我们撰写的关于什么是好的数据集的[博客文章](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)。

**故障排除**

Linux 问题：
如果在记录过程中右箭头/左箭头/ESC 键无响应：
- 验证 `$DISPLAY` 环境变量是否已设置（参见 [pynput 限制](https://pynput.readthedocs.io/en/latest/limitations.html )）。

## 可视化数据集

:::tip
不稳定，可跳过，可尝试。
:::

```bash
echo ${HF_USER}/so101_test  
```

如果您没有使用 `--dataset.push_to_hub=false` ，并上传了数据，您也可以在本地通过以下命令进行可视化：

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/so101_test \
```

如果您使用了 `--dataset.push_to_hub=false` ，没有上传数据，您也可以通过以下命令在本地进行可视化：

```bash
lerobot-dataset-viz \
  --repo-id seeedstudio123/test \
```

这里，`seeedstudio123` 是数据收集时自定义的 `repo_id` 名称。

  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
  </div>


## 回放一个数据集

:::tip
不稳定，可跳过，可尝试。
:::

现在，尝试在您的机器人上重播第一个数据集：

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

此时，机器人应该做出与你遥操记录时一样的动作。

## 训练及评估


<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115607819256994&bvid=BV1r6UUBFEz2&cid=34229522064&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

参考官方教程[ACT](https://huggingface.co/docs/lerobot/act)

**训练**

要训练一个控制您机器人策略，使用 `python -m lerobot.scripts.train` 脚本。需要一些参数。以下是一个示例命令：

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

**如果您想在本地数据集上进行训练，请确保 `repo_id` 与数据收集时使用的名称匹配，并添加 `--policy.push_to_hub=false`。**

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

命令解释

* **数据集指定**：我们通过 `--dataset.repo_id=${HF_USER}/so101_test` 参数提供了数据集。
* **训练步数**：我们通过 `--steps=300000` 修改训练步数，算法默认为800000，根据自己的任务难易程度，观察训练时候的loss来进行调整。
* **策略类型**：我们使用 `policy.type=act` 提供了策略，同样你可以更换[act,diffusion,pi0,pi0fast,pi0fast,sac,smolvla]等策略，这将从 `configuration_act.py` 加载配置。重要的是，这个策略会自动适应您机器人（例如 `laptop` 和 `phone`）的电机状态、电机动作和摄像头数量，这些信息已保存在您的数据集中。
* **设备选择**：我们提供了 `policy.device=cuda`，因为我们正在 Nvidia GPU 上进行训练，但您可以使用 `policy.device=mps` 在 Apple Silicon 上进行训练。
* **可视化工具**：我们提供了 `wandb.enable=true` 来使用 [Weights and Biases](https://docs.wandb.ai/quickstart) 可视化训练图表。这是可选的，但如果您使用它，请确保您已通过运行 `wandb login` 登录。


**评估**


您可以使用 [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) 中的 `record` 功能，但需要将策略训练结果训练结果权重文件作为输入。例如，运行以下命令记录 10 个评估回合：


```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
``` 
 
  
1.  `--policy.path` 参数，指示您的策略训练结果权重文件的路径（例如 `outputs/train/act_so101_test/checkpoints/last/pretrained_model`）。如果您将模型训练结果权重文件上传到 Hub，也可以使用模型仓库（例如 `${HF_USER}/act_so100_test`）。
2. 数据集的名称`dataset.repo_id`以 `eval_` 开头，这个操作会在你评估的时候为你单独录制评估时候的视频和数据，将保存在eval_开头的文件夹下，例如`seeed/eval_test123`。
3. 如果评估阶段遇到`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`请先删除`eval_`开头的这个文件夹再次运行程序。
4. 当遇到`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`请注意--robot.cameras这个参数中的front和side等关键词必须和采集数据集的时候保持严格一致。


</details>


<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

参考官方教程[SmolVLA](https://huggingface.co/docs/lerobot/smolvla)

```bash
pip install -e ".[smolvla]"
```

**训练**
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

**验证**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_blue_follower_arm \ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.repo_id=seeed/eval_test123 \ 
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```


</details>


<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

参考官方教程[Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**训练**
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

**验证**

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

参考官方教程[Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**训练**
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

**验证**

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

请参考官方教程[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) 


</details>




如果你遇到了以下报错：

<div align="center">
    <img width={1000} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

尝试运行以下命令来解决:

```bash
pip install datasets==2.19
```


训练可能需要几个小时。您将在 `outputs/train/act_so101_test/checkpoints` 目录中找到训练结果权重文件。

要从某个训练结果权重文件恢复训练，下面是一个从 `act_so101_test` 策略的最后一个训练结果权重文件恢复训练的示例命令：
```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```



<div class="video-container ">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## FAQ

- 如果实用本文档教程，请git clone本文档推荐的github仓库`https://github.com/Seeed-Projects/lerobot.git`，本文档推荐的仓库是验证过后的稳定版本，Lerobot官方仓库是实时更新的最新版本，会出现一些无法预知的问题，例如数据集版本不同，指令不同等。


- 如果校准舵机ID时候遇到
  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```
  请仔细检查通讯线是否与舵机连接正常，电源是否正确电压供电。”

- 如果遇到
  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```
  并且通过`ls /dev/ttyACM*`看到是有ACM0存在的，则是忘记给串口权限了，终端输入`sudo chmod 666 /dev/ttyACM*` 即可`

- 如果遇到
  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  请安装ffmpeg7.1.1,`conda install ffmpeg=7.1.1 -c conda-forge`。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- 如果遇到
  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```
  需要检查对应端口号的机械臂是否接通电源，总线舵机是否出现数据线松动或者脱落,哪个舵机灯不亮就是前面那个舵机的线松了。

- 如果校准机械臂的时候遇到
  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```
  对机械臂进行重新断电和上电，再次尝试校准机械臂加准，如果在校准过程中遇到MAX角度达到上万的值也可以使用这个方法，如果不行则需要对相应舵机进行重新舵机校准，即中位校准和ID写入。

- 如果评估阶段遇到
  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```
  请先删除`eval_`开头的这个文件夹再次运行程序。

- 如果评估阶段遇到
  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```
  请注意--robot.cameras这个参数中的front和side等关键词必须和采集数据集的时候保持严格一致。

- 如果你维修或者更换过机械臂零件，请完全删除`~/.cache/huggingface/lerobot/calibration/robots`或者`~/.cache/huggingface/lerobot/calibration/teleoperators`下的文件并重新校准机械臂，否者会出现报错提示，校准的机械臂信息会存储该目录下的json文件中。

- 在3060的8G笔记本上训练ACT的50组数据的时间大概为6小时，在4090和A100的电脑上训练50组数据时间大概为2~3小时。

- 数据采集过程中要确保摄像头位置和角度和环境光线的稳定，并且减少摄像头采集到过多的不稳定背景和行人，否则部署的环境变化过大会导致机械臂无法正常抓取。

- 数据采集命令的num-episodes要确保采集数据足够，不可中途手动暂停，因为在数据采集结束后才会计算数据的均值和方差，这在训练中是必要的数据。

- 如果程序提示无法读取USB摄像头图像数据，请确保USB摄像头不是接在Hub上的，USB摄像头必须直接接入设备，确保图像传输速率快。


:::tip
如果你遇到无法解决的软件问题或环境依赖问题，除了查看本教程末尾的常见问题（FAQ）部分外，请及时在 [LeRobot 平台](https://github.com/huggingface/lerobot) 或 [LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU) 反馈问题。
:::

## 参考文档
矽递科技英文Wiki文档：[How to use the SO100Arm robotic arm in Lerobot](https://wiki.seeedstudio.com/cn/lerobot_so100m/)


TheRobotStudio Project: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)


Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

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