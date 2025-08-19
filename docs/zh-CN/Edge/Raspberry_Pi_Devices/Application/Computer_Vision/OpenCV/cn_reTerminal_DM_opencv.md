---
description: 使用 reTerminal 和 Pi 摄像头搭配 OpenCV 的入门教程
title: 使用 reTerminal 和 Pi 摄像头搭配 OpenCV 的入门教程
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_opencv
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

## 简介

在本教程中，我们将指导您如何使用 **全新安装的 Raspberry Pi OS Bullseye 或 BookWorm OS** 设置 reTerminal。我们的目标是与 **PiCam** 进行交互，并使用 **OpenCV** 库执行图像处理和深度学习活动。

## OpenCV

**OpenCV（开源计算机视觉库）**：OpenCV 是一个功能强大的开源计算机视觉库，专为实时计算机视觉任务设计。它提供了一套全面的工具和功能，使开发者能够处理图像和视频，并为图像处理、目标检测、人脸识别等任务提供解决方案。OpenCV 在学术界和工业界广泛使用，支持多种编程语言，是跨平台计算机视觉应用的多功能选择。其灵活性和丰富的文档使其成为任何从事计算机视觉开发的人员不可或缺的资源。

## 入门

在开始这个项目之前，您需要提前准备好硬件和软件，如下所述。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们建议从官方网站安装 **Bullseye** 或 **Bookworm** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian OS，请按照此 [**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) 中的步骤操作。

## 安装 OpenCV

如果您不想详细了解安装过程，可以直接使用我们的快捷方式。以下是针对 **Bullseye OS** 的简化步骤：

- **步骤 1** 首先，将此 Git 仓库克隆到您的 Raspberry Pi 上，如下所示：

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
```

- **步骤 2** 接下来，使用我们的脚本轻松安装所需的 Python 包并下载 EfficientDet-Lite 模型。进入以下文件夹：

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
```

- **步骤 3** 脚本将安装所需的依赖项并下载 TFLite 模型以供本教程系列使用。

```sh
sh setup.sh
```

如果您使用的是 **Bookworm OS**，请按照以下步骤操作：

- **步骤 1** 在终端中执行以下命令安装所需的库：

```sh
sudo apt-get install libopencv-dev python3-opencv
```

- **步骤 2** 接下来，将此 Git 仓库克隆到您的 Raspberry Pi 上，如下所示：

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
```

## 获取视频流

在新的终端窗口中，导航到 **Opencv_and_piCam** 文件夹：

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
```

在本教程中，我们将使用 PiCam 和 OpenCV 在 reTerminal 上运行一个“Hello World”程序。您可以在克隆的仓库中找到 **captureimages.py** 文件。我们将探索实时视频流，如果您按下 'q' 键，视频流将优雅地停止。您也可以使用 Thonny IDE 来运行 Python 脚本。

```sh
python captureimages.py
```

您将看到如下的视频流：

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" /></center>

为了方便参考，我们提供了完整的代码片段：

```python
import cv2
from picamera2 import Picamera2
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280,720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()
while True:
    im= picam2.capture_array()
    cv2.imshow("Camera", im)
    if cv2.waitKey(1)==ord('q'):
        break
cv2.destroyAllWindows()
```

## 捕获照片并保存

在这里，我们将使用 PiCam 和 OpenCV 在 ReTerminal 上捕获静态图像。您可以在克隆的仓库中找到 **saveimage.py** 文件。我们将进行实时视频流，如果您按下 's' 键，将捕获一张照片。您也可以使用 Thonny IDE 来运行 Python 脚本。

```sh
python saveimage.py
```

您将在同一目录中找到捕获的图像。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/capturedimage.PNG" /></center>

为了方便参考，我们提供了完整的代码片段：

```python
import cv2
from picamera2 import Picamera2

picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

try:
    while True:
        im = picam2.capture_array()
        cv2.imshow("Camera", im)

        # 按下键（例如 's'）时保存图像
        key = cv2.waitKey(1)
        if key == ord('s'):
            # 使用 OpenCV 保存图像
            cv2.imwrite("captured_image.jpg", im)
            print("图像已保存！")

        # 按下 'q' 键时退出循环
        elif key == ord('q'):
            break

finally:
    # 释放资源
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

## 技术支持

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>