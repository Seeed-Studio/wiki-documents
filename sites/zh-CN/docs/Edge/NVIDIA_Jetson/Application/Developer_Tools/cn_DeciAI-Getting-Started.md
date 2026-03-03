---
description: 在 NVIDIA Jetson 设备上使用 Deci 优化 AI 模型
title: Deci 入门指南
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/DeciAI-Getting-Started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# 在 NVIDIA® Jetson 设备上开始使用 Deci

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Deci 平台使您能够轻松地在生产环境中管理、优化、部署和服务模型。您可以继续使用流行的深度学习框架，如 TensorFlow、PyTorch、Keras 和 ONNX。您只需要 Deci 基于 Web 的平台或 Deci Python 客户端即可从您的代码中运行它。

Deci 提供：

- 性能加速 – 通过使用 Deci 的自动神经架构构建（AutoNAC）技术，在任何硬件上将模型推理性能加速 2x – 10x，而不会影响准确性。
- 在任何硬件上扩展 – 削减高达 80% 的云计算成本和物料清单，以实现大规模推理，无论是来自私有云还是公有云，来自您自己的服务器还是来自任何计算机、边缘或移动设备。
- 推理基准测试 – 在任何目标硬件环境和批量大小上对您的模型进行基准测试，以找到您模型的最佳吞吐量、延迟、内存使用量和云成本。
- 模型打包 – 快速轻松地部署到生产环境 – 将训练好的模型从 Deci Lab 无缝部署到任何生产环境，包括在单个封装容器中的所有环境库依赖项。
- 模型服务 – Deci 专有的深度学习运行时推理引擎可以部署在您自己的机器上（在任何硬件上 – 本地/边缘/云）。Deci 为将您的 Deci 优化模型部署为独立高效运行时服务器提供以下选项：

  - Deci 的运行时推理容器（RTiC），这是一个容器化的机器学习运行时引擎。
  - Deci 的 INFERY（来自推理一词），使您能够从 Python 包运行模型。

## 支持的硬件

Deci 支持以下与 Jetson 相关的硬件：

- Seeed 套件：

  - 基于 Jetson Nano 构建的 reComputer J1010
  - 基于 Jetson Nano 构建的 reComputer J1020
  - 基于 Jetson Xavier NX 8GB 构建的 reComputer J2011
  - 基于 Jetson Xavier NX 16GB 构建的 reComputer J2012

- Seeed 载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 载板
  - A203（版本 2）载板
  - A205 载板
  - A206 载板

- NVIDIA 官方开发套件：

  - NVIDIA® Jetson Nano 开发者套件
  - NVIDIA® Jetson Xavier NX 开发者套件
  - NVIDIA® Jetson AGX Xavier 开发者套件
  - NVIDIA® Jetson TX2 开发者套件
  - NVIDIA® Jetson AGX Orin 开发者套件

- NVIDIA 官方 SoM：
  
  - NVIDIA® Jetson Nano 模块
  - NVIDIA® Jetson Xavier NX 模块
  - NVIDIA® Jetson TX2 NX 模块
  - NVIDIA® Jetson TX2 模块
  - NVIDIA® Jetson AGX Xavier 模块

如果您拥有上述任何硬件，您可以继续在您的硬件上使用 deci。

## 硬件先决条件

准备以下硬件：

- 运行 JetPack 4.6 的上述任一 Jetson 设备
- 显示器、键盘、鼠标（可选）

## 注册 Deci 账户

- **步骤 1.** 访问[此页面](https://console.deci.ai/sign-up)注册 Deci 账户

- **步骤 2.** 输入所需详细信息并完成注册过程

现在您将看到 Deci Lab 平台

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## 带有预优化模型的 Deci Lab 模型库

默认情况下，Deci Lab 包含 **ResNet50 Baseline** 模型，该模型已加载到界面中，并针对不同硬件进行了一些优化。不仅如此，Deci 在 Deci 模型库中提供了大量基础模型以及针对不同硬件的相应优化版本模型。点击 **Model Zoo** 和 **List** 查看所有可用模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

作为示例，我们将在搜索栏中搜索 **YOLOX** 来查看所有 YOLOX 模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

如您所见，有基础模型如 **YOLOX_Nano**、**YOLOX_Small** 和优化模型如 **YOLOX_Nano Jetson Nano Optimized**、**YOLOX_Nano Jetson Xavier Optimized**

## 优化您自己的模型

如上所述，您可以直接使用预优化模型，无需手动优化它们。但是，如果您想使用自己的模型，可以将模型上传到 Deci Lab 并根据目标硬件进行优化

**步骤 1：** 在 Deci Lab 上，点击 **+ New Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2：** 根据您的模型选择适当的任务。这里我们选择了 **Object Detection**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**步骤 3：** 为模型输入名称并点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**步骤 4：** 选择模型框架（此例中为 ONNX），根据所选框架上传模型并点击 **Next**。这里我们上传了 [yolov6n.onnx 模型](https://github.com/meituan/YOLOv6/releases/tag/0.1.0)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**步骤 5：** 选择 **Primary hardware**、**Inference batch size**、**Quantization level** 并点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**步骤 6：** 添加性能目标和约束。如果您使用 **AutoNAC**（这是 **高级版本** 中包含的功能），这将非常有用。AutoNAC 可以显著提高模型推理性能，同时减小模型大小等等。如果您不使用 AutoNAC，需要为 **Throughput** 填写一个值，这里我们设置为 40（可以是随机值）。最后点击 **start** 开始优化过程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

现在优化过程将显示其进度如下，并将在几分钟后完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## 比较模型性能

我们可以使用 Deci Lab 平台来比较基础模型和优化模型之间的性能，或者将模型部署到目标硬件上并运行基准测试。尽管在 Deci Lab 上可视化所有内容更容易，但建议将模型部署并在目标设备上运行基准测试，以确保性能指标对特定硬件是准确的。

### 在 Deci Lab 上可视化

这里我们将使用 **YOLOX_Nano** 基础模型和 **YOLOX_Nano Jetson Xavier NX Optimized** 模型进行比较。

**步骤 1：** 导航到模型库，点击 **YOLOX_Nano** 基础模型和 **YOLOX_Nano Jetson Xavier NX Optimized** 模型旁边的 **clone**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2：** 在 Deci Lab 上，点击 **MODEL_VERSIONS** 下的 **YOLOX_Nano** 模型，进入 **model insights** 部分。

**步骤 3：** 选择 **Jetson Xavier** 作为 **Target Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

现在您将看到 **YOLOX_Nano** 模型的所有性能指标，如果将其部署到 Jetson Xavier NX 设备上。

**步骤 4：** 返回 Deci Lab 主页，点击 **MODEL_VERSIONS** 下的 **YOLOX_Nano Jetson Xavier NX Optimized** 模型

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

现在您将看到 **YOLOX_Nano Jetson Xavier NX Optimized** 模型的所有性能指标，如果将其部署到 Jetson Xavier NX 设备上。

#### 性能比较

我们可以使用下表比较之前为 Jetson Xavier 目标硬件获得的结果

|                      | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|----------------------|------------|---------------------------------------|
| Accuracy             | 25.8       | 25.8                                  |
| Throughput           | 62.8fps    | 175.8fps                              |
| Latency              | 15.9361ms  | 5.6897ms                              |
| GPU memory footprint | 1.05MB     | 1.01MB                                |
| Model size           | 3.66MB     | 9.74MB                                |

如您所见，主要的性能提升是吞吐量，优化模型比基础模型快近 **2.7 倍**。

### 在 Jetson 设备上部署并进行基准测试

我们现在将上述两个模型部署到 Jetson Xavier NX 设备上并执行基准测试，以确保获得准确的性能结果。

#### 安装 INFERY

- **步骤 1.** 在 Jetson 设备上打开终端窗口并更新软件包列表

```sh
sudo apt update 
```
- **步骤 2.** 安装pip包管理器

```sh
sudo apt install python3-pip
```
- **步骤 3.** 将 pip 更新到最新版本

```sh
python3 -m pip install -U pip
```
- **步骤 4.** 为 Jetson 安装 INFERY

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### 加载模型

- **步骤 1.** 在 Deci Lab 上，将鼠标悬停在模型名称上，然后从弹出菜单中点击 **Deploy**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 点击 **Download model** 将模型下载到 PC，然后将此模型文件复制到 Jetson 设备的 home 目录

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 在 Jetson 设备上打开终端窗口并执行

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **步骤 4.** 将 Deci lab **部署模型**窗口中**加载模型**下的第二个命令复制到 Jetson 设备的终端窗口中（确保已为目标硬件选择了 Jetson）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**注意：** 确保根据您之前复制模型的位置调整 **model_path** 参数。如果您将模型文件复制到了主目录，可以保持路径不变。

如果模型加载成功，您将看到以下输出

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### 测量模型性能

要使用 INFERY 测量模型的性能，请从您的应用程序运行 **model.benchmark** 命令

```sh
model.benchmark(batch_size=1)
```

以下将是 **YOLOX_Nano** 模型的输出

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

其中：

- 'batch_size' – 指定用于基准测试的批次大小。
- 'batch_inf_time' – 指定整个批次的延迟时间。
- 'sample_inf_time' – 指定批次内单个样本的延迟时间。等于 batch_inf_time 除以 batch_size。
- 'memory' – 指定模型在推理时使用的内存占用。
- 'throughput' – 指定每秒处理的请求数量（前向传播次数）。
- 'batch_inf_time_variance' – 指定基准测试期间批次推理时间的方差。如果方差很高，我们建议增加传递给 'repetitions' 的数值，以使基准测试更加可靠。

对 **YOLOX_Nano Jetson Xavier NX 优化模型** 重复相同的步骤，执行基准测试，您将看到如下结果：

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

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX 优化版 |
|------------|------------|-----------------------------------|
| 吞吐量      | 73.36fps   | 189.25fps                        |

可以看出，优化后的模型比基础模型快了近 **2.57 倍**。

## 资源

- **[网页]** [Deci AI 文档](https://docs.deci.ai/docs)

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
