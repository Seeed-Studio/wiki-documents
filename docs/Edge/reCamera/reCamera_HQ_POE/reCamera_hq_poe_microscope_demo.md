---
description: This is a microscope demo project based on reCamera HQ PoE, supporting PCB inspection and biological sample observation, including hardware assembly guide and AI model applications.
title: Microscope Demo
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
sidebar_position: 3
last_update:
  date: 11/08/2025
  author: Parker Hu
---

# reCamera_Microscope

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## 🔥What is reCamera_Microscope?

reCamera_Microscope is an open-source project based on the [reCamera 2002 series](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) and [GC2053 Sensor Board](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html). You can also use the [reCamera 2002 HQ PoE version](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html) to complete this project.

## 💡What can the reCamera_Microscope be used for?

What Can reCamera_Microscope Be Used For?<br />
reCamera_Microscope supports switching lenses with different magnification levels, enabling it to capture images of subjects such as PCBs (Printed Circuit Boards), electronic components, cells, insects, and plant samples.<br />
The reCamera Sg2002 series comes with a built-in computing power of 1 TOPS, allowing it to run the YoloV11 model. When combined with object detection or segmentation models, it can be applied to scenarios including PCB defect detection, electronic component classification, as well as the classification and counting of cells, insects, and plant samples.<br />
More application directions are yet to be explored by all of you.

## 📷Preview 


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-2.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-3.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-4.png" /></div>

## 🔧Hardware Composition of reCamera_Microscope

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-5.png" /></div>

1. reCamera POE
2. 3D Printer x2
3. M12 lens x2
4. M12 Lens Extension Bracket x3
5. microscope holder
6. 12V power adapter
7. Type-C cable

## Installation Steps

**As shown in the figure, assemble the bracket, connect it to the 12V power supply, and install the 3D printed part.**

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-7.png" /></div>

As shown in the figure, the microscope kit contains two lenses. You need to remove the wide-angle lens and replace it with the other two lenses.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨Option1: Lens 1: Use of the microscope lens

As shown in the figure, remove the microscope lens, install three lens extension adapters, and then install lens 1.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

As shown in the figure, **connect the computer using a USB cable.**

 Visit `192.168.42.1` to view the loading page for reCamera. The logged-in **user** is: `root` ; the **password** is: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

You can purchase sample slices of plants, animals, or microorganisms and place them on the microscope stage. By adjusting the positions of the camera and the object, you will be able to see images of the microscopic world.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨Option2: Lens 2: Use PCB micro-lens

As shown in the figure, remove the microscope lens, install one lens extension adapter, and then install lens 2.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

As shown in the figure, **connect the computer using a USB cable.**

 Visit `192.168.42.1` to view the loading page for reCamera. The logged-in **user** is: `root` ; the **password** is: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

There are two pre-trained models available here, which can be used to identify electronic components on PCBs or detect defects in PCBs.

| [PCB Electronic Component Detection Model](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [Download](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**PCB Defect Detection Model**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**Download**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>