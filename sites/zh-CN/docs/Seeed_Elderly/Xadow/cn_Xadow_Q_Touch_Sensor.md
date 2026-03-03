---
description: Xadow - Q触摸传感器
title: Xadow - Q触摸传感器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Q_Touch_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow%20Q%20touch%20sensor.jpg)

Q触摸传感器是一种高灵敏度和高抗噪性的触摸输入设备。它基于Atmel AT42QT1070。

AT42QT1070以扩频方式调制其脉冲，以强力抑制外部噪声的影响，并抑制射频辐射。QT1070采用双脉冲采集方法。这提供了更强的抗噪性，并消除了对外部采样电容的需求，从而可以使用单个引脚进行触摸感应。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html)

## 规格
---
*   工作电压：3 ~ 5.5V
*   工作电流 @3.3V：1mA
*   触摸按键：7个按键；key0、key1、key2位于Xadow PCB底部
*   通信协议：I2C
*   I2C地址：0x1B

## 接口功能
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow-Q_Touch.png)

*   ①：触摸按键3、按键4引出
*   ②：触摸按键5、按键6引出

推荐的按键电容Cx范围为1 pF – 30 pF。较大的Cx值会降低灵敏度。

*   ③：Xadow接口
*   ④：板载触摸按键0
*   ⑤：板载触摸按键1
*   ⑥：板载触摸按键2

## 使用方法
---
演示：

当您触摸板上的按键时，您将通过串口看到消息。

## 硬件安装
---
- 将Xadow - Q触摸传感器连接到Xadow - 主板

## 软件部分
---
- 1) 下载库文件 [[Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)];

- 2) 解压到Arduino IDE的库文件路径：..\arduino-1.0.5\libraries。

- 3) 通过路径直接打开代码：File -> Example -> getTouchNumber.ino

- 4) 上传代码。请确保选择正确的板类型和COM端口。

您可以看到：

![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Q_Touch_Demo_output.jpg)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
*   [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)

*   [原理图PDF](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0.pdf)

*   [Eagle文件](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip)

*   [AT42QT107数据手册](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/AT42QT1070-MMH.pdf)

<!-- *   [如何检测手指触摸？](/cn/How_to_detect_finger_touch) -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>