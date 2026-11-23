---
description: "Install NVIDIA-optimized PyTorch on reComputer for JetPack 5 and JetPack 6, with conda environments for switching torch versions."
title: Install Pytorch for reComputer Jetson
keywords:
  - reComputer
  - Jetson
  - PyTorch
  - JetPack
  - torch
  - Deep Learning
  - AI
  - CUDA
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
createdAt: '2025-07-25'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/install_torch_on_recomputer/
---

<div style={{ textAlign: "justify" }}>
NVIDIA publishes PyTorch wheels per JetPack release, so the install differs between JetPack 5 and JetPack 6. Pick the section that matches your module, install the matching wheel, and confirm `torch.cuda.is_available()` returns True. Conda environments keep several torch versions side by side when a project pins an older one.
</div>

## Prerequisites

- [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) with JetPack installed
- Internet connection

<a id="Install_Torch"></a>

## Install PyTorch for reComputer

The two JetPack generations in most reComputer units take different wheels: JetPack 5.1.3 pairs with Python 3.8, JetPack 6.2 with Python 3.10.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

In reComputer, the commonly used version of Jetpack 5 is 5.1.3. The steps below install PyTorch for it.

**Step 1.** Update system and install dependencies:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Step 2.** Download the official PyTorch wheel (example: torch-2.1.0 for JetPack 5.1.3, Python 3.8):

```bash
wget https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

:::note
If you need a more recent version of torch that supports Jetpack 5.1.3, please download the compiled wheel file from [here](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR) (torch-2.2 for python3.8).
:::

**Step 3.** Verify installation:

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img alt="torch.__version__ and torch.cuda.is_available() output on JetPack 5.1.3 with torch 2.1.0" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

In reComputer, the commonly used version of Jetpack 6 is 6.2. The steps below install PyTorch for it.

**Step 1.** Update system and install dependencies:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Step 2.** Install cuSPARSELt from [here](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network) (required for PyTorch 24.06+):

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt is a high-performance CUDA library developed by NVIDIA specifically for sparse matrix multiplication. It is mainly used to accelerate matrix multiplication operations under sparse weights, which are commonly seen in large model inference and sparse neural networks. In the new version of PyTorch(PyTorch 24.06+), it will automatically call cusparselt to improve the inference speed of sparse models, especially on embedded GPUs like Jetson, which can significantly enhance efficiency.
</div>
:::

<div align="center">
  <img alt="cuSPARSELt download page with Linux, aarch64, Ubuntu 22.04 and native build selected" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**Step 3.** According to the version selected as shown in the above figure, you will obtain the following installation command:

```bash
wget https://developer.download.nvidia.com/compute/cusparselt/0.7.1/local_installers/cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo dpkg -i cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo cp /var/cusparselt-local-tegra-repo-ubuntu2204-0.7.1/cusparselt-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
```

**Step 4.** Download and install PyTorch (example: torch-2.5.0 for JetPack 6.2, Python 3.10):

```bash
wget https://developer.download.nvidia.cn/compute/redist/jp/v61/pytorch/torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
pip install torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
```

:::note
If you need a more recent version of torch that supports Jetpack 6.2, please download the compiled wheel file from [here](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH) (torch-2.7 for python3.10).
:::

**Step 5.** Verify installation:

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img alt="torch.cuda.is_available() returning True under Python 3.10 on the JetPack 6.2 setup" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Other Version">

**Step 1.** Update system and install dependencies:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

Here is the officially provided [compiled wheel file of PyTorch](https://developer.download.nvidia.cn/compute/redist/jp/) with CUDA support by NVIDIA.

<div align="center">
  <img alt="NVIDIA PyTorch wheel index listing builds per JetPack and Python version" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**Step 2.** Download the appropriate wheel file based on your JetPack version and Python version.

```bash
# Download the wheel file
wget https://developer.download.nvidia.cn/compute/redist/jp/v60/pytorch/torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
# Install the wheel file
pip install torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
```

**Step 3.** Verify installation:

```python
import torch
print(torch.cuda.is_available())
```

</TabItem>
</Tabs>

<!-- Code END -->

## Multiple PyTorch Versions with Conda

Miniconda is a lightweight installer for the Conda package manager, providing a minimal environment to quickly create and manage Python environments and packages.

**Step 1.** Install Miniconda:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- Follow the instructions and enter "yes" to agree to the terms.
- The installation path is recommended to use the default setting, such as ~/miniconda3.
- Finally, it prompts whether to automatically add to .bashrc. It is recommended to enter "yes".

:::
<div align="center">
  <img alt="conda init output showing /home/seeed/.bashrc modified so conda loads in new shells" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**Step 2.** Initialize and configure conda:

```bash
source ~/.bashrc
# Verify if conda is functioning properly
conda --version
# Disable automatic entry into the conda base environment
conda config --set auto_activate_base false
# Close and reopen the terminal. By default, it will not enter the base environment.
```

**Step 3.** Create a new environment and install a specific PyTorch wheel:

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**Step 4.** Download and install the PyTorch wheel file as shown in the [previous sections](#Install_Torch).

:::info
For more details, see the [NVIDIA PyTorch installation guide](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
:::

## Resources

- [NVIDIA Developer Forum](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [NVIDIA PyTorch installation guide](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [PyTorch for Jetson Release Notes](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## FAQ

**Which PyTorch wheel matches my JetPack version?**
JetPack 5.1.3 uses `torch-2.1.0a0+...cp38` (Python 3.8) and JetPack 6.2 uses `torch-2.5.0a0+...cp310` (Python 3.10). Pick the wheel whose `jp/vXX` path and `cpXX` tag match both, otherwise pip installs something that runs on CPU only.

**Do I need cuSPARSELt before installing torch?**
Only on the newer wheels. PyTorch builds from 24.06 onward call cuSPARSELt for sparse matmul, so the JetPack 6.2 path installs 0.7.1 first. The JetPack 5.1.3 example with torch 2.1.0 does not need it.

**How do I keep two torch versions on one machine?**
Use conda environments: one env per Python and torch pair, for example `conda create -n torch_2.0 python=3.8`. Activate the env before installing the wheel, and keep `auto_activate_base` off so the system Python stays clean.

**`torch.cuda.is_available()` returns False. What went wrong?**
The wheel is either the CPU build from PyPI or built for a different JetPack. Reinstall the NVIDIA wheel that matches your JetPack path and confirm with `torch.__version__`, which carries the `nv` build tag for CUDA-enabled wheels.

## Related Resources

- [Install ROS 2 Humble on reComputer](/install_ros2_humble/)
- [Pair the Gemini 2 with YOLOv11 for distance measurement](/yolov11_with_depth_camera/)
- [Efficient multi-task vision inference engine on Jetson](/deploy_visual_perception_engine_recomputer/)
- [reComputer J4012 product page](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- [PyTorch for Jetson release notes](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html)

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
