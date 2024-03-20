---
description: Getting Started with Grove Vision AI V2.
title: 可支持的摄像头 
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/Grove-vision-ai-v2-camera-supported
last_update:
  date: 3/12/2024
  author: guiyingzhao	
---

# 外部摄像头支持概述

Grove Vision AI V2具有标准的CSI接口，并与树莓派摄像头兼容。连接时，请注意排针的方向，不要插反。

## 强烈推荐

为了充分发挥Grove Vision AI V2的潜力，您可能需要单独购买一个CSI摄像头，我们推荐使用[**OV5647-62 FOV树莓派摄像头模块**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html)。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg" style={{width:300, height:'auto'}}/></div>

## 更多支持

目前我们已为OV5642系列摄像头编写了驱动程序，因此Grove Vision AI V2支持全系列树莓派OV5647摄像头，例如，[OV5647-67](https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html)，和[OV5647-160](https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html)，如下所示：

<div style={{textAlign:'center'}}> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> </div>

## 其他CSI摄像头

理论上，其他CSI摄像头也是支持的，但由于其中一些摄像头没有为它们编写驱动程序，或者它们本身没有彩色处理单元，因此可能会出现颜色仅为绿色的问题，而全彩色的丢失可能会对识别的准确性产生影响。

- [树莓派摄像头模块V1](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html)
- [树莓派摄像头模块V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
- [IMX390 2.12MP 118°(H) FOV 4-lane MIPI CSI摄像头](https://www.seeedstudio.com/IMX390-2-12MP-118-H-FOV-4-lane-MIPI-CSI-Camera-p-5708.html)
- [IMX219 M12/CS接口CMOS摄像头模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

## 资源

- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## 技术支持和产品讨论

感谢您选择我们的产品！我们将提供不同的支持，以确保您与我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

