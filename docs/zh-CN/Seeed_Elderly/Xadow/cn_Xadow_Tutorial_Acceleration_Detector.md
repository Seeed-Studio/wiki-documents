---
description: Xadow 教程 - 加速度检测器
title: Xadow 教程 - 加速度检测器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Tutorial_Acceleration_Detector
last_update:
  date: 1/13/2023
  author: shuxu hu
---

我们制作了一个加速度检测器，它可以检测加速度并通过振动提醒用户。当加速度发生变化时，Xadow 振动器会振动，OLED 屏幕会显示加速度值。您还可以在 OLED 显示屏上看到当前的电池电压。

本演示需要以下组件：

<!-- 
*   [Xadow 主板](/cn/Xadow_Main_Board/)

*   [Xadow OLED](/cn/Xado_OLED_128multiply64)

*   [Xadow 振动电机](https://wiki.seeedstudio.com/cn/Xadow_Vibrator_Motor/)

*   [Xadow 加速度计](/cn/Xadow_3_Aixs_Accelerometer/) 
-->

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Untitled2.jpg)

完成演示需要以下步骤：

*   使用 FFC 电缆将 Xadow 主板、Xadow OLED、Xadow 振动器和 Xadow 加速度计按相同方向连接。

<!-- *   使用 Micro USB 电缆将 Xadow 主板连接到 PC。在上传代码之前，您需要安装 Xadow 驱动程序。请点击[这里](/cn/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board)了解具体操作。 -->

*   当您看到“现在，您可以像使用其他 Arduino 板一样编程和使用 Xadow”时，表示您已完成准备工作。

*   下载 [文件：加速度检测器库](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip)，并直接打开 acceleDetector INO 文件。

:::note
    在编译之前，您需要确保 Arduino 库中有 [库：OLED_Display12864](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/OLED_Display12864.zip) 和 [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/Sleep_FromArduino.zip)。如果没有，请下载并解压后将它们放入 Arduino IDE 的库文件夹路径：..\arduino-1.0.1\libraries。
:::

*   编译代码并将其上传到 Xadow 主板。您需要在 Arduino 环境的工具菜单中选择 Seeed Xadow 作为板类型。
*   然后您可以看到以下图片：

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Demo_1_effect_picture.jpg)

通过摇动传感器改变加速度值，您将在 OLED 模块上看到传感器的数值。

## 资源

[Demo1 加速度检测器代码](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>