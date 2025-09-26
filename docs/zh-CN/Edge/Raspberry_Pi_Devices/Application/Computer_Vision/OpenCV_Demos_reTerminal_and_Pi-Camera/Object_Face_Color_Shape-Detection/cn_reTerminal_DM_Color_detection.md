---
description: 使用 reTerminal 和 Pi 摄像头通过 OpenCV 进行颜色检测
title: 使用 reTerminal 和 Pi 摄像头通过 OpenCV 进行颜色检测
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Color-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_Color_detection
last_update:
  date: 11/28/2023
  author: Kasun Thushara
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" /></center>

## 介绍

颜色检测是计算机视觉的核心组件，涉及识别和分析数字图像或视频中的颜色。它广泛应用于各个行业，能够实现**机器人技术中的物体识别、制造业中的质量控制，甚至在艺术品修复中发挥作用**。颜色检测背后的算法推动了技术进步，影响着**自动驾驶汽车、医学成像以及电影和摄影中的视觉美学**等领域。本质上，颜色检测是一个多功能工具，以多种有意义的方式增强了我们解释和与视觉世界交互的能力。

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

我们建议从官方网站安装 **Bullesye** 或 **Bookworm** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)中概述的步骤进行操作。

:::note

我们强烈建议查看我们之前关于[**OpenCV 入门**](https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/)的教程，因为本教程是我们系列教程的延续。

:::

## 探索 OpenCV 中的色彩空间

色彩空间是图像处理的基础，OpenCV 支持多种色彩空间，每种都有其独特的用途。让我们深入了解 OpenCV 中的三种常见色彩空间：CMYK、BGR 和 HSV。

### CMYK 色彩空间

CMYK（青色、品红色、黄色、黑色/关键色）是一种减色色彩空间，用于彩色印刷。
颜色是通过从白光中减去不同百分比的青色、品红色、黄色和黑色来创建的。

### BGR 色彩空间

OpenCV 的默认色彩空间是 RGB，但它在内部以 BGR（蓝色、绿色、红色）格式存储颜色。
BGR 是一种加色模型，其中不同强度的蓝色、绿色和红色组合形成不同的色调。

**分量范围：**

- 蓝色 (0-255)：蓝色的强度。
- 绿色 (0-255)：绿色的强度。
- 红色 (0-255)：红色的强度。

### HSV 色彩空间

HSV（色调、饱和度、明度）在从 RGB 颜色点派生的圆柱模型中表示颜色。
它模拟人类对颜色的感知，具有色调、饱和度和明度分量。

**分量范围：**

- 色调 (0-179)：以度为单位的颜色类型。
- 饱和度 (0-255)：颜色的强度或鲜艳度。
- 明度 (0-255)：颜色的亮度。

## 为什么 HSV 在颜色检测问题中很重要？

HSV（色调、饱和度、明度）在颜色检测任务中至关重要，因为它能够有效地分离颜色信息。与 RGB 或 BGR 不同，HSV 将颜色类型（色调）与其强度（饱和度）和亮度（明度）分离，提供了更直观的表示。这种分离对光照变化具有鲁棒性，使基于颜色的分割对不同光照条件的敏感性降低。此外，HSV 中颜色的自然表示简化了定义颜色阈值的过程，有助于为识别图像中的特定对象或区域制定精确的标准。它在计算机视觉任务中的广泛使用，如基于颜色的对象跟踪和分割，突出了其在实现准确可靠结果方面的重要性。

## 如何使用代码片段

在第一个代码中，您可以灵活地交互式调整滑动条，让您可以直观地识别最佳的颜色阈值。通过试验这些滑动条，您可以精确定位您感兴趣的特定颜色，并记下相应的 HSV 最小值和最大值。这种实践方法为个人提供了一种直观的方式来微调颜色参数，确保更个性化和精确的颜色识别体验

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

Then

 ```sh
python hsvtest.py
 ```

即使您可以使用 Thonny IDE 来运行 Python 脚本。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colortrack.PNG" /></center>

这是 HSV 调节的代码

  ```sh
import cv2
import numpy as np

def empty(a):
    pass

def stackImages(scale,imgArray):
    rows = len(imgArray)
    cols = len(imgArray[0])
    rowsAvailable = isinstance(imgArray[0], list)
    width = imgArray[0][0].shape[1]
    height = imgArray[0][0].shape[0]
    if rowsAvailable:
        for x in range ( 0, rows):
            for y in range(0, cols):
                if imgArray[x][y].shape[:2] == imgArray[0][0].shape [:2]:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (0, 0), None, scale, scale)
                else:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (imgArray[0][0].shape[1], imgArray[0][0].shape[0]), None, scale, scale)
                if len(imgArray[x][y].shape) == 2: imgArray[x][y]= cv2.cvtColor( imgArray[x][y], cv2.COLOR_GRAY2BGR)
        imageBlank = np.zeros((height, width, 3), np.uint8)
        hor = [imageBlank]*rows
        hor_con = [imageBlank]*rows
        for x in range(0, rows):
            hor[x] = np.hstack(imgArray[x])
        ver = np.vstack(hor)
    else:
        for x in range(0, rows):
            if imgArray[x].shape[:2] == imgArray[0].shape[:2]:
                imgArray[x] = cv2.resize(imgArray[x], (0, 0), None, scale, scale)
            else:
                imgArray[x] = cv2.resize(imgArray[x], (imgArray[0].shape[1], imgArray[0].shape[0]), None,scale, scale)
            if len(imgArray[x].shape) == 2: imgArray[x] = cv2.cvtColor(imgArray[x], cv2.COLOR_GRAY2BGR)
        hor= np.hstack(imgArray)
        ver = hor
    return ver


path = 'captured_image.jpg'
cv2.namedWindow("TrackBars")
cv2.resizeWindow("TrackBars",640,240)
cv2.createTrackbar("Hue Min","TrackBars",0,179,empty)
cv2.createTrackbar("Hue Max","TrackBars",19,179,empty)
cv2.createTrackbar("Sat Min","TrackBars",110,255,empty)
cv2.createTrackbar("Sat Max","TrackBars",240,255,empty)
cv2.createTrackbar("Val Min","TrackBars",153,255,empty)
cv2.createTrackbar("Val Max","TrackBars",255,255,empty)

while True:
    img = cv2.imread(path)
    img= cv2.resize(img, (300, 300))
    imgHSV = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    h_min = cv2.getTrackbarPos("Hue Min","TrackBars")
    h_max = cv2.getTrackbarPos("Hue Max", "TrackBars")
    s_min = cv2.getTrackbarPos("Sat Min", "TrackBars")
    s_max = cv2.getTrackbarPos("Sat Max", "TrackBars")
    v_min = cv2.getTrackbarPos("Val Min", "TrackBars")
    v_max = cv2.getTrackbarPos("Val Max", "TrackBars")
    print(h_min,h_max,s_min,s_max,v_min,v_max)
    lower = np.array([h_min,s_min,v_min])
    upper = np.array([h_max,s_max,v_max])
    mask = cv2.inRange(imgHSV,lower,upper)
    imgResult = cv2.bitwise_and(img,img,mask=mask)


    cv2.imshow("Original",img)
    cv2.imshow("HSV",imgHSV)
    cv2.imshow("Mask", mask)
    cv2.imshow("Result", imgResult)

    #imgStack = stackImages(0.6,([img,imgHSV],[mask,imgResult]))
    #cv2.imshow("Stacked Images", imgStack)

    cv2.waitKey(1)
 ```

一旦您使用第一个代码片段中的滑动条确定了HSV的最小值和最大值，您就可以无缝地**将这些数值**替换为第二个代码片段中相应的**颜色名称**及其识别范围。

 ```sh
python colordetector.py
 ```
以下是颜色检测的完整代码

```sh
import cv2
import numpy as np
from picamera2 import Picamera2

Your_color = "Green"

def detect_single_color(imageFrame, color_name, lower_range, upper_range, color_display):
    hsvFrame = cv2.cvtColor(imageFrame, cv2.COLOR_BGR2HSV)
    color_mask = cv2.inRange(hsvFrame, lower_range, upper_range)

    kernel = np.ones((5, 5), "uint8")
    color_mask = cv2.dilate(color_mask, kernel)
    result = cv2.bitwise_and(imageFrame, imageFrame, mask=color_mask)

    contours, hierarchy = cv2.findContours(color_mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for pic, contour in enumerate(contours):
        area = cv2.contourArea(contour)
        if area > 800:
            x, y, w, h = cv2.boundingRect(contour)
            imageFrame = cv2.rectangle(imageFrame, (x, y), (x + w, y + h), color_display, 2)
            cv2.putText(imageFrame, f"{color_name} Colour", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, color_display)

    return imageFrame

# Initialize PiCamera
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

# Define your color range
my_color_lower = np.array([49, 105, 0], np.uint8)
my_color_upper = np.array([94, 255, 255], np.uint8)

# Start a while loop
while True:
    im = picam2.capture_array()

    # Example: Detecting your specified color
    result_frame = detect_single_color(im, Your_color, my_color_lower, my_color_upper, (0, 255, 0))  # Change the color display accordingly

    # Program Termination
    cv2.imshow("Single Color Detection in Real-Time", result_frame)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        picam2.stop()
        cv2.destroyAllWindows()
        break

 ```

## 应用

颜色检测在各种应用中发挥着关键作用，从计算机视觉和制造业到**医学成像**和艺术。在计算机视觉中，它能够实现物体识别和跟踪，为**机器人导航和监控**等任务做出贡献。工业界利用颜色检测进行**分拣和质量控制，确保产品符合标准**。医学成像依赖基于颜色的分割进行精确分析，而娱乐行业则将其用于电影调色和艺术修复。从**交通标志识别到生物识别和环境监测**，检测和解释颜色的能力是基础性的，推动了技术、自动化和各个领域的进步。使用OpenCV计算机视觉库的简单技术，如颜色检测和形状检测，我们可以轻松地计算停车位并检测异常停车场景。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/carpark.gif" /></center>

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
