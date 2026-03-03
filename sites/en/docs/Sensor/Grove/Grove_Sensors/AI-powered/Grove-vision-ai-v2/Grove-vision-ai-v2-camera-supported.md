---
description: Getting Started with Grove Vision AI V2.
title: External Camera supported
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Grove-vision-ai-v2-camera-supported
last_update:
  date: 12/12/2023
  author: Citric
---

# External Camera supported Overview

Grove Vision AI V2 features a standard CSI interface and is compatible with Raspberry Pi cameras. When connecting, please pay attention to the direction of the row of pins and don't plug them in backwards.

## Highly Recommended

To explore the full potential of the Grove Vision AI V2 you may want a CSI camera separately, we recommend the [**OV5647-62 FOV Camera Module for Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg" style={{width:300, height:'auto'}}/></div>


## More Supports

Currently we have written drivers for the OV5642 series of cameras, so Grove Vision AI V2 supports the full range of Raspberry Pi OV5647 cameras, e.g., [the OV5647-67](https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html), and [OV5647-160](https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html), as showing below:

<div style={{textAlign:'center'}}> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> </div>

## The Other CSI Cameras

The other CSI cameras are theoretically supported, but due to the fact that some of the cameras don't have drivers written for them or the do not have a colour processing unit themselves, so there may be a problem that the colour is only green, and the loss of full colour will have a possible impact on the accuracy of the recognition.

- [Raspberry Pi Camera Module V1](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html)
- [Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
- [IMX390 2.12MP 118°(H) FOV 4-lane MIPI CSI Camera](https://www.seeedstudio.com/IMX390-2-12MP-118-H-FOV-4-lane-MIPI-CSI-Camera-p-5708.html)
- [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

<!-- 'Before', it's d type Device, but will make it work in the future -->
Grove Vision AI V2 now supports Raspberry Pi cameras for users who purchase after February 21, 2024. However, users who purchased before this date currently do not have support for these specific camera models that work with image input. The team is actively working on a solution to extend this functionality to early purchasers as well.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/cameraList.png" style={{width:1000, height:'auto'}}/></div>

## Resources

- **[PDF]** [Datasheet](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

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

