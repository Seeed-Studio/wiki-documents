---
description: use IMX477 camera with A603 Jetson carrier board
title: Use IMX477 Camera with A603 Jetson Carrier Board
keywords:
- reComputer
- IMX477 Camera
- A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Use_IMX477_Camera_with_A603_Jetson_Carrier_Board
last_update:
  date: 05/22/2024
  author: Youjiang
---

## Jetpack 5.1.2

If you need to use the IMX477 camera, please download [this driver package](https://recomputer-jetson.oss-us-west-1.aliyuncs.com/A603/603_imx477_jp512.zip) and follow [this tutorial](https://wiki.seeedstudio.com/reComputer_A603_Flash_System/) to reflash the Jetpack system.

:::caution
Please note that you need to use the BSP for [ **JP5.1.2** ](https://developer.nvidia.com/embedded/jetson-linux-r3541).
:::

## Jetpack 6.0

If you need to use the IMX477 camera, please download [this driver package](https://recomputer-jetson.oss-us-west-1.aliyuncs.com/A603/603_imx477_jp60.zip) and follow [this tutorial](https://wiki.seeedstudio.com/reComputer_A603_Flash_System/) to reflash the Jetpack system.

:::caution
Please note that you need to use the BSP for [ **JP6.0** ](https://developer.nvidia.com/embedded/jetson-linux-r363).
:::

After the system flashing is completed, connect the CSI camera and use the following command to start the camera:

```bash
nvgstcapture-1.0 --sensor-id=0
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera.png" /></div>


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