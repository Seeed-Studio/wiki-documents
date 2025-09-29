---
description: 入门指南：Grove Vision AI V2。
title: 支持外部摄像头
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/Grove-vision-ai-v2-camera-supported
last_update:
  date: 12/12/2023
  author: Citric
---

# 支持外部摄像头概述

Grove Vision AI V2 配备标准 CSI 接口，并兼容树莓派摄像头。在连接时，请注意针脚排的方向，避免反向插入。

## 强烈推荐

为了充分发挥 Grove Vision AI V2 的潜力，您可能需要单独购买一款 CSI 摄像头。我们推荐 [**OV5647-62 FOV 树莓派摄像头模块**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html)。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg" style={{width:300, height:'auto'}}/></div>

## 更多支持

目前我们已为 OV5642 系列摄像头编写了驱动，因此 Grove Vision AI V2 支持全系列树莓派 OV5647 摄像头，例如 [OV5647-67](https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html) 和 [OV5647-160](https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html)，如下图所示：

<div style={{textAlign:'center'}}> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> </div>

## 其他 CSI 摄像头

其他 CSI 摄像头理论上是支持的，但由于某些摄像头没有驱动程序或自身不具备颜色处理单元，可能会出现颜色仅为绿色的问题，缺失完整颜色可能会影响识别的准确性。

- [树莓派摄像头模块 V1](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html)
- [树莓派摄像头模块 V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
- [IMX390 2.12MP 118°(H) FOV 4-lane MIPI CSI 摄像头](https://www.seeedstudio.com/IMX390-2-12MP-118-H-FOV-4-lane-MIPI-CSI-Camera-p-5708.html)
- [IMX219 M12/CS 安装 CMOS 摄像头模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

<!-- 'Before', it's d type Device, but will make it work in the future -->
Grove Vision AI V2 现已支持树莓派摄像头，适用于 2024 年 2 月 21 日之后购买的用户。然而，对于在此日期之前购买的用户，目前尚不支持这些特定摄像头型号的图像输入功能。团队正在积极开发解决方案，以扩展早期购买者的功能支持。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/cameraList.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。以下是我们提供的沟通方式，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>