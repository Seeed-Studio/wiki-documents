---
description: ODYSSEY - X86J4105
title: Intel OpenVINO Toolkit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Intel-OpenVINO
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# 为 ODYSSEY - X86J4105 安装 Intel® Distribution of OpenVINO™ 工具包

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

**Intel® Distribution of OpenVINO™ 工具包**能够快速部署模拟人类视觉的应用和解决方案。基于卷积神经网络（CNN），该工具包扩展了计算机视觉（CV）工作负载至 Intel® 硬件，从而最大化性能。Intel® Distribution of OpenVINO™ 工具包包括 Intel® 深度学习部署工具包（Intel® DLDT）。

有关更多信息，请访问 [Intel® Distribution of OpenVINO™ 工具包](https://docs.openvinotoolkit.org/)。

**注意：** 根据官方文档，OpenVINO™ 工具包可以安装在不同的操作系统上。**在本教程中，ODYSSEY - X86J4105 上安装了 Ubuntu 18.04.4 LTS，并将在 Linux 上安装 OpenVINO™ 工具包。**强烈建议安装此版本的 Ubuntu，以避免可能出现的环境错误。

本教程改编自官方文档 [Install Intel® Distribution of OpenVINO™ toolkit for Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html)。

## 硬件要求

- 一台可用的电脑

- 一台显示器

- 键盘和鼠标

- 网络连接

## 安装 Ubuntu 操作系统

如果尚未安装 Ubuntu，请随时参考 [此教程](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-OS/) 将 Ubuntu 安装到 ODYSSEY - X86J4105 上。

## 安装 Intel® Distribution of OpenVINO™ 工具包

从 Intel® [Distribution of OpenVINO™ toolkit for Linux*](https://software.intel.com/en-us/openvino-toolkit/choose-download?elq_cid=6204639&erpm_id=9318801) 下载 Intel® Distribution of OpenVINO™ 工具包安装文件。从下拉菜单中选择 Intel® Distribution of OpenVINO™ toolkit for Linux 包。

1. 在 Ubuntu 中打开终端。

2. 切换到下载 Intel Distribution of OpenVINO toolkit for Linux* 安装文件的目录。如果文件下载到当前用户的 `Downloads` 目录：

```sh
cd ~/Download/
```

默认情况下，文件保存为 `l_openvino_toolkit_p_<version>.tgz`

3. 解压 `.tgz` 文件：

```sh
tar -xvzf l_openvino_toolkit_p_<version>.tgz
```

文件将解压到 `l_openvino_toolkit_p_<version>` 文件夹。

4. 进入 `l_openvino_toolkit_p_<version>` 目录：

```sh
cd l_openvino_toolkit_p_<version>
```

5. 运行以下脚本安装 Intel® Distribution of OpenVINO™ 工具包：

```sh
sudo ./install_GUI.sh
```

**注意：** 这是 GUI 安装向导，也可以使用命令行安装方式：`sudo ./install.sh`，但强烈建议使用 GUI 安装以避免错误。

6. 按屏幕上的说明操作。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-01.png)

7. 如果选择默认选项，安装摘要 GUI 屏幕将如下所示：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-02.png)

- **注意：** 也可以自定义安装目录或选择要安装的组件：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-03.png)

如果以 **root** 用户身份安装，Intel Distribution of OpenVINO 的默认安装目录为 `/opt/intel/openvino/`。

8. 当核心组件安装完成时，将出现完成屏幕：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-04.png)

## 安装外部软件依赖

这些依赖项是为以下功能所需的：

- Intel 优化版 OpenCV 库

- 深度学习推理引擎

- 深度学习模型优化工具

1. 切换到 `install_dependencies` 目录：

```sh
cd /opt/intel/openvino/install_dependencies
```

2. 运行脚本以下载并安装外部软件依赖项：

```sh
sudo -E ./install_openvino_dependencies.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/dependent-complete.png)

这取决于您的网络速度，请耐心等待。外部软件依赖项已安装完成！

## 设置环境变量

在编译和运行 OpenVINO™ 应用程序之前，您必须更新几个环境变量。运行以下脚本以临时设置您的环境变量：

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

**注意：** 当您关闭终端时，OpenVINO 环境变量将被移除。作为一种选择，您可以按照以下步骤永久设置环境变量：

1. 打开 `<user_directory>` 中的 `.bashrc` 文件。

```sh
nano /home/USERNAME/.bashrc
```

将您的用户名替换为 `USERNAME`。

2. 在文件末尾添加以下行：

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/source-environment.png)

3. 使用 **Ctrl + O** 保存并使用 **Ctrl + X** 退出。

4. 为测试更改，打开一个新的终端。您应该在终端顶部看到 `[setupvars.sh] OpenVINO environment initialized`。

## 配置模型优化器

模型优化器是一个基于 Python* 的命令行工具，用于从流行的深度学习框架（如 Caffe*、TensorFlow*、Apache MXNet*、ONNX* 和 Kaldi*）导入训练好的模型。

模型优化器是 Intel Distribution of OpenVINO 工具包的关键组件。如果不通过模型优化器运行模型，您将无法对训练好的模型进行推理。当您通过模型优化器运行预训练模型时，输出将是网络的中间表示（IR）。中间表示由一对文件组成，描述整个模型：

- `.xml`：描述网络拓扑结构

- `.bin`：包含权重和偏置的二进制数据

有关模型优化器的更多信息，请参阅 [模型优化器开发者指南](https://docs.openvinotoolkit.org/latest/_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html)。

### 模型优化器配置步骤

您可以选择一次性配置所有支持的框架 **或** 单独配置一个框架。选择最适合您需求的选项。如果看到错误消息，请确保已安装所有依赖项。

**选项 1：同时配置所有支持的框架**

1. 转到模型优化器的先决条件目录：

```sh
cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites
```

2. 运行脚本以为 Caffe、TensorFlow、MXNet、Kaldi 和 ONNX 配置模型优化器：

```sh
sudo ./install_prerequisites.sh
```

**选项 2：单独配置每个框架**

运行适用于您的模型框架的脚本。您可以运行多个脚本：

- 对于 **Caffe**：

```
sudo ./install_prerequisites_caffe.sh
```

- 对于 **TensorFlow**：

```
sudo ./install_prerequisites_tf.sh
```

- 对于 **MXNet**：

```
sudo ./install_prerequisites_mxnet.sh
```

- 对于 **ONNX**：

```
sudo ./install_prerequisites_onnx.sh
```

- 对于 **Kaldi**：

```
sudo ./install_prerequisites_kaldi.sh
```

现在，您已经准备好编译并运行示例了！

## 运行验证脚本以验证安装

**在 ODYSSEY - X86J4105 的 CPU 上验证安装并编译两个示例：**

1. 进入 Inference Engine 示例目录：

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. 运行 **图像分类验证脚本：**

```sh
./demo_squeezenet_download_convert_run.sh
```

此验证脚本会下载一个 SqueezeNet 模型，使用模型优化器将模型转换为 `.bin` 和 `.xml` 的中间表示（IR）文件。推理引擎需要这种模型转换，以便使用 IR 作为输入并在 Intel 硬件上实现最佳性能。

此验证脚本会构建 [异步图像分类示例应用程序](https://docs.openvinotoolkit.org/latest/_inference_engine_samples_classification_sample_async_README.html)，并使用位于示例目录中的 `car.png` 图像运行它。当验证脚本完成时，您将获得前 10 个类别的标签和置信度：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-1.png)

运行 **推理管道验证脚本：**

```sh
./demo_security_barrier_camera.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

此脚本会下载三个预训练模型的 IR，构建 [安全屏障摄像头示例](https://docs.openvinotoolkit.org/latest/_demos_security_barrier_camera_demo_README.html) 应用程序，并使用下载的模型和示例目录中的 `car_1.bmp` 图像运行它，以展示推理管道。验证脚本使用车辆识别，其中车辆属性逐步叠加以缩小到特定属性。

要了解验证脚本的详细信息，请参阅 `/opt/intel/openvino/deployment_tools/demo` 目录中的 **README.txt** 文件。

有关 Intel Distribution of OpenVINO™ 预训练目标检测和目标识别模型的描述，请参阅 [OpenVINO™ 工具包预训练模型概述](https://docs.openvinotoolkit.org/latest/_models_intel_index.html)。

您已完成本指南中所有必要的安装、配置和构建步骤，可以使用您的 CPU 与训练好的模型一起工作。尽情探索强大的 Intel OpenVINO 工具，在 ODYSSEY - X86J4105 上训练您的模型吧！

## 资源

- [Intel® Distribution of OpenVINO™ 工具包](https://docs.openvinotoolkit.org/)

- [在 Linux* 上安装 Intel® Distribution of OpenVINO™ 工具包](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html)

## 技术支持与产品讨论
感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>