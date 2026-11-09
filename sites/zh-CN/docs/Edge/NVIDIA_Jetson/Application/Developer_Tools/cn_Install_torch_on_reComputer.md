---
description: "在 reComputer 上为 JetPack 5 和 JetPack 6 安装 NVIDIA 优化的 PyTorch，并通过 conda 环境在不同 torch 版本之间切换。"
title: 为 reComputer Jetson 安装 Pytorch
keywords:
  - reComputer
  - Jetson
  - PyTorch
  - JetPack
  - torch
  - 深度学习
  - AI
  - CUDA
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
createdAt: '2025-07-25'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/
---

<div style={{ textAlign: "justify" }}>
NVIDIA 会针对每个 JetPack 版本发布对应的 PyTorch wheel，因此 JetPack 5 和 JetPack 6 的安装方式不同。请选择与你模块匹配的章节，安装对应的 wheel，并确认 `torch.cuda.is_available()` 返回 True。通过 Conda 环境可以在同一设备上并存多个 torch 版本，方便在项目固定旧版本时切换使用。
</div>

## 前置条件

- 已安装 JetPack 的 [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- 可用的网络连接

<a id="Install_Torch"></a>

## 为 reComputer 安装 PyTorch

大多数 reComputer 设备上使用的两代 JetPack 需要不同的 wheel：JetPack 5.1.3 搭配 Python 3.8，JetPack 6.2 搭配 Python 3.10。

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

在 reComputer 中，常用的 Jetpack 5 版本是 5.1.3。下面的步骤将为该版本安装 PyTorch。

**步骤 1.** 更新系统并安装依赖：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**步骤 2.** 下载官方 PyTorch wheel（示例：适用于 JetPack 5.1.3、Python 3.8 的 torch-2.1.0）：

```bash
wget https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

:::note
如果你需要支持 Jetpack 5.1.3 的更高版本 torch，请从[这里](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR)下载编译好的 wheel 文件（适用于 python3.8 的 torch-2.2）。
:::

**步骤 3.** 验证安装：

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img alt="在 JetPack 5.1.3 上使用 torch 2.1.0 时 torch.__version__ 和 torch.cuda.is_available() 的输出" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

在 reComputer 中，常用的 Jetpack 6 版本是 6.2。下面的步骤将为该版本安装 PyTorch。

**步骤 1.** 更新系统并安装依赖：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**步骤 2.** 从[这里](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network)安装 cuSPARSELt（PyTorch 24.06+ 所必需）：

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt 是 NVIDIA 专门为稀疏矩阵乘法开发的高性能 CUDA 库，主要用于加速在稀疏权重下的矩阵乘法运算，这类场景在大模型推理和稀疏神经网络中非常常见。在新版 PyTorch（PyTorch 24.06+）中，会自动调用 cuSPARSELt 来提升稀疏模型的推理速度，尤其是在 Jetson 这类嵌入式 GPU 上，可以显著提高效率。
</div>
:::

<div align="center">
  <img alt="cuSPARSELt 下载页面中选择 Linux、aarch64、Ubuntu 22.04 和 Native 构建" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**步骤 3.** 根据上图中所选的版本，你将获得如下安装命令：

```bash
wget https://developer.download.nvidia.com/compute/cusparselt/0.7.1/local_installers/cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo dpkg -i cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo cp /var/cusparselt-local-tegra-repo-ubuntu2204-0.7.1/cusparselt-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
```

**步骤 4.** 下载并安装 PyTorch（示例：适用于 JetPack 6.2、Python 3.10 的 torch-2.5.0）：

```bash
wget https://developer.download.nvidia.cn/compute/redist/jp/v61/pytorch/torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
pip install torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
```

:::note
如果你需要支持 Jetpack 6.2 的更高版本 torch，请从[这里](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH)下载编译好的 wheel 文件（适用于 python3.10 的 torch-2.7）。
:::

**步骤 5.** 验证安装：

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img alt="在 JetPack 6.2 环境下 Python 3.10 中 torch.cuda.is_available() 返回 True 的输出" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Other Version">

**步骤 1.** 更新系统并安装依赖：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

这里是 NVIDIA 官方提供的带 CUDA 支持的 [PyTorch 编译 wheel 文件](https://developer.download.nvidia.cn/compute/redist/jp/)。

<div align="center">
  <img alt="NVIDIA PyTorch wheel 索引页面，按 JetPack 和 Python 版本列出各个构建" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**步骤 2.** 根据你的 JetPack 版本和 Python 版本下载合适的 wheel 文件。

```bash
# Download the wheel file
wget https://developer.download.nvidia.cn/compute/redist/jp/v60/pytorch/torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
# Install the wheel file
pip install torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
```

**步骤 3.** 验证安装：

```python
import torch
print(torch.cuda.is_available())
```

</TabItem>
</Tabs>

<!-- Code END -->

## 使用 Conda 管理多个 PyTorch 版本

Miniconda 是 Conda 包管理器的精简安装程序，提供一个最小化环境，用于快速创建和管理 Python 环境及其软件包。

**步骤 1.** 安装 Miniconda：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- 按照提示操作，并输入 "yes" 同意条款。
- 建议使用默认安装路径，例如 ~/miniconda3。
- 最后会提示是否自动写入 .bashrc，建议输入 "yes"。

:::
<div align="center">
  <img alt="conda init 输出显示 /home/seeed/.bashrc 已被修改，从而在新终端中自动加载 conda" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**步骤 2.** 初始化并配置 conda：

```bash
source ~/.bashrc
# Verify if conda is functioning properly
conda --version
# Disable automatic entry into the conda base environment
conda config --set auto_activate_base false
# Close and reopen the terminal. By default, it will not enter the base environment.
```

**步骤 3.** 创建新环境并安装指定的 PyTorch wheel：

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**步骤 4.** 按照[前文章节](#Install_Torch)所示下载并安装 PyTorch wheel 文件。

:::info
更多细节请参考 [NVIDIA PyTorch 安装指南](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
:::

## 资源

- [NVIDIA Developer Forum](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [NVIDIA PyTorch 安装指南](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [PyTorch for Jetson 发行说明](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## 常见问题

**哪个 PyTorch wheel 与我的 JetPack 版本匹配？**
JetPack 5.1.3 使用 `torch-2.1.0a0+...cp38`（Python 3.8），JetPack 6.2 使用 `torch-2.5.0a0+...cp310`（Python 3.10）。请选择 `jp/vXX` 路径和 `cpXX` 标签同时匹配的 wheel，否则 pip 会安装只能在 CPU 上运行的构建。

**在安装 torch 之前一定要装 cuSPARSELt 吗？**
只对较新的 wheel 必须。自 24.06 之后的 PyTorch 构建会调用 cuSPARSELt 进行稀疏矩阵乘法，因此 JetPack 6.2 的流程会先安装 0.7.1。JetPack 5.1.3 搭配 torch 2.1.0 的示例则不需要。

**如何在一台机器上保留两个 torch 版本？**
使用 conda 环境：每个 Python 与 torch 版本对应一个环境，例如 `conda create -n torch_2.0 python=3.8`。在安装 wheel 之前先激活对应环境，并保持关闭 `auto_activate_base`，这样系统自带的 Python 就能保持干净。

**`torch.cuda.is_available()` 返回 False，出了什么问题？**
要么安装的是来自 PyPI 的 CPU 构建，要么是为其他 JetPack 构建的 wheel。请重新安装与你 JetPack 路径匹配的 NVIDIA wheel，并通过 `torch.__version__` 进行确认，CUDA 版本的 wheel 会带有 `nv` 构建标签。

## 相关资源

- [在 reComputer 上安装 ROS 2 Humble](/cn/install_ros2_humble/)
- [将 Gemini 2 与 YOLOv11 结合实现距离测量](/cn/yolov11_with_depth_camera/)
- [在 Jetson 上部署高效多任务视觉推理引擎](/cn/deploy_visual_perception_engine_recomputer/)
- [reComputer J4012 产品页面](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- [PyTorch for Jetson 发行说明](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
