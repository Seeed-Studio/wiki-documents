---
description: 本 wiki 提供了 SO ARM100 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: 如何在 Lerobot 中使用 SO10xArm 机械臂
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /cn/lerobot_so100m
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
---

# 如何在旧版 Lerobot 中使用 SO-ARM100 和 SO-ARM101 机械臂

:::tip
本教程仓库维护了截至 2025 年 6 月 5 日经过验证的 Lerobot 稳定版本。目前，Hugging Face 已推出 Lerobot 的重大升级，引入了许多新功能。如果您想体验最新教程，请遵循[官方文档指导](https://huggingface.co/docs/lerobot/index)。
:::

## 介绍

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100)是由[TheRobotStudio](https://www.therobotstudio.com/)推出的完全开源机械臂项目。它包括从动臂和主动机械臂，还提供详细的 3D 打印文件和操作指南。[LeRobot](https://github.com/huggingface/lerobot/tree/main)致力于在 PyTorch 中为现实世界机器人技术提供模型、数据集和工具。其目标是降低机器人技术的入门门槛，使每个人都能通过共享数据集和预训练模型做出贡献并从中受益。LeRobot 集成了经过现实世界应用验证的前沿方法，以模仿学习为中心。它提供了一套预训练模型、包含人类收集演示的数据集和仿真环境，使用户无需组装机器人即可开始使用。在接下来的几周内，计划增强对目前可获得的最具成本效益和最有能力的机器人的现实世界机器人技术支持。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 项目介绍

SO-ARM10x 和 reComputer Jetson AI 智能机器人套件无缝结合了高精度机械臂控制和强大的 AI 计算平台，提供了全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 SO-ARM10x 机械臂和 LeRobot AI 框架，为用户提供适用于教育、研究和工业自动化等多种场景的智能机器人系统。
本 wiki 提供了 SO ARM10x 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 主要特性

1. **开源且低成本**：这是来自[TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)的开源、低成本机械臂解决方案
2. **与 LeRobot 集成**：专为与[LeRobot 平台](https://github.com/huggingface/lerobot)集成而设计
3. **丰富的学习资源**：提供全面的开源学习资源，如组装和校准指南，以及测试、数据收集、训练和部署教程，帮助用户快速入门并开发机器人应用程序。
4. **与 Nvidia 兼容**：使用 reComputer Mini J4012 Orin NX 16 GB 部署此机械臂套件。
5. **多场景应用**：适用于教育、科研、自动化生产和机器人技术等领域，帮助用户在各种复杂任务中实现高效、精确的机器人操作。

## 新功能：

- 布线优化：与 SO-ARM100 相比，SO-ARM101 具有改进的布线，防止了之前在关节 3 处出现的断开问题。新的布线设计也不再限制关节的运动范围。
- 主动臂的不同齿轮比：主动臂现在使用具有优化齿轮比的电机，提高了性能并消除了对外部齿轮箱的需求。
- 新功能支持：主动臂现在可以实时跟随从动臂，这对于即将推出的学习策略至关重要，人类可以干预并纠正机器人的动作。

:::caution

Seeed Studio 仅对硬件本身的质量负责。教程严格按照官方文档更新。如果您遇到无法解决的软件问题或环境依赖问题，除了查看本教程末尾的 FAQ 部分外，请及时向[LeRobot 平台](https://github.com/huggingface/lerobot)或[LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU)报告问题。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 规格参数

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">机械臂套件</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">机械臂套件专业版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">机械臂套件</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">机械臂套件专业版</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>主动臂</td>
      <td rowSpan="2">12 个 ST-3215-C001 (7.4V)电机，所有关节均为 1:345 齿轮比</td>
      <td rowSpan="2">12 个 ST-3215-C018/ST-3215-C047 (12V)电机，所有关节均为 1:345 齿轮比</td>
      <td colSpan="2">
        1 个 ST-3215-C001 (7.4V)电机，仅用于关节 2，齿轮比为 1:345<br />
        2 个 ST-3215-C044 (7.4V)电机，用于关节 1 和 3，齿轮比为 1:191<br />
        3 个 ST-3215-C046 (7.4V)电机，用于关节 4、5 和夹爪（关节 6），齿轮比为 1:147
      </td>
    </tr>
    <tr>
      <td>从动臂</td>
      <td colSpan="2">与 SO-ARM100 相同</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A（从动臂）<br />
        5.5 mm × 2.1 mm DC 5 V 4 A（主动臂）
      </td>
    </tr>
    <tr>
      <td>角度传感器</td>
      <td colSpan="4">12 位磁编码器</td>
    </tr>
    <tr>
      <td>推荐工作温度</td>
      <td colSpan="4">0 °C 至 40 °C</td>
    </tr>
    <tr>
      <td>通信</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>控制方式</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

如果您购买的是机械臂套件版本，两个电源都是 5V。如果您购买的是机械臂套件专业版，请在主动机械臂的校准和每个步骤中使用 5V 电源，在从动机械臂的校准和每个步骤中使用 12V 电源。

:::

## 物料清单(BOM)

| 部件 | 数量 | 包含|
|--|--|--|
|  舵机电机 | 12 | ✅ |
| 电机控制板 | 2 | ✅ |
| USB-C 线缆 2 根 | 1 | ✅ |
| 电源 2 个 | 2 | ✅ |
| 桌夹| 4 | ✅ |
| 机械臂 3D 打印部件 | 1 | 可选 |

## 初始系统环境

**对于 Ubuntu x86：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**对于 Jetson Orin：**

- Jetson JetPack 6.2  
- Python 3.10  
- Torch 2.6  

## 目录

  [A. 3D 打印指南](https://wiki.seeedstudio.com/cn/lerobot_so100m/#install-lerobot)

  [B. 安装 LeRobot](https://wiki.seeedstudio.com/cn/lerobot_so100m/#install-lerobot)

  [C. 配置电机](https://wiki.seeedstudio.com/cn/lerobot_so100m/#configure-the-motors)

  [D. 组装](https://wiki.seeedstudio.com/cn/lerobot_so100m/#assembly)

  [E. 校准](https://wiki.seeedstudio.com/cn/lerobot_so100m/#calibrate)

  [F. 远程操作](https://wiki.seeedstudio.com/cn/lerobot_so100m/#teleoperate)

  [G. 添加摄像头](https://wiki.seeedstudio.com/cn/lerobot_so100m/#add-cameras)

  [H. 记录数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m/#record-the-dataset)

  [I. 可视化数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m/#visualize-the-dataset)

  [J. 重放一个片段](https://wiki.seeedstudio.com/cn/lerobot_so100m/#replay-an-episode)

  [K. 训练策略](https://wiki.seeedstudio.com/cn/lerobot_so100m/#train-a-policy)

  [L. 评估您的策略](https://wiki.seeedstudio.com/cn/lerobot_so100m/#evaluate-your-policy)

## 3D 打印指南

:::caution
随着 SO101 的官方更新，SO100 将不再支持，源文件将按官方要求删除，但源文件仍可在我们的[Makerworld](https://makerworld.com/zh/models/908660)中找到。但是，对于之前购买 SO100 的用户，教程和安装方法仍然兼容。SO101 的打印与 SO100 的电机套件安装完全兼容。
:::

### 步骤 1：选择打印机

提供的 STL 文件可以在许多 FDM 打印机上直接打印。以下是经过测试和建议的设置，尽管其他设置也可能有效。

- 材料：PLA+
- 喷嘴直径和精度：0.4mm 喷嘴直径，0.2mm 层高或 0.6mm 喷嘴，0.4mm 层高。
- 填充密度：15%
### 步骤 2：设置打印机

- 确保打印机已校准，并使用打印机特定说明正确设置床面水平。
- 清洁打印床，确保无灰尘或油脂。如果使用水或其他液体清洁床面，请将床面擦干。
- 如果您的打印机建议使用，请使用标准胶棒在床面打印区域涂抹一层薄而均匀的胶水。避免结块或涂抹不均。
- 使用打印机特定说明装载打印机耗材。
- 确保打印机设置与上述建议的设置匹配（大多数打印机有多种设置，请选择最接近的设置）。
- 设置为全面支撑，但忽略与水平面夹角大于 45 度的斜面。
- 水平轴螺丝孔中不应有支撑。

### 步骤 3：打印零件

领导者或跟随者的所有零件都已包含在单个文件中，便于 3D 打印，正确定向为 z 向上以最小化支撑。

- 对于 220mmx220mm 的打印机床面尺寸（如 Ender），打印这些文件：
  - [跟随者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [领导者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- 对于 205mm x 250mm 的打印机床面尺寸（如 Prusa/Up）：
  - [跟随者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [领导者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## 安装 LeRobot

需要根据您的 CUDA 安装 pytorch 和 torchvision 等环境。

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
git clone https://github.com/ZhuYaoHui1998/lerobot.git ~/lerobot
```

**我们适配了 Orbbec Gemini2 深度相机，发现单个深度相机比两个 RGB 相机性能更好。如果您也使用此相机，请克隆转换仓库分支到 Orbbec 并按照我们后续步骤配置相机。**  

```bash  
cd ~/lerobot  
git checkout orbbec  
```  

**如果您只使用 RGB，请不要切换分支，否则可能出现依赖相关错误。如果您已经切换到 `orbbec` 并想恢复到原始版本：**  

```bash  
cd ~/lerobot  
git checkout main  
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
cd ~/lerobot && pip install -e ".[feetech]"
```

6. （此步骤在 X86 Ubuntu 计算机端可以跳过。）对于 Jetson Jetpack 设备（请确保在执行此步骤之前从步骤 5 安装 [Pytorch-gpu 和 Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch)）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

7. 检查 Pytorch 和 Torchvision

由于通过 pip 安装 lerobot 环境会卸载原始的 Pytorch 和 Torchvision 并安装 CPU 版本的 Pytorch 和 Torchvision，您需要在 Python 中进行检查。

```python
import torch
print(torch.cuda.is_available())
```

如果打印结果为 False，您需要根据[官方网站教程](https://pytorch.org/index.html)重新安装 Pytorch 和 Torchvision。

如果您使用 Jetson 设备，请根据[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)安装 Pytorch 和 Torchvision。

## 配置电机

:::danger  
由于官方代码和舵机制造商固件更新，2025 年 6 月 30 日之前的用户，请先下载[飞特官方上位机软件](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250706).7z)（适用于 Windows 系统）。上电并连接所有舵机，选择对应的`端口号` -> `波特率 1000000` -> `打开` -> `搜索`。检测到所有舵机后，点击`升级` -> `在线检测` -> `升级固件`，确保固件版本从 3.9 更新到 3.10，以避免后续问题。  
:::

:::note
如果固件更新失败后舵机无法再次识别，您可以将另一个可检测的舵机直接连接到上位机，然后执行电机扫描和固件在线检测。保持当前窗口打开，立即断开当前舵机，改为连接无法识别的舵机。在 1 秒内点击"在线升级"。如果失败，可以多次重试。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

SO-ARM101 的舵机校准和初始化过程在方法和代码方面与 SO-ARM100 相同。但是，请注意 SO-ARM101 领导臂前三个关节的齿轮比与 SO-ARM100 不同，因此需要仔细区分和校准。

要配置电机，请为您的领导臂指定一个总线舵机适配器和 6 个电机，同样为跟随臂指定另一个总线舵机适配器和 6 个电机。方便的做法是给它们贴标签，在每个电机上写明它是用于跟随者 F 还是领导者 L，以及它的 ID 从 1 到 6。我们使用 **F1–F6** 表示**跟随臂**的关节 1 到 6，使用 **L1–L6** 表示**领导臂**的关节 1 到 6。相应的舵机型号、关节分配和齿轮比详情如下：

| 舵机型号                            | 齿轮比 | 对应关节         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
现在您应该将 5V 或 12V 电源插入电机总线。STS3215 7.4V 电机使用 5V，STS3215 12V 电机使用 12V。请注意，领导臂始终使用 7.4V 电机，因此如果您有 12V 和 7.4V 电机，请注意插入正确的电源，否则可能烧坏您的电机！现在，通过 USB 将电机总线连接到您的计算机。请注意，USB 不提供任何电源，电源和 USB 都必须插入。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

**查找与您的机械臂关联的 USB 端口**
要找到每个机械臂的正确端口，请运行实用程序脚本两次：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

识别领导臂端口时的示例输出（例如，Mac 上的 `/dev/tty.usbmodem575E0031751`，或 Linux 上可能的 `/dev/ttyACM0`）：

识别跟随臂端口时的示例输出（例如，`/dev/tty.usbmodem575E0032081`，或 Linux 上可能的 `/dev/ttyACM1`）：

故障排除：在 Linux 上，您可能需要通过运行以下命令来授予对 USB 端口的访问权限：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**配置您的电机**

:::danger
请使用 5V 电源校准领导电机（ST-3215-C046、C044、001）。
:::

| **领导臂关节 6 校准** | **领导臂关节 5 校准** | **领导臂关节 4 校准** | **领导臂关节 3 校准** | **领导臂关节 2 校准** | **领导臂关节 1 校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |
:::danger
如果您购买的是机械臂套件版本（ST-3215-C001），请使用 5V 电源。如果您购买的是机械臂专业版，请使用 12V 电源来校准舵机（ST-3215-C047/ST-3215-C018）。
:::

| **从动臂关节 6 校准** | **从动臂关节 5 校准** | **从动臂关节 4 校准** | **从动臂关节 3 校准** | **从动臂关节 2 校准** | **从动臂关节 1 校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

您也可以参考我们的 SO-ARM100 舵机校准视频，但请确保舵机关节 ID 和齿轮比严格对应 SO-ARM101 的配置。

插入您的第一个电机并运行此脚本将其 ID 设置为 1。它还会将其当前位置设置为 2048，因此您的电机会旋转：

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

注意：这些电机目前是有限制的。它们只能取 0 到 4096 之间的值，对应一个完整的转动。它们不能转动超过这个范围。2048 在这个范围的中间，所以我们可以向后退 2048 步（逆时针 180 度）并达到最大范围，或者向前进 2048 步（顺时针 180 度）并达到最大范围。配置步骤还将归位偏移设置为 0，这样如果您错误组装了机械臂，您总是可以更新归位偏移来补偿高达±2048 步（±180 度）的偏移。

然后拔掉您的电机并插入第二个电机，将其 ID 设置为 2。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

对所有电机重复此过程直到 ID 6。对主动臂的 6 个电机执行相同操作。
</TabItem>

<TabItem value="SO100" label="SO100">

为您的主动臂指定一个总线舵机适配器和 6 个电机，同样为从动臂指定另一个总线舵机适配器和 6 个电机。方便的做法是给它们贴标签，在每个电机上写明它是用于从动臂 F 还是主动臂 L，以及它的 ID 从 1 到 6（F1...F6 和 L1...L6）。

按照[组装视频](https://www.youtube.com/watch?v=FioA2oeFZ5I)的步骤 1，该视频演示了我们下面脚本的使用。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/FioA2oeFZ5I?si=GjudmAovwF_X5m2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**查找与您的机械臂关联的 USB 端口**
要为每个机械臂找到正确的端口，请运行实用程序脚本两次：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

识别主动臂端口时的示例输出（例如，Mac 上的`/dev/tty.usbmodem575E0031751`，或 Linux 上可能的`/dev/ttyACM0`）：

识别从动臂端口时的示例输出（例如，`/dev/tty.usbmodem575E0032081`，或 Linux 上可能的`/dev/ttyACM1`）：

故障排除：在 Linux 上，您可能需要通过运行以下命令来授予 USB 端口访问权限：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**配置您的电机**

插入您的第一个电机并运行此脚本将其 ID 设置为 1。它还会将其当前位置设置为 2048，因此您的电机会旋转：

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

:::note
注意：这些电机目前是有限制的。它们只能取 0 到 4096 之间的值，对应一个完整的转动。它们不能转动超过这个范围。2048 在这个范围的中间，所以我们可以向后退 2048 步（逆时针 180 度）并达到最大范围，或者向前进 2048 步（顺时针 180 度）并达到最大范围。配置步骤还将归位偏移设置为 0，这样如果您错误组装了机械臂，您总是可以更新归位偏移来补偿高达±2048 步（±180 度）的偏移。
:::

然后拔掉您的电机并插入第二个电机，将其 ID 设置为 2。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

对所有电机重复此过程直到 ID 6。对主动臂的 6 个电机执行相同操作。
</TabItem>
</Tabs>

## 组装

:::tip

- SO-ARM101 的双臂组装过程与 SO-ARM100 相同。唯一的区别是 SO-ARM101 增加了线缆夹，以及主动臂关节舵机的齿轮比不同。因此 SO100 和 SO101 都可以参考以下内容进行安装
- 校准舵机后，在拧紧螺丝之前不要旋转它们。确保 3D 打印部件的方向与图像中的参考方向匹配，并且电机处于中间位置。

- 组装前，请再次检查您的电机型号和减速比。如果您购买的是 SO100，可以忽略此步骤。如果您购买的是 SO101，请查看下表来区分 F1 到 F6 和 L1 到 L6。

:::

  | 舵机型号                            | 齿轮比 | 对应关节         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
如果您购买的是**SO101 机械臂套件标准版**，所有电源都是 5V。如果您购买的是**SO101 机械臂套件专业版**，主动臂应在每个步骤中使用 5V 电源进行校准和操作，而从动臂应在每个步骤中使用 12V 电源进行校准和操作。
:::

**组装主动臂**

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

- 从动臂的组装步骤与主动臂基本相同。唯一的区别在于步骤 12 之后末端执行器（夹爪和手柄）的安装方法。

:::

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |
## 校准

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

:::danger
如果您购买的是 **SO101 机械臂套件标准版**，所有电源都是 5V。如果您购买的是 **SO101 机械臂套件专业版**，Leader 机械臂应在每个步骤中使用 5V 电源进行校准和操作，而 Follower 机械臂应在每个步骤中使用 12V 电源进行校准和操作。
:::

接下来，您需要将电源和数据线连接到您的 SO-10x 机器人进行校准，以确保 leader 和 follower 机械臂在相同物理位置时具有相同的位置值。这种校准是必要的，因为它允许在一个 SO-10x 机器人上训练的神经网络在另一个机器人上工作。如果您需要重新校准机械臂，请删除 `~/lerobot/.cache/huggingface/calibration/so101` 文件夹。

**Follower 机械臂手动校准**

重要提示：现在您已经有了端口，请更新 [SO101RobotConfig](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) (`lerobot/lerobot/common/robot_devices/robots/configs.py`) 的端口默认值。您会找到类似这样的内容：

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

<summary> 双臂遥操作。（可选） </summary>

如果您想实现双臂遥操作，这意味着您需要两个 Leader 机械臂和两个 Follower 机械臂。因此，您需要在 `leader_arms dick` 和 `follower_arms dick` 中添加机械臂的类名及其对应的端口号，例如：

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
您需要正确匹配双臂的左右名称，并确保每个机械臂在设备上的串口号正确分配。
:::

在下一步中，校准机械臂时，您需要单独校准所有四个机械臂。命令如下：

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

校准完成后，您可以在 .cache/calibration/so101 目录中查看结果。

```bash
`-- calibration
    `-- so101
        |-- left_follower.json
        |-- left_leader.json
        |-- right_follower.json
        `-- right_leader.json
```

后续步骤与单臂设置相同。

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

| **Follower 中间位置** | **Follower 零位** | **Follower 旋转位置** | **Follower 休息位置** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |
| **Leader 中间位置** | **Leader 零位** | **Leader 旋转位置** | **Leader 休息位置** |
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

## 遥操作

**简单遥操作**
然后您就可以遥操作您的机器人了！运行这个简单的脚本（它不会连接和显示摄像头）：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 添加摄像头

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

插入两个 USB 摄像头后，运行以下脚本检查摄像头的端口号，重要的是要记住摄像头不能连接到 USB 集线器；相反，它应该直接插入设备。USB 集线器的较慢速度可能导致无法读取图像数据。

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
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras```

您可以在 `outputs/images_from_opencv_cameras` 目录中找到每个摄像头拍摄的图片，并确认不同位置摄像头对应的端口索引信息。然后在 `lerobot/lerobot/common/robot_devices/robots/configs.py` 文件中完成摄像头参数的对齐。

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

<summary> 添加两个或更多额外摄像头。（可选） </summary>
如果您想添加更多摄像头，只要 USB 输入允许，您可以继续在摄像头字典中添加不同的摄像头名称和 `camera_index` 值。请注意，不建议使用 USB 集线器连接摄像头。

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

<summary>使用单个 Orbbec Gemini 2 深度摄像头</summary>

:::tip
该项目由 Orbbec 发起并提供宝贵指导，由华南师范大学的张家权、王文钊和黄金鹏实施。它使得在 lerobot 框架内使用 Orbbec 摄像头收集深度数据成为可能，从而丰富了机械臂的环境感知能力。
如果您已经拥有 Orbbec Gemini2 深度摄像头，我们当前的测试配置将深度摄像头放置在前上方位置。请按照以下安装说明进行操作。
:::

**安装和编译 Gemini 2 深度摄像头 Python SDK**

1. 克隆 pyOrbbecsdk

```bash
cd ~/
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
```

2. 安装依赖项并编译 pyOrbbecsdk

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

3. 测试深度摄像头是否正常工作

```bash
cd ~/pyorbbecsdk 
pip install -e .
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
python3 examples/depth.py
```

但是，当打开新终端时，您需要再次运行这些命令：

```bash
cd ~/pyorbbecsdk 
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

您也可以将以下内容添加到 `.bashrc` 文件的末尾：

```bash
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ~/pyorbbecsdk/scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

这将在启动终端时自动加载深度摄像头环境。

连接 Orbbec 深度摄像头后，运行以下脚本检查深度数据流和彩色数据流。将弹出两个窗口，允许您调整摄像头位置。在终端中使用 Ctrl+C 退出。重要提示：摄像头必须直接连接到您的设备，而不是通过 USB 集线器，因为集线器的带宽可能太慢，无法进行图像数据传输。

调整摄像头后，在配置文件 `lerobot/lerobot/common/robot_devices/robots/configs.py` 中对齐摄像头参数。

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

然后，您将能够在进行远程操作时通过运行以下代码在计算机上显示摄像头。这对于在录制第一个数据集之前准备设置非常有用。

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=teleoperate \
  --control.display_data=true
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 录制数据集

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

一旦您熟悉了远程操作，就可以使用 SO-10x 录制您的第一个数据集。

如果您想使用 Hugging Face hub 功能上传数据集，并且之前没有这样做过，请确保您已使用写入访问令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 生成：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在变量中以运行这些命令：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

录制 2 个片段并将数据集上传到 hub：

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

您将看到很多类似这样的行出现：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**参数说明**

- wormup-time-s：指初始化时间。
- episode-time-s：表示每次收集数据的时间。
- reset-time-s：是每次数据收集之间的准备时间。
- num-episodes：表示预期收集多少组数据。
- push-to-hub：决定是否将数据上传到 HuggingFace Hub。

:::tip

- "如果您想在本地保存数据（`--control.push_to_hub=false`），请将 `--control.repo_id=${HF_USER}/so101_test` 替换为自定义的本地文件夹名称，例如 `--control.repo_id=seeed_123/so101_test`。然后它将存储在系统主目录的 `~/.cache/huggingface/lerobot` 中。"

- 如果您使用 `--control.push_to_hub=true` 将数据集上传到 hub，您可以通过复制粘贴您的仓库 ID 来[在线可视化您的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)：

- 在片段录制期间的任何时候按右箭头 → 可以提前停止并进入重置。在重置期间也是如此，可以提前停止并进入下一个片段录制。

- 在片段录制或重置期间的任何时候按左箭头 ← 可以提前停止，取消当前片段，并重新录制。

- 在片段录制期间的任何时候按 ESC 键可以提前结束会话，直接进入视频编码和数据集上传。

- 注意：您可以通过添加 --control.resume=true 来恢复录制。如果您还没有推送数据集，请添加 --control.local_files_only=true。如果您想从头开始录制，需要手动删除数据集目录。
- 一旦您熟悉了数据记录，就可以创建一个更大的数据集用于训练。一个好的起始任务是在不同位置抓取物体并将其放入容器中。我们建议至少记录 50 个回合，每个位置 10 个回合。保持摄像头固定，并在整个记录过程中保持一致的抓取行为。还要确保您操作的物体在摄像头中可见。一个好的经验法则是，您应该能够仅通过查看摄像头图像来完成任务。

- 在接下来的章节中，您将训练您的神经网络。在实现可靠的抓取性能后，您可以开始在数据收集过程中引入更多变化，例如额外的抓取位置、不同的抓取技术和改变摄像头位置。

- 避免过快添加太多变化，因为这可能会影响您的结果。

- 在 Linux 上，如果在数据记录期间左右箭头键和退出键没有任何效果，请确保您已设置$DISPLAY 环境变量。请参阅[pynput 限制](https://pynput.readthedocs.io/en/latest/limitations.html#linux)。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 可视化数据集

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

```bash
echo ${HF_USER}/so101_test  
```

如果您没有使用`--control.push_to_hub=false`上传，您也可以在本地可视化：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so101_test \
```

如果您使用`--control.push_to_hub=false`上传，您也可以在本地可视化：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id seeed_123/so101_test \
```

**这里，`seeed_123`是收集数据时定义的自定义`repo_id`名称。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## 重放回合

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

现在尝试在您的机器人上重放第一个回合：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/so101_test \
  --control.episode=0
```

注意：如果您还没有推送数据集，请添加`--control.local_files_only=true`。

## 训练策略

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

要训练策略来控制您的机器人，请使用`python lerobot/scripts/train.py`脚本。需要一些参数。以下是示例命令：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=true
```

**如果您想在本地数据集上训练，请确保`repo_id`与数据收集期间使用的匹配。**

让我们解释一下：

1. 我们使用`--dataset.repo_id=${HF_USER}/so101_test`提供了数据集作为参数。
2. 我们使用`policy.type=act`提供策略，这将从[`lerobot/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py)加载配置。目前，ACT 已经过测试，但您也可以尝试其他策略，如 diffusion、pi0、pi0fast、tdmpc 和 vqbet。
3. 我们提供了 policy.device=cuda，因为我们在 Nvidia GPU 上训练，但您可以使用 policy.device=mps 在 Apple silicon 上训练。
5. 我们提供了`wandb.enable=true`来使用[Weights and Biases](https://docs.wandb.ai/quickstart)可视化训练图表。这是可选的，但如果您使用它，请确保通过运行`wandb login`登录。

训练应该需要几个小时。您将在`outputs/train/act_so100_test/checkpoints`中找到检查点。

要从检查点恢复训练，以下是从 act_so101_test 策略的最后检查点恢复的示例命令：

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**上传策略检查点**
训练完成后，使用以下命令上传最新检查点：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

## 评估您的策略

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

您可以使用[`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py)中的`record`函数，但以策略检查点作为输入。例如，运行此命令记录 10 个评估回合：

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

如您所见，这与之前用于记录训练数据集的命令几乎相同。有两个变化：

1. 有一个额外的`--control.policy.path`参数，指示策略检查点的路径（例如`outputs/train/eval_act_so100_test/checkpoints/last/pretrained_model`）。如果您将模型检查点上传到 hub，您也可以使用模型仓库（例如`${HF_USER}/act_so100_test`）。
2. 数据集名称以`eval`开头，以反映您正在运行推理（例如`${HF_USER}/eval_act_so100_test`）。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 常见问题

- 如果您正在遵循此文档/教程，请 git clone 推荐的 GitHub 仓库`https://github.com/ZhuYaoHui1998/lerobot.git`。本文档推荐的仓库是经过验证的稳定版本；官方 Lerobot 仓库持续更新到最新版本，可能会导致不可预见的问题，如不同的数据集版本、不同的命令等。

- 如果您遇到以下错误，您需要检查连接到相应端口的机械臂是否已通电，以及总线舵机是否有松动或断开的电缆。

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- 如果您已修复或更换了机械臂的任何部件，请完全删除`~/lerobot/.cache/huggingface/calibration/so100`文件夹并重新校准机械臂。

- 如果远程控制功能正常但带摄像头的远程控制无法显示图像界面，您可以在[这里](https://github.com/huggingface/lerobot/pull/757/files)找到解决方案

- 如果您在数据集远程操作期间遇到 libtiff 问题，请更新 libtiff 版本。

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- 执行[Lerobot 安装](https://wiki.seeedstudio.com/cn/lerobot_so100m/#install-lerobot)后，pytorch 的 GPU 版本可能会被自动卸载，因此您需要手动安装 torch-gpu。

- 对于 Jetson，请在执行`conda install -y -c conda-forge ffmpeg`之前先安装[Pytorch 和 Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)，否则在编译 torchvision 时可能会出现 ffmpeg 版本不匹配问题。

- 如果出现以下问题，说明您的计算机不支持此视频编解码器格式。您需要修改文件`lerobot/lerobot/common/datasets/video_utils.py`中的第 134 行，将`vcodec: str = "libsvtav1"`的值更改为`libx264`或`libopenh264`。不同的计算机可能需要不同的参数，因此您可以尝试各种选项。[Issues 705](https://github.com/huggingface/lerobot/issues/705)

  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- 重要！！！如果在执行过程中舵机电缆松动，请将舵机恢复到初始位置，然后重新连接舵机电缆。您也可以使用[舵机初始化命令](https://wiki.seeedstudio.com/cn/lerobot_so100m/#configure-the-motors)单独校准舵机，确保在单独校准期间舵机和驱动板之间只连接一根电缆。如果您遇到

  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.  ```

  或机械臂校准过程中出现的其他与角度和超出限制值相关的错误，此方法仍然适用。

- 在 8G 3060 笔记本电脑上训练 50 组 ACT 数据大约需要 6 小时，而在 4090 或 A100 计算机上，训练 50 组数据大约需要 2-3 小时。

- 在数据收集过程中，确保摄像头的位置、角度和环境光照保持稳定，尽量减少捕获过多不稳定的背景和行人；否则，部署时环境的显著变化可能导致机械臂无法正确抓取。

- 确保数据收集命令中的`num-episodes`参数设置为收集足够的数据，并且不要中途手动暂停。这是因为数据的均值和方差只有在数据收集完成后才会计算，这对训练是必需的。

- 如果程序提示无法读取 USB 摄像头图像数据，请确保 USB 摄像头没有连接到集线器。USB 摄像头必须直接连接到设备以确保快速的图像传输速率。

:::tip
如果您遇到无法解决的软件问题或环境依赖问题，除了查看本教程末尾的 FAQ 部分外，请及时向[LeRobot 平台](https://github.com/huggingface/lerobot)或[LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU)报告问题。
:::

## 引用

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m/)

TheRobotStudio 项目：[SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface 项目：[Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty：[Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

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
