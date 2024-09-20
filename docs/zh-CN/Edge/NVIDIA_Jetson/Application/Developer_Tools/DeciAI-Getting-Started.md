---
description: 在 reComputer 应用 Deci 平台
title: 在 reComputer 应用 Deci 平台
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/DeciAI-Getting-Started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# 在 reComputer 应用 Deci 平台

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Deci平台能够方便地管理、优化、部署和提供在生产环境中使用的模型。您可以继续使用流行的深度学习框架，如TensorFlow、PyTorch、Keras和ONNX。您只需使用Deci基于Web的平台或Deci Python客户端即可从您的代码中运行它。

Deci提供：

* 性能加速 - 通过使用Deci的自动神经架构构建（AutoNAC）技术，在任何硬件上将模型推理性能加速2倍至10倍，而不会影响准确性。
* 在任何硬件上扩展 - 削减高达80%的云计算成本和BOM，以实现规模化推理，无论是来自私有云还是公共云，来自您自己的服务器还是任何计算机、边缘设备或移动设备。
* 推理基准测试 - 在任何目标硬件环境和批处理大小上对模型进行基准测试，找到模型的最佳吞吐量、延迟、内存使用和云成本。
* 模型打包 - 快速轻松部署到生产环境 - 无缝部署从Deci Lab训练的模型到任何生产环境，包括所有环境库依赖项在一个单独的封装容器中。
* 模型服务 - Deci的专有深度学习运行时推理引擎可以部署在您自己的机器上（在任何硬件上 - 本地 / 边缘 / 云）。 Deci提供以下选项，用于将您的Deci优化模型部署为独立的高效运行时服务器：


 * Deci的运行时推理容器（RTiC），这是一个容器化的机器学习运行时引擎。
* Deci的INFERY（来自推理一词），使您能够从Python包中运行模型。

## 支持的硬件

Deci受以下与Jetson相关的硬件支持：

* Seeed提供的套件：

* reComputer J1010内置Jetson Nano
* reComputer J1020内置Jetson Nano
* reComputer J2011内置Jetson Xavier NX 8GB
* reComputer J2012内置Jetson Xavier NX 16GB

* Seeed的载板：

* Jetson Mate
* Jetson SUB 迷你电脑
* Jetson Xavier AGX H01套件
* A203载板
* A203（第2版）载板
* A205载板
* A206载板

* NVIDIA官方开发套件：

* NVIDIA® Jetson Nano开发套件
* NVIDIA® Jetson Xavier NX开发套件
* NVIDIA® Jetson AGX Xavier开发套件
* NVIDIA® Jetson TX2开发套件
* NVIDIA® Jetson AGX Orin开发套件

* NVIDIA官方SoMs：
  
* NVIDIA® Jetson Nano 模块
* NVIDIA® Jetson Xavier NX 模块
* NVIDIA® Jetson TX2 NX 模块
* NVIDIA® Jetson TX2 模块
* NVIDIA® Jetson AGX Xavier 模块

如果您拥有以上任何硬件，您可以继续在您的硬件上使用 Deci。

## 硬件先决条件

准备以下硬件：

* 任何运行 JetPack 4.6 的上述 Jetson 设备
* 显示器，键盘，鼠标（可选）

## 注册 Deci 账户

* **步骤 1.** 访问 [此页面](https://console.deci.ai/sign-up) 注册 Deci 账户

* **步骤 2.** 输入所需详细信息并完成注册过程

您现在将看到 Deci 实验室平台

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## Deci实验室模型动物园与预优化模型

默认情况下，Deci实验室包括 **ResNet50基准** 模型，已经加载到界面中，并针对不同硬件进行了一些优化。这还不是全部。Deci在Deci模型动物园中提供了大量基础模型及相应针对不同硬件优化的版本。点击 **模型动物园** 和 **列表** 查看所有可用模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

作为示例，我们将在搜索栏中搜索 **YOLOX** 以查看所有YOLOX模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

正如您所看到的，有基础模型，如 **YOLOX\_Nano**, **YOLOX\_Small** 和优化模型，如 **YOLOX\_Nano Jetson Nano 优化**, **YOLOX\_Nano Jetson Xavier 优化**

## 优化您自己的模型

如上所述，您可以直接使用预优化模型，无需手动优化。 但是，如果您想使用自己的模型，您可以将您的模型上传到Deci实验室，并根据目标硬件进行优化

**步骤 1:** 在 Deci 实验室中，点击 **+ 新建模型**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2:** 根据您的模型选择适当的任务。这里我们选择了 **目标检测**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**步骤 3:** 为模型输入一个名称，然后点击 **下一步**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**步骤 4:** 选择一个模型框架（在本例中为 ONNX），根据所选框架上传模型，然后点击 **下一步**。这里我们上传了 [yolov6n.onnx 模型](https://github.com/meituan/YOLOv6/releases/tag/0.1.0).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**步骤 5:** 选择 **主要硬件**, **推理批处理大小**, **量化级别** 然后点击 **下一步**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**第6步：** 添加性能目标和约束。 如果您使用的话，这将非常有用 **AutoNAC** 这是一个包含在 **高级版本中的功能**. AutoNAC可以显着提高模型推理性能，同时减小模型大小等等。 如果您没有使用AutoNAC，您需要为 **吞吐量** 在这里我们将其设置为40（可以是一个随机值）。最后点击 **开始** 开始优化过程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

现在优化过程将显示其进展如下，并将在几分钟后完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## 比较模型性能

我们可以使用Deci Lab平台来比较基础模型和优化模型之间的性能，或者部署模型到目标硬件并运行基准测试。 尽管在Deci Lab上可视化一切更容易，但建议部署模型并在目标设备上运行基准测试，以确保性能指标对特定硬件准确。

### 在Deci实验室上可视化

这里我们将使用 **YOLOX\_Nano** 基础模型和 **YOLOX\_Nano Jetson Xavier NX 优化** 模型进行比较。

**步骤 1:** 导航到模型库并点击 **克隆** 旁边的 **YOLOX\_Nano** 基础模型和 **YOLOX\_Nano Jetson Xavier NX 优化** 模型

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2:** 在Deci实验室中，点击 **YOLOX\_Nano** 模型下方 **MODEL\_VERSIONS** 以查看 **模型见解** 部分。

**步骤 3:** 选择 **Jetson Xavier** 作为 **目标硬件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

现在您将看到所有性能指标为 **YOLOX\_Nano** 模型，如果要部署到Jetson Xavier NX设备中。

**步骤 4:** 返回Deci实验室的主页，点击 **YOLOX\_Nano Jetson Xavier NX 优化** 模型下方 **MODEL\_VERSIONS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

现在您将看到所有性能指标为 **YOLOX\_Nano Jetson Xavier NX 优化** 模型，如果要部署到Jetson Xavier NX设备中。

#### 性能比较

我们可以使用下面的表格比较之前为Jetson Xavier目标硬件获得的结果

| | YOLOX\_Nano | YOLOX\_Nano Jetson Xavier NX 优化 |
| ------- | ----------- | ------------------------------- |
| 准确率 | 25.8 | 25.8 |
| 吞吐量 | 62.8fps | 175.8fps |
| 延迟 | 15.9361ms | 5.6897ms |
| GPU内存占用 | 1.05MB | 1.01MB |
| 模型大小 | 3.66MB | 9.74MB |

正如你所看到的，主要的性能提升在于吞吐量，优化后的模型几乎 **快2.7倍** 比基础模型更快。

### 在Jetson设备上部署并基准测试

我们现在将在Jetson Xavier NX设备上部署上述两个模型，并进行基准测试，以确保我们获得准确的性能结果。

#### 安装INFERY

* **步骤 1.** 在Jetson设备上打开终端窗口并更新软件包列表

```sh
sudo apt update 
```

* **步骤 2.** 安装pip包管理器

```sh
sudo apt install python3-pip
```

* **步骤3。** 将pip更新到最新版本

```sh
python3 -m pip install -U pip
```

* **步骤4。** 为Jetson安装INFERY

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### 加载模型

* **步骤 1.** 在Deci Lab中，将鼠标悬停在模型名称上并点击 **部署** 从弹出菜单中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

* **步骤 2.** 点击 **下载模型** 将模型下载到PC上，然后将该模型文件复制到Jetson设备的主目录

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

* **步骤3。** 在Jetson设备上打开一个终端窗口并执行

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

* **步骤4。** 复制下面的第二个命令 **加载模型** 在Deci实验室 **部署模型** 窗口到Jetson设备的终端窗口（确保选择Jetson作为目标硬件）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**注意：** 确保根据您复制模型的位置调整 **model\_path** 参数。 如果您将模型文件复制到主目录，则可以保持路径不变。

如果模型成功加载，您将看到以下输出

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### 测量模型的性能

要使用INFERY测量模型的性能，请运行 **model.benchmark** 命令从您的应用程序

```sh
model.benchmark(batch_size=1)
```

以下将是该模型的输出 **YOLOX\_Nano** 模型

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "13.63 ms",
    "batch_inf_time_variance": "1.12 ms",
    "memory": "3537.89 mb",
    "pre_inference_memory_used": "3532.94 mb",
    "post_inference_memory_used": "3537.89 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "73.36 fps",
    "sample_inf_time": "13.63 ms",
    "include_io": true,
    "framework_type": "onnx",
    "framework_version": "1.8.0",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:23:57__07-06-2022",
    "ctime": 1657112037,
    "h_to_d_mean": null,
    "d_to_h_mean": null,
    "h_to_d_variance": null,
    "d_to_h_variance": null
}>
```

在哪里:

* 'batch\_size' – 指定用于基准测试的批量大小。
* 'batch\_inf\_time' – 指定整个批次的延迟。
* 'sample\_inf\_time' – 指定批次内单个样本的延迟。 等于 batch\_inf\_time 除以 batch\_size。
* 'memory' – 指定模型在推理时所使用的内存占用。
* 'throughput' – 指定每秒处理的请求数量（前向传递）。
* 'batch\_inf\_time\_variance' – 指定基准测试期间批量推理时间的方差。 如果方差较高，我们建议增加传递给 'repetitions' 的数量，以使基准测试更可靠。

对 **YOLOX\_Nano Jetson Xavier NX 优化模型**执行基准测试，你将看到结果如下：

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "5.28 ms",
    "batch_inf_time_variance": "0.05 ms",
    "memory": "2555.62 mb",
    "pre_inference_memory_used": "2559.38 mb",
    "post_inference_memory_used": "2555.62 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "189.25 fps",
    "sample_inf_time": "5.28 ms",
    "include_io": true,
    "framework_type": "trt",
    "framework_version": "8.0.1.6",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:30:05__07-06-2022",
    "ctime": 1657112405,
    "h_to_d_mean": "0.43 ms",
    "d_to_h_mean": "0.20 ms",
    "h_to_d_variance": "0.00 ms",
    "d_to_h_variance": "0.00 ms"
}>
```

#### 性能比较

我们主要可以比较这些结果的吞吐量

| | YOLOX\_Nano | YOLOX\_Nano Jetson Xavier NX 优化 |
| --- | ----------- | ------------------------------- |
| 吞吐量 | 73.36fps | 189.25fps |

可以看出，优化后的模型几乎是 **速度提升2.57倍** 比基础模型更快。

## 资源

* **\[网页]** [Deci AI 文档](https://docs.deci.ai/docs)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们的产品时体验尽可能顺畅。 我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

