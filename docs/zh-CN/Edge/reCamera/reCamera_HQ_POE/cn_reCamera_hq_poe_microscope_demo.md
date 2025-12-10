---
description: 这是一个基于 reCamera HQ PoE 的显微镜演示项目，支持 PCB 检测和生物样本观察，包括硬件组装指南和 AI 模型应用。
title: 显微镜演示
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
  - Microscope
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/recamera_hq_poe_microscope_demo
sidebar_position: 3
last_update:
  date: 11/08/2025
  author: Parker Hu
---

# reCamera_Microscope

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## 🔥什么是 reCamera_Microscope？

reCamera_Microscope 是一个基于 [reCamera 2002 系列](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) 和 [GC2053 传感器板](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html) 的开源项目。您也可以使用 [reCamera 2002 HQ PoE 版本](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html) 来完成这个项目。

## 💡reCamera_Microscope 可以用来做什么？

reCamera_Microscope 可以用来做什么？<br />
reCamera_Microscope 支持切换不同放大倍数的镜头，使其能够拍摄 PCB（印刷电路板）、电子元件、细胞、昆虫和植物样本等对象的图像。<br />
reCamera Sg2002 系列内置 1 TOPS 的计算能力，允许其运行 YoloV11 模型。当与目标检测或分割模型结合时，可以应用于 PCB 缺陷检测、电子元件分类，以及细胞、昆虫和植物样本的分类和计数等场景。<br />
更多应用方向有待大家共同探索。

## 📷预览 


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-2.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-3.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-4.png" /></div>

## 🔧reCamera_Microscope 的硬件组成

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-5.png" /></div>

1. reCamera POE
2. 3D 打印件 x2
3. M12 镜头 x2
4. M12 镜头延长支架 x3
5. 显微镜支架
6. 12V 电源适配器
7. Type-C 线缆

## 安装步骤

**如图所示，组装支架，连接 12V 电源，并安装 3D 打印部件。**

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-7.png" /></div>

如图所示，显微镜套件包含两个镜头。您需要移除广角镜头并更换为另外两个镜头。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨选项 1：镜头 1：显微镜镜头的使用

如图所示，移除显微镜镜头，安装三个镜头延长适配器，然后安装镜头 1。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

如图所示，**使用 USB 线缆连接计算机。**

 访问 `192.168.42.1` 查看 reCamera 的加载页面。登录的**用户名**是：`root`；**密码**是：`recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

您可以购买植物、动物或微生物的样本切片，并将它们放在显微镜载物台上。通过调整相机和物体的位置，您将能够看到微观世界的图像。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨选项 2：镜头 2：使用 PCB 微距镜头

如图所示，移除显微镜镜头，安装一个镜头延长适配器，然后安装镜头 2。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

如图所示，**使用 USB 线缆连接计算机。**

 访问 `192.168.42.1` 查看 reCamera 的加载页面。登录的**用户名**是：`root`；**密码**是：`recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

这里有两个预训练模型可用，可以用来识别 PCB 上的电子元件或检测 PCB 中的缺陷。

| [PCB 电子元件检测模型](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [下载](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**PCB 缺陷检测模型**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**下载**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

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