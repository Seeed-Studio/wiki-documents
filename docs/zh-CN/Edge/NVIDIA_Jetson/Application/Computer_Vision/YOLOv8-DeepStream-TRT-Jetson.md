---
description: 在NVIDIA Jetson上使用TensorRT和DeepStream SDK部署YOLOv8
title: 在NVIDIA Jetson上使用TensorRT和DeepStream SDK部署YOLOv8
tags:
  - Data Label
  - AI model train
  - AI model deploy
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/YOLOv8-DeepStream-TRT-Jetson
last_update:
  date: 04/21/2023
  author: Lakshantha
---

# 在NVIDIA Jetson上使用TensorRT和DeepStream SDK部署YOLOv8

本指南解释了如何将训练好的AI模型部署到NVIDIA Jetson平台，并使用TensorRT和DeepStream SDK进行推理。在这里，我们使用TensorRT来最大化Jetson平台上的推理性能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/car.gif" style={{width:1000, height:'auto'}}/></div>

## 先决条件

- Ubuntu 主机 PC：系统安装或使用VMware Workstation Player的虚拟机
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 或任何其他运行 JetPack 4.6 或更高版本的 NVIDIA Jetson 设备

## DeepStream 版本与 JetPack 版本对应表

为了使 YOLOv8 与 DeepStream 协同工作，我们使用这个 [DeepStram-YOLO](https://github.com/marcoslucianops/DeepStream-Yolo) 仓库，它支持不同版本的 DeepStream。因此，请确保根据 DeepStream 的正确版本使用相应版本的 JetPack。

<table>
  <thead>
    <tr>
      <th>DeepStream 版本</th>
      <th>JetPack 版本</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>5.1.1</td>
    </tr>
    <tr>
      <td>5.1</td>
    </tr>
    <tr>
      <td>6.1.1</td>
      <td>5.0.2</td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>5.0.1 DP</td>
    </tr>
    <tr>
      <td rowSpan={3}>6.0.1</td>
      <td>4.6.3</td>
    </tr>
    <tr>
      <td>4.6.2</td>
    </tr>
    <tr>
      <td>4.6.1</td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>4.6</td>
    </tr>
  </tbody>
</table>

为了验证这个wiki, 我们在运行**JetPack 5.1.1**系统的[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)上安装 **DeepStream SDK 6.2** 。

## 将 JetPack 刷入 Jetson 设备

现在，您需要确保 Jetson 设备已经刷入了包含 SDK 组件的 [JetPack](https://developer.nvidia.com/embedded/jetpack) 系统，例如 CUDA、TensorRT、cuDNN 等。您可以使用 NVIDIA SDK Manager 或命令行将 JetPack 刷入设备。

对于 Seeed Jetson 驱动的设备刷写指南，请参考以下链接：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## 安装 DeepStream

有多种方法可以将 DeepStream 安装到 Jetson 设备上。您可以按照[此指南](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_Quickstart.html)了解更多信息。然而，我们建议您通过 SDK Manager 安装 DeepStream，因为它可以确保安装成功且易于操作。

如果您使用 SDK Manager 安装 DeepStream，您需要在系统启动后执行以下命令，这些是 DeepStream 的附加依赖项。

```sh
sudo apt install \
libssl1.1 \
libgstreamer1.0-0 \
gstreamer1.0-tools \
gstreamer1.0-plugins-good \
gstreamer1.0-plugins-bad \
gstreamer1.0-plugins-ugly \
gstreamer1.0-libav \
libgstreamer-plugins-base1.0-dev \
libgstrtspserver-1.0-0 \
libjansson4 \
libyaml-cpp-dev
```

## 安装必要包

- **步骤 1.** 访问 Jetson 设备的终端，并安装 pip 并升级它

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **步骤 2.** 克隆如下 repo

```sh
git clone https://github.com/ultralytics/ultralytics.git
```

- **步骤 3.** 打开 requirements.txt 文件

```sh
cd ultralytics
vi requirements.txt
```

- **步骤 4.** 编辑以下行。在这里，您需要先按 `i` 键进入编辑模式。按 `ESC`键，然后输入 : `:wq` 保存并退出。

```sh
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意:** 目前暂时不包括 torch 和 torchvision，因为它们将在稍后安装。

- **步骤 5.** 安装必要包

```sh
pip3 install -r requirements.txt
```

如果安装程序提示 **python-dateutil** 包已过时，可以通过以下方式升级它：

```sh
pip3 install python-dateutil --upgrade
```

## 安装 PyTorch 和 Torchvision

我们不能通过 pip 安装 PyTorch 和 Torchvision，因为它们与基于 **ARM aarch64 架构**的 Jetson 平台不兼容。因此，我们需要手动安装预构建的 PyTorch pip wheel 包，并从源代码编译/安装 Torchvision。

请访问 [此网页](https://forums.developer.nvidia.com/t/pytorch-for-jetson) 以获取所有 PyTorch 和 Torchvision 的链接。

以下是 JetPack 5.0 及以上版本支持的一些版本。

**PyTorch v1.11.0**

支持使用 Python 3.8版本的 JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) 

**文件名:** torch-1.11.0-cp38-cp38-linux_aarch64.whl

**URL:** https://nvidia.box.com/shared/static/ssf2v7pf5i245fk4i0q926hy4imzs2ph.whl

**PyTorch v1.12.0**

支持使用 Python 3.8 版本的 JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) 

**文件名:** torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl

**URL:** https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl

- **步骤 1.** 

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

例如，我们这里运行的是 **JP5.0.2**，因此我们选择安装 **PyTorch v1.12.0**。

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl -O torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
pip3 install torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
```

- **步骤 2.** 根据您安装的 PyTorch 版本安装 torchvision。例如，我们选择了 PyTorch v1.12.0，这意味着我们需要选择安装 Torchvision v0.13.0。

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.13.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
```

以下是您需要根据PyTorch版本安装的相应torchvision版本列表:

- PyTorch v1.11 - torchvision v0.12.0
- PyTorch v1.12 - torchvision v0.13.0

如果您需要更详细的列表，请查看 [此链接](https://github.com/pytorch/vision/blob/main/README.rst).

## YOLOv8的DeepStream配置

- **步骤 1.** 克隆如下 repo

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **步骤 2.** 检出代码库：

```sh
cd DeepStream-Yolo
git checkout 68f762d5bdeae7ac3458529bfe6fed72714336ca
```

- **步骤 3.**  从 **DeepStream-Yolo/utils** 文件夹中复制 **gen_wts_yoloV8.py** 到 **ultralytics** 文件夹中

```sh
cp utils/gen_wts_yoloV8.py ~/ultralytics
```

- **步骤 4.** 在ultralytics代码库中，从[YOLOv8 发布版](https://github.com/ultralytics/assets/releases/)中下载 **pt file**  (例如： YOLOv8s)

```sh
wget https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt
```

**注意:** 您可以使用自定义模型，但重要的是在您的**配置文件（cfg）**和**权重文件名（weights/wts）**中保留YOLO模型的参考（例如，以yolov8_开头），以确保正确生成引擎。

- **步骤 5.** 生成cfg、wts和labels.txt（如果有的话）文件的指导，以YOLOv8s为例

```sh
python3 gen_wts_yoloV8.py -w yolov8s.pt
```

**注意:** 改变推理尺寸（默认为640像素）

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

Example for 1280:

-s 1280
or
-s 1280 1280
```

- **步骤 6.** 复制生成的 **cfg**, **wts** 和 **labels.txt** (如有生成) 文件到 **DeepStream-Yolo** 文件夹中

```sh
cp yolov8s.cfg ~/DeepStream-Yolo
cp yolov8s.wts ~/DeepStream-Yolo
cp labels.txt ~/DeepStream-Yolo
```

- **步骤 7.** 打开 **DeepStream-Yolo** 文件夹并编译库

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.2/ 6.1.1 / 6.1
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0
```

- **步骤 8.** 编辑**config_infer_primary_yoloV8.txt**文件以适应你的YOLOv8s模型（假设有80个类别）

```sh
[property]
...
custom-network-config=yolov8s.cfg
model-file=yolov8s.wts
...
num-detected-classes=80
...
```

- **步骤 9.** 编辑 **deepstream_app_config.txt** 文件

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV8.txt
```

- **步骤 10.** 更改**deepstream_app_config.txt**文件中的视频源。 如你所见，这里加载了一个默认的视频文件。

```sh
...
[source0]
...
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
```

## 运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-1.gif" style={{width:1000, height:'auto'}}/></div>

上述结果在搭载FP32精度的YOLOv8s模型的Jetson AGX Orin 32GB H01开发板上运行，分辨率为640x640。我们可以看到，帧率（FPS）大约为60，但这并不是真实的FPS。因为当我们在**deepstream_app_config.txt**文件中 **[sink0]** 部分设置**type=2**时，FPS会被限制为监视器的刷新率，而我们用于此次测试的监视器是60Hz的。 然而，如果你将此值更改为**type=1**，你将能够获得最大FPS，但不会有实时检测输出。

对于同样的视频源和上面使用的相同模型，在将 **[sink0]**下的**type更改为1**之后，可以获得以下结果。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-no-screen.gif" style={{width:1000, height:'auto'}}/></div>

正如你所见，我们可以得到大约139的帧率（FPS），这与真实的帧率值相对应。

## INT8 校准 

如果您想使用INT8精度进行推理，您需要遵循以下步骤：

- **步骤 1.** 安装 OpenCV

```sh
sudo apt-get install libopencv-dev
```

- **步骤 2.** 编译或重新编译带有OpenCV支持的**nvdsinfer_custom_impl_Yolo**库

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.2/ 6.1.1 / 6.1
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0
```

- **步骤 3.** 对于 COCO 数据集, 请下载 [val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing)数据集, 解压，然后将其移动到**DeepStream-Yolo**文件夹中。

- **步骤 4.** 为校准图像创建一个新的目录。

```sh
mkdir calibration
```

- **步骤 5.** 运行以下命令从COCO数据集中随机选择1000张图像进行校准。

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**注意**：NVIDIA建议至少使用500张图像以获得良好的准确性。在这个例子中，选择了1000张图像以获得更高的准确性（图像越多，准确性越高）。更高的INT8_CALIB_BATCH_SIZE值将带来更高的准确性和更快的校准速度。根据你的GPU内存设置它。你可以更改设置中header-1000。例如，对于2000张图像，header设置为-2000。这个过程可能需要很长时间。

- **步骤 6.** 创建一个名为**calibration.txt**的文件，并在其中列出所有选定的图像，

```sh
realpath calibration/*jpg > calibration.txt
```

- **步骤 7.** 设置环境变量

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **步骤 8.** 更新 **config_infer_primary_yoloV8.txt** 文件

将原本的： 

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

修改为：

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **步骤 9.** 在运行推理之前，如前所述，在d**eepstream_app_config.txt**文件中的 **[sink0]** 部分设置**type=2**，以获得最大帧率（FPS）性能。

- **步骤 10.** 运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/2.png" style={{width:1000, height:'auto'}}/></div>

在这里我们得到FPS的值大约为 350!

## 多流配置

NVIDIA DeepStream允许您在一个配置文件中轻松设置多个流，以构建多流视频分析应用程序。我们将在本维基的后面部分演示具有高FPS性能的模型如何真正有助于多流应用，以及一些基准测试。

在这里，我们将以9个流作为示例。我们将更改 **deepstream_app_config.txt** 文件。

- **步骤 1.** 在 **[tiled-display]** 部分内，将行和列更改为3和3，这样我们就可以得到一个3x3的网格，包含9个流。

```sh
[tiled-display]
rows=3
columns=3
```

- **步骤 2.** 在 **[source0]** 部分中, 设置 **num-sources=9** 并添加更多的 **uri**。在这里，我们将简单地将当前示例视频文件复制8次，以构成总共9个流。然而，您可以根据应用程序的需要更改为不同的视频流。

```sh
[source0]
enable=1
type=3
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
num-sources=9
```

现在，如果您再次使用 **deepstream-app -c deepstream_app_config.txt** 命令, 您将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/7.jpg" style={{width:1000, height:'auto'}}/></div>

## trtexec 工具

包含在样本目录中的是一个名为[trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec)的命令行包装工具。 trtexec是一个无需开发自己的应用程序即可使用TensorRT的工具。trtexec工具有三个主要目的：

- 对随机或用户提供的输入数据进行网络基准测试。
- 从模型生成序列化引擎。
- 从构建器生成序列化时序缓存。

在这里，我们可以使用trtexec工具快速对不同参数的模型进行基准测试。但首先，您需要有一个ONNX模型，我们可以通过使用ultralytics yolov8生成这个ONNX模型。

- **步骤 1.** 构建 ONNX 模型:

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **步骤 2.** 使用trtexec构建引擎文件，步骤如下：

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

例如:

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

这将输出如下的性能结果以及生成的 **.engine** 文件。默认情况下，它会将ONNX转换为TensorRT优化的文件，精度为 **FP32**，你可以看到如下的输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/3.png" style={{width:1000, height:'auto'}}/></div>

在这里，我们可以将平均延迟设为7.2毫秒，这相当于139帧每秒（FPS）。这是我们在之前的DeepStream演示中获得的相同性能。

然而，如果你想要 **INT8** 精度，它提供了更好的性能，你可以按照以下方式执行上述命令。

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/4.jpg" style={{width:1000, height:'auto'}}/></div>

在这里，我们可以将平均延迟设为3.2毫秒，这相当于313帧每秒（FPS）。

## YOLOv8 基准测试结果

我们在 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html), [AGX Orin 32GB H01 Kit](https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html) 和 [reComputer J2021](https://www.seeedstudio.com/reComputer-J2021-p-5438.html)上运行了不同 YOLOv8 模型的性能基准测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/14.png" style={{width:1000, height:'auto'}}/></div>

想要了解更多我们使用 YOLOv8 模型进行的性能基准测试，请查看[我们的博客](https://www.seeedstudio.com/blog/2023/03/30/yolov8-performance-benchmarks-on-nvidia-jetson-devices).

## 多流模型基准测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg" style={{width:1000, height:'auto'}}/></div>

在 reComputer Jetson Orin 系列产品上运行了几个 DeepStream 应用程序后，我们使用 YOLOv8s 模型进行了基准测试。

- 首先，我们使用了单个 AI 模型，并在同一 AI 模型上运行了多个流。
- 其次，我们使用了多个 AI 模型，并在多个 AI 模型上运行了多个流。

所有这些基准测试都是在以下条件下进行的：

- YOLOv8s 640x640 图像输入
- 禁用 UI（用户界面）
- 开启最大电源和最高性能模式。

<iframe src="https://jetson-camera-selection-tool.seeedstudio.com/" width="100%" height="690px"></iframe>

从这些基准测试中，我们可以看到，对于最高配置的 Orin NX 16GB 设备，使用单个 YOLOv8s 模型在 INT8 精度下，你可以使用大约 40 个摄像头，大约每秒 5 帧；而使用多个 YOLOv8s 模型在 INT8 精度下，每个流可以使用大约 11 个摄像头，大约每秒 15 帧。对于多模型应用，摄像头的数量较少，因为设备的 RAM 限制以及每个模型占用大量的 RAM。

总结来说，当仅使用 YOLOv8 模型而没有运行应用程序时，Jetson Orin Nano 8GB 可以支持 4-6 个流，而 Jetson Orin NX 16GB 可以管理最多 16-18 个流。然而，这些数字可能会在实际应用中随着 RAM 资源的使用而减少。因此，建议将这些数字作为指导，并在您的特定条件下进行自己的测试。

## 来源

- [YOLOv8 文档](https://docs.ultralytics.com)
- [TensorRT 文档](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)
- [DeepStream SDK 文档](https://docs.nvidia.com/metropolis/deepstream/dev-guide)

## 技术支持与项目讨论

非常感谢您选择我们的产品！我们提供不同的支持方式，以确保您在使用我们的产品时拥有尽可能流畅的体验。我们提供多种沟通渠道，以适应不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>