---
description: 本 wiki 演示如何使用 J501 Mini 与 StarAI Viola 机械臂，通过 LeRobot 框架和 ACT 模型执行水果分拣任务。
title: 使用 J501 Mini 和 StarAI Viola 机械臂进行水果分拣
keywords:
  - J501 mini
  - Robotics
  - StarAI
  - Viola
  - LeRobot
  - ACT
  - Fruit Sorting
image: https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png
slug: /j501_mini_starai_viola_fruit_sorting
sku: 100020039,114090080
last_update:
  date: 2026-2-2
  author: Dayu
createdAt: '2026-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/j501_mini_starai_viola_fruit_sorting/
---

# 🍎 使用 J501 Mini 和 StarAI Viola 机械臂进行水果分拣

## 🚀 简介

本 wiki 演示如何使用 **J501 Mini（Jetson AGX Orin）** 与 **StarAI Viola 机械臂** 通过 **LeRobot 框架** 执行水果分拣任务。该项目展示了从数据收集到部署的端到端工作流程，使机器人能够智能地抓取和整理水果。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png"/>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">J501 Mini</th>
      <th class="table-trnobg">StarAI Viola</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J501-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5976.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 立即购买</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 立即购买</font></span></strong></a></div></td>
    </tr>
  </table>
</div>

<p></p>

**您将学到：**

- 🔧 **J501 Mini** 和 **StarAI Viola 机械臂** 的硬件设置
- 💻 在 **Jetson AGX Orin** 上配置 **LeRobot** 软件环境
- 🎯 水果分拣任务的数据收集和远程操作
- 🤖 训练 ACT 策略模型
- 🚀 部署训练好的模型进行自主水果分拣

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/catch-fruit.png"/>
</div>

<p></p>

**📚 本教程提供分步说明，帮助您从零开始构建智能水果分拣系统。**

:::warning
本 wiki 基于 JetPack 6.2.1，使用 Jetson AGX Orin 模块。
:::

## 🛠️ 硬件要求

### 必需组件

- 配备 Jetson AGX Orin 模块的 **J501 Mini**
- **StarAI Viola** 从动机械臂（6+1 自由度）
- **StarAI Violin** 主动机械臂（6+1 自由度）用于远程操作
- **2x USB 摄像头**（推荐 640x480 @ 30fps）
  - 一个腕部安装摄像头
  - 一个第三人称视角摄像头
- **UC-01 调试板**（x2，机械臂附带）
- **12V 电源** 用于机械臂
- **USB 线缆** 用于机械臂通信
- **水果** 用于分拣演示

### 硬件规格

| 组件 | 规格 |
|-----------|--------------|
| **J501 Mini** | Jetson AGX Orin，JetPack 6.2.1 |
| **Viola 从动臂** | 6+1 自由度，470mm 臂展，300g 负载 |
| **Violin 主动臂** | 6+1 自由度，470mm 臂展，远程操作 |
| **摄像头** | USB，640x480 @ 30fps，MJPG 格式 |
| **电源** | 每个机械臂 12V 10A |

## 💻 软件环境设置

### 前提条件

- Ubuntu 22.04（在配备 JetPack 6.2.1 的 J501 Mini 上）
- Python 3.10
- CUDA 12+
- PyTorch 2.6+（GPU 版本）

### 安装 Miniconda

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### 创建 LeRobot 环境

```bash
# Create conda environment
conda create -y -n lerobot python=3.10 && conda activate lerobot

# Clone LeRobot repository
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot

# Install ffmpeg
conda install ffmpeg -c conda-forge
```

### 为 Jetson 安装 PyTorch 和 Torchvision

对于 Jetson 设备，您需要在安装 LeRobot 之前安装 GPU 版本的 PyTorch 和 Torchvision。请按照[此 Jetson PyTorch 安装教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch)安装 PyTorch-gpu 和 Torchvision。

### 安装 LeRobot 和依赖项

安装 PyTorch-gpu 和 Torchvision 后，安装 LeRobot：

```bash
cd ~/lerobot && pip install -e .
```

对于 Jetson JetPack 6.0+ 设备，安装额外的依赖项：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

### 安装 StarAI 电机依赖项

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

### 检查 PyTorch 和 Torchvision

由于通过 pip 安装 LeRobot 环境会卸载原有的 PyTorch 和 Torchvision 并安装 CPU 版本，您需要在 Python 中进行检查：

```python
import torch
print(torch.cuda.is_available())  # Should print True
```

如果打印结果为 `False`，您需要根据[此 Jetson 教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)重新安装 PyTorch 和 Torchvision。

```bash
# Remove brltty if it causes USB port conflicts
sudo apt remove brltty
```

## 🔧 硬件设置和校准

### 配置 USB 端口

连接机械臂并识别其 USB 端口：

```bash
cd ~/lerobot
lerobot-find-port
```

您应该看到类似以下的输出：
- 主动机械臂：`/dev/ttyUSB0`
- 从动机械臂：`/dev/ttyUSB1`

授予 USB 端口访问权限：

```bash
sudo chmod 666 /dev/ttyUSB*
```

### 初始机械臂位置

在校准之前，将两个机械臂移动到初始位置：

| **Violin 主动机械臂** | **Viola 从动机械臂** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |

### 校准主动机械臂

```bash
lerobot-calibrate \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader
```

手动将每个关节移动到其最大和最小位置。校准完所有关节后按 Enter 键保存。

### 校准从动机械臂

```bash
lerobot-calibrate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower
```

:::tip
校准文件保存到 `~/.cache/huggingface/lerobot/calibration/`
:::

### 设置摄像头

查找您的摄像头端口：

```bash
lerobot-find-cameras opencv
```

示例输出：
```
Camera #0: /dev/video2 (wrist camera)
Camera #1: /dev/video4 (front camera)
```

安装摄像头：
- **腕部摄像头**：安装到夹爪上用于近距离视角
- **前置摄像头**：放置在桌面上用于第三人称视角

## 🎮 远程操作测试

在数据收集之前通过远程操作测试设置：

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true
```

:::warning
对于 ACT 模型训练，摄像头名称必须是 `wrist` 和 `front`。使用不同的名称需要修改源代码。
:::

## 📊 水果分拣数据收集

### 登录 Hugging Face（可选）

如果您想将数据集上传到 Hugging Face Hub：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

### 记录训练数据集

收集 50 个水果分拣演示片段：

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=50 \
    --dataset.push_to_hub=true \
    --dataset.single_task="Sort fruits into containers"
```

### 记录参数

| 参数 | 描述 |
|-----------|-------------|
| `--dataset.episode_time_s` | 每个片段的持续时间（30 秒） |
| `--dataset.reset_time_s` | 片段间重置时间（30 秒） |
| `--dataset.num_episodes` | 要记录的片段数量（50） |
| `--dataset.push_to_hub` | 上传到 Hugging Face Hub（true/false） |
| `--dataset.single_task` | 任务描述 |

### 记录期间的键盘控制

- **右箭头（→）**：跳到下一个片段
- **左箭头（←）**：重新记录当前片段
- **ESC**：停止记录并保存数据集

:::tip
如果键盘控制不起作用，请尝试：`pip install pynput==1.6.8`
:::

### 重播一个回合

通过重播一个回合来测试录制的数据：

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode=0
```

## 🎓 训练 ACT 策略

### 训练配置

在您收集的数据集上训练 ACT 模型：

```bash
lerobot-train \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --policy.type=act \
    --output_dir=outputs/train/fruit_sorting_act \
    --job_name=fruit_sorting_act \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.repo_id=${HF_USER}/fruit_sorting_policy \
    --steps=100000 \
    --batch_size=8 \
    --eval.batch_size=8 \
    --eval.n_episodes=10 \
    --eval_freq=5000
```

### 训练参数

| 参数 | 描述 |
|-----------|-------------|
| `--policy.type` | 模型类型 (act) |
| `--steps` | 总训练步数 (100,000) |
| `--batch_size` | 训练批次大小 (8) |
| `--eval_freq` | 评估频率 (每 5000 步) |
| `--wandb.enable` | 启用 Weights & Biases 日志记录 |

### 训练时间

在 J501 Mini (AGX Orin) 上：
- 50 个回合：约 8-10 小时
- 100 个回合：约 16-20 小时

:::tip
您可以启用 `--wandb.enable=true` 来使用 Weights & Biases 监控训练进度。请确保先运行 `wandb login`。
:::

### 恢复训练

如果训练被中断，从最后一个检查点恢复：

```bash
lerobot-train \
    --config_path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model/train_config.json \
    --resume=true \
    --steps=200000
```

## 🚀 部署和评估

### 评估训练好的模型

运行评估回合来测试训练好的策略：

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --display_data=false \
    --dataset.repo_id=${HF_USER}/eval_fruit_sorting \
    --dataset.single_task="Sort fruits into containers" \
    --dataset.num_episodes=10 \
    --policy.path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model
```

### 自主操作

训练完成后，机器人可以自主分拣水果。下面的视频演示了在 J501 Mini 配合 StarAI Viola 机械臂上使用训练好的 ACT 策略的完整水果分拣工作流程：

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Tk6jazbZZy0" title="Fruit Sorting Demo with J501 Mini and StarAI Viola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**演示亮点：**
- 机器人自主识别和抓取不同的水果
- 从远程操作演示中学习到的流畅精确动作
- 成功将水果分拣到指定容器中
- 展示了在 J501 Mini 上训练的 ACT 策略的有效性

运行自主水果分拣：

1. 将水果放置在工作区域
2. 运行上面显示的评估命令
3. 机器人将执行学习到的行为来抓取和分拣水果

## 🎯 提升性能的技巧

### 数据收集最佳实践

1. **一致的环境**
   - 保持光照条件稳定
   - 最小化背景变化
   - 使用一致的水果放置方式

2. **质量胜过数量**
   - 收集流畅、有意的演示
   - 避免急促的动作
   - 确保训练数据中的抓取成功

3. **相机定位**
   - 保持相机角度一致
   - 确保水果和夹爪的良好可见性
   - 录制期间避免相机移动

### 训练优化

1. **数据集大小**
   - 从 50 个回合开始
   - 如果性能不足则添加更多数据
   - 100-200 个回合通常足以应对简单任务

2. **超参数调优**
   - 根据 GPU 内存调整批次大小
   - 增加训练步数以获得更好的收敛
   - 监控评估指标

3. **环境一致性**
   - 在与训练相似的条件下部署
   - 保持一致的光照
   - 使用相似的水果类型和容器

## 🔧 故障排除

### 常见问题

**USB 端口未检测到**
```bash
# Remove brltty
sudo apt remove brltty

# Check USB devices
lsusb
sudo dmesg | grep ttyUSB

# Grant permissions
sudo chmod 777 /dev/ttyUSB*
```

**相机不工作**
- 不要通过 USB 集线器连接相机
- 使用直接 USB 连接
- 使用 `lerobot-find-cameras opencv` 检查相机索引

**训练内存不足**
- 减少批次大小：`--batch_size=4`
- 降低图像分辨率
- 关闭其他应用程序

**推理性能差**
- 收集更多训练数据
- 确保环境一致
- 检查相机定位
- 验证校准精度

## 📚 参考资料

- 🔗 [LeRobot 文档](https://github.com/huggingface/lerobot)
- 🔗 [StarAI 机械臂 Wiki](https://wiki.seeedstudio.com/cn/lerobot_starai_arm/)
- 🔗 [J501 Mini 文档](https://wiki.seeedstudio.com/cn/recomputer_j501_mini_getting_started/)
- 🔗 [ACT 论文](https://tonyzhaozh.github.io/aloha/)
- 🔗 [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

## 🤝 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
