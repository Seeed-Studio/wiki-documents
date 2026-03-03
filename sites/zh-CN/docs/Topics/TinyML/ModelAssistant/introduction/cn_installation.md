---
description: Model Assistant 安装指南
title: 安装
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Introduce_Installation
last_update:
  date: 01/11/2024
  author: LynnL4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 安装

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 运行环境依赖于 PyTorch 和来自 OpenMMLab 的各种第三方库。您可以在 [GitHub](https://github.com/Seeed-Studio/ModelAssistant) 上找到 SSCMA 代码。要开始使用，请确保您已按照[此处](https://pytorch.org/get-started/locally/)的说明在本地安装了 PyTorch，然后获取必要的 OpenMMLab 库。

- [MMCV](https://github.com/open-mmlab/mmcv): OpenMMLab 计算机视觉基础库。
- [MMClassification](https://github.com/open-mmlab/mmclassification): OpenMMLab 图像分类工具包和基准测试。除了分类任务外，它还用于提供各种骨干网络。
- [MMDetection](https://github.com/open-mmlab/mmdetection): OpenMMLab 检测工具包和基准测试。
- [MMPose](https://github.com/open-mmlab/mmpose): OpenMMLab 姿态估计工具包和基准测试。
- [MIM](https://github.com/open-mmlab/mim): MIM 为启动和安装 OpenMMLab 项目及其扩展提供统一接口，并管理 OpenMMLab 模型库。

## 前提条件

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 可在 Linux、Windows 和 macOS 上运行。**我们强烈建议您使用 [Miniconda](https://docs.conda.io/en/latest/miniconda.html) 来管理 python 包。** 请按照以下步骤准备环境。

:::tip
Miniconda 是 conda 的免费最小安装程序，您可以从 [Miniconda 官方网站](https://docs.conda.io/en/latest/miniconda.html) 下载并安装 Miniconda3。
:::

### 步骤 0 - 克隆 Git 仓库

首先，您需要在本地克隆 [SSCMA 源代码](https://github.com/Seeed-Studio/ModelAssistant)。我们使用 Git 进行管理并托管在 GitHub 上，下面提供两种不同的克隆方式（任选其一）。如果您没有安装 Git，可以参考 [Git 文档](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 在您的计算机上配置 Git。

<Tabs>
<TabItem value="HTTPS" label="HTTPS">

```sh
git clone https://github.com/Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>
<TabItem value="SSH" label="SSH">

```sh
git clone git@github.com:Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>

</Tabs>


### 步骤 1 - 创建虚拟环境

假设您已安装 conda，然后**创建**并**激活** conda 虚拟环境。

```sh
conda create --name sscma python=3.8 -y && \
conda activate sscma
```

### 步骤 2 - 安装 PyTorch

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 依赖于 PyTorch。在运行以下代码之前，请再次确认您已**激活**刚才创建的虚拟环境。

对于具有 GPU (CUDA) 的设备，我们建议安装支持 GPU 加速的依赖项。我们在 2 种不同情况下列出了您可以选择的配置选项，请根据您的硬件环境手动选择。

- 仅 CPU 平台：

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio cpuonly -c pytorch
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio
```

</TabItem>
</Tabs>


- GPU (CUDA) 平台：

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio pytorch-cuda=11.7 cudatoolkit=11.7 -c pytorch -c nvidia
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu117
```

</TabItem>
</Tabs>

:::tip
如果您的平台尚未为 NVIDIA GPU 安装 CUDA，您可以在 [NVIDIA CUDA Toolkit 存档网站](https://developer.nvidia.com/cuda-toolkit-archive) 上找到 CUDA 安装程序，我们建议在您的主机环境中使用 CUDA 11.7 或更高版本。有关在其他平台上安装 PyTorch 的信息，请在 [PyTorch 官方网站](https://pytorch.org/get-started/locally/) 上阅读更多内容。
:::

### 步骤 3 - 安装基本依赖项

**请确认您已激活虚拟环境并位于 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 源代码的主工作目录中**，然后运行以下代码完成基本依赖项的配置。

- 安装 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 依赖项

```sh
pip3 install -r requirements/base.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

### 步骤 4 - 安装额外依赖项（可选）

如果您需要执行模型转换或推理测试，还需要安装以下额外依赖项。

```sh
pip3 install -r requirements/inference.txt -r requirements/export.txt
```

如果您希望对 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 进行更改并提交给我们，我们建议您额外运行以下命令，以便在提交时检查您的代码。

```sh
pip3 install -r requirements/tests.txt
pre-commit install
```

## 其他方法

如果您已经设置了 Conda，可以在 Linux 上（在 Ubuntu 20.04~22.10 上测试过）使用 shell 脚本自动完成 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 环境的配置。

```bash
bash scripts/setup_linux.sh
```

或者您可以使用 Conda 的配置文件手动进行配置。

<Tabs>
<TabItem value="CPU" label="CPU">

```sh
conda env create -n sscma -f environment.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
<TabItem value="GPU (CUDA)" label="GPU (CUDA)">

```sh
conda env create -n sscma -f environment_cuda.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
</Tabs>


## 提醒

完成 Miniconda 的安装并使用 Conda 配置 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 后，我们创建了一个名为 `sscma` 的 Conda 虚拟环境，并在虚拟环境中安装了依赖项。对于后续的 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 相关配置和开发，请确保您在 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 虚拟环境中，您可以使用以下命令激活它。

```sh
conda activate sscma
```

如果您想重新配置或删除 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 虚拟环境，可以运行以下命令。

```sh
conda env remove -n sscma
```

## 常见问题

- 从 anaconda 默认频道安装包时连接速度很慢。

  请耐心等待并尝试一些第三方镜像频道，例如 [SJTU 镜像](https://mirror.sjtu.edu.cn/docs/anaconda)、[TUNA 镜像](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda) 等。