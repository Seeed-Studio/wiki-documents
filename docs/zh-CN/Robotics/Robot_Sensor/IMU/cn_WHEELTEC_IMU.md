---
description: This wiki provides tutorial for WHEELTEC IMU Sensor.
title: WHEELTEC IMU Sensor
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg
slug: /cn/wheeltec_imu
last_update:
  date: 01/12/2025
  author: ZhuYaoHui
---

# 轮趣科技H30 IMU文档中心

WHEELTEC H30 是一款高精度姿态传感器，旨在精准测量载体的关键数据，包括三维姿态角、加速度、角速度及磁场强度。该传感器采用工业级高可靠性设计，集成了三轴 MEMS 陀螺仪、三轴 MEMS 加速度计和三轴磁传感器，为专业应用场景提供稳定可靠的性能表现。


<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg" />
</div>

## 参数表

| 参数名称                  | H30 MINI                          | H30WP                              |
|---------------------------|-----------------------------------|------------------------------------|
| 型号                      | H30 MINI                          | H30WP                              |
| 尺寸                      | 24.5×24.5×14.5mm                  | 63×55×24.5mm                       |
| 外壳                      | 超紧凑型金属外壳                  | 标准金属外壳                        |
| 输出接口                  | Type-C/SH1.0 6PIN                 | 航空防水接头                       |
| 功耗                      | 186mW                             | 210mW                              |
| 预留接口                  | UART                              | UART/RS485                         |
| 输入电压                  | 4.5–5.2V DC                       | 5–26V DC                           |
| 轴数                      | 9轴（全系列型号）                 | 9轴（全系列型号）                  |
| 工作温度                  | -40°C–85°C（全系列型号）          | -40°C–85°C（全系列型号）           |
| 命令配置                  | 支持串口命令配置：校准、设置、模式切换等（全系列型号） | 支持串口命令配置：校准、设置、模式切换等（全系列型号） |
| IMU数据最大输出速率       | 400Hz                             | 400Hz                              |



### **支持ROS版本**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### 安装尺寸
H30 Mini
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/mini_install.png"/>
</div>

H30WP:
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wp_install.png"/>
</div>

## IMU使用教程
所有详细的IMU使用教程及信息请git我们的 [GitHub](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU).


[1. H30 用户手册](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/WHEELTEC%20H30%20Series%20Inertial%20Navigation%20User%20Manual%EF%BC%88Chinese%EF%BC%89.pdf)

[2. 通信协议](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/5.YIS%20data%20protocol%20routine%20description%EF%BC%88Chinese%EF%BC%89.pdf)

[3. ROS1/ROS2 SDK](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/2.ROS_SDK)

[4. 上位机](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/3.Software%20tools)

[5. 3D结构文件](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/5.Mechanical%20model%20files)

[6. 案例](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/6.Routines%20related%20to%20the%20inertial%20navigation%20module)



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
