---
description: Reachy Mini Lite硬件数据表，包括尺寸自由度、电机规格、摄像头、麦克风阵列和电子组件。
title: Reachy Mini Lite硬件数据表
slug: /reachymini_platforms_reachy_mini_lite_hardware
keywords:
  - hardware
  - datasheet
  - specifications
  - dimensions
  - motors
  - dynamixel
  - camera
  - microphone
  - electronics
  - lite
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_platforms_reachy_mini_lite_hardware/
---

# Reachy Mini Lite硬件数据表

## 全局描述

![尺寸](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachy_mini_dimensions.png)

- 尺寸：30x20x15.5cm（展开）
- 质量：1.350公斤
- 材料：ABS、PC、铝、钢
- 自由度：
    - 头部：6个自由度（3个旋转和3个平移）
    - 身体：1个旋转
    - 天线：1个旋转（x2）

    ![自由度](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/degrees_of_freedom.png)

    ![自由度表](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/dof_table.png)

- 电源输入电压：6.8-7.6V
- 广角摄像头：120°-12MP-自动对焦
- 声音：麦克风阵列+扬声器

![麦克风和摄像头](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/mic_and_camera.png)

![背面接口](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/back_interface.png)

- 控制：USB-C连接用于计算机接口。
请注意，此端口*不会*通过它充电。
Reachy Mini Lite是插入计算机的设备

![组件](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachy_mini_components.png)

## 特定组件

- 电机规格
    - 底座：1x定制Dynamixel XC330-M288-PG（[XC330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xc330-m288/)带塑料齿轮）
    - 天线：2x Dynamixel [XL330-M077-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m077/)
    - Stewart平台：6x Dynamixel [XL330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/)

    ![电机](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/motors_detail.png)

- 麦克风阵列板
    - 4个PDM MEMS数字麦克风
    - 16kHz最大采样率/-26dB FS灵敏度/64dBA SNR
    - 基于Seeed Studio的reSpeaker XMOS XVF3800
- 摄像头
    - Raspberry Pi摄像头v3广角
        - Sony IMX708
        - 12MP
        - 自动对焦
        - I2C*~1 x MIDI DSI连接
- 5W @4Ohms扬声器
- 电源板
    - 输入电压：6.8-7.6V

    ![电子设备](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/electronics.png)

- Lite控制器板：
    - 6.8-7.6V从电源板供电
    - Dynamixel电机TTL连接
    - 摄像头CSI连接
    - 麦克风阵列连接
    - USB-C输入，用于底部接口的USB端口。请注意，此端口*不会*通过它充电。Reachy Mini Lite是插入计算机的设备