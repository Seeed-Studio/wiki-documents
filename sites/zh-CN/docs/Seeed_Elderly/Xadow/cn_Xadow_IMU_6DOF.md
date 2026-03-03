---
description: Xadow - IMU 6DOF 六自由度
title: Xadow - IMU 6DOF 六自由度
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_IMU_6DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Imu_6dof_01.jpg)

Xadow - IMU 6DOF 是一个运动跟踪模块。其设计基于传感器 MPU6050，这是全球首款集成的六轴运动跟踪设备，结合了三轴陀螺仪、三轴加速度计和数字运动处理器™ (DMP)。MPU6050 配备了三个 16 位模数转换器 (ADC) 用于数字化陀螺仪输出，以及三个 16 位 ADC 用于数字化加速度计输出，因此 Xadow - IMU 6DOF 实现了高精度转换器。为了精确跟踪快速和慢速运动，该模块具有用户可编程的陀螺仪全量程范围和用户可编程的加速度计全量程范围。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-6DOF-p-1670.html)

## 规格
---
- 工作电压：3.3V
- 测量范围：
  - 陀螺仪全量程范围：±250、±500、±1000、±2000°/秒
  - 加速度计全量程范围：±2g、±4g、±8g 和 ±16g
- 控制模式：I2C
- 尺寸：25.43mm x 20.35mm

## 演示
---
基于我们提供的库，您可以轻松获取加速度和陀螺仪值。现在让我们展示如何使用该模块。

**硬件连接：**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow-IMU_6DOF_installation.png)

注意：将 Xadow IMU 6DOF 连接到 Xadow 主板时，连接方向需要谨慎。连接方法是一个 Xadow 模块的未填角连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。

**测试代码：**
  
- 从 Github 下载 [Xadow - IMU 6DOF MPU6050 库](https://github.com/Seeed-Studio/Xadow_IMU_6DOF)，并将 I2Cdev 文件和 MPU6050 文件安装到您的 Arduino 库中。关于库安装，请参考 Wiki 页面中的[这里](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)。
- 打开示例：**MPU6050_DMP6 路径：File -> Examples -> MPU6050 -> Examples -> MPU6050_DMP6**。

```
#include <I2Cdev.h>//添加必要的头文件
#include <MPU6050.h>//添加必要的头文件
#include <Wire.h>
//====陀螺仪偏移===========
#define Gx_offset  -1.50
#define Gy_offset  0
#define Gz_offset  0.80
//====加速度计偏移===========
#define Ax_offset -0.07
#define Ay_offset 0.02
#define Az_offset 0.14
//====================
MPU6050 accelgyro;

int16_t ax,ay,az;//原始数据
int16_t gx,gy,gz;//原始数据
float Ax,Ay,Az;//单位 g(9.8m/s^2)
float Gx,Gy,Gz;//单位 deg/s


void setup()
{
  Wire.begin();
  Serial.begin(9600);

  Serial.println("初始化 I2C 设备.....");
  accelgyro.initialize();

  Serial.println("测试设备连接...");
  Serial.println(accelgyro.testConnection() ? "MPU6050 连接成功" : "MPU6050 连接失败");
}
void loop()
{

  accelgyro.getMotion6(&ax,&ay,&az,&gx,&gy,&gz);//获取陀螺仪和加速度计数据
   //==========加速度计================================
   Ax=ax/16384.00;//获取单位(g)数据
   Ay=ay/16384.00;//获取单位(g)数据
   Az=az/16384.00;//获取单位(g)数据
   Serial.println("加速度数据.....");
   Serial.print(Ax+Ax_offset);
   Serial.print("   ");
   Serial.print(Ay+Ay_offset);
   Serial.print("   ");
   Serial.println(Az+Az_offset);
   //===============陀螺仪================================
   Gx=gx/131.00;
   Gy=gy/131.00;
   Gz=gz/131.00;
   Serial.println("陀螺仪数据.....");
   Serial.print(Gx+Gx_offset);
   Serial.print("   ");
   Serial.print(Gy+Gy_offset);
   Serial.print("   ");
   Serial.println(Gz+Gz_offset);
  //blinkState=!blinkState;
  //digitalWrite(LED_PIN,blinkState);
  delay(1000);//控制采样时间
}
```

- 将代码上传到 Xadow 主板。记得从 Tools -> Board 中选择 'Seeeduino Xadow'。打开串口监视器观察 MPU6050 传感器的输出值。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow_IMU_6DOF_result.jpg)

在静止状态下，z 轴输出值约为 0.98g，因此您可以参考此值测试传感器是否正常工作。

**轴方向**
下图显示了灵敏度轴的方向和旋转的极性。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/MPU6050_%E8%BD%B4%E5%90%91%E5%AE%9A%E4%BD%8D.png)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [Xadow - IMU 6DOF Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip)
- [MPU6050 数据手册](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/MPU6050.pdf)
- [库文件](https://github.com/Seeed-Studio/Xadow_IMU_6DOF)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>