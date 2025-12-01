---
description: This wiki provides tutorial for WHEELTEC IMU Sensor.
title: WHEELTEC IMU Sensor
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg
slug: /wheeltec_imu
last_update:
  date: 01/12/2025
  author: ZhuYaoHui
---

# WHEELTEC IMU IMU Sensor Getting Start

The WHEELTEC H30 is a high-precision attitude sensor designed to accurately measure key data of carriers, including 3D attitude angles, acceleration, angular velocity, and magnetic field strength. Engineered with industrial-grade reliability, this sensor integrates a 3-axis MEMS gyroscope, a 3-axis MEMS accelerometer, and a 3-axis magnetic sensor—delivering robust performance for professional applications.


<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg" />
</div>

## Specification


| Parameter                  | H30 MINI                          | H30WP                              |
|----------------------------|-----------------------------------|------------------------------------|
| Model                      | H30 MINI                          | H30WP                              |
| Dimensions                 | 24.5×24.5×14.5mm                  | 63×55×24.5mm                       |
| Housing                    | Ultra-compact metal case          | Standard metal case                |
| Output Interface           | Type-C/SH1.0 6PIN                 | Aviation waterproof connector       |
| Power Consumption          | 186mW                             | 210mW                              |
| Reserved Interface         | UART                              | UART/RS485                         |
| Input Voltage              | 4.5–5.2V DC                       | 5–26V DC                           |
| Axis Count                 | 9-axis (all models)               | 9-axis (all models)                |
| Operating Temperature      | -40°C–85°C (all models)           | -40°C–85°C (all models)            |
| Command Configuration      | Supports serial command configuration: calibration, setup, mode switching, etc. (all models) | Supports serial command configuration: calibration, setup, mode switching, etc. (all models) |
| IMU Data Output Max Rate   | 400Hz                             | 400Hz                              |


### **Supported ROS Version**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### Installation dimension diagram
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

## Getting Start with IMU
For materials such as the user manual, drivers, and SDK, please refer to our [GitHub documentation](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU).

[1. H30 Series User Manual](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/1.WHEELTEC%20H30%20Series%20Inertial%20Navigation%20User%20Manual%EF%BC%88English%EF%BC%89.pdf)

[2. YESENSE Communication Protocol Document](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/4.YESENSE%20Communication%20Protocol%20Document%EF%BC%88English%EF%BC%89.pdf)

[3. ROS1/ROS2 SDK](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/2.ROS_SDK)

[4. Sofware tools](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/3.Software%20tools)

[5. Mechanical model files](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/5.Mechanical%20model%20files)

[6.Routines related to the inertial navigation module](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/6.Routines%20related%20to%20the%20inertial%20navigation%20module)


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
