---
description: 在NVIDIA® Jetson设备上开始使用Roboflow推理
title: 在NVIDIA® Jetson设备上开始使用Roboflow推理
tags:
  - Data Label
  - AI model train
  - AI model deploy
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Roboflow-Jetson-Getting-Started
last_update:
  date: 10/26/2023
  author: Lakshantha
---

# 在NVIDIA® Jetson设备上开始使用Roboflow推理

本维基指南解释了如何使用在NVIDIA Jetson设备上运行的[Roboflow](https://roboflow.com)推理服务器轻松部署AI模型。在这里，我们将使用[Roboflow Universe](https://universe.roboflow.com)选择一个已训练好的模型，将模型部署到Jetson设备上，并在实时网络摄像头流上进行推理！

[Roboflow Inference](https://github.com/roboflow/inference)是使用和部署计算机视觉模型的最简单方法，它提供了一个HTTP Roboflow API，用于运行推理。Roboflow推理支持：

- 物体检测
- 图像分割
- 图像分类

以及 CLIP 和 SAM 等基础模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/9.gif
" style={{width:1000, height:'auto'}}/></div>

## 先决条件

- Ubuntu 主机 PC（本机或使用 VMware Workstation Player 的 VM）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 或任何其他NVIDIA Jetson设备

:::注意
本维基已在由NVIDIA Jetson Orin NX 16GB模块驱动的[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)和[reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html)上进行了测试和验证。
:::

## 将JetPack刷入Jetson

现在，您需要确保[JetPack](https://developer.nvidia.com/embedded/jetpack)设备已刷入JetPack系统。您可以使用NVIDIA SDK管理器或命令行将JetPack刷入设备。

对于Seeed Jetson设备刷入指南，请参考以下链接：
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [A206 Carrier Board](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [A603 Carrier Board](https://wiki.seeedstudio.com/reComputer_A603_Flash_System)
- [A607 Carrier Board](https://wiki.seeedstudio.com/reComputer_A607_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)
- [reComputer Indsutrial](https://wiki.seeedstudio.com/reComputer_Industrial_Getting_Started/#flash-jetpack)
- [reServer Industrial](https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/#flash-jetpack)

:::注意
请确保刷入JetPack 5.1.1版本，因为我们已经验证了这个版本的维基。
:::

## 在Roboflow Universe中访问50, 000+模型

为每个人提供了50,000多个现成的AI模型，以便以最快的方式开始计算机视觉部署。您可以在[Roboflow Universe](https://universe.roboflow.com)上探索所有这些模型。Roboflow Universe还提供了200,000多个数据集，您可以使用这些数据集在Roboflow云服务器上 [训练模型](https://docs.roboflow.com/train/train)，或者带来您自己的数据集，使用 [Roboflow在线图像标注工具](https://docs.roboflow.com/annotate/use-roboflow-annotate) 并开始训练。

- **步骤 1:** 我们将使用Roboflow Universe中的 [人员检测模型作](https://universe.roboflow.com/mohamed-traore-2ekkp/people-detection-general/model/7)作为参考。

- **步骤 2:** 这里的模型名称将遵循“model_name/version”的格式。在这种情况下，它是people-detection-general/7。我们将在本维基的后续部分使用此模型名称开始推理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/1.png
" style={{width:1000, height:'auto'}}/></div>

## 获取Roboflow API密钥

现在，我们需要获取一个Roboflow API密钥，以便让Roboflow推理服务器正常工作。

- **步骤 1:** [注册](https://app.roboflow.com)一个新Roboflow帐户，输入您的凭据

- **步骤 2:** Sign in to the account, navigate to `Projects > Workspaces > <your_workspace_name> > Roboflow API`, and click **Copy** next to "Private API Key" section
登录到帐户，导航至 `Projects > Workspaces > <your_workspace_name> > Roboflow API`，并在“私人API密钥”部分旁边点击**复制** 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/2.jpg
" style={{width:1000, height:'auto'}}/></div>

请妥善保管此私钥，因为我们稍后会需要用到它。

## 运行Roboflow推理服务器

您可以使用3种不同的方式在NVIDIA Jetson上开始使用Roboflow推理。

1. **使用pip包** - 使用pip包将是开始最快的方式，但您需要安装SDK组件（CUDA、cuDNN、TensorRT）以及JetPack。
2. **使用Docker Hub** - 使用Docker Hub会稍微慢一些，因为它首先需要拉取一个大约19GB的Docker镜像。然而，您不需要安装SDK组件，因为Docker镜像已经包含了这些组件。
3. **使用本地Docker构建** - 使用本地Docker构建是Docker Hub方法的扩展，您可以根据所需的应用程序更改Docker镜像的源代码（例如启用TensorRT精度为INT8）。



在继续运行Roboflow推理服务器之前，您需要获取一个AI模型进行推理，并需要一个Roboflow API密钥。我们将首先完成这些步骤。

<!-- Code -->

从'@theme/Tabs'导入Tabs；
从'@theme/TabItem'导入TabItem；

<Tabs>
<TabItem value="pip Package" label="pip Package">

### 使用 pip 包

- **步骤 1:** 如果你只用 Jetson L4T 刷入 Jetson 设备，则需要先安装 SDK 组件
```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```


- **步骤 2:** 在终端上执行以下命令来安装 Roboflow 推理服务器 pip 包

```sh
sudo apt update
sudo apt install python3-pip -y
pip install inference-gpu
```

- **步骤 3:** 执行以下命令，并将其替换为您之前获取的 Roboflow 私有 API 密钥

```sh
export ROBOFLOW_API_KEY=your_key_here
```

- **步骤 4:** 将网络摄像头连接到 Jetson 设备并执行以下 Python 脚本，在网络摄像头流上运行开源人物检测模型

<details>

<summary> 网络摄像头.py</summary>

```python
import cv2
import inference
import supervision as sv

annotator = sv.BoxAnnotator()

inference.Stream(
    source="webcam", 
    model=" people-detection-general/7", 

    output_channel_order="BGR",
    use_main_thread=True, 
    
    on_prediction=lambda predictions, image: (
        print(predictions), 
        
        cv2.imshow(
            "Prediction", 
            annotator.annotate(
                scene=image, 
                detections=sv.Detections.from_roboflow(predictions)
            )
        ),
        cv2.waitKey(1)
    )
)
```

</details>


最后你会看到如下结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/11.gif
" style={{width:1000, height:'auto'}}/></div>

---

</TabItem>
<TabItem value="Docker Hub" label="Docker Hub">

### 使用 Docker Hub

要使用此方法，只需用 Jetson L4T 刷新设备即可。这使用客户端-服务器架构，其中 Roboflow 推理服务器将在 Jetson 上的特定网络端口上运行，您将能够使用同一网络上的任何 PC 访问此推理服务器，甚至可以将 Jetson 本身用作服务器和客户端。

#### 服务器设置-Jetson

执行以下操作下载并运行 Roboflow 推理服务器 Docker 容器

```sh
sudo docker run --network=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1
```

如果看到以下输出，则表示推理服务器已成功启动

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/3.png
" style={{width:1000, height:'auto'}}/></div>

#### Client Setup - Jetson/ PC

- **步骤 1:** 安装必要的软件包

```sh
sudo apt update
sudo apt install python3-pip -y
git clone https://github.com/roboflow/roboflow-api-snippets
cd Python/webcam
pip install -r requirements.txt
```

- **步骤 2:** 在同一目录中创建一个 roboflow_config.json 文件，其中包含您的 Roboflow API 密钥、模型名称。您可以参考此 GitHub 存储库中包含的示例 roboflow_config.sample.json 文件

- **步骤 3:** 在同一设备的不同终端窗口上，或与 Jetson 相同的另一台 PC 上，执行以下 Python 脚本以在网络摄像头上运行开源人物检测模型stream

```sh
python infer-simple.py
```

---

</TabItem>
<TabItem value="Local Docker Build" label="Local Docker Build">

### 使用本地 Docker Build

#### 服务器设置-Jetson

要使用此方法，只需用 Jetson L4T 刷新设备即可。这使用客户端-服务器架构，其中 Roboflow 推理服务器将在 Jetson 上的特定网络端口上运行，您将能够使用同一网络上的任何 PC 访问此推理服务器，甚至可以将 Jetson 本身用作服务器和客户端。

- **步骤 1:** 克隆 Roboflow 推理服务器存储库

```sh
git clone https://github.com/roboflow/inference
```

- **步骤 2:** 进入“inference”目录，开始编译自己的Docker镜像

```sh
cd inference
sudo docker build \
    -f docker/dockerfiles/Dockerfile.onnx.jetson.5.1.1 \
    -t roboflow/roboflow-inference-server-jetson-5.1.1:seeed1 .
```

这里“-t”后面的文字是我们正在构建的容器的名称。你可以给它起任何名字。

- **步骤 3:** 执行以下命令检查我们编译的 Docker 镜像是否列出

```sh
sudo docker ps
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/5.png
" style={{width:1000, height:'auto'}}/></div>

- **Step 4:** 根据刚刚构建的Docker镜像启动Docker容器

```sh
docker run --privileged --net=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1:seeed1
```

如果看到以下输出，则表示推理服务器已成功启动

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/6.png
" style={{width:1000, height:'auto'}}/></div>

#### 客户端设置 - Jetson/ PC

执行以下 Python 脚本，在您的网络摄像头流上运行开源人物检测模型

<details>

<summary> 网络摄像头.py</summary>

```python
import cv2
import base64
import requests
import time


upload_url = ("http://<ip_address_of_jetson>:9001/"
              "people-detection-general/7"
              "?api_key=xxxxxxxx"
              "&stroke=5")
video = cv2.VideoCapture(0)

while True:
    start = time.time()

    ret, img = video.read()
    if ret:
        # Resize (while maintaining the aspect ratio) to improve speed and save bandwidth
        height, width, channels = img.shape
        scale = 416 / max(height, width)
        img = cv2.resize(img, (round(scale * width), round(scale * height)))

        # Encode image to base64 string
        retval, buffer = cv2.imencode('.jpg', img)
        img_str = base64.b64encode(buffer)

        # Get prediction from Roboflow Infer API
        resp = requests.post(upload_url, data=img_str, headers={
            "Content-Type": "application/x-www-form-urlencoded"
        }, stream=True)
        resp = resp.json()

        for bbox in resp["predictions"]:
            img = cv2.rectangle(
                img,
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2))),
                (int(bbox['x']+(bbox['width']/2)), int(bbox['y']+(bbox['height']/2))),
                (0, 255, 0),
                2)
            cv2.putText(
                img, f"{bbox['class']}",
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2)-5)),
                0, 0.9,
                (0, 255, 0), thickness=2, lineType=cv2.LINE_AA
            )
        cv2.imshow('image', img)
        print((1/(time.time()-start)), " fps")

    if cv2.waitKey(1) == ord('q'):
        break
video.release()
cv2.destroyAllWindows()
```

</details>

注意，脚本中的`upload_url`需要包含的元素有：

- Roboflow推理服务器的IP地址
- 您想要运行的模型
- Roboflow API密钥

Roboflow Universe中的模型可以选择

#### 启用 TensorRT

默认情况下，Roboflow 推理服务器使用 CUDA 运行时。但是，如果您想更改为 TensorRT 运行时以提高推理速度，您可以在文件“inference/docker/dockerfiles /Dockerfile.onnx.jetson.5.1.1”中添加以下内容并构建 Docker 映像

```sh
ENV ONNXRUNTIME_EXECUTION_PROVIDERS=TensorrtExecutionProvider
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## 了解更多

Roboflow 提供了非常详细和全面的文档。因此，强烈建议您查看他们的官方文档[这里](https://docs.roboflow.com)。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您尽可能顺畅地使用我们的产品。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>