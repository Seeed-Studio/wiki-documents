---
description: 这是一个基于 reCamera HQ PoE 的显微镜演示项目，支持 PCB 检测和生物样本观察，包含硬件组装指南和 AI 模型应用。
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
slug: /recamera_hq_poe_microscope_demo
sku: 100041077,100018917,100029708,100074316
sidebar_position: 3
last_update:
  date: 10/08/2026
  author: Parker Hu
createdAt: '2025-11-10'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/recamera_hq_poe_microscope_demo/
---

# reCamera_Microscope

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## 硬件准备

本教程使用以下产品：

<table align="center">

<tbody><tr>

<th>Seeed Studio reCamera 2002 HQ PoE 8GB</th>

<th>1/2.9" M12 Ultra Telephoto Lens for reCamera - 2MP, 15° (22mm-B)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100070335-_22mm_b_.jpg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/22mm-B-p-6646.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

## 🔥reCamera_Microscope 是什么？

reCamera_Microscope 是一个基于 [reCamera 2002 series](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) 和 [GC2053 Sensor Board](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html) 的开源项目。你也可以使用 [reCamera 2002 HQ PoE 版本](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html)来完成该项目。

## 💡reCamera_Microscope 可以用来做什么？

reCamera_Microscope 可以用来做什么？<br />
reCamera_Microscope 支持更换不同放大倍率的镜头，可用于拍摄 PCB（印刷电路板）、电子元器件、细胞、昆虫以及植物样本等目标的图像。<br />
reCamera Sg2002 系列内置 1 TOPS 计算能力，可运行 YoloV11 模型。结合目标检测或分割模型，可应用于 PCB 缺陷检测、电子元器件分类，以及细胞、昆虫和植物样本的分类与计数等场景。<br />
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

如图所示，显微镜套件包含两个镜头。你需要拆下广角镜头，并将其更换为另外两个镜头。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨选项 1：镜头 1：使用显微镜镜头

如图所示，取下显微镜镜头，安装三个镜头延长转接件，然后安装镜头 1。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

如图所示，**使用 USB 线连接电脑。**

 访问 `192.168.42.1` 查看 reCamera 的加载页面。登录的**用户名**为：`root`；**密码**为：`recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

你可以购买植物、动物或微生物的样本切片，并将其放置在显微镜载物台上。通过调节相机和物体的位置，你就能看到微观世界的图像。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨选项 2：镜头 2：使用 PCB 微距镜头

如图所示，取下显微镜镜头，安装一个镜头延长转接件，然后安装镜头 2。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

如图所示，**使用 USB 线连接电脑。**

 访问 `192.168.42.1` 查看 reCamera 的加载页面。登录的**用户名**为：`root`；**密码**为：`recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

这里提供了两个预训练模型，可用于识别 PCB 上的电子元器件或检测 PCB 缺陷。

| [PCB 电子元器件检测模型](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [Download](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**PCB 缺陷检测模型**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**Download**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>