---
description: 本Wiki提供SO ARM100的组装和调试教程，并在最新的Lerobot框架内实现数据收集和训练。
title: Lerobot中使用SO10xArm机械臂
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /cn/lerobot_so100m_new
last_update:
  date: 7/29/2025
  author: LiShanghang
---

# 基于 LeRobot 的 SO-ARM100 and SO-ARM101 机械臂入门教程

:::tip
本教程已更新至最新版 [lerobot](https://huggingface.co/docs/lerobot/index)，如需查阅旧版教程，请点击[此处](https://wiki.seeedstudio.com/cn/lerobot_so100m/)。
:::

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) 是由 [TheRobotStudio](https://www.therobotstudio.com/) 发起的一个完全开源的机器人手臂项目。它包括从动臂和领导臂手臂，并提供详细的3D打印文件和操作指南。[LeRobot](https://github.com/huggingface/lerobot/tree/main) 致力于为真实世界的机器人提供 PyTorch 中的模型、数据集和工具。其目标是降低机器人学的入门门槛，使每个人都能通过共享数据集和预训练模型进行贡献和受益。LeRobot 集成了经过验证的前沿方法，专注于模仿学习和强化学习。它提供了一套预训练模型、包含人类收集的示范数据集和仿真环境，使用户无需进行机器人组装即可开始使用。未来几周，计划在当前最具成本效益和性能的机器人上增强对真实世界机器人的支持。

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115008738496301&bvid=BV1k6bVzeELn&cid=31621188118&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### 项目介绍
SO-ARM10x 和 reComputer Jetson AI 智能机器人套件无缝结合了高精度的机器人手臂控制与强大的 AI 计算平台，提供了全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 SO-ARM10x 机器人手臂和 LeRobot AI 框架，为用户提供适用于教育、科研和工业自动化等多种场景的智能机器人系统。

本维基提供了 SO ARM10x 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://s.click.taobao.com/j6b5cCs" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 淘宝来一单 🖱️</font></span></strong>
</a></div>

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

## 🆕 更新内容：

- **布线优化**：与 SO-ARM100 相比，SO-ARM101 在布线方面进行了改进，解决了先前第3关节处可能出现断线的问题。新的布线设计也不再限制关节的活动范围。
- **主臂齿轮比优化**：主臂现在采用了经过优化的齿轮比电机，无需外部减速机构，同时提升了性能。
- **新增功能支持**：主臂现在可以实时跟随从臂动作，这对即将引入的策略尤为关键，可实现人类实时干预并修正机器动作。


# 规格参数
本教程硬件由[矽递科技Seeed Studio](https://www.seeedstudio.com/)提供

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">标准版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">专业版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">标准版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">专业版</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Leader Arm</td>
      <td rowSpan="2">12个 ST-3215- C001 (7.4V) 1:345 齿轮比电机，适用于所有关节</td>
      <td rowSpan="2">12个 ST-3215-C018/ST-3215-C047 (12V) 1:345 齿轮比电机，适用于所有关节</td>
      <td colSpan="2">
        1个 ST-3215- C001 (7.4V) 1:345 齿轮比电机，仅用于第2号关节<br />
        2个 ST-3215-C044 (7.4V) 1:191 齿轮比电机，用于第1号和第3号关节<br />
        3个 ST-3215-C046 (7.4V) 1:147 齿轮比电机，用于第4号、第5号关节及第6号夹爪
      </td>
    </tr>
    <tr>
      <td>Follower Arm</td>
      <td colSpan="2">与SO-ARM100相同</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>5.5 mm×2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm×2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm×2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm×2.1 mm DC 12 V 2 A（从臂Follower）<br />
        5.5 mm×2.1 mm DC 5 V 4 A（主臂Leader）
      </td>
    </tr>
    <tr>
      <td>角度传感器</td>
      <td colSpan="4">12位磁编码器</td>
    </tr>
    <tr>
      <td>推荐工作温度范围</td>
      <td colSpan="4">0 °C ～ 40 °C</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>控制方式</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger 
若购买 **SO101 Arm Kit 标准版**，所有电源均为5V。若购买 **SO101 Arm Kit Pro 版**，Leader机械臂的校准及每一步骤均使用5V电源，Follower机械臂的校准及每一步骤均使用12V电源。  
:::

# 材料清单（BOM）

| 部件 | 数量 | 是否包含|
|--|--|--|
| 舵机 | 12 | ✅ |
| 舵机驱动板 | 2 | ✅ |
| USB-C线缆（2条） | 1 | ✅ |
| 电源适配器 | 2 | ✅ |
| 3D打印桌面夹具 | 4 | ✅ |
| 手臂的3D打印部件 | 1 | Option |


# 初始系统环境
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

  - [A. 3D打印指南](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#3d打印指南)
  - [B. 安装Lerobot](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#安装lerobot)
  - [C. 校准舵机并组装机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#校准舵机并组装机械臂)
  - [D. 校准机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#校准机械臂)
  - [E. 遥操作](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#遥操作)
  - [F. 添加摄像头](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#添加摄像头)
  - [G. 数据集制作采集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#数据集制作采集)
  - [H. 可视化数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#可视化数据集)
  - [I. 重播一个回合](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#重播一个回合)
  - [J. 训练](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#训练)
  - [K. 评估](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#评估)


## 3D打印参考参数

:::caution
随着2025年4月28日官方发布 SO101，SO100 将不再支持打印指导，但源文件仍可在我们的 [Makerworld](https://makerworld.com/zh/models/908660) 找到。不过，对于之前购买了SO100 的用户，教程和安装方法以及代码依然兼容。SO101 的打印件也完全兼容 SO100 的电机套件安装。
:::


### 第一步：选择打印机

提供的 STL 文件可以直接在许多 FDM 打印机上打印。以下是经过测试并推荐的设置，但其他设置也可能适用。
- 材料：PLA+
- 喷嘴直径与精度：0.4mm 喷嘴直径，层高 0.2mm，或 0.6mm 喷嘴直径，层高 0.4mm。
- 填充密度：15%

### 第二步：设置打印机

- 确保打印机已校准且打印床水平调整正确，具体操作请参考打印机说明书。
- 清洁打印床，确保无灰尘或油污。如果使用水或其他液体清洁打印床，请确保彻底干燥。
- 如果打印机建议，使用标准胶棒在打印区域涂抹一层薄薄的均匀胶水，避免结块或涂抹不均。
- 按照打印机说明书装载打印机耗材（线材）。
- 确保打印机设置与上述推荐参数匹配（大多数打印机有多种设置选项，请选择最接近的）。
- 设置支撑：支撑应设置为“处处需要”，但忽略与水平面小于 45 度的倾斜面。
- 水平轴方向的螺丝孔内不应有支撑结构。

### 第三步：打印零件

所有关于 Leader 或 Follower 的零件都已经排版好，方便 3D 打印，且朝 Z 轴正方向摆放，以最小化支撑需求。

- 对于打印床尺寸为 220mm x 220mm（如 Ender）的打印机，请打印以下文件：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- 对于打印床尺寸为 205mm x 250mm（如 Prusa/Up）的打印机，请打印以下文件：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)



## 安装 LeRobot


<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115009090751176&bvid=BV1XqbGz2Epi&cid=31622693373&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


需要根据你的 CUDA 版本安装 pytorch 和 torchvision 等环境。

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


## 校准舵机并组装机械臂

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115014174248319&bvid=BV1JgtRzGEeh&cid=31640128624&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>


<TabItem value="SO101" label="SO101">


SO101的舵机校准初始化与SO100方法和代码一致的，这里只是需要注意SO101的Leader机械臂的前三个关节减速比与SO100不同，所以需要仔细区分并校准。建议方便起见，在每个电机上做好标记，注明是 Follower（用 F 表示）还是 Leader（用 L 表示），以及对应的编号从 1 到 6（例如 F1...F6 和 L1...L6）。后续我们用F1-F6来代表Follower机械臂的1到6的关节舵机，L1-L6来代表Leader机械臂从1到6的关节舵机,对应的舵机型号关节及减速比信息如下。

| 舵机型号 | 减速比 | 对应机械臂关节 |
|--|--|--|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
现在你需要将 5V 或 12V 电源连接到电机总线上。对于 STS3215 7.4V 电机使用 5V 电源，对于 STS3215 12V 电机使用 12V 电源。请注意，Leader 机械臂始终使用 7.4V 电机，因此如果你同时有 12V 和 7.4V 电机，一定要使用正确的电源，否则可能会烧坏电机！然后，通过 USB 将电机总线连接到你的电脑。请注意，USB 不会为电机供电，因此电源和 USB 都必须连接。
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***以下是代码校准步骤，请参照上图中接线舵机进行校准***

查找机械臂对应的 USB 端口
为了找到每个机械臂正确的端口，请运行实用脚本两次：
```bash
python -m lerobot.find_port
```

示例输出:

```bash
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM0
Reconnect the USB cable.
```
:::tip
请记住要拔出 USB 接头，否则将无法检测到接口。
:::

识别领导臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0031751`，或在 Linux 上可能为 `/dev/ttyACM0`）：
识别跟从懂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0032081`，或在 Linux 上可能为 `/dev/ttyACM1`）：

故障排除：在 Linux 上，你可能需要通过运行以下命令来赋予 USB 端口访问权限：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**配置舵机**


:::danger
如果你买的是SO101的标准版，则使用5V电源进行Leader舵机校准(ST-3215-C046, C044, C001).
:::
| **Leader机械臂6号舵机校准** | **Leader机械臂5号舵机校准** | **Leader机械臂4号舵机校准** | **Leader机械臂3号舵机校准** | **Leader机械臂2号舵机校准** | **Leader机械臂1号舵机校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |


:::danger
如果你买的是SO101的Pro版，则使用12V电源进行Follower舵机校准(ST-3215-C047/ST-3215-C018)，如果是SO101标准版则使用5V进行舵机校准(ST-3215-C001).
:::

| **Follower机械臂6号舵机校准** | **Follower机械臂5号舵机校准** | **Follower机械臂4号舵机校准** |**Follower机械臂3号舵机校准** | **Follower机械臂2号舵机校准** | **Follower机械臂1号舵机校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
再次提醒，请确保舵机关节 ID 和齿轮比与 **SO-ARM101** 的严格对应。
:::


将 USB 线从电脑连接到从动臂的舵机驱动板，并接通电源。然后，运行以下命令。

```bash
python -m lerobot.setup_motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0
```

您会看到以下输出。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

依照指示，连接夹爪的舵机。请确保它是唯一连接到舵机驱动板的舵机，并且该舵机尚未与其他任何舵机进行连接。当您按下 **[Enter]** 键后，脚本将自动设置该舵机的 ID 和波特率。

之后，您应该会看到以下信息：

```bash
'gripper' motor id set to 6
```

接着是下一条输出是:

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

与之前的舵机一样，请确保它是唯一连接到驱动板的舵机，并且舵机本身没有连接到任何其他舵机。

:::caution
根据指示，对每个舵机重复上述操作。
:::

在每次按 **Enter** 键之前，请务必检查您的线缆连接。例如，在操作电路板时，电源线可能会断开。

当您完成所有步骤后，脚本将自动结束，此时舵机即可投入使用。现在，您可以将每根舵机的 3 针接口依次连接，并将第一个舵机（ID 为 1 的“shoulder pan”舵机）的线缆连接到驱动板。现在可以将驱动板安装到机械臂的底座上。

对领导臂重复相同的步骤。

```bash
python -m lerobot.setup_motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0
```    

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=114889737702887&bvid=BV1YVgzzVECY&cid=31182423503&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

</Tabs>


## 组装教程


<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115018855092082&bvid=BV15abczHE97&cid=31656316333&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


:::tip
- SO-ARM101 双臂的组装过程与 SO-ARM100 相同。唯一的区别在于 SO-ARM101 增加了线缆夹，且主机械臂（Leader Arm）关节舵机的齿轮比不同。因此，SO100 和 SO101 都可以参考以下内容进行安装。
- 组装前，请再次检查您的电机型号和减速比。如果您购买的是 SO100，可以忽略此步骤。如果您购买的是 SO101，请参考下表区分 F1 至 F6 和 L1 至 L6。
:::

  | Servo Model                            | Gear Ratio | Corresponding Joints         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
如果您购买的是 **SO101 机械臂套件标准版**，所有电源均为 5V。如果您购买的是 **SO101 机械臂套件专业版**，则主机械臂（Leader Arm）在每个校准和操作步骤中应使用 5V 电源，而随动臂（Follower Arm）在每个校准和操作步骤中应使用 12V 电源。
:::

**组装领导臂**

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** | **步骤 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **步骤 19** | **步骤 20** | 
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**组装从动臂**

:::tip
- 从动臂的组装步骤与领导臂基本相同。唯一的区别在于第12步之后，末端执行器（夹爪和手柄）的安装方式有所不同。
:::

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** | 
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |



## 校准机械臂

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115020482480174&bvid=BV1i2bazGEHo&cid=31664966705&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

:::danger 
若购买 **SO101 Arm Kit 标准版**，所有电源均为5V。若购买 **SO101 Arm Kit Pro 版**，Leader机械臂的校准及每一步骤均使用5V电源，Follower机械臂的校准及每一步骤均使用12V电源。  
:::

接下来，你需要对你的 SO-10x 机器人接上电源和数据线进行校准，以确保在相同的物理位置时，Leader 臂和 Follower 臂的位置信息一致。这个校准过程至关重要，因为它可以让在一个 SO-10x 机器人上训练的神经网络在另一个机器人上也能正常工作。如果需要重新校准机械臂，请完全删除`~/.cache/huggingface/lerobot/calibration/robots`或者`~/.cache/huggingface/lerobot/calibration/teleoperators`下的文件并重新校准机械臂，否者会出现报错提示，校准的机械臂信息会存储该目录下的json文件中。

## 从动臂手动校准

请通过 3 针接口连接 6 个机器人舵机的接口，并将底盘舵机连接到舵机驱动板，然后运行以下命令或 API 示例来校准机械臂：


### 接口授权

首先，您需要授予接口权限，运行以下命令：

```bash
sudo chmod 666 /dev/ttyACM*
```

### 然后校准从动臂

接下来，通过运行以下 Python 命令来校准从动臂：

```python
python -m lerobot.calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm
```

下面的视频演示了如何执行校准。首先，您需要将机器人移动到所有关节都位于其活动范围中间的位置。然后，按下回车键后，您必须将每个关节在其完整的运动范围内移动。


**领导臂手动校准**

对主机械臂进行校准的步骤与上述相同，请运行以下命令或 API 示例：

```python
python -m lerobot.calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=114889704081608&bvid=BV15ggzzLE9t&cid=31182227140&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

遥控操作命令将自动执行以下步骤：

1.  识别任何缺失的校准文件并启动校准程序。
2.  连接机器人和遥控设备，并开始遥控操作。


## 添加摄像头


<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115020885134883&bvid=BV1NybhzREop&cid=31667849182&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


为了实例化摄像头，您需要一个摄像头标识符。这个标识符可能会在您重启电脑或重新插拔摄像头时发生变化，这主要取决于您的操作系统。

要查找连接到您系统的摄像头的**摄像头索引**，请运行以下脚本：

```python
python -m lerobot.find_cameras opencv # or realsense for Intel Realsense cameras
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
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

如果您有更多摄像头，可以通过更改 `--robot.cameras` 参数来添加。您应该注意`index_or_path` 的格式，它由 `python -m lerobot.find_cameras opencv` 命令输出的摄像头 ID 的最后一位数字决定。

例如，如果你想添加摄像头:  
```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```


## 数据集制作采集



<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115024676786120&bvid=BV1iobBzfExN&cid=31680169516&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


- 如果你想数据集保存在本地，可以直接运行：

```bash
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
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
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
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


**参数说明**

- episode-time-s: 表示每次收集数据的时间。
- reset-time-s: 是每次数据收集之间的准备时间。
- num-episodes: 表示预期收集多少组数据。
- push-to-hub: 决定是否将数据上传到 HuggingFace Hub。

:::tip

- "如果你希望将数据保存在本地 (`--dataset.push_to_hub=false`)，请将 `--dataset.repo_id=${HF_USER}/so101_test` 替换为一个自定义的本地文件夹名称，例如 `--dataset.repo_id=seeed_123/so101_test`。数据将存储在系统主目录下的 `~/.cache/huggingface/lerobot`."

- 如果你通过 `--dataset.push_to_hub=true` 将数据集上传到了 Hugging Face Hub，可以通过 [在线可视化你的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)，只需复制粘贴你的 repo id。

- 在回合记录过程中任何时候按下右箭头 → 可提前停止并进入重置状态。重置过程中同样，可提前停止并进入下一个回合记录。

- 在录制或重置到早期阶段时，随时按左箭头 ← 可提前停止当前剧集，并重新录制。

- 在录制过程中随时按 ESCAPE ESC 可提前结束会话，直接进入视频编码和数据集上传。

- 可以通过重新运行相同的命令并添加 `--resume=true` 来恢复录制。如果要从头开始录制，请手动删除数据集目录。

- 一旦你熟悉了数据记录，你就可以创建一个更大的数据集进行训练。一个不错的起始任务是在不同的位置抓取物体并将其放入箱子中。我们建议至少记录 50 个场景，每个位置 10 个场景。保持相机固定，并在整个录制过程中保持一致的抓取行为。同时确保你正在操作的物体在相机视野中可见。一个很好的经验法则是，你应该仅通过查看相机图像就能完成这项任务。

- 在接下来的章节中，你将训练你的神经网络。在实现可靠的抓取性能后，你可以在数据收集过程中引入更多变化，例如增加抓取位置、不同的抓取技巧以及改变相机位置。

- 避免快速添加过多变化，因为这可能会阻碍您的结果。

- 在 Linux 上，如果在数据记录期间左右箭头键和 Esc 键没有效果，请确保您已设置 $DISPLAY 环境变量。参见 [pynput 限制](https://pynput.readthedocs.io/en/latest/limitations.html#linux)。

:::

## 可视化数据集

:::tip
不稳定，可跳过，可尝试。
:::

```bash
echo ${HF_USER}/so101_test  
```

如果您没有使用 `--dataset.push_to_hub=false` ，并上传了数据，您也可以在本地通过以下命令进行可视化：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/so101_test \
```

如果您使用了 `--dataset.push_to_hub=false` ，没有上传数据，您也可以通过以下命令在本地进行可视化：

```bash
python -m lerobot.scripts.visualize_dataset_html \
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
python -m lerobot.replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

## 训练


<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115025515646433&bvid=BV1g2bqzmEJP&cid=31684297895&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



要训练一个控制您机器人策略，使用 `python -m lerobot.scripts.train` 脚本。需要一些参数。以下是一个示例命令：

```bash
python -m lerobot.scripts.train \
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
python -m lerobot.scripts.train \
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
python -m lerobot.scripts.train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## 评估
:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

您可以使用 [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) 中的 `record` 功能，但需要将策略训练结果训练结果权重文件作为输入。例如，运行以下命令记录 10 个评估回合：


```bash
python -m lerobot.record  \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
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

[English Document](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

TheRobotStudio Project: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供多种支持，以确保您的产品体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>







