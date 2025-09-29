---
description: Xadow - IMU 10DOF
title: Xadow - IMU 10DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_IMU_10DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-imu-10dof-shao.JPG)

Xadow - IMU 10DOF 是 [Xadow - IMU 9DOF](https://wiki.seeedstudio.com/cn/Xadow_IMU_9DOF) 和 [Xadow - Barometer BMP180](https://wiki.seeedstudio.com/cn/Xadow_Barometer_BMP180) 的结合体。该模块基于 MPU-9250 和 BMP180，MPU-9250 是一个 9 轴运动跟踪设备，集成了 3 轴陀螺仪、3 轴加速度计、3 轴磁力计以及数字运动处理器 (DMP)，而 BMP180 是一种高精度、超低功耗的数字压力传感器，适用于消费类应用。该模块非常适合智能手机、平板电脑和可穿戴设备的应用。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-10DOF-p-2446.html)

## 规格
---
- I2C 接口
- MPU-9250 I2C 地址可选
- 低功耗
- 400kHz 快速模式 I2C，用于与所有寄存器通信
- 数字输出 X、Y 和 Z 轴角速度传感器（陀螺仪），具有用户可编程的全量程范围 ±250、±500、±1000 和 ±2000°/秒
- 数字输出 3 轴加速度计，具有可编程的全量程范围 ±2g、±4g、±8g 和 ±16g
- 数字输出磁力计，具有全量程范围 ±4800uT
- 数字输出气压计，范围为 300 ~ 1100hPa（相对于海平面 +9000m ~ -500m）
- 尺寸：25.43mm x 20.35mm

## 接口功能
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_Interface.png)

- ①：MPU-9250 I2C 地址选择焊盘（默认 0x68）
- ②：12P FPC 底部接触

## 使用方法
---
我们将在这里提供一个示例，展示如何使用该传感器。

**硬件安装**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_installation.png)

:::note
    将 Xadow - IMU 10DOF 连接到 Xadow - 主板时，需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::

**软件部分**
1. 从 [https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF](https://github.com/Seeed-Studio/IMU_10DOF) 下载库文件。
2. 将其解压到 Arduino IDE 的库文件路径中。
3. 通过路径直接打开代码：**File -> Example -> IMU_10DOF_Test**。
4. 上传代码。注意需要选择正确的板类型和 COM 端口。

您可以看到：

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-test.png)

**轴方向**

下图显示了灵敏度轴的方向和旋转的极性。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-dir-axes.png)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow - IMU 10DOF v1.0 eagle 文件](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip)
- [IMU 10DOF 库文件](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/IMU_10DOF_Library.zip)
- [BMP180 数据手册](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/BMP180.pdf)
- [MPU-9250 数据手册](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>