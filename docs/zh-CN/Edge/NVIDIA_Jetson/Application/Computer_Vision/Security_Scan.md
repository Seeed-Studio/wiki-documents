---
description: 刀具检测：基于reComputer部署在Triton推理服务器上的物体检测模型
title: 刀具检测：基于reComputer部署在Triton推理服务器上的物体检测模型
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Security_Scan
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# 刀具检测：基于reComputer部署在Triton推理服务器上的物体检测模型

< iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 

安全检查是为了乘客和运输行业的安全考虑而设立的警报，旨在防止危险，通常应用于机场、火车站、地铁站等公共交通场所。在现有的安全检查领域，安全检查设备被部署在公共交通的进站通道上。一般来说，这需要多个设备同时工作。

尽管如此，由于安检过程中检测到的物体重叠，X射线图像中禁止物品的检测性能仍然不尽如人意。为此，基于Triton接口服务器中的去遮挡模块，在X射线图像中部署禁止物品检测算法可以更有效地进行识别。

因此，感谢 [Yanlu Wei, Renshuai Tao 等](https://arxiv.org/abs/2004.08656)，我们提供这个基础性项目，计划在 [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) 上部署一个深度学习模型，能够检测禁带物品（刀具）。我们将使用一台 reComputer J1010 作为推理服务器，另外两台 Raspberry Pi 模拟安全检查机器以发送图像。 [reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) 和 [Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html) 均得到支持。

## 开始使用

[Triton推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server) 提供云端和边缘推理解决方案，旨在优化CPU和GPU的性能。Triton支持HTTP/REST和GRPC协议，允许远程客户端请求对服务器管理的任何模型进行推理。在这里，我们将使用Triton（Triton推理服务器）作为我们的本地服务器，部署检测模型。

### 硬件

#### 所需硬件

在本项目中，所需设备如下：

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- HDMI 显示屏，鼠标和键盘
- 电脑

#### 硬件设置

两个树莓派和reComputer应接通电源，并且它们都应在**同一网络**下。在这个项目中，我们使用两个树莓派来模拟安全机器的工作，因为安全检查机器在大多数情况下是由多个设备使用的。因此，两者都需要协同工作。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

一个树莓派也可以用于这个项目。然而，在两个设备上同时进行刀具检测的演示，可以更好地展示Triton推理服务器的动态批处理能力。在接下来的指导中，我们将介绍如何在树莓派和reComputer J1010上设置软件。

### 软件

我们在这里使用[X射线图像数据集](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view)作为我们的**输入数据**，该数据将放置在**树莓派**上。之后，reComputer将向树莓派输出处理过的推理结果。最后，树莓派将完成最终工作并在屏幕上显示，即推理模型的最后一层将在树莓派上部署。

#### 设置树莓派

我们将在这里向您展示如何在树莓派上设置所需的软件。

**步骤 1.**  从 [官方网站](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation) 安装 Raspbian Buster 系统和基本配置。在本项目中，我们使用 RASPBERRY PI OS（64 位）作为操作系统。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**步骤 2.** 配置树莓派的SSH端口（可选）。

在部署环境之前，我们可以打开树莓派的SSH端口，并在PC上通过[SSH接口](https://wiki.seeedstudio.com/remote_connect/)远程访问它。

> 注意：确保PC和树莓派在同一局域网内。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**步骤 3.** 配置 Python 环境。

我们需要在树莓派上部署推理模型所需的环境，包括**Python、PyTorch、Tritonclient 和 TorchVision**，以及用于图像显示的**OpenCV**。以下是我们提供的说明：

**Python**

我们可以执行 `python –V` 命令以确保 Python 版本为 3.9.2。我们需要安装 PyTorch、Torchclient 和 TorchVision，确保这些库的版本与 Python 3.9.2 兼容。您可以参考 [这里](https://www.python.org/downloads/) 下载并安装 Python。

**PyTorch**

如果Python版本正确，我们现在可以安装Pytorch。

> 注意：在安装Pytorch之前，我们必须检查Raspbian版本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

执行下列命令以安装 Pytorch：

```python
# get a fresh start
sudo apt-get update
sudo apt-get upgrade

# install the dependencies
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev

# above 58.3.0 you get version issues
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# install gdown to download from Google drive
sudo -H pip3 install gdown

# Buster OS
# download the wheel
gdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R
# install PyTorch 1.11.0
sudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl
# clean up
rm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl
```


安装成功后，我们可以在**启动后**  `python`后使用以下命令检查 PyTorch：

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>注意：可以在此找到用于树莓派4的PyTorch轮子。 <https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS>

**Tritonclient**

我们可以执行 `pip3 install tritonclient[all]` 来下载 Tritonclient。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

在安装了Pytorch之后，我们可以进行Torchvision的安装。以下是相关命令：

```python
# download the wheel
gdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh
# install torchvision 0.12.0
sudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
# clean up
rm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png" /></div>

**OpenCV**

我们可以直接执行 `pip3 install opencv-python` 来安装 OpenCV：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png" /></div>

### 设置 reComputer J1010

在本项目中，我们将把Triton推理服务器部署到reComputer J1010上。为了提高训练模型的交互性和部署便利性，我们将把模型转换为**ONNX格式**。

**步骤 1.** [安装](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/) Jetpack 4.6.1 into reComputer J1010.

**步骤 2.**在“home/server/docs/examples/model_repository”中创建一个新的文件夹“opi/1”。然后下载训练和转换后的[model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing)，并将其放入“1”文件夹中。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>如果您需要另一个通用服务器，可以按照以下步骤操作。

打开一个新的终端并执行：

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**步骤 3.** 安装适用于 JetPack 4.6.1 的 Triton 版本，并在附带的 tar 文件中提供： [tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

这里的 tar 文件包含 Triton 服务器可执行文件和共享库，包括 C++ 和 Python 客户端库及示例。有关如何在 JetPack 上安装和使用 Triton 的更多信息，请参考 [这里](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md)。

**步骤 4.** 请提供您希望执行的命令，我将帮助您。

```python

mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

好的，您已经完成了所有准备工作。接下来您需要进行什么操作？我可以帮助您。

## Operating the Program

既然已经部署了所有需要的环境，我们就可以按照以下步骤运行项目了。

**步骤 1.** 下载模型和相关文件。

1. 从 GitHub 克隆模块。

打开一个新的终端并执行：.

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. 新建一个文件夹 “weights”，用于存储该算法的训练权重 “DOAM.pth”。下载 [weight file](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip) 并执行：

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. 创建一个新的 “数据集 ”文件夹来存储 [X 射线图像数据集](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**步骤 2.** 运行推理模型。

执行 `python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

结果如下图所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## 故障排除

> 登录 Triton 服务器时，可能会遇到以下错误：

>1. 如果 libb64.so.0d 出错，执行：
`sudo apt-get install libb64-0d`

>2. 如果 libre2.so.2 出错，执行
`sudo apt-get install libre2-dev`

>3. if error: creation server： Internal - failed to load all models, execute：
`--exit-on-error=false`

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供各种支持，确保您在使用我们的产品时获得最顺畅的体验。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

