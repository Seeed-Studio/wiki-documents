---
description: ODYSSEY - X86J41x5
title: ODYSSEY 的 Coral Mini PCIe 加速器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Coral-Mini-PCIe-Accelerator-x86
last_update:
  date: 03/16/2023
  author: Lakshantha

---

<!-- ---
name: Coral-Mini-PCIe-Accelerator-x86
category: Platform
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 114992124
tags:
--- -->

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)

ODYSSEY X86J41x5 上的 Coral Mini PCIe 加速器是一款 M.2 模块，可将边缘 TPU 协处理器引入现有系统和产品。

边缘 TPU 是由 Google 设计的小型 ASIC，提供高性能机器学习推理，同时具有低功耗需求：它能够每秒执行 4 万亿次操作（TOPS），每 TOPS 使用 0.5 瓦（每瓦 2 TOPS）。例如，它可以以近 400 FPS 的速度高效运行最新的移动视觉模型（如 MobileNet v2）。这种设备上的处理减少了延迟，提高了数据隐私，并消除了对持续高带宽连接的需求。

M.2 加速器是一款双键 M.2 卡（B+M 键），设计用于适配任何兼容的 M.2 插槽。这种外形尺寸使其能够轻松集成到 ARM 和 x86 平台中，从而为嵌入式平台、迷你 PC 和工业网关等产品添加本地机器学习加速。

[![立即购买](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)

## 特性

* 执行高速机器学习推理
* 兼容 Debian Linux
* 支持 TensorFlow Lite
* 支持 [AutoML Vision Edge](https://cloud.google.com/vision/automl/docs/edge-quickstart)

## 规格

|物理规格  | 值  |
|------|--------------|
|尺寸| B+M 键：22.00 x 80.00 x 2.35 mm  |
|重量| B+M 键：5.8 g|
|主机接口|
|硬件接口| M.2 B+M 键 (M.2-2280-B-M-S3)|
|串行接口| PCIe Gen2 x1|
|工作电压|  |
|直流供电|  3.3V +/- 10 %|
|环境可靠性| |
|温度| -40 ~ 85°C（存储）     -20 ~ 70°C（工作）|
|相对湿度|  0 ~ 100%（非冷凝）|
|机械可靠性| |
|操作冲击| 100 G，11ms（持续）1000 G，0.5 ms（压力）1000 G，1.0 ms（压力） |
|操作振动（随机）| 0.5 Grms，5 - 500 Hz（持续）3 Grms，5 - 800 Hz（压力）|
|操作振动（正弦）|0.5 Grms，5 - 500 Hz（持续）3 Grms，5 - 800 Hz（压力）|

## 硬件概览

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/hardware.jpg)

## 入门指南

### 使用 ODYSSEY - X86J4105

**所需材料**

| Coral Mini PCIe 加速器 | ODYSSEY  X86J41x5 |
|--------------|-------------|
|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/PC.png)|
|[立即购买](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)|[立即购买](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html)|

#### 硬件连接

硬件连接步骤非常简单。

* **步骤 1.** 将 Coral Mini PCIe 加速器连接到 ODYSSEY - X86J41x5。
* **步骤 2.** 将电源连接到 ODYSSEY - X86J41x5。
* **步骤 3.** 将电源和显示器连接到 ODYSSEY - X86J41x5。
* **步骤 4.** 将键盘和鼠标连接到 ODYSSEY - X86J41x5。
* **步骤 5.** 如果有网络线，请将其连接到 ODYSSEY - X86J41x5。

## 软件

在完成硬件连接后，下一步是解决软件问题。这里我将告诉你几个安装步骤：安装 PCIe 驱动程序、Edge TPU 运行时和 TensorFlow Lite 运行时。

首先，你需要一台运行 Linux 的计算机，请按照以下步骤操作。

* 你可以选择 x86-64、ARMv7（32 位）或 ARMv8（64 位）系统。

   请参考如何[创建可启动的 USB 驱动器并安装 Linux 操作系统（Ubuntu Desktop 18.04）](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-OS/)到 ODYSSEY - X86J41x5。

* 在 ODYSSEY X86J41x5 上可用的 Coral Mini PCIe 加速器

* Debian 6.0 或更高版本的 Linux 发行版，或其任何衍生版本（例如 Ubuntu 10.0+）

* Python 3.5 或更高版本

在你成功制作 U 盘启动盘并安装 Linux 操作系统文件后，你可以进入下一步。

## 1. 安装 PCIe 驱动程序

如果你已经安装了预构建的 Apex 驱动程序，你需要考虑该驱动程序是否会导致 Edge TPU 失败，因为某些驱动程序存在导致这些错误的漏洞。因此，你需要检查它。首先按照以下步骤操作：

1. 使用以下命令检查你的 Linux 内核版本：

   ```
      uname -r 
   ```

   如果输出为 4.18 或更低版本，你可以跳过安装 PCIe 驱动程序的步骤。

2. 如果你的内核版本是 4.19 或更高版本，现在检查是否已安装预构建的 Apex 驱动程序：

   ```
      lsmod | grep apex
   ```

   如果没有输出任何内容，那么你可以继续安装 PCIe 驱动程序。

   如果输出了一个 Apex 模块名称，请停止操作并按照[禁用 Apex 和 Gasket 的解决方法](https://coral.ai/docs/m2/get-started/#workaround-to-disable-apex-and-gasket)进行操作。

按照以下步骤安装 PCIe 驱动程序：

1. 确保将要连接模块的主机系统已关闭。

2. 将 Coral PCIe 模块连接到主机系统的 B Key M.2 接口（SATA_SSD M.2 接口不支持 Coral 模块）。

3. 启动系统并确保其具有互联网连接。然后将我们的 Debian 软件包存储库添加到系统中，并使用以下命令安装 PCIe 驱动程序：

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt update

sudo apt-get install gasket-dkms
```

4. 如果你将使用的用户账户没有 root 权限，你可能需要添加以下 udev 规则，然后验证 "apex" 组是否存在，并将你的用户添加到该组中：

```
   sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

   sudo groupadd apex

   sudo adduser $USER apex
```

5. 重启系统。

6. 验证加速器模块是否被检测到：

   ```
      lspci -x | grep 089a
   ```

   你应该看到类似以下内容：
   ```
      03:00.0 System peripheral: Device 1ac1:089a
   ```

   其中的 03 数字和系统外设名称可能会有所不同，因为这些是主机系统特定的，但只要你看到一个设备列出了 089a，就可以继续。

7. 验证 PCIe 驱动程序是否已加载：

   ```
   ls /dev/apex_0
   ```

   你应该看到以下内容：

   ```
   /dev/apex_0
   ```

## 2. 安装 Edge TPU 运行时

Edge TPU 运行时是与 Edge TPU 通信所必需的。您可以通过以下命令在主机计算机上安装它：

```
sudo apt-get install libedgetpu1-std
```

注意事项  
> 与 [USB 加速器](https://coral.ai/products/accelerator/) 不同，Mini PCIe 和 M.2 加速器不需要为“降低”或“最大”时钟频率使用不同的运行时包。这些设备默认以最大频率运行，并根据 [热限制进行功耗调节](https://coral.ai/docs/m2/get-started/#operating-frequency-and-thermal-settings)。

## 3. 安装 TensorFlow Lite 库

您可以通过多种方式安装 TensorFlow 的 API，但如果您使用 Python，最简单的选择是安装 `tflite_runtime` 包。此包提供了运行 Python 推理所需的最少代码（主要是 [Interpreter](https://www.tensorflow.org/api_docs/python/tf/lite/Interpreter) API），从而节省了大量磁盘空间。

要安装它，请按照 [TensorFlow Lite Python 快速入门](https://www.tensorflow.org/lite/guide/python) 的步骤操作，然后在运行 `pip3 install` 命令后返回此页面。

## 4. 使用 TensorFlow Lite API 运行模型

现在您已经准备好在 Edge TPU 上运行推理了。按照以下步骤，使用我们的示例代码和模型执行图像分类：

1. 从 GitHub 下载示例代码：

```
mkdir coral && cd coral

git clone https://github.com/google-coral/tflite.git
```

2. 下载鸟类分类模型、标签文件和一张鸟类照片：

```
cd tflite/python/examples/classification

bash install_requirements.sh
```

3. 使用鸟类照片运行图像分类器（如图 1 所示）：

```
python3 classify_image.py \
--model models/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels models/inat_bird_labels.txt \
--input images/parrot.jpg
```

![](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/parrot.jpg)

您应该会看到如下结果：

```
INFO: Initialized TensorFlow Lite runtime.
----INFERENCE TIME----
Note: The first inference on Edge TPU is slow because it includes loading the model into Edge TPU memory.
11.8ms
3.0ms
2.8ms
2.9ms
2.9ms
-------RESULTS--------
Ara macao (Scarlet Macaw): 0.76562
```

恭喜！您刚刚使用 TensorFlow Lite 在 Edge TPU 上完成了一次推理。

为了展示不同的推理速度，示例代码重复了相同的推理五次。它会打印每次推理所需的时间以及最高分类结果（标签 ID/名称和置信度分数，范围为 0 到 1.0）。您的推理速度可能会因主机系统的不同而有所差异。

上述 `classify_image.py` 示例使用的是 TensorFlow Lite 的 Python API。要了解其工作原理，请查看 [classify_image.py 源代码](https://github.com/google-coral/tflite/blob/master/python/examples/classification/classify_image.py) 并阅读如何 [使用 TensorFlow Lite 运行推理](https://www.tensorflow.org/lite/guide/inference#load_and_run_a_model_in_python)。

除了使用 TensorFlow Lite API（如上所述），您还可以使用 [Edge TPU Python API](https://coral.ai/docs/edgetpu/api-intro/)，它提供了高级 API，仅需几行代码即可使用图像分类和目标检测模型进行推理。例如，尝试我们的另一个版本的 [使用 Edge TPU API 的 classify_image.py](https://coral.ai/examples/classify-image/)。

您还可以 [使用 C++ 和 TensorFlow Lite 运行推理](https://coral.ai/docs/edgetpu/tflite-cpp/)。

资源
--------

* [数据手册](https://github.com/SeeedDocument/Bazaar_Document/raw/master/Coral-M2-datasheet.pdf)
* [Coral AI 用户手册](https://coral.ai/docs/mini-pcie/datasheet/#)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>