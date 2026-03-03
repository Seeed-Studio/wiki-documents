---
description: 本文提供了在基于 Jetson 的 reComputer 设备上安装 NVIDIA 优化 PyTorch 的分步指南，针对不同的 JetPack 版本（5、6 和其他版本）进行了定制。文章解释了如何设置必要的依赖项，为较新的 PyTorch 版本安装 cuSPARSELt，以及如何验证安装。此外，还介绍了使用 Miniconda 管理多个 Python 环境，使用户能够轻松在不同的 PyTorch 版本之间切换以进行开发和部署。还包含了有用的资源和官方链接供进一步参考。
title: 为 reComputer Jetson 安装 Pytorch
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
slug: /cn/install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
本 wiki 演示了如何在您的 reComputer 上安装 NVIDIA 优化的 PyTorch，匹配您的 JetPack 版本。还介绍了如何使用虚拟环境（conda）来管理多个 PyTorch 版本以进行开发和部署。
</div>

## 前提条件

- 已安装 JetPack 的 [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- 互联网连接

<a id="Install_Torch"></a>

## 为 reComputer 安装 PyTorch

在这里，我们将介绍如何在 Jetpack 5 和 Jetpack 6 这两个常用版本中安装支持 CUDA 的 PyTorch。

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

在 reComputer 中，Jetpack 5 的常用版本是 5.1.3。在这里，我们将使用它来介绍如何安装 PyTorch。

**步骤 1.** 更新系统并安装依赖项：

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
如果您需要支持 Jetpack 5.1.3 的更新版本的 torch，请从[这里](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR)下载编译好的 wheel 文件（torch-2.2 for python3.8）。
:::

**步骤 3.** 验证安装：

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

在 reComputer 中，Jetpack 6 的常用版本是 6.2。这里，我们将使用它来介绍如何安装 PyTorch。

**步骤 1.** 更新系统并安装依赖项：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**步骤 2.** 从[这里](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network)安装 cuSPARSELt（PyTorch 24.06+ 版本需要）：

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt 是 NVIDIA 开发的高性能 CUDA 库，专门用于稀疏矩阵乘法。它主要用于加速稀疏权重下的矩阵乘法运算，这在大模型推理和稀疏神经网络中很常见。在新版本的 PyTorch（PyTorch 24.06+）中，它会自动调用 cusparselt 来提高稀疏模型的推理速度，特别是在像 Jetson 这样的嵌入式 GPU 上，可以显著提升效率。
</div>
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**步骤 3.** 根据上图所示选择的版本，您将获得以下安装命令：

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
如果您需要支持 Jetpack 6.2 的更新版本的 torch，请从[这里](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH)下载编译好的 wheel 文件（torch-2.7 for python3.10）。
:::

**步骤 5.** 验证安装：

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="其他版本">

**步骤 1.** 更新系统并安装依赖项：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

这里是 NVIDIA 官方提供的[支持 CUDA 的 PyTorch 编译轮文件](https://developer.download.nvidia.cn/compute/redist/jp/)。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**步骤 2.** 根据您的 JetPack 版本和 Python 版本下载相应的轮文件。

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

Miniconda 是 Conda 包管理器的轻量级安装程序，提供了一个最小化环境来快速创建和管理 Python 环境和包。

**步骤 1.** 安装 Miniconda：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- 按照说明操作并输入"yes"同意条款。
- 安装路径建议使用默认设置，例如 ~/miniconda3。
- 最后，提示是否自动添加到 .bashrc。建议输入"yes"。

:::
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**步骤 2.** 初始化和配置 conda：

```bash
source ~/.bashrc
# Verify if conda is functioning properly
conda --version
# Disable automatic entry into the conda base environment
conda config --set auto_activate_base false
# Close and reopen the terminal. By default, it will not enter the base environment.
```

**步骤 3.** 创建一个新环境并安装特定的 PyTorch wheel：

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**步骤 4.** 下载并安装 PyTorch wheel 文件，如[前面章节](#Install_Torch)所示。

:::info
更多详细信息，请参阅 [NVIDIA PyTorch 安装指南](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
:::

## 资源

- [NVIDIA 开发者论坛](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [NVIDIA PyTorch 安装指南](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [PyTorch for Jetson 发布说明](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

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
