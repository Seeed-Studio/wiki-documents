---
description: 使用Jetson Xavier NX多摄像头系统运行的DashCamNet和PeopleNet
title: 使用Jetson Xavier NX多摄像头系统运行的DashCamNet和PeopleNet
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

# 使用Jetson Xavier NX多摄像头系统运行的DashCamNet和PeopleNet

## 引言

如今，在自动驾驶、汽车录像和违章监控领域，我们经常使用人工智能来帮助我们识别车辆信息、车牌号和周围障碍物。多亏了英伟达NGC提供的大量预训练模型，我们可以更轻松地完成这些复杂的任务。

从头开始创建一个AI/机器学习模型会花费你大量的时间和金钱。[迁移学习](https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/)是一种流行的技术，它可以用于从现有的神经网络模型中提取学习到的特征并将其应用到新的模型中。NVIDIA TAO（Train, Adapt, and Optimize，即训练、适应和优化）工具包是[NVIDIA TAO](https://developer.nvidia.com/tao)的命令行界面（CLI）和Jupyter笔记本解决方案，它简化了AI/深度学习框架的复杂性，让你只需使用少量数据（与从头开始训练相比）即可对高质量的NVIDIA预训练AI模型进行微调。


TAO Toolkit还支持100多种NVIDIA优化的模型架构和骨干网络（backbone）的变体，如EfficientNet、YOLOv3/v4、RetinaNet、FasterRCNN、UNET等。

<!-- Credit to NVIDIA's [repository](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) and Tomasz's [project](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines), we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) and [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) are good for this demo. -->

感谢NVIDIA的[资料库](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/)和Tomasz的[项目](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines)，我们将使用部署在Jetson Xavier NX上的多摄像头系统来检测车辆和行人。[Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)非常适合用于此演示。

*NVIDIA TAO Toolkit之前被称为NVIDIA迁移学习工具包（TLT）。*

<p style={{textAlign: 'center'}}><img src="https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg" alt="pir" width={800} height="auto" /></p>

## 材料需求

### 硬件设置

<!-- - [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) / [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) -->
- [NVIDIA® Jetson Xavier™ NX 开发者套件](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)

<p style={{textAlign: 'center'}}><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg" alt="pir" width={300} height="auto" /></p>

- USB Webcam / Raspberry Pi  Camera V2.1 / [IMX219-130 8MP cameras](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) / [High quality 12.3MP IMX477 cameras](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<p style={{textAlign: 'center'}}><img src="https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400" alt="pir" width={300} height="auto" /></p>

- 带有HDMI、DP或eDP接口的显示器
- 装有Linux发行版操作系统的PC

### 软件设置

- Jetpack 4.5或4.6（用于Jetson Xavier NX）
- Docker
- DeepStream
- TAO Toolkit
- Python 3.6（带有Pypi（python3-pip）和支持虚拟环境）
- NVIDIA Container Toolkit

以下步骤将提供软件安装方法。

## 预安装

在开始项目之前，我们需要在Ubuntu上安装Docker Engine。有几种方法可以安装Docker Engine，你可以根据需要选择其中一种。如果已经设置好了，可以跳过这一步。

- 大多数用户通过[设置Docker的仓库](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) 来安装Docker Engine，这种方法方便安装和升级任务，也是推荐的方法。
- 有些用户下载DEB包并[手动安装](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package) ，完全手动管理升级。这在安装在无互联网访问的封闭系统上时非常有用。
- 在测试和开发环境中，一些用户选择使用自动化的[便利脚本](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)来安装Docker。

在安装Docker之前，我们需要确保使用的是最新版本。旧版本的名称可能是`docker`, `docker.io`,或 `docker-engine`，你可以使用以下命令检查：


```shell
sudo apt-get purge docker docker-engine docker.io containerd runc
```

当你卸载Docker时，/var/lib/docker/中的内容会被保留，包括镜像、容器、卷和网络。如果你想进行全新的安装，可以参考本页底部的[卸载Docker Engine](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine) 部分。

### 使用仓库安装Docker

在我们在新主机上安装Docker引擎之前，需要先设置Docker仓库。之后，我们就可以从仓库中安装和更新Docker了。

- **第一步**. 使用`apt`包设置仓库

更新`apt`包索引并安装允许`apt`通过HTTPS使用仓库的包，请执行以下命令：

   ```shell
    sudo apt-get update
    sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

添加Docker的官方GPG密钥：

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

使用以下命令设置稳定仓库。要添加夜间构建版本或测试仓库，在下面命令中的stable后面加上nightly或test（或两者都加）。你可以在这里[了解有关**夜间构建版本**和**测试**频道](https://docs.docker.com/engine/install/)的信息。

   ```shell
    echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

- **第二步**. 安装Docker引擎，您可以按照以下步骤操作

更新`apt` 包索引，并使用以下命令安装**最新版本** 的Docker引擎和containerd：

   ```shell
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

我们可以通过运行`hello-world`镜像来验证Docker引擎是否正确安装。

   ```shell
    sudo docker run hello-world
   ```

- **第三步**. 以非root用户管理Docker，请按照以下步骤操作：

创建`docker`组。
   ```shell
   sudo groupadd docker
   ```

将用户添加到`docker`组。

   ```shell
   sudo usermod -aG docker $USER
   ```

登出并重新登录以重新评估组成员身份。

通过运行`hello-world`来验证您是否可以在没有`sudo`的情况下运行`docker` 命令。

   ```shell
   docker run hello-world
   ```

- **第四步**. 设置NVIDIA Container Toolkit，请按照以下步骤操作：

设置`stable`仓库和GPG密钥，请按照以下步骤操作：

   ```shell
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
      && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   ```

更新软件包列表并安装`nvidia-docker2`软件包（及依赖项）:

   ```shell
   sudo apt-get update
   sudo apt-get install -y nvidia-docker2
   ```

在设置默认运行时后，重新启动Docker守护进程以完成安装。

   ```shell
   sudo systemctl restart docker
   ```

## 入门指南

### 安装NVIDIA GPU Cloud CLI ARM64 Linux

**NVIDIA GPU Cloud (NGC) CLI**是一个基于Python的命令行界面，用于管理NGC容器注册表中的Docker容器。通过NGC CLI，您可以执行许多与NGC网站相同的操作，例如运行作业和查看您的组织和团队空间内的Docker仓库。

- **第一步**. 前往[下载CLI](https://ngc.nvidia.com/setup/installers/cli)页面，下载包含二进制文件的zip文件。适用于ARM64的NGC CLI二进制文件支持Ubuntu 18.04及更高版本的发行版。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png" alt="pir" width={800} height="auto" /></p>

- **第二步**. 将zip文件传输到您具有权限的目录中，解压缩它，最后执行二进制文件。

您还可以通过进入一个具有执行权限的目录，然后运行以下命令来从命令行下载、解压缩并安装：

```shell
wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc
```

检查二进制文件的md5哈希，以确保文件在下载过程中未被损坏：

```shell
md5sum -c ngc.md5
```

- **第三步**. 将您的当前目录添加到路径中：

```shell
echo "export PATH=\"\$PATH:$(pwd)\"" >> ~/.bash_profile && source ~/.bash_profile
```

您必须为使用而配置NGC CLI，以便运行命令。

- **第四步**. 输入以下命令，提示时包括您的API密钥：

```shell
ngc config set
```

#### NGC API密钥生成

配置NGC CLI需要API密钥，我们可以通过NGC网站生成它。

- **第一步**. 前往[网站](https://catalog.ngc.nvidia.com/)，点击“登录/注册”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png" alt="pir" width={800} height="auto" /></p>

- **第二步**. 注册一个NVIDIA开发者账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png" alt="pir" width={800} height="auto" /></p>

- **第三步**.选择一个账户以继续。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png" alt="pir" width={800} height="auto" /></p>

- **第四步**. 点击页面右上角的“设置”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png" alt="pir" width={800} height="auto" /></p>

- **第五步**. 选择“获取API密钥”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png" alt="pir" width={800} height="auto" /></p>

- **第六步**.点击“生成API密钥”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png" alt="pir" width={800} height="auto" /></p>

- **第七步**. API密钥将显示在页面底部。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png" alt="pir" width={800} height="auto" /></p>

### 安装TAO工具包

首先需要安装Python3和python3-pip：

```shell
sudo apt install -y python3 python3-pip
```

TAO工具包是一个托管在NVIDIA PyIndex上的Python pip包。该软件包使用docker restAPI与NGC Docker注册表进行交互，以拉取和实例化底层的docker容器。在前面的步骤中，我们已经设置了NGC账户并生成了一个与之关联的API密钥。如果您想了解更多关于[安装先决条件](https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq) 的信息，可以点击链接查看有关创建NGC帐户和获取API密钥的详细信息。

#### **虚拟环境——Virtualenv**

虚拟环境是Python的一个隔离的工作副本，它允许您在不担心影响其他项目的情况下处理特定项目。例如，您可以在一个需要Django 1.3的项目上工作，同时处理一个需要Django 1.0的项目。您可以点击[这里](http://pypi.python.org/pypi/virtualenv)创建隔离的Python环境。

强烈建议先配置虚拟环境，然后再安装TAO工具包。

- 您可以通过pip安装virtualenv：

```shell
pip install virtualenv
```

- 创建虚拟环境：

```shell
virtualenv venv
```

它会在您运行命令的目录中创建一个Python的副本，并将其放置在名为`venv`的文件夹中。

- 激活虚拟环境：

```shell
source venv/bin/activate
```

- 如果你暂时完成了在虚拟环境中的工作，你可以停用它：

```shell
deactivate
```

这会将您带回到系统默认的Python解释器及其所有已安装的库。

要删除虚拟环境，只需删除其文件夹即可。

**虚拟环境包装器**

不过，随着时间的推移，你的系统中可能会散落着许多虚拟环境，你可能会忘记它们的名称或放置位置。因此，我们使用虚拟环境包装器。[虚拟环境包装器](http://virtualenvwrapper.readthedocs.org/en/latest/index.html)提供了一组命令，使得与虚拟环境的工作变得更加愉快。它还会把所有这些环境都放在一个地方。

您可以安装（确保已经安装了 **virtualenv**）：


   ```
   pip install virtualenvwrapper
   export WORKON_HOME=~/Envs
   source /usr/local/bin/virtualenvwrapper.sh
   ```

如果您想了解更多信息，请参考[完整的virtualenvwrapper安装说明](http://virtualenvwrapper.readthedocs.org/en/latest/install.html)。

*您可以按照这个[链接](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html) 中的说明来使用虚拟环境包装器设置Python虚拟环境。*

#### **在虚拟环境中设置Python版本**

- **第一步**.一旦您按照指示安装了`virtualenv`和 `virtualenvwrapper`，在`virtualenv`中设置 python 版本。这可以通过以下两种方式之一完成： 

- 定义一个名为 virtuaenvwrapper_python 的环境变量。这个变量应该指向你的本地机器上 python3 二进制文件的安装路径。你也可以将其添加到你的`.bashrc`或 `.bash_profile`中，以便默认设置 python`virtualenv` 。

```shell
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
```

- 在使用`virtualenvwrapper` 包装器创建`virtualenv`时，设置指向 python3 二进制文件的路径。
```shell
mkvirtualenv launcher -p /path/to/your/python3
```

- **第二步**. 一旦您登录到`virtualenv`，命令提示符应显示您的虚拟环境的名称。

```shell
   (launcher) py-3.6.9 desktop:
```

- **第三步**.当您完成会话后，可以使用`deactivate`命令停用您的 `virtualenv` ： 

```shell
deactivate
```

- **第四步**. 您可以使用 `workon` 命令重新实例化已创建的`virtualenv`环境。

   ```shell
   workon launcher
   ```

#### **安装 TAO 包**

- **第一步**. 我们已经设置好了我们需要的环境。现在我们可以安装tao启动器的python包，叫做`nvidia-tao`，用以下命令：

   ```shell
   pip3 install nvidia-pyindex
   pip3 install nvidia-tao
   ```

- **第二步**. 使用 `tao`命令调用入口点。

```
tao --help
```

上述命令的示例输出是：

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

- **第三步**. 请注意，在任务下，您可以查看所有可由启动器调用的任务。以下是使用TAO启动器处理启动命令的特定任务：

  - 列出
  - 停止
  - 信息

**警告：** 如果终端提示“bash: Cannot find tao”，请使用此命令：

```shell
export PATH=$PATH:~/.local/bin
tao --help
```

### 安装deepstream5

- **第一步**. 编辑 `/etc/apt/sources.list.d/nvidia-l4t-apt-source.list`文件，并将 .6 替换为 .5：

```shell
deb https://repo.download.nvidia.com/jetson/common r32.5 main
#deb https://repo.download.nvidia.com/jetson/common r32.6 main
deb https://repo.download.nvidia.com/jetson/t194 r32.5 main
#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main
```

- **第二步**. 输入`sudo apt update`然后尝试重新安装 DeepStream 5.1。

然后使用以下命令安装：

```shell
sudo -H pip3 install pyds-ext
```

欲了解更多信息，请查看下面的链接：

- [DeepStream-基于容器的应用](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson)
- [将TAO模型集成到DeepStream中](https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html)
- [行车记录仪网络](https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet)

### 安装Jetson Multicamera Pipelines并快速开始

最后，我们将构建一个典型的多摄像机管道，`即N×(捕获)->预处理->批处理->DNN-> <您的应用程序逻辑在此处> ->编码->文件I/O +显示`，在后台使用gstreamer和deepstream。通过jetmulticam包以编程方式访问python中的管道配置。

这个项目利用了Nvidia硬件加速来实现最小的CPU使用率。例如，您可以在6个摄像头流上实时执行对象检测，仅使用16.5%的CPU。您可以通过访问图像数据（通过np.array）以及对象检测结果，轻松地在python中构建自定义逻辑。

- **第一步**. 使用以下命令安装jetson multicamera pipelines:

```shell
git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git
cd jetson-multicamera-pipelines
bash scripts/install_dependencies.sh
sudo -H pip3 install Cython
sudo -H pip3 install .
```

- **第二步**.使用您的摄像机运行示例：

```shell
source scripts/env_vars.sh 
cd examples
sudo -H python3 example.py
```

*这是'example.py'，您可以将其应用于单目摄像头或多摄像头。*

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

这是多摄像头的结果，显示如下：

<video id="video" controls src="https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4" preload="none">
</video>

*更多*

还有更多支持的模型/加速器：

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

**警告：** 如果终端提示“egl未找到”，请检查[EGLDevice](https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html)。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
