---
description: 本维基演示了在搭载 Raspberry-pi-AI-kit 加速的 reComputer R 系列上使用 YOLOv8 进行目标检测。
title: 在搭载 Hailo-8L 的 reComputer R 系列上进行 YOLOv8 目标检测
keywords:
  - 边缘
  - reComputer R 系列
  - 目标检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
sku: 113991274, E24010521, 114993627, 100020831, 100061305, 103990763
last_update:
  date: 04/17/2026
  author: William Zhang
no_comments: false
createdAt: '2024-06-27'
updatedAt: '2025-08-18'
url: https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/
---

# 在搭载 Hailo-8L 的 reComputer R 系列上进行 YOLOv8 目标检测

## 介绍

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once 第 8 版）是 YOLO 系列中最流行的一款实时目标检测模型。它在前代模型优势的基础上，在速度、精度和灵活性方面引入了多项改进。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) 用于加速推理速度，内置基于 Hailo-8L 芯片的 13 TOPS 神经网络推理加速器。

本维基演示了在 R 系列上使用和不使用 Raspberry-pi-AI-kit 加速运行 YOLOv8 进行目标检测。Raspberry Pi AI Kit 提升了 Raspberry Pi 的性能，并释放其在人工智能和机器学习应用中的潜力，例如智慧零售、智慧交通等。尽管 Raspberry AI Kit 是为 Raspberry Pi 5 设计的，我们已经在基于 CM4 的边缘网关上进行了实验。非常期待将我们的边缘设备变成智能物联网网关！

## 准备硬件

<div class="table-center">
  <table align="center">
    <tr>
      <th>reComputer r1000</th>
      <th>Raspberry Pi AI Kit</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
  <table align="center">
    <tr>
      <th>reComputer AI Industrial R2100</th>
      <th>reComputer Industrial R20xx</th>
      <th>reComputer Industrial R21xx</th>
      <th>reComputer AI R2100</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 运行本项目

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="使用 Hailo-8L 运行">

### 步骤 1：安装 AI kit

如果你使用的是内置 AI 加速的 R2000 系列设备，可以跳过此步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### 步骤 2：更新系统并将 pcie 设置为 gen3

#### 更新系统

在 reComputer R1000 上打开终端，输入如下命令来更新系统。

```
sudo apt update
sudo apt full-upgrade
```

#### 将 pcie 设置为 gen3

在 reComputer R1000 上打开终端，输入如下命令来配置 reComputer R1000。

```
sudo raspi-config
```

选择选项 "6 Advanced Options"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

然后选择选项 "A8 PCIe Speed"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

选择 "Yes" 以启用 PCIe Gen 3 模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

点击 "Finish" 退出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### 步骤 3：安装 Hailo 软件并验证安装

#### 安装 Hailo 软件

在 reComputer R1000 上打开终端，输入如下命令来安装 Hailo 软件。

```
sudo apt install hailo-all
sudo reboot
```

#### 检查软件和硬件

在 reComputer R1000 上打开终端，输入如下命令来检查是否已安装 hailo-all。

```
hailortcli fw-control identify
```

正确的结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

在 reComputer R1000 上打开终端，输入如下命令来检查是否已连接 hailo-8L。

```
lspci | grep Hailo
```

正确的结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### 运行 YOLOv8

在 reComputer R1000 上打开终端，输入如下命令来运行 YOLOv8。

注意：运行时必须通过 HDMI 线连接外接显示器，否则可视化界面将无法加载。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```

### 结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### 注意
如果你是通过 SSH 或其他方式进行远程连接且没有可用的外接显示器，可以修改代码中的图像渲染方式，使可视化界面在不依赖外接显示器的情况下完成渲染。

打开推理代码文件 object-detection-hailo.py，修改第 165 行，并将整行替换为以下代码：
```
        pipeline_string += f"fpsdisplaysink video-sink=ximagesink name=hailo_display sync={self.sync} text-overlay={self.options_menu.show_fps} signal-fps-measurements=true "
```



</TabItem>

<TabItem value="Method 2" label="不使用 Hailo-8L 运行">

### 运行 YOLOv8

在 reComputer R1000 上打开终端，输入如下命令来运行 YOLOv8。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection
```

### 结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_withoutAIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>

## 结果

我们对使用 AI kit 加速前后，在输入分辨率为 640*640 时 YOLOv8 进行目标检测的推理速度进行了对比。结果显示，加速前推理速度仅为 0.75 FPS，而加速后达到了 29.5 FPS。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 项目展望

在本项目中，我们对比测试了在有和没有 AI 套件的情况下，YOLOv8 在目标检测任务中的运行速度。结果表明，AI 套件可以大幅提升边缘设备的性能。未来，我们还将对 YOLOv8 在不同场景下的运行速度进行基准测试，包括在加速后的语义分割和姿态估计 AI 套件中的表现。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
