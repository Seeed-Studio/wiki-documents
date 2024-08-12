---
description: 在NVIDIA Jetson上使用TensorRT部署YOLOv8
title: 在NVIDIA Jetson上使用TensorRT部署YOLOv8
tags:
  - Data Label
  - AI model train
  - AI model deploy
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/YOLOv8-TRT-Jetson
last_update:
  date: 07/17/2023
  author: Lakshantha
---

# 在NVIDIA Jetson上使用TensorRT部署YOLOv8

这篇维基指南解释了如何将YOLOv8模型部署到NVIDIA Jetson平台，并使用TensorRT进行推理。在这里，我们使用TensorRT来最大化Jetson平台上的推理性能。

这里将介绍不同的计算机视觉任务，包括：

- 目标检测
- 图像分割
- 图像分类
- 姿态估计
- 目标跟踪

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/8.gif
" style={{width:1000, height:'auto'}}/></div>

## 先决条件

- Ubuntu 主机 PC 系统安装或使用VMware Workstation Player的虚拟机
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 任何其他运行 JetPack 5.1.1 或更高版本的 NVIDIA Jetson 设备

:::注意
此 wiki 已在 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 和 [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) 上进行测试并验证，该设备由 NVIDIA Jetson 或 NX 16GB 模块驱动 
:::

## 刷写 JetPack 到 Jetson

现在您需要确保 Jetson 设备已刷写 [JetPack](https://developer.nvidia.com/embedded/jetpack) 系统。您可以使用 NVIDIA SDK Manager 或命令行来刷写 JetPack 到设备。

对于 Seeed Jetson 驱动设备的刷写指南，请参考以下链接：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

:::注意
请确保刷写 JetPack 版本 5.1.1，因为这是我们在本 wiki 中验证过的版本
:::

## 一行代码将 YOLOv8 部署到 Jetson！

在您将 Jetson 设备刷写 JetPack 系统后，您可以简单地运行以下命令来运行 YOLOv8 模型。这将首先下载并安装必要的包、依赖项，设置环境，并从 YOLOv8 下载预训练模型以执行对象检测、图像分割、姿态估计和图像分类任务！

```sh
wget files.seeedstudio.com/YOLOv8-Jetson.py && python YOLOv8-Jetson.py
```

:::注意
上述脚本的源代码可以在此找到。[here](https://github.com/yuyoujiang/Run-YOLOv8-in-One-Line-on-Jetson)
:::

## 使用预训练模型

开始使用 YOLOv8 的最快方式是使用 YOLOv8 提供的预训练模型。然而，这些是 PyTorch 模型，因此在 Jetson 上进行推理时将仅利用 CPU。如果您希望在 Jetson 上运行 GPU 时获得这些模型的最佳性能，可以通过遵循本 wiki 的这一部分将 PyTorch 模型导出到 TensorRT。

```sh
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="detec" label="Object Detection">

YOLOv8 提供了 5 种针对对象检测任务的预训练 PyTorch 模型权重，这些模型是在 COCO 数据集上训练的，输入图像尺寸为 640x640。

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>mAPval<br />50-95</th>
      <th>CPU ONNX<br />速度<br />(ms)</th>
      <th>A100 TensorRT<br />速度<br />(ms)</th>
      <th>参数<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n.pt" target="_blank" rel="noopener noreferrer">YOLOv8n</a></td>
      <td>640</td>
      <td>37.3</td>
      <td>80.4</td>
      <td>0.99</td>
      <td>3.2</td>
      <td>8.7</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt" target="_blank" rel="noopener noreferrer">YOLOv8s</a></td>
      <td>640</td>
      <td>44.9</td>
      <td>128.4</td>
      <td>1.20</td>
      <td>11.2</td>
      <td>28.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m.pt" target="_blank" rel="noopener noreferrer">YOLOv8m</a></td>
      <td>640</td>
      <td>50.2</td>
      <td>234.7</td>
      <td>1.83</td>
      <td>25.9</td>
      <td>78.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l.pt" target="_blank" rel="noopener noreferrer">YOLOv8l</a></td>
      <td>640</td>
      <td>52.9</td>
      <td>375.2</td>
      <td>2.39</td>
      <td>43.7</td>
      <td>165.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x.pt" target="_blank" rel="noopener noreferrer">YOLOv8x</a></td>
      <td>640</td>
      <td>53.9</td>
      <td>479.1</td>
      <td>3.53</td>
      <td>68.2</td>
      <td>257.8</td>
    </tr>
  </tbody>
</table>


参考: https://docs.ultralytics.com/tasks/detect

您可以选择并从上表下载您所需的模型，然后执行以下命令在图像上进行推理。

```sh
yolo detect predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

在这里，对于模型，您可以更改为 yolov8s.pt、yolov8m.pt、yolov8l.pt 或 yolov8x.pt 中的任何一个，它将下载相应的预训练模型。

您还可以连接一个网络摄像头，并执行以下命令。

```sh
yolo detect predict model=yolov8n.pt source='0' show=True
```

:::注意
如果在执行上述命令时遇到任何错误，请尝试在命令的末尾添加 "device=0"。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.gif
" style={{width:1000, height:'auto'}}/></div>

:::注意
上述操作是在 reComputer J4012 或 reComputer Industrial J4012 上运行的，并使用经过 640x640 输入尺寸训练的 YOLOv8s 模型，并采用 TensorRT FP16 精度。
:::

</TabItem>
<TabItem value="classfiy" label="Image Classification">

YOLOv8 提供了 5 种针对图像分类任务的预训练 PyTorch 模型权重，这些模型是在 ImageNet 数据集上训练的，输入图像尺寸为 224x224。您可以在下面找到它们。

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>acc<br />top1</th>
      <th>acc<br />top5<br /></th>
      <th>CPU ONNX<br />速度<br />(ms)<br /></th>
      <th>A100 TensorRT<br />速度<br />(ms)<br /><br /></th>
      <th>参数<br />(M)<br /></th>
      <th>FLOPs<br />(B) at 640</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>YOLOv8n-cls</td>
      <td>224</td>
      <td>66.6</td>
      <td>87.0</td>
      <td>12.9</td>
      <td>0.31</td>
      <td>2.7</td>
      <td>4.3</td>
    </tr>
    <tr>
      <td>YOLOv8s-cls</td>
      <td>224</td>
      <td>72.3</td>
      <td>91.1</td>
      <td>23.4</td>
      <td>0.35</td>
      <td>6.4</td>
      <td>13.5</td>
    </tr>
    <tr>
      <td>YOLOv8m-cls</td>
      <td>224</td>
      <td>76.4</td>
      <td>93.2</td>
      <td>85.4</td>
      <td>0.62</td>
      <td>17.0</td>
      <td>42.7</td>
    </tr>
    <tr>
      <td>YOLOv8l-cls</td>
      <td>224</td>
      <td>78.0</td>
      <td>94.1</td>
      <td>163.0</td>
      <td>0.87</td>
      <td>37.5</td>
      <td>99.7</td>
    </tr>
    <tr>
      <td> YOLOv8x-cls</td>
      <td>224</td>
      <td>78.4</td>
      <td>94.3</td>
      <td>232.0</td>
      <td>1.01</td>
      <td>57.4</td>
      <td>154.8</td>
    </tr>
  </tbody>
</table>

参考: https://docs.ultralytics.com/tasks/classify

您可以选择您想要的模型，并执行以下命令在图像上运行推理。

```sh
yolo classify predict model=yolov8n-cls.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

在这里，对于模型，您可以更改为 yolov8s-cls.pt、yolov8m-cls.pt、yolov8l-cls.pt 或 yolov8x-cls.pt 中的任何一个，它将下载相应的预训练模型。

您还可以连接一个网络摄像头，并执行以下命令。

```sh
yolo classify predict model=yolov8n-cls.pt source='0' show=True
```

:::注意
如果您在执行上述命令时遇到任何错误，请尝试在命令的末尾添加"device=0"。
:::

(更新为 224 像素推理。)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/5.gif
" style={{width:1000, height:'auto'}}/></div>

:::注意
上述操作是在 reComputer J4012 或 reComputer Industrial J4012 上运行的，并使用经过 224x224 输入尺寸训练的 YOLOv8s-cls 模型，并采用 TensorRT FP16 精度。同时，在使用 TensorRT 导出的模型时，请确保在推理命令中传递参数 **imgsz=224**，因为推理引擎默认接受 640 像素的图像尺寸。
:::

</TabItem>
<TabItem value="segment" label="Image Segmentation">

YOLOv8 提供了 5 种针对图像分割任务的预训练 PyTorch 模型权重，这些模型是在 COCO 数据集上训练的，输入图像尺寸为 640x640。您可以在下面找到它们：

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>mAPbox<br />50-95</th>
      <th>mAPmask<br />50-95</th>
      <th>CPU ONNX<br />速度<br />(ms)</th>
      <th>A100 TensorRT<br />速度<br />(ms)</th>
      <th>参数<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-seg.pt">YOLOv8n-seg</a></td>
      <td>640</td>
      <td>36.7</td>
      <td>30.5</td>
      <td>96.1</td>
      <td>1.21</td>
      <td>3.4</td>
      <td>12.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-seg.pt">YOLOv8s-seg</a></td>
      <td>640</td>
      <td>44.6</td>
      <td>36.8</td>
      <td>155.7</td>
      <td>1.47</td>
      <td>11.8</td>
      <td>42.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-seg.pt">YOLOv8m-seg</a></td>
      <td>640</td>
      <td>49.9</td>
      <td>40.8</td>
      <td>317.0</td>
      <td>2.18</td>
      <td>27.3</td>
      <td>110.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-seg.pt">YOLOv8l-seg</a></td>
      <td>640</td>
      <td>52.3</td>
      <td>42.6</td>
      <td>572.4</td>
      <td>2.79</td>
      <td>46.0</td>
      <td>220.5</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-seg.pt">YOLOv8x-seg</a></td>
      <td>640</td>
      <td>53.4</td>
      <td>43.4</td>
      <td>712.1</td>
      <td>4.02</td>
      <td>71.8</td>
      <td>344.1</td>
    </tr>
  </tbody>
</table>

参考: https://docs.ultralytics.com/tasks/segment


您可以选择您想要的模型，并执行以下命令在图像上运行推理

```sh
yolo segment predict model=yolov8n-seg.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

在这里，对于模型，您可以更改为 yolov8s.pt、yolov8m.pt、yolov8l.pt 或 yolov8x.pt 中的任何一个，它将下载相应的预训练模型。

您还可以连接一个网络摄像头，并执行以下命令。

```sh
yolo segment predict model=yolov8n-seg.pt source='0' show=True
```

:::注意
如果您在执行上述命令时遇到任何错误，请尝试在命令的末尾添加 "device=0"。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/3.gif
" style={{width:1000, height:'auto'}}/></div>

:::注意
上述操作是在 reComputer J4012 或 reComputer Industrial J4012 上运行的，并使用经过 640x640 输入尺寸训练的 YOLOv8s-seg 模型，并采用 TensorRT FP16 精度。
:::

</TabItem>
<TabItem value="pose" label="Pose Estimation">

YOLOv8 提供了 6 种针对姿态估计任务的预训练 PyTorch 模型权重，这些模型是在 COCO 关键点数据集上训练的，输入图像尺寸为 640x640。您可以在下面找到它们：

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>尺寸<br />(像素)</th>
      <th>mAPpose<br />50-95</th>
      <th>mAPpose<br />50</th>
      <th>CPU ONNX<br />速度<br />(ms)</th>
      <th>A100 TensorRT<br />速度<br />(ms)</th>
      <th>参数<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-pose.pt">YOLOv8n-pose</a></td>
      <td>640</td>
      <td>50.4</td>
      <td>80.1</td>
      <td>131.8</td>
      <td>1.18</td>
      <td>3.3</td>
      <td>9.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-pose.pt">YOLOv8s-pose</a></td>
      <td>640</td>
      <td>60.0</td>
      <td>86.2</td>
      <td>233.2</td>
      <td>1.42</td>
      <td>11.6</td>
      <td>30.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-pose.pt">YOLOv8m-pose</a></td>
      <td>640</td>
      <td>65.0</td>
      <td>88.8</td>
      <td>456.3</td>
      <td>2.00</td>
      <td>26.4</td>
      <td>81.0</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-pose.pt">YOLOv8l-pose</a></td>
      <td>640</td>
      <td>67.6</td>
      <td>90.0</td>
      <td>784.5</td>
      <td>2.59</td>
      <td>44.4</td>
      <td>168.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose.pt">YOLOv8x-pose</a></td>
      <td>640</td>
      <td>69.2</td>
      <td>90.2</td>
      <td>1607.1</td>
      <td>3.73</td>
      <td>69.4</td>
      <td>263.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose-p6.pt">YOLOv8x-pose-p6</a></td>
      <td>1280</td>
      <td>71.6</td>
      <td>91.2</td>
      <td>4088.7</td>
      <td>10.04</td>
      <td>99.1</td>
      <td>1066.4</td>
    </tr>
  </tbody>
</table>

参考: https://docs.ultralytics.com/tasks/pose

选择您所需的模型后，您可以执行以下命令来对图像进行推理：

```sh
yolo pose predict model=yolov8n-pose.pt source='https://ultralytics.com/images/bus.jpg'
```

在这里，对于模型，您可以更改为 yolov8s.pt、yolov8m.pt、yolov8l.pt 或 yolov8x.pt 中的任何一个，它将下载相应的预训练模型。

您还可以连接一个网络摄像头，并执行以下命令。 

```sh
yolo pose predict model=yolov8n-pose.pt source='0'
```

:::注意
如果您在执行上述命令时遇到任何错误，请尝试在命令的末尾添加"device=0"。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/4.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="track" label="Object Tracking">

对象跟踪是一项涉及识别视频中对象的位置和类别，然后为该检测分配一个唯一 ID 的任务。

基本上，对象跟踪的输出与对象检测相同，只是增加了对象 ID。

参考: https://docs.ultralytics.com/modes/track

您可以选择基于对象检测或图像分割的所需模型，并执行以下命令在视频上运行推理：

```sh
yolo track model=yolov8n.pt source="https://youtu.be/Zgi9g1ksQHc"
```

在这里，对于模型，您可以更改为 yolov8n.pt, yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt, yolov8n-seg.pt, yolov8s-seg.pt, yolov8m-seg.pt, yolov8l-seg.pt, yolov8x-seg.pt 中的任何一个，它将下载相应的预训练模型。

您还可以连接一个网络摄像头，并执行以下命令。 

```sh
yolo track model=yolov8n.pt source="0"
```

:::注意
如果您在执行上述命令时遇到任何错误，请尝试在命令的末尾添加 "device=0"。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/6.gif
" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/7.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

<!-- Code END -->

---

## 使用 TensorRT 提高推理速度

正如我们之前提到的，如果您想要提高在 Jetson 上运行 YOLOv8 模型的推理速度，您首先需要将原始的 PyTorch 模型转换为 TensorRT 模型。

按照以下步骤将 YOLOv8 PyTorch 模型转换为 TensorRT 模型。

:::注意
这对我们之前提到的所有四种计算机视觉任务都有效 
:::

- **步骤 1.** 执行导出命令时，请指定模型路径。

```sh
yolo export model=<path_to_pt_file> format=engine device=0
```

例如:

```sh
yolo export model=yolov8n.pt format=engine device=0
```

:::注意
如果您遇到有关 cmake 的错误，您可以忽略它。请耐心等待 TensorRT 导出完成。这可能需要几分钟时间。
:::

TensorRT 模型文件 (.engine) 创建完成后，您将看到如下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/1.jpg
" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 
如果您想要传递额外的参数，您可以通过以下表格进行：

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Value</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>imgsz</td>
    <td>640</td>
    <td>Image size as scalar or (h, w) list, i.e. (640, 480)</td>
  </tr>
  <tr>
    <td>half</td>
    <td>False</td>
    <td>FP16 quantization</td>
  </tr>
  <tr>
    <td>dynamic</td>
    <td>False</td>
    <td>Dynamic axes</td>
  </tr>
  <tr>
    <td>simplify</td>
    <td>False</td>
    <td>Simplify model</td>
  </tr>
  <tr>
    <td>workspace</td>
    <td>4</td>
    <td>Workspace size (GB)</td>
  </tr>
</tbody>
</table>

例如，如果您想要将您的 PyTorch 模型转换为 FP16 量化的 TensorRT 模型，请执行以下命令：

```sh
yolo export model=yolov8n.pt format=engine half=True device=0
```

一旦模型成功导出，您可以在运行 4 项任务（检测、分类、分割、姿态估计）时，在 **yolo** 的 **predict** 命令中使用 **model=** 参数替换此模型。以下是如何执行此操作的示例：

例如, 在目标检测中:

```sh
yolo detect predict model=yolov8n.engine source='0' show=True
```

## 使用自己的AI模型

### 数据收集和标注

如果您有特定的 AI 应用，并希望使用适合您应用的自带 AI 模型，您可以收集自己的数据集，对它们进行标注，然后使用 YOLOv8 进行训练。 

如果您不想自己收集数据，您也可以选择已经准备好的公共数据集。您可以下载许多公开可用的数据集，例如 [COCO dataset](https://cocodataset.org), [Pascal VOC dataset](http://host.robots.ox.ac.uk/pascal/VOC)等。[Roboflow Universe](https://universe.roboflow.com) 是一个十分好用的平台，它提供了广泛的数据集，拥有超过[90,000+ datasets with 66+ million images](https://blog.roboflow.com/computer-vision-datasets-and-apis)  个数据集和 66+ 百万图像，适用于构建计算机视觉模型。此外，您也可以简单地在 Google 上搜索开源数据集，并从可用的多种数据集中进行选择。

如果您有自己的数据集并希望对图像进行标注，我们建议您使用[Roboflow](https://roboflow.com)提供的标注工具。 请按照 [这里](https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow) 了解更多信息。您也可以遵循 [本指引](https://docs.roboflow.com/annotate/use-roboflow-annotate) 学习标注

### 训练

这里我们有三种训练模型的方法。

1. 第一种方法是使用 [Ultralytics HUB](https://ultralytics.com/hub)。您可以轻松地将 Roboflow 集成到 Ultralytics HUB 中，这样您所有的 Roboflow 项目都将随时可用于训练。这里它提供了一个 Google Colab 笔记本，以便您轻松开始训练过程，并且还可以实时查看训练进度。

2. 第二种方法是使用我们创建的 Google Colab 工作区来简化训练过程。在这里，我们使用 Roboflow API 从 Roboflow 项目下载数据集。

3. 第三种方法是使用本地 PC 进行训练过程。在这里，您需要确保您拥有足够强大的 GPU，并且还需要手动下载数据集。

<!-- Code -->

<Tabs>
<TabItem value="Ultralytics" label="Ultralytics HUB + Roboflow + Google Colab">

在这里，我们使用 Ultralytics HUB 加载 Roboflow 项目，然后在 Google Colab 上进行训练。

- **步骤 1.** 访问 [此网站](https://hub.ultralytics.com/signup) 并注册一个 Ultralytics 账户。

- **步骤 2.** 当您使用新创建的账户登录后，您将看到如下控制面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 3.** 访问[此网站](https://app.roboflow.com/login) ，并注册一个 Roboflow 账户。

- **步骤 4.** 当您使用新创建的账户登录后，您将看到如下控制面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/11.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 5.** 创建一个新的工作区，并根据我们为您准备的[维基指南](https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow)，在工作区内创建一个新项目。您也可以[点击这里](https://blog.roboflow.com/getting-started-with-roboflow)，从官方的 Roboflow 文档中了解更多信息。

- **步骤 6.** 一旦您在工作区内创建了几个项目，界面将如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/12.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 7.** 前往 **Settings** 并点击 **Roboflow API**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/13.jpg
" style={{width:300, height:'auto'}}/></div>

- **步骤 8.** 点击 **copy** 按钮以复制 **Private API Key**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/14.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 9.** 返回到 Ultralytics HUB 的仪表板，点击 **集成（Integrations）**，将我们之前复制的 API 密钥粘贴到空列中，然后点击 **添加（Add）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/15.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 10** 如果您看到您的工作空间名称被列出，这意味着集成已成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/16.jpg
" style={{width:550, height:'auto'}}/></div>

- **步骤 11** 转到 **数据集（Datasets）**页面，您将在这里看到您所有的 Roboflow 项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/17.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 12** 点击一个项目以查看有关数据集的更多信息。在这里，我选择了一个能够检测健康和损坏苹果的数据集。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/18.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 13** 点击 **Train Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/19.jpg
" style={{width:500, height:'auto'}}/></div>

- **步骤 14** 选择**架构**，设置**模型名称（可选）**，然后点击**继续**。在这里，我们选择了YOLOv8s作为模型架构。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/22.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 15** 在**高级选项**下，根据你的偏好配置设置，复制并粘贴Colab代码（这将在稍后粘贴到Colab工作区），然后点击打开**Google Colab**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/24.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 16** 如果你还没有登录你的Google账户，请登录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/25.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 17** 导航至 `Runtime > Change runtime type`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/26.jpg
" style={{width:500, height:'auto'}}/></div>

- **步骤 18** 在**硬件加速器**下选择**GPU**，然后选择**GPU类型**中可用的最高选项，并点击**保存**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/27.jpg
" style={{width:500, height:'auto'}}/></div>

- **步骤 19** 点击 **Connect**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/28.jpg
" style={{width:250, height:'auto'}}/></div>

- **步骤 20** 点击**RAM, Disk**按钮来检查硬件资源的使用情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/31.jpg
" style={{width:600, height:'auto'}}/></div>

- **步骤 21** 点击**Play按钮**来运行第一个代码单元。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/29.jpg
" style={{width:750, height:'auto'}}/></div>

- **步骤 22** 将我们之前从Ultralytics HUB复制的代码单元粘贴在**开始**部分下面，并运行它以开始训练。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/30.jpg
" style={{width:650, height:'auto'}}/></div>

- **步骤 23** 现在，如果你返回到Ultralytics HUB，你会看到**已连接**的消息。点击**完成**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/32.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 24** 在这里，你将实时看到模型在Google Colab上训练时的**边框损失(Box Loss)、类别损失(Class Loss)和目标损失(Object Loss)**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/33.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 25** 训练完成后，你将在Google Colab上看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/34.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 26** 现在返回到Ultralytics HUB，转到**预览**标签页，上传一张测试图片来检查训练好的模型的表现如何。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/35.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 27** 最后，转到**部署**标签页，并下载你选择格式的训练好的模型，以便使用YOLOv8进行推理。在这里，我们选择了PyTorch格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/36.png
" style={{width:1000, height:'auto'}}/></div>

现在，你可以使用这个下载的模型来执行我们在本维基中之前解释过的任务。你只需要将模型文件替换为你自己的模型即可。

例如:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="Roboflow" label="Roboflow + Google Colab">

在这里，我们使用Google Colaboratory环境在云端进行训练。此外，我们在Colab中使用Roboflow API轻松下载我们的数据集。

- **步骤 1.** 点击 [这里](https://colab.research.google.com/gist/lakshanthad/9fbe33058cb7cab49ac8fc345143d849/yolov5-training-for-jetson.ipynb) 打开一个已经准备好的Google Colab工作区并按照工作区中提到的步骤进行操作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/39.jpg
" style={{width:800, height:'auto'}}/></div>

在训练完成后，你将会看到如下的输出信息：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/40.jpg
" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 在Google Colab的"文件"(File)标签页下，如果你导航到路径 `runs/train/exp/weights`，你会看到一个名为**best.pt**的文件。这个文件是训练过程中生成的最佳模型权重。你需要下载这个文件，然后将其复制到你的Jetson设备上，因为你稍后将在Jetson设备上使用这个模型进行推理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/41.jpg
" style={{width:500, height:'auto'}}/></div>

现在，你可以使用这个下载的模型来执行我们在本维基之前解释过的任务。你只需要将模型文件替换为你自己的模型。

例如:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="PC" label="Roboflow + Local PC">

在这里，你可以使用装有Linux操作系统的电脑进行训练。我们在这个维基中使用了Ubuntu 20.04操作系统的电脑。


- **步骤 1.** 如果你的系统中没有安装pip，你可以按照以下步骤在Linux系统上安装它：

```sh
sudo apt install python3-pip -y
```

- **步骤 2.** 安装Ultralytics及其依赖项。

```sh
pip install ultralytics
```

- **步骤 3.** 在Roboflow上，在您的项目中，转到**版本(Versions)**，选择**导出数据集(Export Dataset)**，选择**格式**为**YOLOv8**，选择**下载zip到电脑(download zip to computer)**，然后点击**继续(Continue)**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/42.jpg
" style={{width:1000, height:'auto'}}/></div>

- **步骤 4.** 解压下载的 zip 文件

- **步骤 5.** 执行以下命令以开始训练。在这里，你需要将**path_to_yaml**替换为解压后的zip文件中.yaml文件的位置。

```sh
yolo train data=<path_to_yaml> model=yolov8s.pt epochs=100 imgsz=640 batch=-1
```

:::注意
这里图像尺寸被设置为640x640像素。我们使用批量大小（batch-size）为-1，这将自动确定最佳的批量大小。你也可以根据你的偏好更改训练周期（epoch）。在这里，你可以将预训练模型更改为任何检测（detect）、分割（segment）、分类（classify）、姿态（pose）模型。
:::

训练完成后，你会看到以下类型的输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/43.png
" style={{width:1000, height:'auto'}}/></div>

- **步骤 6.** 在目录 **runs/detect/train/weights** 下，你会看到一个名为 **best.pt** 的文件。这是训练过程中生成的最佳模型。你需要下载这个文件，并将其复制到你的Jetson设备上，因为稍后将使用这个模型在Jetson设备上进行推理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/44.png
" style={{width:500, height:'auto'}}/></div>

现在，你可以使用这个下载的模型来执行我们在本维基之前解释过的任务。你只需要将模型文件替换为你自己的模型。

例如:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
</Tabs>

<!-- Code END -->

---

## 性能基准测试

### 准备

我们已经对所有由YOLOv8支持的计算机视觉任务进行了性能基准测试，这些任务在搭载NVIDIA Jetson Orin NX 16GB模块的reComputer J4012或reComputer Industrial J4012上运行。

在样本目录中包含了一个名为[trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec)的命令行包装工具。trtexec是一个使用TensorRT而无需开发自己的应用程序的工具。trtexec工具有三个主要目的：

- 在随机或用户提供的输入数据上对网络进行基准测试。
- 从模型生成序列化引擎。
- 从构建器生成序列化的时序缓存。

在这里，我们可以使用trtexec工具快速对不同参数的模型进行基准测试。但首先，你需要有一个ONNX模型，我们可以通过使用Ultralytics YOLOv8来生成这个ONNX模型。

- **步骤 1.** 构建 ONNX 模型:

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **步骤 2.** 使用trtexec构建引擎文件的步骤如下：

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

例如:

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

这样做将输出以下性能结果，同时会生成一个.engine文件。默认情况下，它会将ONNX转换为FP32精度下优化的TensorRT文件，你可以按照以下方式查看输出结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/46.jpg
" style={{width:1000, height:'auto'}}/></div>

如果您希望使用**FP16精度**，它比**FP32**提供更好的性能，您可以按照以下方式执行上述命令：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --fp16 --saveEngine=/home/nvidia/yolov8s.engine 
```

如果您希望使用**INT8**精度，它比**FP16**带来更好的性能，您可以按照以下方式执行上面的命令：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

### 结果

以下我们总结了在reComputer J4012和reComputer Industrial J4012上运行的所有四个计算机视觉任务的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/45.png
" style={{width:1000, height:'auto'}}/></div>

## 额外演示：使用YOLOv8进行运动检测和计数器。

我们已经构建了一个使用YOLOv8-Pose模型进行运动检测和计数的人体姿态估计演示应用程序。你可以访问[项目页面e](https://github.com/yuyoujiang/Exercise-Counter-with-YOLOv8-on-NVIDIA-Jetson)来了解更多关于这个演示的信息，并将其部署到你自己的Jetson设备上！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif
" style={{width:1000, height:'auto'}}/></div>

## 手动为NVIDIA Jetson设备配置YOLOv8

如果之前提到的一键脚本存在一些错误，你可以按照下面的步骤逐个准备Jetson设备以使用YOLOv8。

### 安装 Ultralytics 包

- **步骤 1.** 访问Jetson设备的终端并安装及升级pip

```sh
sudo apt update
sudo apt install -y python3-pip -y
pip3 install --upgrade pip
```

- **步骤 2.**  安装 Ultralytics 包

```sh
pip3 install ultralytics
```

- **步骤 3.**  更新 numpy 至最新版本

```sh
pip3 install numpy -U
```

- **步骤 4.** 重启设备

```sh
sudo reboot
```

### 卸载 Torch 和 Torchvision

上述的Ultralytics安装过程会安装Torch（PyTorch）和Torchvision。然而，通过pip安装的这两个包与Jetson平台不兼容，因为Jetson平台基于**ARM aarch64**架构。因此，我们需要手动安装预构建的PyTorch pip wheel并从源代码编译/安装Torchvision。

```sh
pip3 uninstall torch torchvision
```

### 安装 PyTorch 和 Torchvision

访问 [网页](https://forums.developer.nvidia.com/t/pytorch-for-jetson) 进入 PyTorch 和 Torchvision 链接.

以下是JetPack 5.0及以上版本支持的一些版本。

**PyTorch v2.0.0**

支持带有Python 3.8的JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1)

**file_name:** torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
**URL:** https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl

**PyTorch v1.13.0**

支持带有 Python 3.8的 JetPack 5.0 (L4T R34.1) / JetPack 5.0.2 (L4T R35.1) / JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) 

**file_name:** torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v502/pytorch/torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl

- **步骤 1.** 根据你的JetPack版本，按照以下格式安装torch。

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

例如，我们这里使用的是**JP5.1.1**版本，因此我们选择了**PyTorch v2.0.0**版本。

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl -O torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```

- **步骤 2.** 根据你已经安装的PyTorch版本来安装torchvision。例如，我们选择了PyTorch版本v2.0.0，这就意味着我们需要选择Torchvision版本v0.15.2。

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone https://github.com/pytorch/vision torchvision
cd torchvision
git checkout v0.15.2
python3 setup.py install --user
```

这里是一个根据你安装的PyTorch版本需要安装的相应torchvision版本的列表：

- PyTorch v2.0.0 - torchvision v0.15
- PyTorch v1.13.0 - torchvision v0.14

如果你需要更多详细列表, 请访问 [此链接](https://github.com/pytorch/vision).

### 安装 ONNX 和降低 Numpy版本

这只有在你想要将PyTorch模型转换为TensorRT时才需要。

- **步骤 1.** 安装ONNX，这是一个需求。

```sh
pip3 install onnx
```

- **步骤 2.** 降低Numpy版本以避免报错

```sh
pip3 install numpy==1.20.3
```

## 来源

- [YOLOv8 documentation](https://docs.ultralytics.com)
- [Roboflow documentation](https://docs.roboflow.com)
- [TensorRT documentation](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)

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