---
description: Xadow 教程 - 通过 BLE 通信
title: Xadow 教程 - 通过 BLE 通信
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Tutorial_Communicate_via_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

你是否曾想过这样的场景：打开手机，我可以看到当前的气压或运动加速度。Xadow 模块可以帮助你实现这一点。

在这个演示中，你需要使用以下设备：

*   Xadow 主板
*   Xadow OLED
*   Xadow 加速度计
*   Xadow BLE 从机

如果你已经学会了实现演示 1 和演示 2，你只需要连接 Xadow 主板、Xadow OLED、Xadow 加速度计和 Xadow BLE 从机模块，并下载 [代码：BLE_Slave](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip)。

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/BLEUsage.jpg)

现在你可以打开 BLE_Slave INO 文件，编译并上传。

<!-- 如果你刚开始使用，请参考 [这里](/cn/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board) 安装 Xadow 驱动程序。并准备下载库：[DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/DigitalAccelerometer_ADXL345.zip) 和 [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/Sleep_FromArduino.zip)，解压后将它们放到 Arduino IDE 的库文件夹路径：..\arduino-1.0.1\libraries。 -->
<!-- 现在你可以打开手机的蓝牙来观察数据。当加速度计的值发生变化时，蓝牙串口会显示实时数据。注意你的手机蓝牙需要支持蓝牙 4.0（iPhone4S 或以上），并且需要下载蓝牙串口工具。更多信息请参考 [Xadow BLE 从机的使用方法](/cn/Xadow_BLE_Slave#Usage)。 -->

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/Phone_and_BLE_Slave_Communicate.jpg)

你可以看到手机屏幕上有两个命令（ledon 和 ledoff）。它们用于控制绿色指示灯的状态。试试看吧！

## 资源

[Demo3 BLESlave 代码](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们致力于为你提供各种支持，以确保你使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>