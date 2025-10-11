---
description: 本wiki展示了如何在AI Box上使用YOLO模型进行跌倒、翻越障碍物和人员跟踪检测。
title: AI Box上的YOLOv8用于跌倒、攀爬和跟踪检测
keywords:
  - Edge AI
  - rpi5
  - Hailo
  - YOLO
image: https://files.seeedstudio.com/wiki/YOLOv8_AI_Box/recompuer_ai_box.webp
slug: /cn/yolov8_on_ai_box_for_fall_climbing_tracking
last_update:
  date: 07/29/2025
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv8 AI Box：跌倒、攀爬和跟踪检测


## 介绍

本项目将指导您如何使用[reComputed AI Box](https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html)或[reComputed Industry AI Box](https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html)来实现使用YOLOv8模型的跌倒检测、攀爬检测和跟踪检测。


## 硬件准备

|                                               reCompuer AI Box                                              |                                               reComputer Industry AI Box                                               |
| :----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| ![Raspberry Pi AI Kit](https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image114993560.jpeg) | ![reComputer R1100](https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg) |
| [**立即购买**](https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html?utm_source=PiAICourse&utm_medium=github&utm_campaign=Course) | [**立即购买**](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html?utm_source=PiAICourse&utm_medium=github&utm_campaign=Course) |

> 💡 **注意**：本项目需要reComputer AI Box或reComputer Industry AI Box。


##  跌倒检测

### 安装运行环境

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### 下载项目

```bash
git clone https://github.com/Seeed-Projects/fall_detection_with_AIBox.git
cd fall_detection_with_AIBox
```

### 准备Python环境

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### 运行项目
```bash
python app.py -i ./falldown_test.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt
```

### 结果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/H0NaAevLo2k" title="How the Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 翻越围栏

### 安装运行环境

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### 下载项目

```
git clone https://github.com/Seeed-Projects/cross_fence_with_AIBox.git
cd cross_fence_with_AIBox
```

### 准备Python环境

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### 运行项目

```bash
python app.py -i ./scale_the_fence.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt 
```

### 结果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/_-89czNbZ_M?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection: Fence Climbing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 跟踪检测

### 安装运行环境

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### 下载项目

```bash
git clone https://github.com/Seeed-Projects/track_people_with_AIBox.git
cd fall_detection_with_AIBox
```

### 准备Python环境

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### 运行项目

```bash
python app.py -i ./people-walking.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt --track
```

### 结果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/xoeMcaG_FxE?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="reComputer Object Detection and Tracking: The Role of YOLOv8 in Shaping Results" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


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