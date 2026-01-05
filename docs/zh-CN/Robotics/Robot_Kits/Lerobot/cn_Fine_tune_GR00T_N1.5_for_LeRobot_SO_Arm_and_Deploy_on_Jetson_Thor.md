---
description: 本 wiki 介绍如何开始使用 NVIDIA Jetson Thor，并提供在 Thor 上部署 AI 和机器人项目的示例工作流程。还提供了详细的分步说明和参考文档。
title: 为 LeRobot SO-101 机械臂微调 Isaac GR00T N1.5 并在 Jetson Thor 上部署

keywords:
- Thor
- Robotics
- Seeed
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor
last_update:
  date: 2025-9-11
  author: AI&Robotics Group
---

# 为 LeRobot SO-101 机械臂微调 GR00T N1.5 并在 Jetson AGX Thor 上部署

## 简介

本 wiki 解释如何为 **LeRobot SO-101 机械臂**微调 **NVIDIA Isaac GR00T N1.5** 并在 **NVIDIA Jetson Thor** 上部署。内容包括：

- **LeRobot SO-101** 和 **Jetson AGX Thor** 的硬件准备
- 在 Jetson Thor 上设置 **GR00T N1.5** 的软件环境
- 使用 **LeRobot 训练平台**：数据收集、数据集格式化和 SO-101 机械臂的微调
- 在 Jetson Thor 上部署训练好的 GR00T N1.5 策略（LeRobot + SO-101）的示例工作流程
- 故障排除技巧和常见陷阱

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/cover1.png"/>
</div>

<p></p>

**提供详细的分步说明和参考文档，帮助您从初始设置到完整部署。**

## NVIDIA Jetson Thor 开发者套件入门

### Jetson Thor 概述

**NVIDIA® Jetson AGX Thor™ 开发者套件**是物理 AI 和人形机器人的强大平台。它基于 NVIDIA Blackwell GPU 构建，包含 **128 GB 高速内存**，在 **40-130 W**（常用功耗高达 130 W）功耗范围内提供**高达 2,070 FP4 TFLOPS** 的 AI 计算能力。

您可以从 Seeed Studio 获取 Jetson AGX Thor 开发者套件：[Seeed – NVIDIA Jetson AGX Thor™ 开发者套件](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/thor-post.png"/>
</div>

包装盒中包含的硬件物品是一个 Thor 单元和一个电源适配器：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/physical.jpeg"/>
</div>

### 刷写 Thor 系统镜像

截至 **2025 年 9 月 10 日**，Thor 的最新可用系统镜像版本是 **38.2**。如果您需要为 Thor 重新刷写系统，请按照本节中的说明操作。
刷写所需物品：

- 一台具有超过 25 GB 可用磁盘空间的主机设备（支持 Ubuntu 或 Windows 操作系统）
- 一个容量至少为 16 GB 的 USB 驱动器
- 一台显示器和 DP/HDMI 显示线缆
- 一个能够提供超过 240 W 功率的电源供应环境
- 一个带 USB 接口的键盘

首先，从 NVIDIA 官方网站下载 Thor 的 ISO 格式系统镜像。点击[这里](https://developer.nvidia.com/embedded/jetpack/downloads)访问下载页面：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/38.2-iso.png"/>
</div>

在主机上安装 Balena Etcher。要下载安装程序，点击[这里](https://etcher.balena.io/#:~:text=DOWNLOAD-,Download%20Etcher,-ASSET)并根据您的主机操作系统选择合适的版本：
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/balena.jpg"/>
</div>

下载 ISO 镜像文件并成功安装 **Balena Etcher** 后，将 USB 驱动器插入主机。然后，启动 **Balena Etcher** 创建用于刷写 Thor 的可启动 USB 驱动器：
:::danger
此过程将格式化 USB 驱动器。请确保事先备份任何重要数据。
:::

从本地存储中选择下载的 ISO 镜像文件，然后选择目标设备——即您的 USB 驱动器。
<mark>请务必仔细验证目标设备名称和挂载目录！</mark> 点击 `Flash!` 并等待过程完成。完成后，用于将系统刷写到 Thor 的 USB 驱动器就准备好了：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/step1.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/target.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-U.png" width="300"/>
</div>

<p></p>

接下来，将准备好的 USB 驱动器、键盘、显示线缆（DP/HDMI）和电源（Type-C）插入 Thor 板以开始刷写过程。
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/flash-insert.jpg"/>
</div>

<p></p>

打开 Thor 电源并进入启动界面。选择 `Boot Manager`，然后选择插入 Thor 的 USB 驱动器（根据您的 USB 驱动器名称）。按 Esc 返回上一个菜单，然后选择 `Continue`：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/BootM.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/selectU.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/continue.png" width="300"/>
</div>

<p></p>

经过短暂的黑屏后，将出现以下界面。选择 `Jetson Thor options` 并按 Enter。然后，选择选项
`Flash Jetson AGX Thor Developer Kit on NVMe 0.2.0-r38.2` 将系统镜像刷写到 Thor 的 NVMe 固态硬盘：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

屏幕上将显示大量日志信息。等待大约 **15 分钟**。此阶段完成后，设备将自动重启并进入下一个界面。等待 **Update Progress** 进度条达到 100%，这表示刷写过程已成功完成：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

刷写完成后，您可以继续进行初始系统配置：
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/ubuntu24.png"/>
</div>

:::warning
此系统镜像不包含 CUDA、TensorRT 或 JetPack 的其他 SDK 组件。
:::

## Thor 上的基本开发环境设置

本节提供如何在 Thor 上安装常用软件依赖项以用于开发目的的示例。这些依赖项旨在促进后续开发。

请注意，列出的依赖项**仅供参考**——请根据各自的项目要求安装其他软件包。

### 安装基本开发依赖项

**JetPack SDK 安装**
<p></p>
打开终端并运行以下命令。稍等片刻后，CUDA、TensorRT 和其他 SDK 组件将被安装：
```bash
sudo apt update
sudo apt install nvidia-jetpack
```

**浏览器安装**

Firefox 已经过测试并验证可在 Ubuntu 24.04 上稳定运行：

```bash
sudo apt update
sudo apt install firefox
```

**Jtop 安装**

要安装 jtop，请参考以下说明。

```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip

sudo pip3 install -U pip
sudo pip3 install jetson-stats
```

**Miniconda 安装**

Miniconda 用于隔离开发环境。要安装 miniconda，请参考以下说明：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
conda --version
```

**安装 GPU 版本的 PyTorch**

在 Thor 上从源代码编译 GPU 版本的 PyTorch 可能会导致兼容性问题。为了方便起见，我们提供了一个预编译的 `.whl` 文件，帮助开发者在 Thor 上快速设置支持 PyTorch 的开发环境。

这里提供了一个预编译的 wheel 文件，用于在 Thor 上安装 PyTorch 2.9。此文件是在 `Python 3.10 + CUDA 13` 环境中编译的。
点击 [**Python 3.10 + CUDA 13 pytorch2.9**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVe_c8F4DR9CluC049HCYoMBP3UXta1kqLEDTvkcYU6s-A?e=vrAjhN) 下载 `.whl` 文件。
点击 [**Python 3.10 + CUDA 13 torchvision0.24**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESDkmxLfCW1MkI8YBfrdWVAB4u3OPvnb4rOhlvw4QvoS_Q?e=YJE0Pr) 下载 `.whl` 文件。
点击 [**Python 3.10 + CUDA 13 torchvision0.23**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQYGDJxMk1ZAgJHgEMZIfg8Blcrs2owxx3ZM603WgBXhhA?e=MdWMI9) 下载 `.whl` 文件。


其他 <mark>Python **3.12** + CUDA 13</mark> 为 thor 预编译的依赖项 `.whl` 文件可以在这里找到：
[**https://pypi.jetson-ai-lab.io/sbsa/cu130**](https://pypi.jetson-ai-lab.io/sbsa/cu130)。

如果预期的 wheel 文件不可用，开发者需要自己构建所需的依赖项来完成开发环境的设置。

### 安装其他依赖项

本文档提供了一个参考 Docker 镜像，帮助开发者快速适应 Jetson AGX Thor 开发环境。
<mark>此镜像仅供参考，开发者可以根据具体需求自由选择是否使用。</mark>

:::note
由于镜像大小超过 40 GB，从服务器下载相对较慢。
:::

此 Docker 镜像可以稳定运行 GR00T N1.5 推理。镜像中 `pip list` 命令的输出如下：

<details>
<summary> pip.list </summary>

```bash
Package                   Version           Location         Installer                              Editable project location
------------------------- ----------------- ---------------- -------------------------------------- -------------------------
absl-py                   2.3.1                              /opt/venv/lib/python3.12/site-packages pip
accelerate                1.2.1                              /opt/venv/lib/python3.12/site-packages pip
aiohappyeyeballs          2.6.1                              /opt/venv/lib/python3.12/site-packages pip
aiohttp                   3.12.15                            /opt/venv/lib/python3.12/site-packages pip
aiosignal                 1.4.0                              /opt/venv/lib/python3.12/site-packages pip
albucore                  0.0.17                             /opt/venv/lib/python3.12/site-packages pip
albumentations            1.4.18                             /opt/venv/lib/python3.12/site-packages pip
annotated-types           0.7.0                              /opt/venv/lib/python3.12/site-packages pip
antlr4-python3-runtime    4.9.3                              /opt/venv/lib/python3.12/site-packages pip
anyio                     4.10.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi               25.1.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi-bindings      25.1.0                             /opt/venv/lib/python3.12/site-packages pip
arrow                     1.3.0                              /opt/venv/lib/python3.12/site-packages pip
asttokens                 3.0.0                              /opt/venv/lib/python3.12/site-packages pip
astunparse                1.6.3                              /opt/venv/lib/python3.12/site-packages pip
async-lru                 2.0.5                              /opt/venv/lib/python3.12/site-packages pip
attrs                     23.2.0                             /usr/lib/python3/dist-packages         debian
av                        12.3.0                             /opt/venv/lib/python3.12/site-packages pip
babel                     2.17.0                             /opt/venv/lib/python3.12/site-packages pip
beautifulsoup4            4.13.5                             /opt/venv/lib/python3.12/site-packages pip
bleach                    6.2.0                              /opt/venv/lib/python3.12/site-packages pip
blessings                 1.7                                /opt/venv/lib/python3.12/site-packages pip
blinker                   1.9.0                              /opt/venv/lib/python3.12/site-packages pip
certifi                   2025.8.3                           /opt/venv/lib/python3.12/site-packages pip
cffi                      2.0.0                              /opt/venv/lib/python3.12/site-packages pip
charset-normalizer        3.4.3                              /opt/venv/lib/python3.12/site-packages pip
click                     8.2.1                              /opt/venv/lib/python3.12/site-packages pip
cloudpickle               3.1.1                              /opt/venv/lib/python3.12/site-packages pip
cmake                     3.31.6                             /opt/venv/lib/python3.12/site-packages pip
comm                      0.2.3                              /opt/venv/lib/python3.12/site-packages pip
contourpy                 1.3.3                              /opt/venv/lib/python3.12/site-packages pip
cramjam                   2.11.0                             /opt/venv/lib/python3.12/site-packages pip
cryptography              41.0.7                             /usr/lib/python3/dist-packages         debian
cuda-bindings             13.0.0                             /opt/venv/lib/python3.12/site-packages pip
cuda-core                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
cuda-pathfinder           1.2.2                              /opt/venv/lib/python3.12/site-packages pip
cycler                    0.12.1                             /opt/venv/lib/python3.12/site-packages pip
Cython                    3.1.3                              /opt/venv/lib/python3.12/site-packages pip
datasets                  4.0.0                              /opt/venv/lib/python3.12/site-packages pip
dbus-python               1.3.2                              /usr/lib/python3/dist-packages
debugpy                   1.8.16                             /opt/venv/lib/python3.12/site-packages pip
decorator                 5.2.1                              /opt/venv/lib/python3.12/site-packages pip
decord                    0.6.0                              /opt/venv/lib/python3.12/site-packages pip
deepdiff                  8.6.1                              /opt/venv/lib/python3.12/site-packages pip
defusedxml                0.7.1                              /opt/venv/lib/python3.12/site-packages pip
devscripts                2.23.7                             /usr/lib/python3/dist-packages
diffusers                 0.36.0.dev0                        /opt/venv/lib/python3.12/site-packages pip
dill                      0.3.8                              /opt/venv/lib/python3.12/site-packages pip
distro                    1.9.0                              /usr/lib/python3/dist-packages         debian
dm-tree                   0.1.8                              /opt/venv/lib/python3.12/site-packages pip
docker-pycreds            0.4.0                              /opt/venv/lib/python3.12/site-packages pip
docstring_parser          0.17.0                             /opt/venv/lib/python3.12/site-packages pip
docutils                  0.22                               /opt/venv/lib/python3.12/site-packages pip
draccus                   0.11.5                             /opt/venv/lib/python3.12/site-packages pip
einops                    0.8.1                              /opt/venv/lib/python3.12/site-packages pip
eval_type_backport        0.2.2                              /opt/venv/lib/python3.12/site-packages pip
evdev                     1.9.2                              /opt/venv/lib/python3.12/site-packages pip
executing                 2.2.1                              /opt/venv/lib/python3.12/site-packages pip
Farama-Notifications      0.0.4                              /opt/venv/lib/python3.12/site-packages pip
fastjsonschema            2.21.2                             /opt/venv/lib/python3.12/site-packages pip
fastparquet               2024.11.0                          /opt/venv/lib/python3.12/site-packages pip
feetech-servo-sdk         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
filelock                  3.19.1                             /opt/venv/lib/python3.12/site-packages pip
flash_attn                2.8.4                              /opt/venv/lib/python3.12/site-packages pip
Flask                     3.1.2                              /opt/venv/lib/python3.12/site-packages pip
flatbuffers               25.2.10                            /opt/venv/lib/python3.12/site-packages pip
fonttools                 4.59.2                             /opt/venv/lib/python3.12/site-packages pip
fqdn                      1.5.1                              /opt/venv/lib/python3.12/site-packages pip
frozenlist                1.7.0                              /opt/venv/lib/python3.12/site-packages pip
fsspec                    2025.3.0                           /opt/venv/lib/python3.12/site-packages pip
gast                      0.6.0                              /opt/venv/lib/python3.12/site-packages pip
gitdb                     4.0.12                             /opt/venv/lib/python3.12/site-packages pip
GitPython                 3.1.45                             /opt/venv/lib/python3.12/site-packages pip
google-pasta              0.2.0                              /opt/venv/lib/python3.12/site-packages pip
grpcio                    1.74.0                             /opt/venv/lib/python3.12/site-packages pip
gymnasium                 1.0.0                              /opt/venv/lib/python3.12/site-packages pip
h11                       0.16.0                             /opt/venv/lib/python3.12/site-packages pip
h5py                      3.12.1                             /opt/venv/lib/python3.12/site-packages pip
hf-xet                    1.1.9                              /opt/venv/lib/python3.12/site-packages pip
httpcore                  1.0.9                              /opt/venv/lib/python3.12/site-packages pip
httplib2                  0.20.4                             /usr/lib/python3/dist-packages
httpx                     0.28.1                             /opt/venv/lib/python3.12/site-packages pip
huggingface-hub           0.34.4                             /opt/venv/lib/python3.12/site-packages pip
hydra-core                1.3.2                              /opt/venv/lib/python3.12/site-packages pip
id                        1.5.0                              /opt/venv/lib/python3.12/site-packages pip
idna                      3.10                               /opt/venv/lib/python3.12/site-packages pip
imageio                   2.34.2                             /opt/venv/lib/python3.12/site-packages pip
importlib_metadata        8.7.0                              /opt/venv/lib/python3.12/site-packages pip
iniconfig                 2.1.0                              /opt/venv/lib/python3.12/site-packages pip
inquirerpy                0.3.4                              /opt/venv/lib/python3.12/site-packages pip
iopath                    0.1.9                              /opt/venv/lib/python3.12/site-packages pip
ipykernel                 6.30.1                             /opt/venv/lib/python3.12/site-packages pip
ipython                   9.5.0                              /opt/venv/lib/python3.12/site-packages pip
ipython_pygments_lexers   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
ipywidgets                8.1.7                              /opt/venv/lib/python3.12/site-packages pip
isoduration               20.11.0                            /opt/venv/lib/python3.12/site-packages pip
itsdangerous              2.2.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.classes            3.4.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.context            6.0.1                              /opt/venv/lib/python3.12/site-packages pip
jaraco.functools          4.3.0                              /opt/venv/lib/python3.12/site-packages pip
jedi                      0.19.2                             /opt/venv/lib/python3.12/site-packages pip
jeepney                   0.9.0                              /opt/venv/lib/python3.12/site-packages pip
Jinja2                    3.1.6                              /opt/venv/lib/python3.12/site-packages pip
json5                     0.12.1                             /opt/venv/lib/python3.12/site-packages pip
jsonlines                 4.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonpointer               3.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonschema                4.25.1                             /opt/venv/lib/python3.12/site-packages pip
jsonschema-specifications 2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
jupyter                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter_client            8.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter-console           6.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter_core              5.8.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter-events            0.12.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter-lsp               2.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyter_server            2.17.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter_server_terminals  0.5.3                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab                4.4.7                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_myst           2.4.2                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_pygments       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_server         2.27.3                             /opt/venv/lib/python3.12/site-packages pip
jupyterlab_widgets        3.0.15                             /opt/venv/lib/python3.12/site-packages pip
keras                     3.11.3                             /opt/venv/lib/python3.12/site-packages pip
keyring                   25.6.0                             /opt/venv/lib/python3.12/site-packages pip
kiwisolver                1.4.9                              /opt/venv/lib/python3.12/site-packages pip
kornia                    0.7.4                              /opt/venv/lib/python3.12/site-packages pip
kornia_rs                 0.1.9                              /opt/venv/lib/python3.12/site-packages pip
lark                      1.2.2                              /opt/venv/lib/python3.12/site-packages pip
launchpadlib              1.11.0                             /usr/lib/python3/dist-packages
lazr.restfulclient        0.14.6                             /usr/lib/python3/dist-packages
lazr.uri                  1.0.6                              /usr/lib/python3/dist-packages
lazy_loader               0.4                                /opt/venv/lib/python3.12/site-packages pip
lerobot                   0.3.4             /opt/lerobot     /opt/venv/lib/python3.12/site-packages pip
libclang                  18.1.1                             /opt/venv/lib/python3.12/site-packages pip
llvmlite                  0.44.0                             /opt/venv/lib/python3.12/site-packages pip
lockfile                  0.12.2                             /opt/venv/lib/python3.12/site-packages pip
Mako                      1.3.10                             /opt/venv/lib/python3.12/site-packages pip
Markdown                  3.9                                /opt/venv/lib/python3.12/site-packages pip
markdown-it-py            4.0.0                              /opt/venv/lib/python3.12/site-packages pip
MarkupSafe                3.0.2                              /opt/venv/lib/python3.12/site-packages pip
matplotlib                3.10.0                             /opt/venv/lib/python3.12/site-packages pip
matplotlib-inline         0.1.7                              /opt/venv/lib/python3.12/site-packages pip
mdurl                     0.1.2                              /opt/venv/lib/python3.12/site-packages pip
mergedeep                 1.3.4                              /opt/venv/lib/python3.12/site-packages pip
mistune                   3.1.4                              /opt/venv/lib/python3.12/site-packages pip
ml_dtypes                 0.5.3                              /opt/venv/lib/python3.12/site-packages pip
more-itertools            10.8.0                             /opt/venv/lib/python3.12/site-packages pip
mpmath                    1.3.0                              /opt/venv/lib/python3.12/site-packages pip
msgpack                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
multidict                 6.6.4                              /opt/venv/lib/python3.12/site-packages pip
multiprocess              0.70.16                            /opt/venv/lib/python3.12/site-packages pip
mypy_extensions           1.1.0                              /opt/venv/lib/python3.12/site-packages pip
namex                     0.1.0                              /opt/venv/lib/python3.12/site-packages pip
nbclient                  0.10.2                             /opt/venv/lib/python3.12/site-packages pip
nbconvert                 7.16.6                             /opt/venv/lib/python3.12/site-packages pip
nbformat                  5.10.4                             /opt/venv/lib/python3.12/site-packages pip
nest-asyncio              1.6.0                              /opt/venv/lib/python3.12/site-packages pip
networkx                  3.5                                /opt/venv/lib/python3.12/site-packages pip
nh3                       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
ninja                     1.13.0                             /opt/venv/lib/python3.12/site-packages pip
notebook                  7.4.5                              /opt/venv/lib/python3.12/site-packages pip
notebook_shim             0.2.4                              /opt/venv/lib/python3.12/site-packages pip
numba                     0.61.2                             /opt/venv/lib/python3.12/site-packages pip
numpy                     2.3.3                              /opt/venv/lib/python3.12/site-packages pip
numpydantic               1.6.7                              /opt/venv/lib/python3.12/site-packages pip
nvtx                      0.2.13                             /opt/venv/lib/python3.12/site-packages pip
oauthlib                  3.2.2                              /usr/lib/python3/dist-packages
omegaconf                 2.3.0                              /opt/venv/lib/python3.12/site-packages pip
onnx                      1.17.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-contrib-python     4.13.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-python             4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opencv-python-headless    4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opt_einsum                3.4.0                              /opt/venv/lib/python3.12/site-packages pip
optimum                   1.27.0                             /opt/venv/lib/python3.12/site-packages pip
optree                    0.17.0                             /opt/venv/lib/python3.12/site-packages pip
orderly-set               5.5.0                              /opt/venv/lib/python3.12/site-packages pip
packaging                 25.0                               /opt/venv/lib/python3.12/site-packages pip
pandas                    2.2.3                              /opt/venv/lib/python3.12/site-packages pip
pandocfilters             1.5.1                              /opt/venv/lib/python3.12/site-packages pip
parso                     0.8.5                              /opt/venv/lib/python3.12/site-packages pip
peft                      0.17.0                             /opt/venv/lib/python3.12/site-packages pip
pettingzoo                1.25.0                             /opt/venv/lib/python3.12/site-packages pip
pexpect                   4.9.0                              /opt/venv/lib/python3.12/site-packages pip
pfzy                      0.3.4                              /opt/venv/lib/python3.12/site-packages pip
pid                       3.0.4                              /opt/venv/lib/python3.12/site-packages pip
pillow                    11.3.0                             /opt/venv/lib/python3.12/site-packages pip
pip                       25.2                               /opt/venv/lib/python3.12/site-packages pip
pkginfo                   1.12.1.2                           /opt/venv/lib/python3.12/site-packages pip
platformdirs              4.4.0                              /opt/venv/lib/python3.12/site-packages pip
pluggy                    1.6.0                              /opt/venv/lib/python3.12/site-packages pip
portalocker               3.2.0                              /opt/venv/lib/python3.12/site-packages pip
prometheus_client         0.22.1                             /opt/venv/lib/python3.12/site-packages pip
prompt_toolkit            3.0.52                             /opt/venv/lib/python3.12/site-packages pip
propcache                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
protobuf                  6.32.0                             /opt/venv/lib/python3.12/site-packages pip
psutil                    7.0.0                              /opt/venv/lib/python3.12/site-packages pip
ptyprocess                0.7.0                              /opt/venv/lib/python3.12/site-packages pip
pure_eval                 0.2.3                              /opt/venv/lib/python3.12/site-packages pip
pyarrow                   21.0.0                             /opt/venv/lib/python3.12/site-packages pip
pycparser                 2.23                               /opt/venv/lib/python3.12/site-packages pip
pycuda                    2025.1.1                           /opt/venv/lib/python3.12/site-packages pip
pydantic                  2.10.6                             /opt/venv/lib/python3.12/site-packages pip
pydantic_core             2.27.2                             /opt/venv/lib/python3.12/site-packages pip
Pygments                  2.19.2                             /opt/venv/lib/python3.12/site-packages pip
PyGObject                 3.48.2                             /usr/lib/python3/dist-packages
PyJWT                     2.7.0                              /usr/lib/python3/dist-packages         debian
pynput                    1.8.1                              /opt/venv/lib/python3.12/site-packages pip
pyparsing                 3.1.1                              /usr/lib/python3/dist-packages         debian
pyrsistent                0.20.0                             /usr/lib/python3/dist-packages
pyserial                  3.5                                /opt/venv/lib/python3.12/site-packages pip
pytest                    8.4.2                              /opt/venv/lib/python3.12/site-packages pip
python-apt                2.7.7+ubuntu5                      /usr/lib/python3/dist-packages
python-daemon             3.1.2                              /opt/venv/lib/python3.12/site-packages pip
python-dateutil           2.9.0.post0                        /opt/venv/lib/python3.12/site-packages pip
python-json-logger        3.3.0                              /opt/venv/lib/python3.12/site-packages pip
python-xlib               0.33                               /opt/venv/lib/python3.12/site-packages pip
pytools                   2025.2.4                           /opt/venv/lib/python3.12/site-packages pip
pytorch3d                 0.7.8                              /opt/venv/lib/python3.12/site-packages pip
pytz                      2025.2                             /opt/venv/lib/python3.12/site-packages pip
PyYAML                    6.0.2                              /opt/venv/lib/python3.12/site-packages pip
pyyaml-include            1.4.1                              /opt/venv/lib/python3.12/site-packages pip
pyzmq                     27.1.0                             /opt/venv/lib/python3.12/site-packages pip
ray                       2.40.0                             /opt/venv/lib/python3.12/site-packages pip
readme_renderer           44.0                               /opt/venv/lib/python3.12/site-packages pip
referencing               0.36.2                             /opt/venv/lib/python3.12/site-packages pip
regex                     2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
requests                  2.32.3                             /opt/venv/lib/python3.12/site-packages pip
requests-toolbelt         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
rerun-sdk                 0.24.1                             /opt/venv/lib/python3.12/site-packages pip
rfc3339-validator         0.1.4                              /opt/venv/lib/python3.12/site-packages pip
rfc3986                   2.0.0                              /opt/venv/lib/python3.12/site-packages pip
rfc3986-validator         0.1.1                              /opt/venv/lib/python3.12/site-packages pip
rfc3987-syntax            1.1.0                              /opt/venv/lib/python3.12/site-packages pip
rich                      14.1.0                             /opt/venv/lib/python3.12/site-packages pip
rpds-py                   0.27.1                             /opt/venv/lib/python3.12/site-packages pip
safetensors               0.6.2                              /opt/venv/lib/python3.12/site-packages pip
scikit-build              0.18.1                             /opt/venv/lib/python3.12/site-packages pip
scikit-image              0.25.2                             /opt/venv/lib/python3.12/site-packages pip
scipy                     1.16.1                             /opt/venv/lib/python3.12/site-packages pip
SecretStorage             3.4.0                              /opt/venv/lib/python3.12/site-packages pip
semantic-version          2.10.0                             /opt/venv/lib/python3.12/site-packages pip
Send2Trash                1.8.3                              /opt/venv/lib/python3.12/site-packages pip
sentencepiece             0.2.1                              /opt/venv/lib/python3.12/site-packages pip
sentry-sdk                2.37.1                             /opt/venv/lib/python3.12/site-packages pip
service                   0.6.0                              /opt/venv/lib/python3.12/site-packages pip
setproctitle              1.3.7                              /opt/venv/lib/python3.12/site-packages pip
setuptools                80.9.0                             /opt/venv/lib/python3.12/site-packages pip
setuptools-rust           1.12.0                             /opt/venv/lib/python3.12/site-packages pip
shtab                     1.7.2                              /opt/venv/lib/python3.12/site-packages pip
siphash24                 1.8                                /opt/venv/lib/python3.12/site-packages pip
six                       1.16.0                             /usr/lib/python3/dist-packages
smmap                     5.0.2                              /opt/venv/lib/python3.12/site-packages pip
sniffio                   1.3.1                              /opt/venv/lib/python3.12/site-packages pip
soupsieve                 2.8                                /opt/venv/lib/python3.12/site-packages pip
stack-data                0.6.3                              /opt/venv/lib/python3.12/site-packages pip
sympy                     1.14.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard               2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard-data-server   0.7.2                              /opt/venv/lib/python3.12/site-packages pip
tensorflow                2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorrt                  10.13.2.6                          /opt/venv/lib/python3.12/site-packages pip
termcolor                 3.1.0                              /opt/venv/lib/python3.12/site-packages pip
terminado                 0.18.1                             /opt/venv/lib/python3.12/site-packages pip
tf_keras                  2.20.1                             /opt/venv/lib/python3.12/site-packages pip
tianshou                  0.5.1                              /opt/venv/lib/python3.12/site-packages pip
tifffile                  2025.9.9                           /opt/venv/lib/python3.12/site-packages pip
timm                      1.0.14                             /opt/venv/lib/python3.12/site-packages pip
tinycss2                  1.4.0                              /opt/venv/lib/python3.12/site-packages pip
tokenizers                0.21.4                             /opt/venv/lib/python3.12/site-packages pip
toml                      0.10.2                             /opt/venv/lib/python3.12/site-packages pip
torch                     2.9.0                              /opt/venv/lib/python3.12/site-packages pip
torchvision               0.24.0                             /opt/venv/lib/python3.12/site-packages pip
tornado                   6.5.2                              /opt/venv/lib/python3.12/site-packages pip
tqdm                      4.67.1                             /opt/venv/lib/python3.12/site-packages pip
traitlets                 5.14.3                             /opt/venv/lib/python3.12/site-packages pip
transformers              4.51.3                             /opt/venv/lib/python3.12/site-packages pip
triton                    3.5.0+gite3b8f77a                  /opt/venv/lib/python3.12/site-packages pip
twine                     6.2.0                              /opt/venv/lib/python3.12/site-packages pip
typeguard                 4.4.2                              /opt/venv/lib/python3.12/site-packages pip
types-python-dateutil     2.9.0.20250822                     /opt/venv/lib/python3.12/site-packages pip
typing_extensions         4.12.2                             /opt/venv/lib/python3.12/site-packages pip
typing-inspect            0.9.0                              /opt/venv/lib/python3.12/site-packages pip
tyro                      0.9.17                             /opt/venv/lib/python3.12/site-packages pip
tzdata                    2025.2                             /opt/venv/lib/python3.12/site-packages pip
uri-template              1.3.0                              /opt/venv/lib/python3.12/site-packages pip
urllib3                   2.5.0                              /opt/venv/lib/python3.12/site-packages pip
uv                        0.8.16                             /opt/venv/lib/python3.12/site-packages pip
wadllib                   1.3.6                              /usr/lib/python3/dist-packages
wandb                     0.18.0                             /opt/venv/lib/python3.12/site-packages pip
wcwidth                   0.2.13                             /opt/venv/lib/python3.12/site-packages pip
webcolors                 24.11.1                            /opt/venv/lib/python3.12/site-packages pip
webencodings              0.5.1                              /opt/venv/lib/python3.12/site-packages pip
websocket-client          1.8.0                              /opt/venv/lib/python3.12/site-packages pip
Werkzeug                  3.1.3                              /opt/venv/lib/python3.12/site-packages pip
wheel                     0.45.1                             /opt/venv/lib/python3.12/site-packages pip
widgetsnbextension        4.0.14                             /opt/venv/lib/python3.12/site-packages pip
wrapt                     1.17.3                             /opt/venv/lib/python3.12/site-packages pip
xxhash                    3.5.0                              /opt/venv/lib/python3.12/site-packages pip
yarl                      1.20.1                             /opt/venv/lib/python3.12/site-packages pip
zipp                      3.23.0                             /opt/venv/lib/python3.12/site-packages pip
```

</details>

该镜像可以直接从 Docker Hub 拉取，包含常用的依赖项，如 `PyTorch`、`TensorRT` 和 `FlashAttention`：

```bash
docker pull johnnync/isaac-gr00t:r38.2.arm64-sbsa-cu130-24.04
```

:::warning
此 Docker 镜像不支持调用 LeRobot 脚本进行 `ACT` 模型推理。如果您需要运行完整的 LeRobot 脚本套件，请使用此镜像之外的环境。
:::


要在 Thor 上运行 Docker，请参考以下命令。将 `your_docker_img:tag` 替换为您的 Docker 镜像名称和标签，或使用镜像 ID：

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  your_docker_img:tag
```



## 使用 SO-ARM 进行数据收集

有关数据收集的详细教程，请参考以下链接：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#记录数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#记录数据集)  
**此链接包含 SO-ARM 的完整教程，涵盖配置、组装、校准、数据收集、训练和推理。**

lerobot 机械臂的数据收集可以在 PC 上执行，也可以直接在 Jetson 设备上执行。

- 方法 1：使用 Jetson 收集数据
- 方法 2：使用 Ubuntu PC 收集数据

两种方法的数据收集程序基本相同。

:::warning
**Jetson 可能无法同时流式传输两个具有相同带宽要求的 USB 摄像头。如果您连接两个 USB 摄像头，它们必须连接到不同的 USB 集线器芯片！**
:::

要在 Thor 上同时流式传输两个 USB 摄像头，在将一个摄像头连接到 USB-A 端口后，您还需要使用**通过 USB Type-C 端口连接的外部 USB 集线器**。这确保第二个 USB 摄像头挂载到 Thor 内的不同 USB 集线器控制器。
 兼容的 USB Type-C 集线器示例如下所示：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/hub.png" height="400"/>
</div>


USB Type-C 扩展坞必须连接到 Thor 上的特定端口，以确保外设正常工作，如下所示：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" height="400"/>
</div>

### Lerobot 环境设置（可选）

Lerobot 的开发环境设置过程可以在以下链接的子章节中找到：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#安装 lerobot](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#安装 lerobot)



### 配置电机


SO-ARM 各关节上的电机需要在组装前进行配置。配置步骤可以在以下链接的子章节中找到：    
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#配置电机](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#配置电机)


### 组装

SO-ARM 主臂和从臂的安装过程可以在以下链接的子章节中找到：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#组装](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#组装)

### SO-ARM 校准


SO-ARM 完全组装后，需要进行校准。校准程序请参考以下链接的子章节：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#校准](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#校准)



:::note
**校准机械臂时，请不要连接任何 USB 摄像头，因为这可能导致端口冲突或端口分配错误。**
:::

**运行校准脚本后，手动移动机械臂的每个关节，确保其达到完整的运动范围！否则可能导致遥操作期间主臂和从臂姿态不匹配。**




### 摄像头添加

通常建议在机械臂的腕部/夹爪上安装一个摄像头，在桌面表面安装另一个摄像头，以确保对机械臂姿态的适当覆盖。
<mark>具体的安装方法取决于您的应用场景；下面显示的示例仅供参考。</mark>

详细信息请参考以下链接的子章节：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#添加摄像头](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#添加摄像头)



### 数据收集

完成摄像头安装和机械臂校准后，数据集收集程序可以在以下链接的子章节中找到：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#记录数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#记录数据集)



### 可视化收集的数据


要可视化在 SO-ARM 上收集的数据，请参考以下链接的子章节：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#可视化数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#可视化数据集)



### 策略训练

基于收集的数据，训练策略的程序可以在以下链接的子章节中找到：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#训练策略](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#训练策略)



:::tip
在以下章节中，我们将介绍基于云的训练平台并演示基本用法。您可以选择在远程服务器上更高效地完成训练。
:::

:::note
如果您选择在云端训练策略，请确保您的数据集提前上传到云服务器，或从 Hugging Face Hub 下载。但是，由于直接从 Hugging Face Hub 下载时可能出现网络问题，强烈建议手动将数据集上传到您的云服务器。
:::

## 使用 NVIDIA Brev 训练策略

NVIDIA Brev 提供对流行云平台上 NVIDIA GPU 实例的简化访问、自动环境设置和灵活的部署选项，使开发者能够立即开始实验。

平台访问 URL：
[https://login.brev.nvidia.com/signin](https://login.brev.nvidia.com/signin)

您需要注册一个账户来使用该平台。本节介绍训练平台的基本用法。

### 启用基于云的训练平台

**分步说明**

- 创建云服务器实例 - 步骤 1

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train0.png" width="600"/>
</div>

- 创建云服务器实例 - 步骤 2

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train1.png" width="600"/>
</div>

- 创建云服务器实例 - 步骤 3

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train2.png" width="600"/>
</div>

**启动基于 Web 的 Jupyter Notebook**：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote0.png" width="600"/>
</div>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote1.png" width="600"/>
</div>

### 训练模型并从服务器导出

**开发者可以直接在 notebook 终端中训练模型。以下是训练 GR00T N1.5 并随后从服务器导出的示例。**

在服务器上安装 Conda：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
source ~/miniconda3/bin/activate
conda init --all
```

克隆 Isaac-GR00T 仓库： 
```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
```

创建 gr00t 环境：
```bash
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4 
```

:::warning
如果您在云平台上训练或微调 GR00T，必须使用 Ampere 或更新架构的 GPU（例如 RTX A6000 或 GeForce RTX 4090）。**V100（Volta）不支持** GR00T 训练或微调。
:::

有关微调模型的更多详细信息，请参考：
[https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File)


微调 GR00T N1.5 模型：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

:::note
默认的微调设置需要约 25G 显存。如果您没有那么多显存，请尝试在 gr00t_finetune.py 脚本中添加 `--no-tune_diffusion_model` 标志。
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train4.png" width="600"/>
</div>

:::note
如果您想在服务器上训练或微调 Gr00t，可以参考此[链接](https://github.com/NVIDIA/Isaac-GR00T)。
:::

**训练完成后，您可能希望将模型下载到本地机器。但 Jupyter Notebook 侧边栏不支持直接导航到模型训练文件夹。**

解决方案是：首先将目标文件夹压缩为 `.zip` 或 `.tar.gz` 归档文件，然后通过 notebook 界面下载归档文件。参考下图示例。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train5.png" width="600"/>
</div>

## 在 Thor 上进行 Isaac GR00T N1.5 推理

Jetson AGX Thor 作为强大的边缘计算和部署平台，提供了足够的资源来支持大规模模型推理。在本节中，基于之前介绍的内容，我们演示如何在 Thor 上运行 GR00T N1.5 的推理。

GR00T N1.5 是 NVIDIA Research 在机器人学习领域发布的开源基线系统。它旨在为具身 AI 训练和推理提供统一框架，特别专注于模仿学习和大规模模型驱动的策略学习。

### 准备工作

GR00T N1.5 的预训练模型可通过 **Hugging Faces** 获取。您可以从以下链接下载：

[https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/gr00tD.png" width="600"/>
</div>

GR00T 推理所需的所有依赖项都已在专用 Docker 镜像中预配置。

使用以下命令启动容器，将 `<image_name>:<tag>` 替换为您使用的镜像：

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  <image_name>:<tag>
```

Git 克隆 Gr00t 的源代码并安装：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

Gr00t 完全兼容使用 lerobot 框架收集的数据集。请参考前面的"**数据收集**"部分来准备您的数据集，以便微调 Gr00t 模型。

### 模型微调（可选）

:::warning
如果您已经在 NVIDIA Brev 中微调了 GR00T N1.5，可以跳过 Thor 上的这一步。
:::

**微调过程可以在提供的云训练平台上执行，也可以直接在 Thor 的 Docker 容器内执行**。

如果您尚未下载任何预训练的 GR00T 模型且不打算使用自定义版本，可以使用以下命令基于 Hugging Face 权重进行微调：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

此脚本将自动从 Hugging Face 下载预训练的 GR00T 模型并开始微调过程。

如果您希望使用本地存储的预训练 GR00T 模型，请按如下方式修改命令：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --base-model-path ./pretrained/GR00T-N1.5-3
```

`--dataset-path` 是从 SO-ARM 收集数据的文件路径。

:::note
默认微调设置需要约 25G 显存。如果您没有那么多显存，请尝试在 gr00t_finetune.py 脚本中添加 `--no-tune_diffusion_model` 标志。
:::

### 使用 GR00T N1.5 运行推理

为了获得最佳性能，建议在部署微调的 GR00T 模型时尽可能复制数据收集期间使用的真实世界设置。这是因为模型的泛化能力有限。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy.jpg" width="400"/>
</div>

在 Docker 容器内，打开终端并启动 GR00T 推理服务：

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

成功启动后，终端应显示类似以下的日志：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy1.png" width="600"/>
</div>

打开另一个终端，使用以下命令从不同的 shell 进入同一个容器：

```bash
sudo docker exec -it <container id> /bin/bahs
```

然后，在第二个 shell 中启动推理客户端：

```bash
  python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

将 `index_or_path` 替换为您的摄像头索引号；您可以通过运行 `ls /dev/video*` 来找到它。

当客户端进程成功启动时，应出现以下输出：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy2.png" width="600"/>
</div>

:::tip
在首次运行客户端进程时，您必须校准机械臂的舵机。校准过程与前面描述的相同。

确保每个关节都移动到其完整的运动范围，以确保正确的遥操作和推理行为。
:::

一旦一切设置完成，GR00T N1.5 就可以成功部署在 Jetson AGX Thor 上。系统和硬件环境现已验证支持完整推理：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/123.gif" width="600"/>
</div>

## 常见问题

**Q1：Brev CLI 工具在云训练平台上不工作？**  
这通常是由于网络问题。
您可以在本地 Ubuntu 主机上安装并登录 Brev CLI，然后尝试从本地终端使用 SSH 连接到您的云实例。

**Q2：如何将数据上传到训练平台？**  
使用以下命令：`scp <local-file-path> <brev-instance-name>:<remote-file-path>`，例如 `scp -r ./record_2_cameras/ gr00t-trainer:/home/ubuntu/Datasets`


**Q3：Thor 的屏幕在安装开始后变黑**  
如果您在之前使用过或设置过的 Jetson AGX Thor 开发套件上使用 Jetson 安装 USB 棒，您需要在 `UEFI setup menu` 中启用 SoC Display Hand-Off。
实际上，在此期间刷写在后台继续进行；过一段时间后，Ubuntu 桌面将出现。

**Q4：我在显示器上没有视频输出（通过 KVM 连接）**  
已知某些 KVM 切换器/设备无法很好地处理来自 Jetson AGX Thor 开发套件的视频输出。请将显示器直接连接到 Jetson AGX Thor 开发套件。

**Q5：刷写 Thor 后，HDMI 在后续启动时有时显示无信号**  
一个已被证明有效的解决方法是切换到 DisplayPort (DP) 连接器进行显示输出。

**Q6：Thor 镜像刷写期间未检测到键盘输入**  
我们建议在刷写期间使用有线键盘。无线键盘在 Thor 刷写过程中可能兼容性有限。

**Q7：GR00T 的云微调报告"GPU 不支持"**  
不要使用比 `Ampere 架构` 更旧的 GPU 进行 GR00T 的云微调。（例如，RTX A6000 或 GeForce RTX 4090）。V100 (Volta) 不支持 GR00T 训练或微调。

**Q8：机械臂控制器板的串行设备名称未出现在 /dev 下**  
原装 Thor 系统不包含 `CH34x` 驱动程序。如果缺少，请从以下位置安装：
https://github.com/juliagoda/CH341SER

**Q9：Thor 上的 Type-C 端口无法识别外部集线器**  
要通过 Thor 的 Type-C 使用外部集线器，请将其插入最靠近 QSFP28 连接器的 Type-C 端口。（两个 Type-C 端口都提供电源，但只有指定的端口能可靠支持集线器。）
<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" height="200"/> </div>

**Q10：使用采集卡刷写时，系统后来说用户密码不正确**  
在刷写期间使用采集卡桌面时，可能会出现键盘输入错误（输入与键入的内容不匹配）。请在设置时仔细检查用户密码。

**Q11：Thor 的调试端口在哪里？**  
Thor 的 Type-C 调试端口隐藏在磁性盖下。可能会创建多个串行设备节点；使用索引最小的那个通过串行登录到 Thor。

**Q12：无法在 GR00T 镜像中运行 LeRobot 脚本来推理 ACT**  
我们不建议在 Python 3.12 环境中调用 LeRobot API 进行 `ACT` 推理。`Calibration` 和 `find port` 脚本是可以的。请注意，Ubuntu 24 本地默认使用 Python 3.12。

**Q13：如何检查 Thor 上的 GPU SM 利用率？**  
运行：
```bash
nvidia-smi dmon -s puc
```  
检查输出中的 `sm` 列。

**Q14：无法从机械臂驱动器的串行端口读取数据**  
不要在 SO-ARM 驱动板之前插入摄像头；这样做可能导致串行设备映射错误。同时确保已授予串行端口权限。

## 参考资料

- https://developer.nvidia.com/embedded/jetpack
- https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning

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
