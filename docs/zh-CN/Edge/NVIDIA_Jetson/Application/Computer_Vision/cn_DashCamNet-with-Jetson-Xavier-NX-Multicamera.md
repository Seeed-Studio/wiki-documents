---
description: 使用 Jetson Xavier NX 多摄像头的 DashCamNet
title: 使用 Jetson Xavier NX 多摄像头的 DashCamNet
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/DashCamNet-with-Jetson-Xavier-NX-Multicamera
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# 使用 Jetson Xavier NX 多摄像头的 DashCamNet 和 PeopleNet

## 介绍

如今，在自动驾驶、行车记录和违规监控领域，我们经常使用人工智能来帮助我们识别车辆信息、车牌和周围障碍物。得益于 Nvidia NGC 提供的大量预训练模型，我们可以更轻松地完成这些复杂任务。

从零开始创建 AI/机器学习模型可能会花费大量时间和金钱。[迁移学习](https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/)是一种流行的技术，可用于将现有神经网络模型的学习特征提取到新模型中。NVIDIA TAO（*训练、适应和优化*）工具包是基于 CLI 和 Jupyter notebook 的 [NVIDIA TAO](https://developer.nvidia.com/tao) 解决方案，它抽象了 AI/深度学习框架的复杂性，让您只需使用从零开始训练所需数据的一小部分就能对高质量的 NVIDIA 预训练 AI 模型进行微调。

TAO 工具包还支持 100 多种 NVIDIA 优化模型架构和骨干网络的排列组合，如 EfficientNet、YOLOv3/v4、RetinaNet、FasterRCNN、UNET 等等。

<!-- Credit to NVIDIA's [repository](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) and Tomasz's [project](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines), we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) and [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) are good for this demo. -->

感谢 NVIDIA 的[仓库](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/)和 Tomasz 的[项目](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines)，我们将在 Jetson Xavier NX 上使用多摄像头检测汽车和人员。[Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) 非常适合这个演示。

*NVIDIA TAO 工具包之前被称为 NVIDIA 迁移学习工具包（Tlt）。*

<p style={{textAlign: 'center'}}><img src="https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg" alt="pir" width={800} height="auto" /></p>

## 材料需求

### 硬件设置

<!-- - [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) / [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) -->
- [NVIDIA® Jetson Xavier™ NX 开发者套件](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)

<p style={{textAlign: 'center'}}><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg" alt="pir" width={300} height="auto" /></p>

- USB 网络摄像头 / 树莓派摄像头 V2.1 / [IMX219-130 8MP 摄像头](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) / [高质量 12.3MP IMX477 摄像头](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<p style={{textAlign: 'center'}}><img src="https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400" alt="pir" width={300} height="auto" /></p>

- 带有 HDMI、DP 或 eDP 接口的显示器
- 运行 Linux 发行版操作系统的 PC

### 软件设置

- 适用于 Jetson Xavier NX 的 Jetpack 4.5 或 4.6
- Docker
- DeepStream
- TAO 工具包
- Python3.6 与 Pypi（python3-pip）和虚拟环境
- NVIDIA Container Toolkit

软件安装方法将在以下步骤中提供。

## 预安装

在开始项目之前，我们需要在 Ubuntu 上安装 Docker 引擎。有几种安装 Docker 引擎的方法，您可以根据需要选择任一种方法。如果您已经设置好了，可以跳过这一步。

- 大多数用户[设置 Docker 的仓库](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)并从中安装，以便于安装和升级任务，这是推荐的方法。
- 一些用户下载 DEB 包并[手动安装](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package)，完全手动管理升级。这在诸如在无法访问互联网的隔离系统上安装 Docker 等情况下很有用。
- 在测试和开发环境中，一些用户选择使用自动化的[便利脚本](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)来安装 Docker。

这里我们将使用第一种方法。在安装 docker 之前，需要确保其版本是最新的。旧版本的名称可能是 `docker`、`docker.io` 或 `docker-engine`，您可以使用以下命令检查：

```shell
sudo apt-get purge docker docker-engine docker.io containerd runc
```

当您卸载 docker 时，`/var/lib/docker/` 的内容，包括镜像、容器、卷和网络，都会被保留。如果您想要进行全新安装，可以参考本页面底部的[卸载 Docker 引擎](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine)部分。

### 使用仓库安装 Docker

在新的主机上安装 Docker 引擎之前，需要先设置 Docker 仓库。之后，我们就可以从仓库安装和更新 Docker。

- **步骤 1**. 使用 `apt` 包设置仓库

更新 `apt` 包索引并安装包，以允许 `apt` 通过 HTTPS 使用仓库，使用以下命令：

   ```shell
    sudo apt-get update
    sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```
添加 Docker 的官方 GPG 密钥：

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

使用以下命令设置 **stable** 仓库。要添加 **nightly** 或 **test** 仓库，请在下面命令中的 `stable` 一词后添加 `nightly` 或 `test`（或两者都添加）。您可以在[这里了解 **nightly** 和 **test** 频道](https://docs.docker.com/engine/install/)。

   ```shell
    echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

- **步骤 2**. 安装 Docker 引擎

更新 `apt` 包索引，并使用以下命令安装 **最新版本** 的 Docker 引擎和 containerd：

   ```shell
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

我们可以通过运行 `hello-world` 镜像来验证 Docker Engine 是否正确安装。

   ```shell
    sudo docker run hello-world
   ```

- **步骤 3**. 通过以下过程将 Docker 作为非 root 用户进行管理。

创建 `docker` 组。

   ```shell
   sudo groupadd docker
   ```
将用户添加到 `docker` 组。

   ```shell
   sudo usermod -aG docker $USER
   ```

注销并重新登录以重新评估组成员身份。

通过运行 `hello-world` 验证您可以在不使用 `sudo` 的情况下运行 `docker` 命令

   ```shell
   docker run hello-world
   ```

- **步骤 4**. 通过以下过程设置 NVIDIA Container Toolkit：

设置 `stable` 仓库和 GPG 密钥：

   ```shell
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
      && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   ```

更新软件包列表并安装 `nvidia-docker2` 软件包（及其依赖项）：

   ```shell
   sudo apt-get update
   sudo apt-get install -y nvidia-docker2
   ```

设置默认运行时后,重启 Docker 守护进程以完成安装:

   ```shell
   sudo systemctl restart docker
   ```

## 入门指南

### 安装 NVIDIA GPU Cloud CLI ARM64 Linux

**NVIDIA GPU Cloud (NGC) CLI** 是一个基于 Python 的命令行界面，用于管理 NGC 容器注册表中的 Docker 容器。使用 NGC CLI，您可以执行许多与 NGC 网站相同的操作，例如运行作业和查看组织和团队空间内的 Docker 存储库。

- **步骤 1**. 前往 [Download CLI](https://ngc.nvidia.com/setup/installers/cli) 页面并下载包含二进制文件的 zip 文件。ARM64 的 NGC CLI 二进制文件在 Ubuntu 18.04 及更高版本的发行版上受支持。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2**. 将 zip 文件传输到您有权限的目录中，解压缩并最终执行二进制文件。

您也可以通过移动到具有执行权限的目录，然后运行以下命令来从命令行下载、解压缩和安装：

```shell
wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc
```

检查二进制文件的md5哈希值以确保文件在下载过程中未被损坏：

```shell
md5sum -c ngc.md5
```
- **步骤 3**. 将当前目录添加到路径：

```shell
echo "export PATH=\"\$PATH:$(pwd)\"" >> ~/.bash_profile && source ~/.bash_profile
```

您必须为您的使用配置 NGC CLI 才能运行命令。

- **步骤 4**. 输入以下命令，在提示时包含您的 API 密钥：

```shell
ngc config set
```

#### NGC API 密钥生成

配置 NGC CLI 需要 API 密钥，我们可以通过 NGC 网站生成它。

- **步骤 1**. 前往[网站](https://catalog.ngc.nvidia.com/)并点击"Sign In/Sign Up"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2**. 注册一个 NVIDIA 开发者账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3**. 选择一个账户继续。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png" alt="pir" width={800} height="auto" /></p>

- **步骤 4**. 点击页面右上角的"Setup"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png" alt="pir" width={800} height="auto" /></p>

- **步骤 5**. 选择"Get API Key"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png" alt="pir" width={800} height="auto" /></p>

- **步骤 6**. 点击"Generate API Key"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png" alt="pir" width={800} height="auto" /></p>

- **步骤 7**. API 密钥将显示在页面底部。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png" alt="pir" width={800} height="auto" /></p>

### 安装 TAO Toolkit

首先应该安装 Python3 和 python3-pip：

```shell
sudo apt install -y python3 python3-pip
```

TAO Toolkit 是一个托管在 NVIDIA PyIndex 上的 Python pip 包。该包在底层使用 docker restAPI 与 NGC Docker 注册表交互，以拉取和实例化底层的 docker 容器。在前面的步骤中，我们已经设置了一个 NGC 账户并生成了与之关联的 API 密钥。如果您想了解更多关于[安装先决条件](https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq)部分的信息，您可以点击它以获取有关创建 NGC 账户和获取 API 密钥的详细信息。

#### **虚拟环境 - Virtualenv**

虚拟环境是 Python 的一个隔离工作副本，它允许您在特定项目上工作而不用担心影响其他项目。例如，您可以在需要 Django 1.3 的项目上工作，同时处理需要 Django 1.0 的项目。您可以点击[这里](http://pypi.python.org/pypi/virtualenv)来创建隔离的 Python 环境。

强烈建议首先配置虚拟环境，然后安装 TAO Toolkit。

- 您可以通过 pip 安装 virtualenv：

```shell
pip install virtualenv
```

- Create a virtual environment:

```shell
virtualenv venv
```

它会在你运行命令的目录中创建一个 Python 的副本，将其放置在名为 `venv` 的文件夹中。

- 激活虚拟环境：

```shell
source venv/bin/activate
```

- 如果你暂时完成了在虚拟环境中的工作，你可以停用它：

```shell
deactivate
```

这会让你回到系统默认的 Python 解释器，并可以使用所有已安装的库。

要删除虚拟环境，只需删除其文件夹即可。

**virtualenvwarpper**

不过，过一段时间后，你可能会在系统中积累很多虚拟环境，并且可能会忘记它们的名称或存放位置。因此，我们使用 virtualenvwarpper。[virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/index.html) 提供了一组命令，使得使用虚拟环境变得更加愉快。它还会将所有虚拟环境放在一个地方。

你可以安装（确保已经安装了 **virtualenv**）：

   ```
   pip install virtualenvwrapper
   export WORKON_HOME=~/Envs
   source /usr/local/bin/virtualenvwrapper.sh
   ```

如果您想了解更多相关信息，请参考 [完整的 virtualenvwrapper 安装说明](http://virtualenvwrapper.readthedocs.org/en/latest/install.html)。)

*您可以按照此[链接](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html)中的说明使用 virtualenvwrapper 设置 Python 虚拟环境。*

#### **在虚拟环境中设置 Python 版本**

- **步骤 1**. 按照说明安装 `virtualenv` 和 `virtualenvwrapper` 后，在 `virtualenv` 中设置 Python 版本。这可以通过以下任一方式完成：

- 定义名为 VIRTUALENVWRAPPER_PYTHON 的环境变量。此变量应指向本地机器上安装 python3 二进制文件的路径。您也可以将其添加到 `.bashrc` 或 `.bash_profile` 中，以便默认设置您的 Python `virtualenv`。

```shell
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
```

- 使用 `virtualenvwrapper` 包装器创建 `virtualenv` 时设置 python3 二进制文件的路径

```shell
mkvirtualenv launcher -p /path/to/your/python3
```

- **步骤 2**. 一旦您登录到 `virtualenv`，命令提示符应该显示您的虚拟环境的名称

```shell
   (launcher) py-3.6.9 desktop:
```

- **步骤 3**. 当您完成会话后，可以使用 `deactivate` 命令来停用您的 `virtualenv`：

```shell
deactivate
```

- **步骤 4**。你可以使用`workon`命令重新激活这个创建的`virtualenv`环境。

   ```shell
   workon launcher
   ```

#### **安装 TAO 包**

- **步骤 1**. 我们已经设置好了所需的环境。现在我们可以使用以下命令安装名为 `nvidia-tao` 的 TAO Launcher Python 包。

   ```shell
   pip3 install nvidia-pyindex
   pip3 install nvidia-tao
   ```
- **步骤 2**. 使用`tao`命令调用入口点。

```
tao --help
```
上述命令的示例输出为：

```
usage: tao [-h]
         {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,
         heartratenet,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,
         retinanet,speech_to_text,ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
         ...

Launcher for TAO

optional arguments:
-h, --help            show this help message and exit

tasks:
      {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,heartratenet
      ,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,retinanet,speech_to_text,
      ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
```

- **步骤 3**. 注意在任务下你可以看到所有启动器可调用的任务。以下是帮助使用 TAO 启动器处理启动命令的具体任务：

  - list
  - stop
  - info

**注意：** 如果终端提示 "bash: Cannot find tao"，请使用此命令：

```shell
export PATH=$PATH:~/.local/bin
tao --help
```

### Install DeepStream5

- **步骤 1**. 编辑 `/etc/apt/sources.list.d/nvidia-l4t-apt-source.list` 文件，将 .6 替换为 .5：

```shell
deb https://repo.download.nvidia.com/jetson/common r32.5 main
#deb https://repo.download.nvidia.com/jetson/common r32.6 main
deb https://repo.download.nvidia.com/jetson/t194 r32.5 main
#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main
```

- **步骤 2**. 输入 `sudo apt update` 并再次尝试安装 DeepStream 5.1。

然后使用以下命令安装：

```shell
sudo -H pip3 install pyds-ext
```

如需更多信息，请查看以下链接：

- [DeepStream-Docker 容器](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson)
- [将 TAO 模型集成到 DeepStream](https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html)
- [DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet)

### 安装 Jetson 多摄像头管道并快速开始

最后，我们将构建一个典型的多摄像头管道，即 `N×(capture)->preprocess->batch->DNN-> your application logic here ->encode->file I/O + display`，底层使用 gstreamer 和 deepstream。通过 jetmulticam 包提供编程访问来配置 python 中的管道。

该项目利用 Nvidia 硬件加速来最小化 CPU 使用率。例如，您可以在 6 个摄像头流上实时执行目标检测，仅使用 16.5% 的 CPU。您可以通过访问图像数据（通过 np.array）以及目标检测结果，轻松地在 python 中构建自定义逻辑。

- **步骤 1**. 使用以下命令安装 Jetson 多摄像头管道：

```shell
git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git
cd jetson-multicamera-pipelines
bash scripts/install_dependencies.sh
sudo -H pip3 install Cython
sudo -H pip3 install .
```
- **步骤 2**. 使用你的相机运行示例:

```shell
source scripts/env_vars.sh 
cd examples
sudo -H python3 example.py
```

*这是"example.py"，你可以将其应用于单目相机或多相机。*

```cpp
import time
from jetmulticam import CameraPipelineDNN
from jetmulticam.models import PeopleNet, DashCamNet

if __name__ == "__main__":

    pipeline = CameraPipelineDNN(
        cameras=[2, 5, 8],
        models=[
            PeopleNet.DLA1,
            DashCamNet.DLA0,
            # PeopleNet.GPU
        ],
        save_video=True,
        save_video_folder="/home/nx/logs/videos",
        display=True,
    )

    while pipeline.running():
        arr = pipeline.images[0] # np.array with shape (1080, 1920, 3), i.e. (1080p RGB image)
        dets = pipeline.detections[0] # Detections from the DNNs
        time.sleep(1/30)
```

这是多摄像头显示的结果，如下所示：

<video id="video" controls src="https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4" preload="none">
</video>

*更多*

支持更多模型/加速器：

```cpp
pipeline = CameraPipelineDNN(
    cam_ids = [0, 1, 2]
    models=[
        models.PeopleNet.DLA0,
        models.PeopleNet.DLA1,
        models.PeopleNet.GPU,
        models.DashCamNet.DLA0,
        models.DashCamNet.DLA1,
        models.DashCamNet.GPU
        ]
    # ...
)
```

**注意：** 如果终端提示"EGL Not found"，请检查 [EGLDevice](https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html)。

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
