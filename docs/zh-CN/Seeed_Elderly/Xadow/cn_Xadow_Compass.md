---
description: Xadow - 罗盘
title: Xadow - 罗盘
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Compass
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/X_compass_01.jpg)

Xadow 罗盘是一款三轴数字罗盘，是 Xadow 系列的成员之一。该模块基于低场磁传感器 HMC5883。它具有 1° 至 2° 的罗盘指向精度，并使用 I2C 串行总线与您的微控制器通信。Xadow 罗盘是一个帮助您获取方向信息的实用工具。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Compass-p-1669.html)

## 规格
---
- 工作电压：3.3V
- 线性度：0.1（最大值）±% FS
- 分辨率：10 毫高斯
- 磁动态范围：±1 ~ ±8 高斯
- IIC 地址：
  - 7 位地址：0x1E
  - 8 位读取地址：0x3D
  - 8 位写入地址：0x3C
- 工作温度：-30 ~ +85 °C
- 尺寸：25.43mm x 20.35mm

## 演示
---
此演示将向您展示如何读取原始数据、如何使用当地磁偏角校准数据以及如何获取指向角度。

**获取当地磁偏角**

首先，在您采取任何操作之前，您需要准备一个将在演示中使用的参数——您的当地磁偏角。
- 您可以通过 [磁偏角网页](http://www.magnetic-declination.com/)以度数找到。例如，我的磁偏角是 -2°37’，即 -2.617 度。
- 然后将其从度数转换为弧度，您就得到了 "declinationAngle"。例如，在我的情况下，declinationAngle = -2.617 / （2*π）= -0.0456752665 弧度。保留三位有效数字即可。因此我会将其缩短为 -0.0456 弧度。这是您需要在演示代码中替换 "declinationAngle" 值的参数。

**下载代码**
- 完成硬件安装：
:::note
    当将 Xadow 罗盘连接到 Xadow 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::
- 下载库文件：[数字罗盘库](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass)，并将其安装到您的 Arduino 库中。请参阅 [如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 了解安装方法。
- 通过路径打开演示：File -> Example -> Digital Compass -> HMC5883L_Example。将变量 "declinationAngle" 的值替换为您已经计算出的值。

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Xadow_Compass_Code.jpg)

- 上传代码。通过打开串行监视器检查输出结果。

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Digital_Compass2.jpg)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [三轴数字罗盘 HMC5883 数据手册](https://files.seeedstudio.com/wiki/Xadow_Compass/res/HMC5883.pdf)
- [Xadow 罗盘 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip)
- [Xadow 罗盘库文件](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>