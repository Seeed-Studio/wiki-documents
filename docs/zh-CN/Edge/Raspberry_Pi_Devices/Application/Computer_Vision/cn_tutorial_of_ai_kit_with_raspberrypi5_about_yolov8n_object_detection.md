---
description: 本文档演示如何使用 YOLOv8n 在 Raspberry Pi 5 上通过 AI Kit 进行从训练到部署的目标检测
title: 使用 Raspberry Pi 5 和 AI Kit 的 YOLOv8n 目标检测教程
keywords:
  - Edge
  - rpi5
  - Ai kit
  - YOLO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection
last_update:
  date: 08/6/2024
  author: Jiahao

no_comments: false # 用于 Disqus
---

# 使用 Raspberry Pi 5 和 AI Kit 的 YOLOv8n 目标检测教程
## 简介

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once 第 8 版）是 YOLO 系列中最受欢迎的实时姿态估计和目标检测模型。它在前代的基础上，通过在速度、准确性和灵活性方面的多项改进脱颖而出。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) 用于加速推理速度，其核心是基于 Hailo-8L 芯片构建的 13 TOPS 神经网络推理加速器。

本文档将指导您如何使用 YOLOv8n 在 Raspberry Pi 5 上通过 AI Kit 进行目标检测，从训练到部署。

## 准备硬件

### 对于 Hailo8L 13 TOPS
<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi5 8GB</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### 对于 Hailo8 26 TOPS

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 安装硬件

请参考 [此处](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## 在主机电脑上

:::note
我们将安装 Hailo 软件，请确保您拥有一个 Hailo 账户。
:::

### 安装 Ultralytics 并训练模型：

安装 Python 3.11
```
sudo apt install python3.11
```

创建名为 `yolo_env` 的虚拟环境

```
python3.11 -m venv yolo_env
```

激活虚拟环境

```
source yolo_env/bin/activate
```

安装 Ultralytics

```
pip install ultralytics
```

使用 COCO 数据集训练 YOLOv8n。如果您希望训练自己的数据集，可以参考 [此处](https://docs.ultralytics.com) 获取相关说明。

```
mkdir yolomodel && cd yolomodel
yolo detect train data=coco128.yaml model=yolov8n.pt name=retrain_yolov8n epochs=100 batch=16
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train.png" alt="pir" width={1000} height="auto"/></p>

训练完成后，您将获得 `best.pt` 模型，如下所示：

```
cd ./runs/detect/retrain_yolov8n/weights/
ls
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train_result.png" alt="pir" width={1000} height="auto"/></p>

将 `.pt` 模型转换为 `.onnx` 格式。

```
yolo export model=./best.pt imgsz=640 format=onnx opset=11 
```
结果如下：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/convert_onnx.png" alt="pir" width={1000} height="auto"/></p>

### 安装 Hailo 软件：

安装 Python 3.8

```
cd ~
sudo apt install python3.8
```

创建名为 `hailo_env` 的虚拟环境

```
python3.8 -m venv hailo_env
```

激活虚拟环境

```
source hailo_env/bin/activate
```

安装 [Hailo Dataflow Compiler 3.27](https://hailo.ai/developer-zone/software-downloads/)，此处需要注册 Hailo 账户并登录，然后下载软件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/HDF_install.png" alt="pir" width={1000} height="auto"/></p>

``` 
pip install hailo_dataflow_compiler-3.27.0-py3-none-linux_x86_64.whl 
```

安装 [Model Zoo](https://hailo.ai/developer-zone/software-downloads/)，此处需要注册 Hailo 账户并登录，然后下载软件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_model_zoo-2.11.0-py3-none-any.whl 
```

测试 `hailo_model_zoo` 是否正常运行。

```
hailomz -h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo_test.png" alt="pir" width={1000} height="auto"/></p>

安装 `hailo_model_zoo` GitHub 文件

```
cd yolomodel/runs/detect/retrain_yolov8n/weights

git clone https://github.com/hailo-ai/hailo_model_zoo.git
```

安装 COCO 数据集以评估/优化/编译 YOLOv8n 模型

```
python hailo_model_zoo/datasets/create_coco_tfrecord.py val2017
python hailo_model_zoo/datasets/create_coco_tfrecord.py calib2017
```

### 使用 `hailo_model_zoo` 解析模型：

```
hailomz parse --hw-arch hailo8l --ckpt ./best.onnx yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/parse_model.png" alt="pir" width={1000} height="auto"/></p>

### 使用 `hailo_model_zoo` 优化模型：

:::note
如果您执行以下命令，可能会遇到一些错误。不过，您可以将 `./hailo_model_zoo/hailo_model_zoo` 复制到您的本地库。如果错误提示数据集无法找到，您可以导航到 `~/.hailomz`，找到数据集并将其复制到您的本地数据集目录。
:::

```
hailomz optimize --hw-arch hailo8l --har ./yolov8n.har yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/optimize_model.png" alt="pir" width={1000} height="auto"/></p>

### 使用 `hailo_model_zoo` 编译模型：

```
hailomz compile  yolov8n --hw-arch hailo8l --har ./yolov8n.har 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" alt="pir" width={1000} height="auto"/></p>

完成后，您将获得一个 `hef` 模型，可以将其用于在带有 AI 套件的 Raspberry Pi 5 上部署。

```
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/compile_result.png" alt="pir" width={1000} height="auto"/></p>

## 在 Raspberry Pi 5 上

### 更新系统：

```
sudo apt update
sudo apt full-upgrade
```

### 将 PCIe 设置为 gen2/gen3（gen3 比 gen2 更快）：

在 ```/boot/firmware/config.txt``` 文件中添加以下内容：

```
# 启用 PCIe 外部连接器

dtparam=pciex1

# 强制使用 Gen 3.0 速度

dtparam=pciex1_gen=3

```
:::note
如果您想使用 `gen2`，请注释掉 `dtparam=pciex1_gen=3`
:::

### 安装 hailo-all 并重启：

在 Raspberry Pi 5 上打开终端，输入以下命令安装 Hailo 软件：

```
sudo apt install hailo-all
sudo reboot
```

### 检查软件和硬件：

在 Raspberry Pi 5 上打开终端，输入以下命令检查是否已安装 hailo-all：

```
hailortcli fw-control identify
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

在 Raspberry Pi 5 上打开终端，输入以下命令检查是否已连接 hailo-8L：

```
lspci | grep Hailo
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### 克隆项目：

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

### 将您的模型复制到 Raspberry Pi 5：

创建一个名为 `hailomodel` 的目录：

```
mkdir hailomodel
```

:::note
以下命令应在您的主机电脑上运行，而不是在 Raspberry Pi 5 上运行。请确保您的主机电脑和 Raspberry Pi 5 连接到同一网络。
:::

```
scp -r ./yolomodel/runs/detect/retrain_yolov8n/weights/yolov8n.hef username@ip /home/pi/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/hailomodel/
```

### 修改代码

在 `object-detection-hailo.py` 文件中找到第 105 和 106 行，并将代码修改如下：

```
        elif args.network == "yolov8n":
            self.hef_path = os.path.join(self.current_path, './hailomodel/yolov8n.hef')   
```

在 `object-detection-hailo.py` 文件中找到第 172 行，并将代码修改如下：

```
    parser.add_argument("--network", default="yolov8n", choices=['yolov6n', 'yolov8s', 'yolox_s_leaky'], help="Which Network to use, defult is yolov6n")
```

### 运行代码：

```
bash run.sh object-detection-hailo
```

## 结果

以下是我们展示训练 YOLOv8n 模型并将其部署到 Raspberry Pi 5 的视频。我们将批量大小设置为 8，输入大小设置为 640x640，输入视频帧率设置为 240 fps。推理速度达到 136.7 fps，这对于大多数应用场景来说已经非常快。

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/mVNrEVpvvuc" title="YOLOv8n Object Detection on Raspberry Pi 5 with AI Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>