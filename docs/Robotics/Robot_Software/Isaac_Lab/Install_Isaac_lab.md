---
description: This wiki provides a step-by-step guide to install Isaac Lab.
title: Install the Isaac Lab
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.webp
slug: /install_isaaclab
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Install the Isaac Lab

This wiki provides a step-by-step guide to install Isaac Lab. Isaac Lab requires Isaac Sim. This tutorial first installs Isaac Sim via pip, then installs Isaac Lab from source code.

:::tip
- This tutorial is only applicable to Ubuntu 20.04 and 22.04 systems and does not currently support Windows. Please ensure your computer has NVIDIA graphics drivers and CUDA 12+ installed based on your GPU.

- Check the official Isaac Sim link to verify if your hardware meets the requirements.

- Miniconda is recommended and must be pre-installed.
:::

## Creating a Virtual Environment with Miniconda  
We recommend creating a virtual environment first. Ensure the Python version in the virtual environment is Python 3.10.  

```bash
conda create -n env_isaaclab python=3.10  
conda activate env_isaaclab  
```  

## Installing PyTorch and torchvision  
Next, install PyTorch and Torchvision according to your CUDA version.

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

## Installing Isaac Sim  
```bash
pip install --upgrade pip  
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com  
```  

## Verifying Isaac Sim Installation  
```bash
isaacsim  
```  

:::note
When running Isaac Sim for the first time, all required extensions will be pulled from the registry. This process may take **over 10 minutes** and is necessary for the initial run of each experience file. Once the extensions are downloaded, subsequent runs with the same experience file will use cached extensions.  
:::

### Installing Isaac Lab  

**Clone the Isaac Lab repository**  
```bash
git clone https://github.com/isaac-sim/IsaacLab.git  
```  

**Install dependencies for Isaac Lab**  
```bash
sudo apt install cmake build-essential  
```  

**Install Isaac Lab's reinforcement learning libraries**  
```bash
./isaaclab.sh --install  # or "./isaaclab.sh -i"  
```  
You can also install a specific RL library individually:  
```bash
./isaaclab.sh --install rl_games  # or "rsl_rl, sb3, skrl, robomimic"  
```  

**Verify Isaac Lab installation**  
Navigate to the cloned Isaac Lab directory.  

**Option 1: Launch via shell script**  
```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py  
```  

**Option 2: Launch via Python**  
```bash
python scripts/tutorials/00_sim/create_empty.py  
```  

:::note
The above commands should launch the simulator and display a window with a black viewport, as shown below. You can exit the script by pressing **Ctrl+C** in the terminal. On Windows, use **Ctrl+Break** or **Ctrl+fn+B** in the Command Prompt to terminate the process.
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.png" />
</div>

### Training a Simple Robot  

You can train a group of spiders using the provided example script:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/3.jpg" />
</div>


Or train a single dog:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Velocity-Rough-Anymal-C-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/2.jpg" />
</div>

### Installing Isaac Gym (Optional)  
The previous installation steps are sufficient, but if you only want to experience the reinforcement learning part with Isaac Gym, you can install Isaac Gym separately.  

**Download and extract [Isaac Gym code](https://developer.nvidia.com/isaac-gym/download)**  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/4.png" />
</div>

Extract it to your home directory, then create a Conda environment and install dependencies:  
```bash
conda create --name isaac python=3.8  
conda activate isaac  
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia  
conda install numpy=1.23  
```  

**Install Isaac Gym**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python  
pip install -e .  
```  

**Verify Isaac Gym installation**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python/examples  
python 1080_balls_of_solitude.py  
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/5.png" />
</div>


:::warning
**Possible error & solution**  
When running the Python script, you may encounter the following error:  
```plaintext
ImportError: libpython3.8.so.1.0: cannot open shared object file: No such file or directory  
```  
Fix it with this command (replace the path with your own):  
```bash
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/home/{Your Username}/anaconda3/envs/pi/lib  
```  
:::