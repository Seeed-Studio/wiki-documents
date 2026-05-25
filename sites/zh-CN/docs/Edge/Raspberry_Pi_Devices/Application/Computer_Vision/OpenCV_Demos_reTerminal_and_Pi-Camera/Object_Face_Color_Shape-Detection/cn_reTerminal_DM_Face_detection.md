---
description: 使用 reTerminal 和 Pi 摄像头通过 OpenCV 进行人脸检测
title: 使用 reTerminal 和 Pi 摄像头通过 OpenCV 进行人脸检测
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Face-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Face_detection
last_update:
  date: 11/7/2023
  author: Kasun Thushara
createdAt: '2025-05-30'
updatedAt: '2025-09-23'
url: https://wiki.seeedstudio.com/cn/reTerminal_DM_Face_detection/
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" /></center>

## 介绍

使用 **Haar 级联方法** 进行人脸检测是计算机视觉中的一项关键技术，采用机器学习模型来识别面部特征。该方法依赖于在 Haar 类特征上训练的级联分类器，能够快速准确地识别图像和视频流中的人脸。其广泛应用涵盖多个领域，包括 **用于安全和身份验证的面部识别技术、视频监控系统，甚至在摄影软件中基于检测到的人脸进行自动标记和分类**。Haar 级联方法特别有价值，因为其计算效率高，使其 **非常适合在各种情况下进行实时人脸检测**，为面部分析和识别技术的发展做出了重要贡献。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### 软件准备

我们建议从官方网站安装 **Bullesye** 或 **Bullseye** 版本的 Raspberry Pi 64 位操作系统。如果您更喜欢安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)中概述的步骤进行操作。

:::note

我们强烈建议查看我们之前关于[**OpenCV 入门**](https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/)的教程，因为本教程是我们系列教程的延续。

:::

## 什么是 Haar 级联方法？

在 OpenCV 中，Haar 级联方法是一种基于机器学习的人脸检测算法。它通过在正负样本图像上训练级联分类器来工作，使其能够识别指示人脸的模式和特征。级联由多个阶段组成，每个阶段都有一组弱分类器，逐步消除非人脸区域，使检测过程高效。类似 Haar 的特征，类似于深色和浅色区域的矩形模式，作为识别对象（如人脸）的基础。一旦训练完成，级联就可以应用于图像或视频帧来快速检测人脸。这种方法因其准确性和速度而被广泛使用，使其成为各种应用中的热门选择，包括实时人脸检测和识别。

如果您想了解更多信息，请查看此[**文档**](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html)。

### 让我们运行代码

确保您在正确的文件夹中。如果不是

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

那么，你甚至可以使用 Thonny IDE 来运行 Python 脚本。

 ```sh
python facedetection_pi.py
 ```

根据您的参考，我们将为您提供完整的代码片段以便使用。

```sh
import cv2
from picamera2 import Picamera2

# Load the pre-trained Haar Cascade classifier for face detection
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

        # Convert the image to grayscale for face detection
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

        # Perform face detection
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # Draw rectangles around the detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(im, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Display the image with face detection
        cv2.imshow("Face Detection", im)

        # Break the loop when 'q' is pressed
        if cv2.waitKey(1) == ord('q'):
            break

finally:
    # Release resources
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

如果您想找到更多的 haas cascades xml 文件来尝试，请通过这个[**链接**](https://github.com/opencv/opencv/tree/master/data/haarcascades)查看。

## 应用

Haarcascade 最初设计用于实时人脸检测，现已发展以应对当代挑战。创新者已将其功能扩展到包括**口罩检测**，这对公共卫生措施至关重要。此外，该技术已针对**车牌检测**进行了优化，在缺乏复杂硬件的低资源环境中特别有价值。这些适应性改进展示了 Haarcascade 在满足计算机视觉应用中多样化需求方面的多功能性和效率。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/FACEMASK.gif" /></center>

## 技术支持

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
