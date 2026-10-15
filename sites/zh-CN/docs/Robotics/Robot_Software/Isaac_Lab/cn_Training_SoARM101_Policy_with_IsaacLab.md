---
description: 本文档展示了如何在带有 Nvidia GPU 的 Ubuntu 上设置 Isaac Lab，用于训练 SO-ARM100/101 机械臂的强化学习策略。
title: 使用 IsaacLab 训练 SoArm101 策略
keywords:
  - IsaacLab
  - 强化学习
  - 机械臂
  - SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.webp
slug: /training_soarm101_policy_with_isaacLab
last_update:
  date: 2025/9/4
  author: Youjiang
createdAt: '2025-09-04'
updatedAt: '2025-09-18'
url: https://wiki.seeedstudio.com/cn/training_soarm101_policy_with_isaacLab/
---

## 介绍

本教程介绍如何使用 Isaac Lab 通过强化学习训练和测试 SO-ARM100/101 机械臂的策略。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.gif" />
</div>

## 📌 前置条件

- 一台带有 Nvidia GPU 的 Ubuntu 电脑

:::info
如果你没有安装 CUDA 驱动或 Conda，请先进行安装。
:::

## 快速开始

### 🚀 步骤 1. 安装 Isaac Lab

NVIDIA Isaac™ Lab 是一个开源的统一 [机器人学习](https://www.nvidia.com/en-us/glossary/robot-learning/) 框架，帮助研究人员和开发人员高效训练机器人策略。

在 Ubuntu 终端中运行以下命令：

```bash
# 创建并激活 Conda 环境
conda create -n isaaclab python=3.10
conda activate isaaclab

# 安装 PyTorch (GPU 版本)
pip install torch==2.7.0 torchvision==0.22.0 --index-url https://download.pytorch.org/whl/cu128

# 升级 pip
pip install --upgrade pip

# 安装 Isaac Sim（包含扩展）
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# 克隆 IsaacLab 仓库
cd ~/Documents
git clone https://github.com/isaac-sim/IsaacLab.git

# 安装依赖
sudo apt install cmake build-essential

# 初始化设置
cd IsaacLab
./isaaclab.sh --install
```

运行以下命令验证安装：

```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py
```

如果成功，将会出现一个空白的 Isaac Sim 窗口。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/create_empty.png" />
</div>

### 🤖 步骤 2. 安装 isaac_so_arm101 项目

<div style={{ textAlign: 'justify' }}>
    此仓库基于 Isaac Lab 为 SO-ARM100 和 SO-ARM101 机器人实现任务。它是 LycheeAI Hub 系列教程项目 [SO-ARM101 × Isaac Sim × Isaac Lab](https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series) 的基础。
</div>

运行以下命令：

```bash
cd ~/Documents
git clone https://github.com/MuammerBay/isaac_so_arm101.git
cd isaac_so_arm101

# 安装项目依赖
python -m pip install -e source/SO_100

# 测试环境
python scripts/list_envs.py
```

如果 isaac_so_arm101 项目安装成功，终端窗口将打印如下日志：

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/install.png" />
</div>

### 🎯 步骤 3. 开始训练

使用以下命令启动训练：

```bash
python scripts/rsl_rl/train.py --task SO-ARM100-Reach-v0
```

此时会打开一个 Isaac Sim 窗口，可以实时观察训练过程。你也可以在启动命令后添加 `--headless` 参数来加速训练过程。

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/J9JpmeXeKKE" title="使用 IsaacLab 训练 SoArm100" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

训练完成后，模型权重将保存在：
`~/Documents/isaac_so_arm101/logs/rsl_rl/so_arm100_reach`

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/models.png" />
</div>

### 🧪 步骤 4. 测试模型

使用以下命令测试训练好的模型：

```bash
python scripts/rsl_rl/play.py --task SO-ARM100-Reach-Play-v0
```

在测试过程中，目标位置将在预设范围内随机生成，训练好的模型将驱动机械臂去触碰这些目标。

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/9BOOWKCyhXk" title="使用 IsaacLab 测试 SoArm100" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料

- https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series
- https://github.com/MuammerBay/isaac_so_arm101
- https://github.com/huggingface/lerobot
- https://github.com/isaac-sim/IsaacLab
- https://github.com/leggedrobotics/rsl_rl

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您的使用体验尽可能顺畅。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
