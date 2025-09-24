---
description: 本维基提供 SO ARM100/101 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: Lerobot 中使用 SO100/101Arm 机器人手臂
keywords:
- Lerobot
- Huggingface
- 机械臂
- 机器人
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /cn/lerobot_so100m
last_update:
  date: 2024-12-24
  author: ZhuYaoHui
---

# 如何从0搭建具身智能老版本Lerobot SO-ARM100和SO-ARM101机械臂并完成自定义抓取任务

:::tip

本教程仓库代码保持为2025年6月5日之前的Lerobot经过测试的稳定版本，目前Huggingface对Lerobot进行了非常庞大的升级，增加了非常多的新功能，如果需要体验最新的教程请跟随[官方文档进行操作](https://huggingface.co/docs/lerobot/index)。

:::

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) 是由 [TheRobotStudio](https://www.therobotstudio.com/) 发起的一个完全开源的机器人手臂项目。它包括跟随臂和领导机器人手臂，并提供详细的3D打印文件和操作指南。[LeRobot](https://github.com/huggingface/lerobot/tree/main) 致力于为真实世界的机器人提供 PyTorch 中的模型、数据集和工具。其目标是降低机器人学的入门门槛，使每个人都能通过共享数据集和预训练模型进行贡献和受益。LeRobot 集成了经过验证的前沿方法，专注于模仿学习和强化学习。它提供了一套预训练模型、包含人类收集的示范数据集和仿真环境，使用户无需进行机器人组装即可开始使用。未来几周，计划在当前最具成本效益和性能的机器人上增强对真实世界机器人的支持。

### 项目介绍
SO-ARM10x 和 reComputer Jetson AI 智能机器人套件无缝结合了高精度的机器人手臂控制与强大的 AI 计算平台，提供了全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 SO-ARM10x 机器人手臂和 LeRobot AI 框架，为用户提供适用于教育、科研和工业自动化等多种场景的智能机器人系统。

本维基提供了 SO ARM10x 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://s.click.taobao.com/j6b5cCs" target="_blank" rel="noopener noreferrer">
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
| 电机控制板 | 2 | ✅ |
| USB-C线缆（2条） | 1 | ✅ |
| 电源适配器 | 2 | ✅ |
| 3D打印桌面夹具 | 4 | ✅ |
| 手臂的3D打印部件 | 1 | Option |



# 步骤目录

  - [A. 3D打印指南](https://wiki.seeedstudio.com/cn/lerobot_so100m/#3d打印指南)
  - [B. 安装Lerobot](https://wiki.seeedstudio.com/cn/lerobot_so100m/#安装lerobot)
  - [C. 校准舵机并组装机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m/#校准舵机并组装机械臂)
  - [D. 校准机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m/#校准机械臂)
  - [E. 遥操作](https://wiki.seeedstudio.com/cn/lerobot_so100m/#遥操作)
  - [F. 添加摄像头](https://wiki.seeedstudio.com/cn/lerobot_so100m/#添加摄像头)
  - [G. 数据集制作采集](https://wiki.seeedstudio.com/cn/lerobot_so100m/#数据集制作采集)
  - [H. 可视化数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m/#可视化数据集)
  - [I. 重播一个回合](https://wiki.seeedstudio.com/cn/lerobot_so100m/#重播一个回合)
  - [J. 训练](https://wiki.seeedstudio.com/cn/lerobot_so100m/#训练)
  - [K. 评估](https://wiki.seeedstudio.com/cn/lerobot_so100m/#评估)


# 初始系统环境
For Ubuntu X86:
  - Ubuntu 22.04
  - CUDA 12+
  - Python 3.10
  - Troch 2.6+


For Jetson Orin:
  - Jetson Jetpack 6.0+
  - Python 3.10
  - Torch 2.3

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
git clone https://gitee.com/Marlboro1998/lerobot_seeed_version.git ~/lerobot
```

  **我们适配了奥比中光Orbbec Gemini2深度相机，发现单个深度相机效果优于2个RGB相机，如果你也使用这款相机，请克隆转换仓库分支到Orbbec,并按我们后续流程来配置相机。**

  ```bash
  cd ~/lerobot
  git checkout orbbec
  ```

  如果你只是使用RGB，请不要切换分支，否则会报依赖相关的错误。如果你已经切换到了orbbec，想切换回原始版本

  ```bash
  cd ~/lerobot
  git checkout main
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
:::

5. 安装带有 feetech 电机依赖的 LeRobot：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
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

6. 检查 Pytorch 和 Torchvision

由于通过 pip 安装 lerobot 环境时会卸载原有的 Pytorch 和 Torchvision 并安装 CPU 版本，因此需要在 Python 中进行检查。

```python
import torch
print(torch.cuda.is_available())
```

如果输出结果为 False，需要根据[官网教程](https://pytorch.org/index.html)重新安装 Pytorch 和 Torchvision。

如果你使用的是 Jetson 设备，请根据[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)安装 Pytorch 和 Torchvision。



## 校准舵机并组装机械臂

:::danger
由于官方代码和舵机厂家固件升级，2025年6月30日之前的用户请先[下载飞特官方上位机](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250706).7z)（Windows系统下），上电连接所有舵机，选择对应的端口号->波特率1000000->打开->搜索，搜索到所有的舵机后点击`升级`->`在线检测`->`升级固件`，确保固件版本从3.9升级到3.10版本，避免出现后续问题。
:::

:::note
如果更新固件失败后无法再次识别到改舵机，可以拿另一个可以识别的舵机单独链接到上位机，然后电机扫描和固件在线检测，这时保持当前窗口，立刻断开当前舵机，连上无法识别的舵机，并且在1秒内点击在线升级即可，若失败可以多次尝试。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>


<TabItem value="SO101" label="SO101">

### 舵机校准

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

:::danger
如果你买的是SO101的标准版，则使用5V电源进行Leader舵机校准(ST-3215-C046, C044, C001).
:::
| **Leader机械臂1号舵机校准** | **Leader机械臂2号舵机校准** | **Leader机械臂3号舵机校准** | **Leader机械臂4号舵机校准** | **Leader机械臂5号舵机校准** | **Leader机械臂6号舵机校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) |

:::danger
如果你买的是SO101的Pro版，则使用12V电源进行Follower舵机校准(ST-3215-C047/ST-3215-C018)，如果是SO101标准版则使用5V进行舵机校准(ST-3215-C001).
:::

| **Follower机械臂1号舵机校准** | **Follower机械臂2号舵机校准** | **Follower机械臂3号舵机校准** |**Follower机械臂4号舵机校准** | **Follower机械臂5号舵机校准** | **Follower机械臂6号舵机校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) |


也可以参考我们SO100的舵机校准视频，但请确保舵机关节ID对应和减速比与SO101严格对应。
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=114176236191787&bvid=BV1WiQiY1EYP&cid=28909307865&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>


在终端输入以下指令来找到两个机械臂对应的端口号：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

识别领导臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0031751`，或在 Linux 上可能为 `/dev/ttyACM0`）：
识别跟随臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0032081`，或在 Linux 上可能为 `/dev/ttyACM1`）：

故障排除：在 Linux 上，你可能需要通过运行以下命令来赋予 USB 端口访问权限：
```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

插入你的第一个电机并运行此脚本将其 ID 设置为 1。它还会将当前位置设置为 2048，你的电机会旋转：
```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

注意：这些电机目前有一定的限制。它们只能接受 0 到 4096 之间的值，对应于一整圈。它们不能旋转超过这个范围。2048 是这个范围的中间值，所以我们可以向逆时针方向移动 -2048 步（180 度）达到最大范围，或向顺时针方向移动 +2048 步（180 度）达到最大范围。配置步骤还将归位偏移设置为 0，因此如果你组装机械臂时有误，可以始终更新归位偏移以补偿最多 ±2048 步（±180 度）的偏移。

然后拔下你的电机，插入第二个电机并将其 ID 设置为 2。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

对所有电机重复此过程，直到 ID 为 6。领导臂的 6 个电机也同样操作。现在你可以开始组装你的机械臂了。

### Leader机械臂组装步骤

:::danger
- 装配前请再次检查电机型号和减速比。如果您已经购买了SO100，则可以忽略此步骤。如果您购买了SO101，请查看下表，区分F1到F6， L1到L6。
:::

| 舵机型号 | 减速比 | 对应机械臂关节 |
|--|--|--|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::caution
- 校准舵机后，在拧上螺丝之前，请不要扭动舵机，确保3D打印件安装的方向与图片参考方向一致，在电机的中位。
- 如果你购买的是SO101 Pro，Follower arm供电为12V，Leader Arm供电为5V，如果你购买的是标准版，两个Arm都为5V。
:::

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** | **步骤 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **步骤 19** | **步骤 20** | 
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

### Follower机械臂组装步骤

:::note
- Follower机械臂的步骤与Leader步骤大致相同，唯一区别步骤 12之后的末端的夹爪和手柄安装方式不同，
:::

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** | 
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |


</TabItem>

<TabItem value="SO100" label="SO100">

### 舵机校准

官方提供了Youtube[组装视频](https://www.youtube.com/watch?v=FioA2oeFZ5I) ，我们也记录了我们的舵机校准和机械臂安装过程。

<div class="video-container">
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=114176236191787&bvid=BV1WiQiY1EYP&cid=28909307865&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>
</div>

在终端输入以下指令来找到两个机械臂对应的端口号：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

识别领导臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0031751`，或在 Linux 上可能为 `/dev/ttyACM0`）：
识别跟随臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0032081`，或在 Linux 上可能为 `/dev/ttyACM1`）：

故障排除：在 Linux 上，你可能需要通过运行以下命令来赋予 USB 端口访问权限：
```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

插入你的第一个电机并运行此脚本将其 ID 设置为 1。它还会将当前位置设置为 2048，你的电机会旋转：
```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

注意：这些电机目前有一定的限制。它们只能接受 0 到 4096 之间的值，对应于一整圈。它们不能旋转超过这个范围。2048 是这个范围的中间值，所以我们可以向逆时针方向移动 -2048 步（180 度）达到最大范围，或向顺时针方向移动 +2048 步（180 度）达到最大范围。配置步骤还将归位偏移设置为 0，因此如果你组装机械臂时有误，可以始终更新归位偏移以补偿最多 ±2048 步（±180 度）的偏移。

然后拔下你的电机，插入第二个电机并将其 ID 设置为 2。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

对所有电机重复此过程，直到 ID 为 6。领导臂的 6 个电机也同样操作。现在你可以开始组装你的机械臂了。

### 机械臂组装

<div class="video-container">
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=114182410272948&bvid=BV1KFX5YREjU&cid=28929295238&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=114187896425203&bvid=BV1MJQRYgEUw&cid=28947320683&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>
</div>

</TabItem>


</Tabs>


## 校准机械臂

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

:::danger 
若购买 **SO101 Arm Kit 标准版**，所有电源均为5V。若购买 **SO101 Arm Kit Pro 版**，Leader机械臂的校准及每一步骤均使用5V电源，Follower机械臂的校准及每一步骤均使用12V电源。  
:::

接下来，你需要对你的 SO-10x 机器人接上电源和数据线进行校准，以确保在相同的物理位置时，Leader 臂和 Follower 臂的位置信息一致。这个校准过程至关重要，因为它可以让在一个 SO-10x 机器人上训练的神经网络在另一个机器人上也能正常工作。如果需要重新校准机械臂，请删除 `~/lerobot/.cache/huggingface/calibration/so101` 文件夹。

**Follower 机械臂手动校准**

重要提示：在获取端口信息后，需要更新 [SO101RobotConfig](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) (`lerobot/lerobot/common/robot_devices/robots/configs.py`) 中的默认端口值。你会看到类似如下内容：

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` 限制相对位置目标向量的幅度，以确保安全。
    # 可以设置为一个正数，表示所有电机的最大相对目标相同；也可以设置为一个列表，与 Follower 臂的电机数量相同。
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- 在这里更新
                motors={
                    # 名称: (索引, 型号)
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
                port="/dev/ttyACM1",  <-- 在这里更新
                motors={
                    # 名称: (索引, 型号)
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

<summary> 双臂遥操作. (可选) </summary>

假如你想实现双臂遥操作，意味着你需要2个Leader机械臂和两个Follower机械臂，那么你需要分别在`leader_arms dick`和 `follower_arms dick`中添加机械臂类名以及对应的端口号，例如  

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
                port="/dev/ttyACM0",  <-- 这里
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
                port="/dev/ttyACM1",  <--  这里
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
                port="/dev//dev/ttyACM2",  <--  这里
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
                port="/dev//dev/ttyACM3",  <-- 这里
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
这里需要对应好双臂的left right名字以及确认每个机械臂在设备上的串口号。
:::

在下一步校准机械臂的时候则需要单独校准四个机械臂，命令为如下:


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

标定完成后可在‘.cache/calibration/so101’目录下查看。
```bash
`-- calibration
    `-- so101
        |-- left_follower.json
        |-- left_leader.json
        |-- right_follower.json
        `-- right_leader.json
```

后续步骤与单臂一致.

</details>


```bash
sudo chmod 666 /dev/ttyACM*
```

**Follower 机械臂手动校准**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

**Leader 机械臂手动校准**

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


## 遥操作

<div class="video-container">
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806571580&bvid=BV14M6JY6E72&cid=27744995936&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>
</div>

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

然后，您已准备好遥操作您的机器人！运行以下简单脚本（它不会连接并显示摄像头）：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

## 添加摄像头

<div class="video-container">
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806636901&bvid=BV12M6JY6Erv&cid=27744931613&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>
</div>

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

在插入您的两个 USB 摄像头后，运行以下脚本以检查摄像头的端口号，切记摄像头不能插在USB Hub上，要直接插在设备上，USB Hub速率太慢会导致读不到图像数据。
```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

终端将打印出以下信息。

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
Frame: 0000	Latency (ms): 39.52
[...]
Frame: 0046	Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

您可以在 `outputs/images_from_opencv_cameras` 目录中找到每个摄像头拍摄的图片，并确认不同位置摄像头对应的端口索引信息。然后，完成 `lerobot/lerobot/common/robot_devices/robots/configs.py` 文件中摄像头参数的对齐。

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

<summary> 添加两个以上的摄像头 (可选) </summary>
如果你想添加更多摄像头，在USB输入允许的情况下可以在camera dick中继续添加不同摄像头名称和camera_index。请注意，摄像头不推荐使用USB HUB。

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
            "new_camera": OpenCVCameraConfig( ##### 添加新的名称
                camera_index=3,             ##### 填写对应的indexID号
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

<summary> 使用单个奥比中光摄像头 </summary>

:::tip
该项目由奥比中光发起并提供宝贵指导，由华南师范大学张家铨、王文钊、黄锦鹏 完成，实现lerobot框架下使用Orbbec相机采集深度数据，从而使机械臂的环境感知更加丰富的效果
如果你手上已经有了奥比中光Gemini2的深度相机，目前我们测试过是将深度相机放在正前上方，并进行以下的环境安装。
:::

**安装并编译Gemini 2深度相机Python SDK**

1.克隆pyOrbbecsdk

```bash
cd ~/
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
```

2.安装 pyOrbbecsdk 的依赖并编译

```bash
conda activate lerobot
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
pip3 install -r requirements.txt
mkdir build
cd build
cmake -Dpybind11_DIR=`pybind11-config --cmakedir` ..
make -j4
make install
```

3.进行深度相机是否正常运行的测试
```bash
cd ~/pyorbbecsdk 
pip install -e .
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
python3 examples/depth.py
```

但是每次新建终端需要再次运行
```bash
cd ~/pyorbbecsdk 
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

你也可以在主目录`.bashrc`文件末尾添加
```bash
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ~/pyorbbecsdk/scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```
这样每次启动终端会自动加载深度相机环境。

在插入您的 Orbbec 深度相机后，运行以下脚本以检查深度相机的深度数据流及彩色数据流，电脑将会有两个窗口弹出，您可以根据这两个窗口调整摄像头位置，在终端使用Ctrl+C退出按切记摄像头不能插在USB Hub上，要直接插在设备上，USB Hub速率太慢会导致读不到图像数据。

完成摄像头的调整后，完成 lerobot/lerobot/common/robot_devices/robots/configs.py 文件中摄像头参数的对齐。

```python
@RobotConfig.register_subclass("so101")  #so100也兼容
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
                camera_index=0,            
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(    #这是普通摄像头，与奥比相机兼容，您仍然可以正常添加
                camera_index=1,             
                fps=30,
                width=640,
                height=480,
            ),
            "Orbbec":OrbbecCameraConfig(    #在这里添加奥比摄像头信息
                fps=30,
                use_depth=True,              #是否采用深度
                width = 640,                 #这里会根据宽度自动适配分辨率，不用填高度信息，宽度的值必须为640或者1280（未测试）中的一个
                Hi_resolution_mode = False,  #高分辨率模式，会导致可视化效果不是那么地好，可以进一步提升深度数据的分辨率
            )，

        }
    )

    mock: bool = False
```

</details>


然后，您将能够在遥操作时在计算机上显示摄像头：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=teleoperate \
  --control.display_data=true
```

## 数据集制作采集

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

<div class="video-container">
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806571649&bvid=BV14M6JY6ELn&cid=27744994748&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>
</div>

一旦您熟悉了遥操作，您就可以使用 SO-10x 记录您的第一个数据集。

如果您想使用 Hugging Face Hub 的功能来上传您的数据集，并且您之前尚未这样做，请确保您已使用具有写入权限的令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 中生成：
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在一个变量中，以运行以下命令：
```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

记录 2 个回合并将您的数据集上传到 Hub：

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

- 如果你希望将数据保存在本地（`--control.push_to_hub=false`），请将 `--control.repo_id=${HF_USER}/so101_test` 替换为一个自定义的本地文件夹名称，例如 `--control.repo_id=seeed_123/so101_test`。数据将存储在系统主目录下的 `~/.cache/huggingface/lerobot`。

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

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

如果您使用 `--control.push_to_hub=true` 将数据集上传到 Hub，您可以通过复制粘贴您的仓库 ID 来, 并复制到这个网址中[在线可视化您的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)：
```bash
echo ${HF_USER}/so101_test  
```

你也可以使用命令行来可视化:
```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so101_test \
```

如果您数据集保存在本地，并且数据采集时运行超参数为 `--control.push_to_hub=false` ，您也可以使用以下命令在本地进行可视化：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id seeed_123/so101_test \
```
这里的`seeed_123`为采集数据时候自定义的repo_id名。


  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
  </div>


## 重播一个回合
:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

现在尝试在您的机器上重播第一个回合的动作：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/so101_test \
  --control.episode=0
```
如果你将数据保存在本地，请添加`--control.local_files_only=true` .

## 训练

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

<div class="video-container">
<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806575007&bvid=BV1xM6JY6Ess&cid=27744930563&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>
</div>

要训练一个控制您机器人策略，使用 `python lerobot/scripts/train.py` 脚本。需要一些参数。以下是一个示例命令：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=true
```


如果你想训练本地数据集，repo_id与采集数据的repo_id对齐即可。

让我们解释一下：
1. 我们使用 `--dataset.repo_id=${HF_USER}/so101_test` 提供了数据集本地路径或上传到Huggingface的数据集ID作为参数。
2. 我们使用 `policy.type=act` 提供了策略。这将从 [`lerobot/lerobot/common/policies/act /configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py) 加载配置。目前测试了ACT，你也可以选择diffusion、pi0、pi0fast、tdmpc、vqbet等策略进行尝试。
4. 我们提供了 `device=cuda`，因为我们在 Nvidia GPU 上训练，但如果您使用的是带有 Apple Silicon 的 Mac，可以使用 `device=mps`，否则使用 `device=cpu`。
5. 我们提供了 `wandb.enable=false` 来禁用 [Weights and Biases](https://docs.wandb.ai/quickstart) 用于可视化训练图表。这是可选的，但如果您使用它，请确保通过运行 `wandb login` 登录。

训练应该需要几个小时。您将可以在 `outputs/train/act_so100_test/checkpoints` 中找到训练结果的权重文件。


要从某个检查点恢复训练，下面是一个从 `act_so101_test` 策略的最后一个检查点恢复训练的示例命令：

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**上传策略检查点**
训练完成后，可以使用以下命令上传最新的检查点：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
``` 

## 评估
:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::


您可以使用 [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) 中的 `record` 功能，但需要将策略训练结果权重作为输入。例如，运行以下命令记录 10 个评估回合：


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

如您所见，这几乎与之前用于记录训练数据集的命令相同。只有两处变化：
1. 增加了 `--control.policy.path` 参数，指示您的策略检查点的路径（例如 `outputs/train/eval_act_so100_test/checkpoints/last/pretrained_model`）。如果您将模型检查点上传到 Hub，也可以使用模型仓库（例如 `${HF_USER}/act_so100_test`）。
2. 数据集的名称以 `eval` 开头，以反映您正在运行推理（例如 `${HF_USER}/eval_act_so100_test`）。

<div class="video-container">
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113746806575007&bvid=BV1xM6JY6Ess&cid=27744930563&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

## FAQ

- 如果实用本文档教程，请git clone本文档推荐的github仓库`https://github.com/ZhuYaoHui1998/lerobot.git`，本文档推荐的仓库是验证过后的稳定版本，Lerobot官方仓库是实时更新的最新版本，会出现一些无法预知的问题，例如数据集版本不同，指令不同等。

- 如果遇到以下报错，需要检查对应端口号的机械臂是否接通电源，总线舵机是否出现数据线松动或者脱落。
  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- 如果你维修或者更换过机械臂零件，请完全删除`~/lerobot/.cache/huggingface/calibration/so100`文件夹并重新校准机械臂

- 如果遥操作正常，而带Camera的遥操作无法显示图像界面，请参考[这里](https://github.com/huggingface/lerobot/pull/757/files)

- 如果在数据集遥操作过程中出现libtiff的问题，请更新libtiff版本。
  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- 执行完[安装Lerobot](https://wiki.seeedstudio.com/cn/lerobot_so100m/#%E5%AE%89%E8%A3%85lerobot)可能会自动卸载gpu版本的pytorch，所以需要在手动安装torch-gpu。

- 对于Jetson，请先安装[Pytorch和Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)再执行`conda install -y -c conda-forge ffmpeg`,否则编译torchvision的时候会出现ffmpeg版本不匹配的问题。

- 如果出现如下问题，是电脑的不支持此格式的视频编码，需要修改`lerobot/lerobot/common/datasets
/video_utils.py`文件134行`vcodec: str = "libsvtav1"`的值修改为`libx264`或者`libopenh264`,不同电脑参数不同，可以进行尝试。 [Issues 705](https://github.com/huggingface/lerobot/issues/705)

  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ``` 

- 重要的事！！！如果再执行过程中舵机的数据线松动，请恢复这个舵机到初始位置再重新链接舵机数据线，也可以通过[初始化舵机命令](https://wiki.seeedstudio.com/cn/lerobot_so100m/#%E6%A0%A1%E5%87%86%E8%88%B5%E6%9C%BA%E5%B9%B6%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82)单独校准某个舵机，校准单独的舵机的时候确保舵机上只有一个数据线与驱动板相连。如果出现
  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```
  或者校准机械臂过程中的其他关于角度和超出限位值的报错，这个方法依然适用。

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