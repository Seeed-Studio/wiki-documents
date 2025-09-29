---
description: Xadow - 三轴数字加速度计(±400g)
title: Xadow - 三轴数字加速度计(±400g)
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow_3Axis_Accelerometer400g.jpg)

H3LIS331DL 是一款属于“nano”系列的低功耗高性能三轴线性加速度计，具有数字 I2C 串行接口标准输出。该设备具有超低功耗操作模式，可实现高级节能和智能睡眠唤醒功能。H3LIS331DL 支持用户动态选择的全量程范围为 ±100g/±200g/±400g，并能够以 0.5 Hz 至 1 kHz 的输出数据速率测量加速度。

## 特性
---
- 宽电源范围 DC2.2V 至 3.6V
- Xadow 外形
- 三轴感应
- 小型、低剖面封装：3×3×1mm TFLGA
- 低功耗，典型值为 3.3V 时 300µA
- ±100g /±200g /±400g 动态可选全量程
- I2C 数字输出接口（地址 = 0xE7）
- 10000g 高冲击生存能力
- ECOPACK®RoHS 和“绿色”环保认证

## 应用场景

- 冲击检测
- 冲击识别与记录
- 脑震荡检测

## 使用方法
---
以下是如何读取该加速度计的原始数据的说明。
与其他 Xadow 模块一样，在将测试代码上传到 Xadow 主板以获取加速度计信息之前，需要将 Xadow 三轴加速度计连接到 Xadow 主板。

硬件安装：

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow-3-Axis_Digital_Accelerometer_Connection.jpg)

:::note
    在将 Xadow 三轴加速度计连接到 Xadow 主板时，需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::
上传代码后，打开串行监视器观察测试结果。该传感器的输出是三轴加速度信息，并转换为重力单位“g”。

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Raw_data_of_H3LIS331DL.jpg)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
- [Xadow - 三轴数字加速度计(±400g) Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip)
- [三轴数字加速度计(±400g) Github 仓库](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>