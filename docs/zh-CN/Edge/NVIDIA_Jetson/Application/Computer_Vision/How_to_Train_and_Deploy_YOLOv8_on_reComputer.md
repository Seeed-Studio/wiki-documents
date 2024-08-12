---
description: 如何在reComputer上训练和部署YOLOv8
title: 如何在reComputer上训练和部署YOLOv8
keywords:
- reComputer
- Train YOLOv8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer
last_update:
  date: 12/6/2023
  author: Youjiang
---


# 如何在reComputer上训练和部署YOLOv8

## 介绍
面对日益复杂和动态的挑战，人工智能的应用为解决问题开辟了新途径，并对全球社会的可持续发展和人民生活质量的提高做出了重要贡献。通常在部署人工智能算法之前，AI模型的设计和训练都是在高性能计算服务器上进行的。一旦模型训练完成，它就被导出到边缘计算设备进行推断。事实上，所有这些过程都可以直接在边缘计算设备上进行。具体来说，准备数据集、训练神经网络、验证神经网络和部署模型等任务都可以在边缘设备上执行。这不仅确保了数据安全，还节省了购买额外设备的成本。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

在这份文档中，我们在 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=f6de8f6c8d814c021e13f4455d041d03&objectID=5586&indexName=bazaar_retailer_products) 上为交通场景训练和部署物体检测模型。本文以 [YOLOv8](https://www.ultralytics.com/) 物体检测算法为例，详细概述整个过程。请注意，以下所有操作均在 Jetson 边缘计算设备上进行，确保 Jetson 设备安装了 [JetPack 5.0](https://wiki.seeedstudio.com/NVIDIA_Jetson/) 或更高版本的操作系统。

## 数据集
机器学习的过程涉及在给定数据中找到模式，然后使用函数捕获这些模式。因此，数据集的质量直接影响模型的性能。一般来说，训练数据的质量和数量越好，训练的模型就越好。因此，数据集的准备至关重要。

收集训练数据集的方法有很多种。这里介绍了两种方法：1. 下载预先注释的开源公共数据集。2. 收集并注释训练数据。最后，整合所有数据以准备后续的训练阶段。

### 下载公共数据集
公共数据集是在机器学习和人工智能研究中广泛使用的共享标准化数据资源。它们为研究人员提供了评估算法性能的标准基准，促进领域内的创新和合作。这些数据集推动着人工智能社区朝着更加开放、创新和可持续的方向发展。

在许多平台上，您可以自由下载数据集，例如 
[Roboflow](https://roboflow.com/), 
[Kaggle](https://www.kaggle.com/), 
等等。这里，我们从 Kaggle 下载一个有关交通场景的标注数据集，名为, [Traffic Detection Project](https://www.kaggle.com/datasets/yusufberksardoan/traffic-detection-project/download?datasetVersionNumber=1), 


提取后的文件结构如下：

```sh
archive
├── data.yaml
├── README.dataset.txt
├── README.roboflow.txt
├── test
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.jpg
│   │   ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.txt
│       ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.txt
│       ├── ...
├── train
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.jpg
│   │   ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.txt
│       ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.txt
│       ├── ...
└── valid
    ├── images
    │   ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.jpg
    │   ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.jpg
    │   ├── ...
    └── labels
        ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.txt
        ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.txt
        ├──...
```

每个图像都有一个相应的文本文件，其中包含该图像的完整注释信息。`data.json`文件记录了训练、测试和验证集的位置，您需要修改路径：

```json
train: ./train/images
val: ./valid/images
test: ./test/images

nc: 5
names: ['bicycle', 'bus', 'car', 'motorbike', 'person']
```

### 收集和注解数据。

当公共数据集无法满足用户需求时，需要考虑收集和创建定制数据集，以满足特定需求。可以通过收集、标注和组织相关数据来实现这一目标。
为了演示目的，我从[YouTube](https://www.youtube.com/watch?v=iJZcjZD0fw0)上捕捉并保存了三张图片，尝试使用[Label Studio](https://www.youtube.com/watch?v=iJZcjZD0fw0)来标注这些图片。

第1步。收集原始数据：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/raw_datas.png" />
</div>

**步骤2.** 安装并运行标注工具：
```bash
sudo groupadd docker
sudo gpasswd -a ${USER} docker
sudo systemctl restart docker
sudo chmod a+rw /var/run/docker.sock

mkdir label_studio_data
sudo chmod -R 776 label_studio_data
docker run -it -p 8080:8080 -v $(pwd)/label_studio_data:/label-studio/data heartexlabs/label-studio:latest
```

**步骤 3.** 创建一个新项目，并根据提示完成标注。
[标签工作室参考文档。](https://labelstud.io/blog/quickly-create-datasets-for-training-yolo-object-detection-with-label-studio/#output-the-dataset-in-yolo-format)

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/labeling.png" />
</div>

完成标注后，您可以将数据集以YOLO格式导出，并将标注数据与下载的数据整理在一起。最简单的方法是将所有图像复制到公共数据集的train/images文件夹中，将生成的标注文本文件复制到公共数据集的train/labels文件夹中。

此时，我们已经通过两种不同的方法获取了训练数据并进行了整合。如果您希望获得更高质量的训练数据，还有许多额外的步骤需要考虑，比如数据清洗、类别平衡等。由于我们的任务相对简单，我们将暂时跳过这些步骤，并使用上面获得的数据进行训练。

## 模型
在这一部分，我们将在reComputer上下载YOLOv8源代码，并配置运行时环境。

**第1步。**使用以下命令下载源代码：

```bash
git clone https://github.com/ultralytics/ultralytics.git
cd ultralytics
```

**第2步.** 打开requirements.txt并修改相关内容。

```bash
# Use the `vi` command to open the file
vi requirements.txt

# Press `a` to enter edit mode, and modify the following content:
torch>=1.7.0 --> # torch>=1.7.0
torchvision>=0.8.1 --> # torchvision>=0.8.1

# Press `ESC` to exit edit mode, and finally input `:wq` to save and exit the file.

第3步。运行以下命令来下载YOLO所需的依赖并安装YOLOv8：
pip3 install -e .
cd ..
```

**第4步.** 安装Jetson版本的PyTorch：

```bash
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.cn/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl -O torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

**第5步.** 安装对应的torchvision：
```bash
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.16.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
cd ..
```

**第6步.** 请使用以下命令确保YOLO已成功安装：
```bash
yolo detect predict model=yolov8s.pt source='https://ultralytics.com/images/bus.jpg'
```

## 训练
模型训练是更新模型权重的过程。通过对模型进行训练，机器学习算法可以从数据中学习识别模式和关系，从而实现对新数据的预测和决策。

**第1步。**创建一个用于训练的Python脚本：

```bash
vi train.py
```

请按`a`键进入编辑模式，并修改以下内容：

```bash
from ultralytics import YOLO

# 加载模型
model = YOLO('yolov8s.pt')

# 训练模型。
results = model.train(
    data='/home/nvidia/Everything_Happens_Locally/Dataset/data.yaml', 
    batch=8, epochs=100, imgsz=640, save_period=5
)
```

按`ESC`退出编辑模式，最后输入`:wq`保存并退出文件。`YOLO.train()`方法有很多配置参数；请参考[文档](https://docs.ultralytics.com/modes/train/#arguments)获取详细信息。此外，您还可以使用更简洁的`CLI`方法根据您的特定要求开始训练。

**第2步.** 请使用以下命令开始训练：
```bash
python3 train.py
```

接下来是漫长的等待过程。考虑到在等待过程中关闭远程连接窗口的可能性，本教程使用[Tmux](https://github.com/tmux/tmux/wiki)终端复用器。因此，我在整个过程中看到的界面是这样的：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/training.png" />
</div>

Tmux是可选的；只要模型正常训练即可。训练程序完成后，您可以在指定文件夹中找到在训练过程中保存的模型权重文件。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/models.png" />
</div>

## 验证
验证过程包括使用部分数据来验证模型的可靠性。这个过程有助于确保模型能够在真实世界的应用中准确而稳健地执行任务。如果你仔细观察训练过程中的信息输出，你会注意到许多验证过程穿插在训练中。本节不会分析每个评估指标的含义，而是通过检查预测结果来分析模型的可用性。

**步骤 1.** 使用训练好的模型来推断特定图像：

```bash
yolo detect predict \
    model='./runs/detect/train2/weights/best.pt' \ 
    source='./datas/test/images/ant_sales-2615_png_jpg.rf.0ceaf2af2a89d4080000f35af44d1b03.jpg' \
    save=True show=False
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_cmd.png" />
</div>

**步骤 2.** 查看推理结果。

根据检测结果，可以观察到训练模型达到了预期的检测性能。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference.jpeg" />
</div>

## 部署
部署是将经过训练的机器学习或深度学习模型应用于真实场景的过程。上面介绍的内容已经验证了模型的可行性，但并未考虑模型的推理效率。在部署阶段，有必要在检测精度和效率之间找到平衡。可以使用TensorRT推理引擎来提高模型的推理速度。

**步骤 1.** 为了直观展示轻量级模型和原始模型之间的对比，使用vi工具创建一个新的`inference.py`文件来实现视频文件推断。您可以通过修改第8和第9行来替换推断模型和输入视频。此文档中的输入是我用手机拍摄的视频。

```python
from ultralytics import YOLO
import os
import cv2
import time
import datetime


model = YOLO("/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt")
cap = cv2.VideoCapture('./sample_video.mp4')

save_dir = os.path.join('runs/inference_test', datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S'))
if not os.path.exists(save_dir):
    os.makedirs(save_dir)
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
fps = cap.get(cv2.CAP_PROP_FPS)
size = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
output = cv2.VideoWriter(os.path.join(save_dir, 'result.mp4'), fourcc, fps, size)

while cap.isOpened():
    success, frame = cap.read()
    if success:
        start_time = time.time()
        results = model(frame)
        annotated_frame = results[0].plot()
        total_time = time.time() - start_time
        fps = 1/total_time
        cv2.rectangle(annotated_frame, (20, 20), (200, 60), (55, 104, 0), -1)
        cv2.putText(annotated_frame, f'FPS: {round(fps, 2)}', (30, 50), 0, 0.9, (255, 255, 255), thickness=2, lineType=cv2.LINE_AA)
        print(f'FPS: {fps}')
        cv2.imshow("YOLOv8 Inference", annotated_frame)
        output.write(annotated_frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        break

cv2.destroyAllWindows()
cap.release()
output.release()
```

**步骤 2.** 运行以下命令，并记录模型量化之前的推理速度：
```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_pt.png" />
</div>

模型量化之前的推理速度为21.9帧每秒。

**步骤 3.** 生成量化模型：

```bash
pip3 install onnx
yolo export model=/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt format=engine half=True device=0
```

完成程序后(大约10-20分钟)，在与输入模型相同的目录中将生成一个`.engine`文件。这个文件是量化后的模型。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/model_engine.png" />
</div>

**步骤 4.** 使用量化模型测试推断速度。

在这里，您需要修改在第1步创建的脚本中的第8行内容。

```bash
model = YOLO(<path to .pt>) --> model = YOLO(<path to .engine>)
```

然后，重新运行推断命令：

```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_engine.png" />
</div>

从推理效率的角度来看，量化模型显示出推理速度显著提高。

## 摘要

本文为读者提供了一个全面指南，涵盖了从数据收集和模型训练到部署的各个方面。重要的是，所有的流程都在reComputer中进行，消除了用户额外需要GPU的需求。





<!-- Code END -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>