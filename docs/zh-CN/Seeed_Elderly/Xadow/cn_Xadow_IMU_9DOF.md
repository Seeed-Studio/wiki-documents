---
description: Xadow - IMU 9DOF 是一款高性能的9轴运动追踪模块
title: Xadow - IMU 9DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_IMU_9DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_9dof.jpg)
Xadow - IMU 9DOF 是一款高性能的9轴运动追踪模块，基于 MPU-9150。MPU-9150 是全球首款集成的9轴运动追踪设备，专为智能手机、平板电脑和可穿戴传感器等消费电子设备的低功耗、低成本和高性能需求而设计。MPU-9150 配备三个16位 ADC 用于数字化陀螺仪输出，三个16位 ADC 用于数字化加速度计输出，以及三个13位 ADC 用于数字化磁力计输出。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-9DOF-p-1776.html)

## 规格
---
- I2C 接口
- 低成本
- 400kHz 快速模式 I2C，用于与所有寄存器通信
- 数字输出 X、Y 和 Z 轴角速度传感器（陀螺仪），具有用户可编程的全量程范围：±250、±500、±1000 和 ±2000°/秒
- 数字输出 3 轴加速度计，具有可编程的全量程范围：±2g、±4g、±8g 和 ±16g
- 3 轴硅单片霍尔效应磁传感器，带磁集中器

## 接口功能
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_-_IMU_9DOF.jpg)

- ①：12P FPC 底部接触
- ②：地址选择电阻：R4，R5（默认地址为 0x68）
  - 地址为 0x68：R4 未焊接。
  - 地址为 0x69：R5 未焊接。

## 使用方法
---
基于库，我们可以在串行监视器上显示加速度计、陀螺仪和磁力计的值。现在让我们展示如何使用该模块。

**硬件安装**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/IMU_9DOF.jpg)

硬件安装非常简单，可以通过 FPC 电缆连接到 Xadow - 主板。

**软件部分**
1. 下载库文件 [libraries.zip](https://github.com/Seeed-Studio/Grove_IMU_9DOF)；
2. 将库文件解压到 Arduino IDE 的库文件夹路径：..\arduino-1.0.5\libraries。
3. 将 IMU_9D0F_Demo 文件解压到 Arduino IDE 的库文件夹路径：..\arduino-1.0.5\libraries。
4. 通过路径直接打开代码：文件 -> 示例 -> IMU_9D0F_Demo。
5. 上传代码。注意选择正确的板类型和 COM 端口。
6. 您可以看到：

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/9DOF_Serial_Monitor.jpg)

在静止状态下，z 轴输出值约为 0.98g，因此您可以参考此值来测试传感器是否正常工作。

**轴方向**

下图显示了灵敏度轴的方向和旋转的极性。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/MPU9150.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow_IMU_9DOF_Eagle_File.zip](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip)
- [Xadow_IMU_9DOF_Sch_PDF 文件](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Sch_Of_Xadow-IMU_9DOF_v1.0.pdf)
- [MPU_9150_数据手册.pdf](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/MPU-9150.pdf)

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