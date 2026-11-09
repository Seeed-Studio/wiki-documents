---
description: 'Chapter 5 of the SO-ARM Physical AI Beginner''s Course — set up the LeRobot software environment on Ubuntu x86 or Jetson: Miniforge, the verified Seeed LeRobot repository, ffmpeg, PyTorch, and the feetech motor dependencies.'
title: Chapter 5 - Software Environment Setup
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Miniforge
  - Environment
  - Course
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
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 2 · Chapter 5 · Practice</span>
    <h2>5. Software Environment Setup</h2>
    <p>
      Chapter 5 of the SO-ARM Physical AI Beginner's Course — set up the LeRobot software
      environment on Ubuntu x86 or Jetson: Miniforge, the verified Seeed LeRobot repository,
      ffmpeg, PyTorch, and the feetech motor dependencies.
    </p>
    <div className="hero-actions">
      <a href="#requirements">Requirements</a>
      <a href="#install">Install LeRobot</a>
      <a href="#verify">Verify</a>
    </div>
  </div>
</section>

## 5.1 System Requirements

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>Requirements</span>
    <h2>5.1 System Requirements</h2>
  </div>

**For Ubuntu x86:**

- Ubuntu 22.04
- CUDA 12+
- Python 3.12
- Torch 2.6+

**For Jetson Orin:**

- Jetson JetPack 6.0 and 6.1 (JetPack 6.2 is not supported yet)
- Python 3.12
- Torch 2.3+

Remember from Chapter 3: avoid WSL or virtual-machine Ubuntu on Windows — native Ubuntu or Jetson gives you the fewest surprises.

</section>

## 5.2 Install LeRobot

<section id="install" className="section-card">
  <div className="section-title">
    <span>Step by step</span>
    <h2>5.2 Install LeRobot</h2>
  </div>

Environments such as PyTorch and torchvision need to be installed based on your CUDA version. Follow the tab for your device.

<Tabs defaultValue="X86">

<TabItem value="X86" label="X86 Ubuntu 22.04">

**1. Install Miniforge:**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Once the installation is complete:
source ~/.bashrc
# Initialize all shells
conda init --all
```

**2. Create and activate a fresh conda environment for LeRobot:**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. Clone the verified LeRobot repository:**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. Install ffmpeg in your environment:**

```bash
conda install ffmpeg -c conda-forge
```

:::tip
This usually installs ffmpeg 7.X compiled with the libsvtav1 encoder. If libsvtav1 is not supported (check with `ffmpeg -encoders`), explicitly install ffmpeg 7.1.1:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

This also fixes the `No valid stream found in input file` error that appears later when encoding dataset videos.
:::

**5. Install LeRobot with the feetech motor dependencies:**

:::tip
On a newly configured Ubuntu 22.04 machine — especially a minimal install — `gcc` and other build tools may be missing, and the `evdev` Python package used by the feetech extra will fail to build. Install them first:

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

**1. Install Miniforge:**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Follow the prompts by entering 'yes' or pressing Enter. Once the installation is complete:
source ~/.bashrc
```

**2. Create and activate a fresh conda environment for LeRobot:**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. Clone the verified LeRobot repository:**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. Install ffmpeg in your environment:**

```bash
conda install ffmpeg -c conda-forge
```

**5. Install LeRobot with the feetech motor dependencies:**

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

**6. For Jetson JetPack 6.0+ devices** (first install [PyTorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) from step 5, then run):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda
conda remove opencv                                   # Uninstall the conda OpenCV
pip3 install opencv-python==4.10.0.84                 # Reinstall opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0                            # This should match torchvision
```

</TabItem>

</Tabs>

</section>

## 5.3 Verify the Environment

<section id="verify" className="section-card">
  <div className="section-title">
    <span>Verify</span>
    <h2>5.3 Verify the Environment</h2>
  </div>

Installing LeRobot via pip can replace the original PyTorch and torchvision with CPU versions, so always check before training. In the `lerobot` conda environment, run:

```python
python   # start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # exit Python
```

- `False` → the current environment uses the CPU version of PyTorch. For GPU training or inference, reinstall the PyTorch and torchvision versions that match your CUDA version following the [official PyTorch guide](https://pytorch.org/index.html).
- `True` → GPU acceleration is available.

:::tip
NVIDIA RTX 50-series GPUs require the preview version of CUDA 12.8 or higher:

```bash
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
```
:::

Finally, check that the LeRobot command-line tools are on your PATH:

```bash
lerobot-find-port --help
```

If the command prints help text, the environment is ready for the next chapter, where we configure the motors and assemble the arms.

</section>

</div>
