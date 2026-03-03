---
description: This wiki shows how to set up Isaac Lab on Ubuntu with Nvidia GPU to train reinforcement learning policies for the SO-ARM100/101 robotic arms.
title: Training SoArm101 Policy with IsaacLab
keywords:
- IsaacLab
- Reinforcement Learning
- Robotic Arm
- SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.webp
slug: /training_soarm101_policy_with_isaacLab
last_update:
  date: 9/4/2025
  author: Youjiang
---

## Introduction

This wiki introduces how to use Isaac Lab to train and test SO-ARM100/101 robotic arm policies with reinforcement learning.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.gif" />
</div>

## 📌Prerequisites

- An Ubuntu PC with Nvidia GPU

:::info
If you don’t have CUDA drivers or Conda installed, please set them up first.
:::

## Getting Started

### 🚀 Step 1. Install Isaac Lab

NVIDIA Isaac™ Lab is an open-source unified framework for [robot learning](https://www.nvidia.com/en-us/glossary/robot-learning/) that helps researchers and developers efficiently train robotic policies.

Run the following commands in the Ubuntu PC terminal:

```bash
# Create and activate Conda environment
conda create -n isaaclab python=3.10
conda activate isaaclab

# Install PyTorch (GPU version)
pip install torch==2.7.0 torchvision==0.22.0 --index-url https://download.pytorch.org/whl/cu128

# Upgrade pip
pip install --upgrade pip

# Install Isaac Sim (with extensions)
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Clone IsaacLab repository
cd ~/Documents
git clone https://github.com/isaac-sim/IsaacLab.git

# Install dependencies
sudo apt install cmake build-essential

# Initialize setup
cd IsaacLab
./isaaclab.sh --install
```

Run the following command to verify installation:

```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py
```

If successful, an empty Isaac Sim window should appear.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/create_empty.png" />
</div>

### 🤖 Step 2. Install isaac_so_arm101 Project

<div style={{ textAlign: 'justify' }}>
    This repository implements tasks for the SO‑ARM100 and SO‑ARM101 robots using Isaac Lab. It serves as the foundation for several tutorials in the LycheeAI Hub series Project: [SO‑ARM101 × Isaac Sim × Isaac Lab](https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series).
</div>

Run the following commands:

```bash
cd ~/Documents
git clone https://github.com/MuammerBay/isaac_so_arm101.git
cd isaac_so_arm101

# Install project dependencies
python -m pip install -e source/SO_100

# Test environments
python scripts/list_envs.py
```

If the isaac_so_arm101 project is successfully installed, the terminal window will print the following log:

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/install.png" />
</div>

### 🎯 Step 3. Start Training

Launch training with:

```bash
python scripts/rsl_rl/train.py --task SO-ARM100-Reach-v0
```

This will open an Isaac Sim window where you can observe the training process in real time. You can add the `--headless` parameter to the launch command to speed up the training process.

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/J9JpmeXeKKE" title="Training SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

After training, the model weights will be saved under:
`~/Documents/isaac_so_arm101/logs/rsl_rl/so_arm100_reach`

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/models.png" />
</div>

### 🧪 Step 4. Test the Model

Test the trained model with:

```bash
python scripts/rsl_rl/play.py --task SO-ARM100-Reach-Play-v0
```

During testing, target positions are randomly generated within a defined range, and the trained model drives the robotic arm to reach those targets.

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/9BOOWKCyhXk" title="Test SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References

- https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series
- https://github.com/MuammerBay/isaac_so_arm101
- https://github.com/huggingface/lerobot
- https://github.com/isaac-sim/IsaacLab
- https://github.com/leggedrobotics/rsl_rl

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
