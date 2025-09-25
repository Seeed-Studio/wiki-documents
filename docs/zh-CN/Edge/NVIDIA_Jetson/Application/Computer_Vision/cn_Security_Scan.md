---
description: 安全X光扫描刀具检测
title: 安全X光扫描刀具检测
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

# 刀具检测：基于reComputer在Triton推理服务器上部署的目标检测模型

<iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

安全检查是为了保障乘客和交通部门安全而设置的安全警报，用于远离危险，通常应用于机场、火车站、地铁站等场所。在现有的安检领域中，安检设备部署在公共交通的入站通道上。一般来说，需要多个设备同时工作。

然而，由于安检过程中检测物体的重叠，X光图像中违禁物品的检测性能仍然不够理想。为了解决这个问题，基于Triton推理服务器中的去遮挡模块，在X光图像中部署违禁物品检测算法可以提供更好的解决方案。

因此，感谢[Yanlu Wei, Renshuai Tao等人](https://arxiv.org/abs/2004.08656)的贡献，我们提供了这个基础项目，将在[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)上部署一个深度学习模型，该模型可以与Raspberry Pi和reComputer J1010一起检测违禁物品（刀具），其中我们使用一个reComputer J1010作为推理服务器，两个Raspberry Pi模拟安检设备发送图像。[reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)和[Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)都支持此项目。

## 入门指南

[Triton推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server)提供了一个云端和边缘推理解决方案，针对CPU和GPU进行了优化。Triton支持HTTP/REST和GRPC协议，允许远程客户端为服务器管理的任何模型请求推理。在这里，我们将使用Triton（Triton推理服务器）作为我们的本地服务器，用于部署检测模型。

### 硬件

#### 所需硬件

在这个项目中，所需的设备如下所示：

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- HDMI显示屏、鼠标和键盘
- PC

#### 硬件设置

两个Raspberry Pi和reComputer应该通电，并且它们都应该在**同一个网络**下。在这个项目中，我们使用两个Raspberry Pi来模拟安检设备的工作，因为在大多数情况下，安检设备是由多个设备使用的。因此，两个

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

只使用一个Raspberry Pi也可以应用于这个项目。然而，在两个设备上同时进行刀具检测演示可以更好地展示Triton推理服务器的动态批处理能力。在接下来的说明中，我们将介绍如何在Raspberry Pi和reComputer J1010上设置软件。

### 软件

我们这里使用[X光图像数据集](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view)作为我们的**输入数据**，它将被放置在**Raspberry Pi**上。之后，reComputer将输出处理后的推理结果到Raspberry Pi。最后，Raspberry Pi将完成最终工作并在屏幕上显示，即推理模型的最后一层将部署在Raspberry Pi上。

#### 设置Raspberry Pi

我们这里将向您展示如何在Raspberry Pi上设置所需的软件，包括

**步骤1.** 从[官方网站](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation)安装Raspbian Buster系统并进行基本配置。在这个项目中，我们使用RASPBERRY PI OS（64位）作为我们的操作系统。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**步骤2.** 配置Raspberry Pi SSH端口（可选）。

在部署环境之前，我们可以打开Raspberry Pi SSH端口，并在PC上使用[SSH接口](https://wiki.seeedstudio.com/cn/remote_connect/)远程调用它。

> 注意：确保PC和Raspberry Pi在同一个局域网下。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**步骤3.** 配置Python环境。

我们需要在Raspberry Pi上为推理模型部署所需的环境，包括**Python、PyTorch、Tritonclient和TorchVision**，以及用于图像显示的**OpenCV**。我们提供以下说明：

**Python**

我们可以执行`python –V`并确保Python版本是3.9.2。我们需要安装PyTorch、Torchclient和TorchVision，我们需要的版本对应于Python版本3.9.2。您可以参考[这里](https://www.python.org/downloads/)下载和安装。

**PyTorch**

如果Python版本正确，我们现在可以安装Pytorch。

>注意：在安装Pytorch之前，我们必须检查Raspbian版本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

执行以下命令安装Pytorch：

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

成功安装后，我们可以在**启动** `python` 后使用以下命令检查 PyTorch：

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>注意：适用于树莓派 4 的 PyTorch 轮子可以在 [https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS](https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS) 找到

**Tritonclient**

我们可以执行 `pip3 install tritonclient[all]` 来下载 Tritonclient。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

安装完 Pytorch 后，我们可以继续安装 Torchvision。以下是命令：

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

在这个项目中，我们将在 reComputer J1010 上部署 Triton 推理服务器。为了增强训练模型的交互性和部署便利性，我们将把模型转换为 **ONXX 格式**。

**步骤 1.** 在 reComputer J1010 上[安装](https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack/) Jetpack 4.6.1。

**步骤 2.** 在 "home/server/docs/examples/model_repository" 中创建一个新文件夹 "opi/1"，然后下载训练好并转换的 [model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing) 并将其放入 "1" 文件夹中。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>如果您需要另一个通用服务器，可以执行以下步骤。

打开一个新的终端并执行

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**步骤 3.** 安装适用于 JetPack 4.6.1 的 Triton 发行版，该版本在附加的 tar 文件中提供：[tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

这里的 tar 文件包含 Triton 服务器可执行文件和共享库，包括 C++ 和 Python 客户端库以及示例。有关如何在 JetPack 上安装和使用 Triton 的更多信息，您可以参考[这里](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md)。

**步骤 4.** 执行以下命令：

```python

mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

现在，我们已经完成了所有的准备工作。

## 运行程序

由于所有必需的环境都已部署完成，我们可以按照以下步骤运行我们的项目。

**步骤 1.** 下载模型和相关文件。

1. 从 GitHub 克隆模块。

打开一个新的终端并执行：

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. 创建一个新的文件夹"weights"来存储此算法的训练权重"DOAM.pth"。下载[权重文件](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip)并执行：

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. 创建一个新的"Dataset"文件夹来存储[X射线图像数据集](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**步骤 2.** 运行推理模型。

执行 `python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

结果将如下图所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## 故障排除

> 当您启动 Triton 服务器时，可能会遇到以下错误：

>1. 如果出现 libb64.so.0d 错误，执行：
`sudo apt-get install libb64-0d`

>2. 如果出现 libre2.so.2 错误，执行：
`sudo apt-get install libre2-dev`

>3. 如果出现错误：creating server: Internal - failed to load all models，执行：
`--exit-on-error=false`

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

