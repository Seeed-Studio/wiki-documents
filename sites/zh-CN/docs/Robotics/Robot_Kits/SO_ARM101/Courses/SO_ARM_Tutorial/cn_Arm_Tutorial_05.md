---
description: "SO-ARM 具身智能入门课程第 5 章 —— 在 Ubuntu x86 或 Jetson 上搭建 LeRobot 软件环境：Miniforge、经验证的 Seeed LeRobot 仓库、ffmpeg、PyTorch 与 feetech 电机依赖。"
title: 第 5 章 - 软件环境搭建
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Miniforge
  - 环境
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_5
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 5 章 · 实践</span>
    <h2>5. 软件环境搭建</h2>
    <p>
      在 Ubuntu x86 或 Jetson 上搭建 LeRobot 软件环境：安装 Miniforge、克隆经验证的 Seeed LeRobot 仓库、安装 ffmpeg、PyTorch 与 feetech 电机依赖。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 系统要求

---

**Ubuntu x86：**

- Ubuntu 22.04
- CUDA 12+
- Python 3.12
- Torch 2.6+

**Jetson Orin：**

- Jetson JetPack 6.0 与 6.1（暂不支持 JetPack 6.2）
- Python 3.12
- Torch 2.3+

回顾第 3 章的要求：避免 Windows 上的 WSL 或虚拟机 Ubuntu —— 原生 Ubuntu 或 Jetson 的坑最少。

---

## 安装 LeRobot

---

PyTorch、torchvision 等环境需要根据你的 CUDA 版本安装。请按你的设备选择对应步骤。

<Tabs defaultValue="X86">

<TabItem value="X86" label="X86 Ubuntu 22.04">

**1. 安装 Miniforge：**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# 安装完成后：
source ~/.bashrc
# 初始化所有 shell
conda init --all
```

**2. 为 LeRobot 创建并激活全新 conda 环境：**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. 克隆经验证的 LeRobot 仓库：**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. 在环境中安装 ffmpeg：**

```bash
conda install ffmpeg -c conda-forge
```

:::tip
这通常会安装带 libsvtav1 编码器的 ffmpeg 7.X。如果不支持 libsvtav1（用 `ffmpeg -encoders` 检查），可以显式安装 ffmpeg 7.1.1：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

这条命令也能修复后续编码数据集视频时出现的 `No valid stream found in input file` 报错。
:::

**5. 安装 LeRobot 及 feetech 电机依赖：**

:::tip
在新装的 Ubuntu 22.04 上 —— 尤其是最小化安装 —— 可能默认没有 `gcc` 等编译工具，feetech 依赖里的 `evdev` 包会编译失败。先装好基础编译工具：

```bash
sudo apt update
sudo apt install build-essential
```
:::

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

</TabItem>

<TabItem value="Jetson" label="Jetson Orin">

**1. 安装 Miniforge：**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# 按提示输入 'yes' 或回车。安装完成后：
source ~/.bashrc
```

**2. 为 LeRobot 创建并激活全新 conda 环境：**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. 克隆经验证的 LeRobot 仓库：**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. 在环境中安装 ffmpeg：**

```bash
conda install ffmpeg -c conda-forge
```

**5. 安装 LeRobot 及 feetech 电机依赖：**

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

**6. Jetson JetPack 6.0+ 设备**（请先从步骤 5 开始安装 [PyTorch-gpu 与 Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch)，再执行本步）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # 通过 conda 安装 OpenCV 及其他依赖
conda remove opencv                                   # 卸载 conda 版 OpenCV
pip3 install opencv-python==4.10.0.84                 # 通过 pip3 重新安装 opencv-python
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0                            # 需要与 torchvision 匹配
```

</TabItem>

</Tabs>

---

## 验证环境

---

通过 pip 安装 LeRobot 可能会把原有的 PyTorch 和 torchvision 替换成 CPU 版本，训练前务必检查。在 `lerobot` conda 环境中运行：

```python
python   # 在终端中启动 Python
import torch
print(torch.cuda.is_available())
exit()   # 退出 Python
```

- `False` → 当前环境用的是 CPU 版 PyTorch。需要 GPU 训练或推理时，请按 [PyTorch 官方指南](https://pytorch.org/index.html) 重装与你 CUDA 版本匹配的 PyTorch 和 torchvision。
- `True` → GPU 加速可用。

:::tip
NVIDIA RTX 50 系显卡需要 CUDA 12.8 或更高的预览版：

```bash
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
```
:::

最后确认 LeRobot 命令行工具已在 PATH 中：

```bash
lerobot-find-port --help
```

命令能打印帮助信息，环境就绪，可以进入下一章配置电机与组装机械臂。

</div>
