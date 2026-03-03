---
description: 本文档提供了安装 Isaac Lab 的分步指南。
title: 安装 Isaac Lab
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/install_isaaclab
last_update:
  date: 2025/5/28
  author: ZhuYaoHui
---

# 安装 Isaac Lab

本文档提供了安装 Isaac Lab 的分步指南。Isaac Lab 依赖于 Isaac Sim。本教程首先通过 pip 安装 Isaac Sim，然后从源代码安装 Isaac Lab。

:::tip
- 本教程仅适用于 Ubuntu 20.04 和 22.04 系统，目前不支持 Windows。请确保您的计算机已根据 GPU 安装了 NVIDIA 显卡驱动和 CUDA 12+。

- 请检查官方 Isaac Sim 链接以验证您的硬件是否符合要求。

- 推荐使用 Miniconda，并确保已预先安装。
:::

## 使用 Miniconda 创建虚拟环境  
我们建议首先创建一个虚拟环境。确保虚拟环境中的 Python 版本为 Python 3.10。  

```bash
conda create -n env_isaaclab python=3.10  
conda activate env_isaaclab  
```  

## 安装 PyTorch 和 torchvision  
接下来，根据您的 CUDA 版本安装 PyTorch 和 Torchvision。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>


<TabItem value="CUDA 11+" label="CUDA 11+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118
```


</TabItem>

<TabItem value="CUDA 12+" label="CUDA 12+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu121
```


</TabItem>

</Tabs>

## 安装 Isaac Sim  
```bash
pip install --upgrade pip  
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com  
```  

## 验证 Isaac Sim 安装  
```bash
isaacsim  
```  

:::note
首次运行 Isaac Sim 时，所有所需的扩展将从注册表中拉取。此过程可能需要 **超过 10 分钟**，并且对于每个体验文件的首次运行都是必要的。一旦扩展下载完成，后续使用相同体验文件的运行将使用缓存的扩展。  
:::

### 安装 Isaac Lab  

**克隆 Isaac Lab 仓库**  
```bash
git clone https://github.com/isaac-sim/IsaacLab.git  
```  

**安装 Isaac Lab 的依赖项**  
```bash
sudo apt install cmake build-essential  
```  

**安装 Isaac Lab 的强化学习库**  
```bash
./isaaclab.sh --install  # 或 "./isaaclab.sh -i"  
```  
您也可以单独安装特定的强化学习库：  
```bash
./isaaclab.sh --install rl_games  # 或 "rsl_rl, sb3, skrl, robomimic"  
```  

**验证 Isaac Lab 安装**  
进入克隆的 Isaac Lab 目录。  

**选项 1：通过 shell 脚本启动**  
```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py  
```  

**选项 2：通过 Python 启动**  
```bash
python scripts/tutorials/00_sim/create_empty.py  
```  

:::note
上述命令应启动模拟器并显示一个带有黑色视口的窗口，如下图所示。您可以通过在终端中按 **Ctrl+C** 退出脚本。在 Windows 上，请在命令提示符中使用 **Ctrl+Break** 或 **Ctrl+fn+B** 终止进程。
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.png" />
</div>

### 训练一个简单的机器人  

您可以使用提供的示例脚本训练一组蜘蛛机器人：  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/3.jpg" />
</div>


或者训练一只单独的狗：  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Velocity-Rough-Anymal-C-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/2.jpg" />
</div>

### 安装 Isaac Gym（可选）  
前面的安装步骤已经足够，但如果您只想体验 Isaac Gym 的强化学习部分，可以单独安装 Isaac Gym。  

**下载并解压 [Isaac Gym 代码](https://developer.nvidia.com/isaac-gym/download)**  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/4.png" />
</div>

将其解压到您的主目录，然后创建一个 Conda 环境并安装依赖项：  
```bash
conda create --name isaac python=3.8  
conda activate isaac  
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia  
conda install numpy=1.23  
```  

**安装 Isaac Gym**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python  
pip install -e .  
```  

**验证 Isaac Gym 安装**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python/examples  
python 1080_balls_of_solitude.py  
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/5.png" />
</div>


:::warning
**可能的错误及解决方法**  
运行 Python 脚本时，您可能会遇到以下错误：  
```plaintext
ImportError: libpython3.8.so.1.0: cannot open shared object file: No such file or directory  
```  
通过以下命令修复此问题（将路径替换为您自己的路径）：  
```bash
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/home/{Your Username}/anaconda3/envs/pi/lib  
```  
:::