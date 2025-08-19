---
description: 使用 reTerminal 和 Pi 摄像头结合 OpenCV 进行人脸检测
title: 使用 reTerminal 和 Pi 摄像头结合 OpenCV 进行人脸检测
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - 人脸检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_Face_detection
last_update:
  date: 2023/11/7
  author: Kasun Thushara
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" /></center>

## 介绍

使用 **Haar 级联方法**进行人脸检测是计算机视觉中的一项关键技术，它利用机器学习模型来识别人脸特征。该方法依赖于基于 Haar 特征训练的级联分类器，从而能够快速准确地识别图像和视频流中的人脸。其广泛应用于多个领域，包括**用于安全和身份验证的人脸识别技术、视频监控系统，甚至摄影软件中的自动标记和基于检测人脸的分类**。Haar 级联方法因其计算效率高而特别有价值，使其**非常适合实时人脸检测**，在面部分析和识别技术的进步中发挥了重要作用。

## 开始之前

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们推荐从官方网站安装 **Bullseye** 或 **Bullseye** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)中的步骤操作。

:::note

我们强烈建议您查看我们之前的教程[**OpenCV 入门**](https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/)，因为本教程是我们系列教程的延续。

:::

## 什么是 Haar Cascade 方法？

在 OpenCV 中，Haar Cascade 方法是一种基于机器学习的面部检测算法。它通过在正样本和负样本图像上训练一个级联分类器，使其能够识别面部特征和模式。该级联由多个阶段组成，每个阶段包含一组弱分类器，这些分类器逐步排除非面部区域，从而提高检测效率。Haar-like 特征类似于深浅区域的矩形模式，是识别对象（如面部）的基础。一旦训练完成，该级联可以应用于图像或视频帧中快速检测面部。由于其准确性和速度，该方法被广泛应用于各种场景，包括实时面部检测和识别。

如果您想了解更多，请查看此 [**文档**](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html)。

### 让我们运行代码

确保您处于正确的文件夹。如果不是，请执行以下命令：

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```
或者，您也可以使用 Thonny IDE 来运行 Python 脚本。

 ```sh
python facedetection_pi.py
 ```

以下是完整的代码片段供您参考：

```sh
import cv2
from picamera2 import Picamera2

# 加载预训练的 Haar Cascade 分类器用于面部检测
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

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

        # 将图像转换为灰度图以进行面部检测
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

        # 执行面部检测
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # 在检测到的面部周围绘制矩形
        for (x, y, w, h) in faces:
            cv2.rectangle(im, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # 显示带有面部检测的图像
        cv2.imshow("Face Detection", im)

        # 按下 'q' 键时退出循环
        if cv2.waitKey(1) == ord('q'):
            break

finally:
    # 释放资源
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

如果您想找到更多的 Haar Cascade XML 文件进行尝试，请访问此 [**链接**](https://github.com/opencv/opencv/tree/master/data/haarcascades)。

## 应用

Haarcascade 最初设计用于实时面部检测，随着技术的发展，它已被改进以应对现代挑战。创新者将其功能扩展到包括 **口罩检测**，这对于公共卫生措施至关重要。此外，该技术还被优化用于 **车牌检测**，特别是在硬件资源有限的环境中，这种功能尤为重要。这些改进展示了 Haarcascade 在满足计算机视觉应用中多样化需求方面的灵活性和高效性。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/FACEMASK.gif" /></center>

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