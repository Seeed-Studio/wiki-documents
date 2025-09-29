---
description: 传感器 - 加速度计
title: 传感器 - 加速度计
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor_accelerometer
last_update:
  date: 1/5/2023
  author: shuxu hu
---
# Seeed 加速度计选择指南

近年来，我们发布了各种类型的加速度计传感器。您可能会发现很难在它们之间做出选择。我们理解您的困惑，让我们仔细看看这些传感器，找出最适合您的那一款！

关于我们商店中的所有加速度计传感器，请点击 [Bazaar Accelerometer tag](https://www.seeedstudio.com/tag/Accelerometer.html) 查看。

## 什么是加速度计

加速度计是一种能够测量物体加速度的传感器。在运动过程中，通过测量质量的惯性力和牛顿第二定律可以获得加速度值。根据传感器的不同敏感元件，常见的加速度传感器包括电容式、电感式、应变式、压阻式、压电式等。通过测量重力加速度，可以计算设备相对于水平面的倾斜角度。同时，通过分析动态加速度，还可以推断设备的运动状态。

例如，最近一位九十岁的美国老太太表示，在经历了一场交通事故后，智能手表的跌倒检测功能成功挽救了她的生命。当她从商店出来回家时，一名女性驾驶车辆将她撞倒。当时老太太无法找到电话拨打紧急服务，但她佩戴的智能手表检测到她跌倒了，并开始向她的家人求助。得益于新一代三轴MEMS加速度传感器和陀螺仪芯片技术，一些智能手表现在能够识别多种跌倒姿势。

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Accelerometer.png" />
  <p><b>图 1</b>. <i>带有三轴加速度计的智能手表（图片来源：Sensorexpert，2015）</i></p>
</div>

### 加速度计如何工作

加速度计的工作原理主要有两种方式：压电效应和电容变化。以下是详细说明：

#### 压电效应

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Piezoelectric effect.png" />
  <p><b>图 2</b>. <i>压电效应的工作原理（图片来源：explainthatstuff，2019）</i></p>
</div>

如上图模型所示，加速度计包含微小的晶体结构，当发生振动时会产生电压，然后生成的电压会提供加速度的读数。

#### 电容变化

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Change in Capacitance.png" />
  <p><b>图 3</b>. <i>电容变化的工作原理（图片来源：explainthatstuff，2019）</i></p>
</div>

这种方法利用公式来计算加速度。由于我们知道力 = 质量 x 加速度，要计算加速度，需要用物体的力 / 质量。

以下是MEMS加速度计中电容效应的工作方式：

1. 存在两个电容板。
2. 物体的质量压在其中一个电容板上，改变电容，从而测量力。
3. 在已知力和物体质量的情况下，最终测得加速度。

## 应用领域

加速度传感器有着广泛的应用。特别是，通过使用这些传感器，可以监测人类活动，从而带来益处，甚至在某些情况下拯救生命。因此，加速度传感器在多个领域中发挥着重要作用，包括工业、医疗、社会应用以及家庭应用，用于监测各种物体的运动。

| 应用领域 | 功能 |
|--------------------------------|-----------------------------------------|
| 汽车安全 | 加速度传感器主要用于汽车安全性能，例如安全气囊、防抱死制动系统、牵引力控制系统等。 |
| 游戏控制 | 加速度传感器可以检测上下左右倾斜角度的变化，因此通过前后倾斜手持设备可以轻松控制游戏中物体的前后左右方向。 |
| 自动图像翻转 | 使用加速度传感器检测手持设备的旋转和方向，以实现显示图像的正常化。 |
| 防抖功能 | 使用加速度传感器检测手持设备的振动/抖动幅度。当振动/抖动幅度过大时，锁定相机快门，以确保拍摄的图像始终清晰。 |
| 电子罗盘倾斜校正 | 磁传感器通过测量磁通量的大小来确定方向。当磁传感器倾斜时，穿过磁传感器的地磁通量会发生变化，导致方向出现误差。加速度传感器可以测量倾斜角度，从而补偿电子罗盘的倾斜。 |
| 计步器功能 | 加速度传感器可以检测交流信号和物体的振动。当人行走时，会产生一定规律的振动，加速度传感器可以检测振动的零交点，从而计算行走的步数或跑步的步数。通过一定公式可以计算出人的位移以及卡路里消耗。 |
| GPS导航系统死角补偿 | GPS系统通过接收分布在120度的三个卫星信号来确定物体的位置。在某些特殊场合和地形中，例如隧道、高楼和丛林区域，GPS信号会变弱甚至完全丢失，这就是所谓的死角。通过安装加速度传感器以及之前使用的惯性导航，可以测量系统的死角。对加速度传感器进行一次积分可以得到单位时间内速度变化量，从而测量物体在死角中的运动。 |

## Seeed 的加速度传感器

Seeed 提供多种加速度传感器，以下图片展示了一个典型的 Grove - 3轴数字加速度计 ±16g 超低功耗 (BMA400)：

![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### 哪一个是您的首选

| 名称 | 缩略图 | 工作电压 | 测量范围 | 灵敏度 | 输入接口 | 功耗 | 点击购买 |
|----|-----|-----|------|------|------|-----|------|
| [Grove - 3轴数字加速度计 ±16g 超低功耗 (BMA400)](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Digital_Accelerometer%C2%B116g_Ultra-low_Power-BMA400/) | <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg"/> | 3.3V-5V | ±2g,±4g,±8g,±16g | 1024LSB/g@±2g 512LSB/g@±4g 256LSB/g@±8g 128LSB/g@±16g | I2C | 18uA@5V 14uA@3.3V | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g-Ultra-low-Power-BMA400.html) |
| [Grove - 3轴数字加速度计(±16g)](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Digital_Accelerometer-16g/) | <img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Thumb.png" /> | 3V-5.5V | ±16g | 3.9mg / LSB | I2C | / | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) |
| [Grove - 3轴罗盘 V1.0](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Compass_V1.0/) | <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/thumbnail.jpg" /> | 3.3V-5V | / | / | I2C | / | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass.html) |
| [Grove - 3轴数字罗盘 v2.0](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Digitial_Compass_v2.0/) | <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" /> | 3.3V-5V | / | / | I2C, SPI | / | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html) |
| [Grove - 3轴数字加速度计(±1.5g)](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Digital_Accelerometer-1.5g/) | <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" /> | 3V-5.5V | ±1.5g | 21LSB/g | I2C | 47μA@1 ODR | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) |
| [Grove - 3轴数字加速度计(±400g)](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Digital_Accelerometer-400g/) | <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/45d_small.jpg" /> | 3.3V-5V | ±100g,±200g,±400g | / | I2C | 300μA@3.3V | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-400g.html) |
| [Grove - 3轴模拟加速度计](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Analog_Accelerometer/) | <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/thumb1.png" /> | 3V-5V | ±3g | / | 模拟 | 350μA@3V | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html) |
| [Grove - 3轴数字陀螺仪](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Digital_Gyro/) | <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Thumb3.png" /> | 3.3V-5V | / | 14 LSBs per °/sec | I2C | / | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro.html) |
| [Grove - 6轴加速度计&陀螺仪](https://wiki.seeedstudio.com/cn/Grove-6-Axis_AccelerometerAndGyroscope/) | <img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Thumb4.png" /> | 3.3V-5V | ±2,±4,±8,±16g | 0.061(FS=±2) 0.122(FS=±4) 0.244(FS=±8) 0.488(FS=±16)mg/LSB | I2C | 0.9μA3.3V 1.25μA@5V | [立即购买](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope.html) |
| [Grove - 6轴加速度计&罗盘 V2.0](https://wiki.seeedstudio.com/cn/Grove-6-Axis_AccelerometerAndCompass_V2.0/) | <img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" /> | 5V | ±2g,±4g,±8g,±16g | / | I2C,SPI | / | [立即购买](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Compass-v2-0.html) |
| [Grove - IMU 9DOF v2.0](https://wiki.seeedstudio.com/cn/Grove-IMU_9DOF_v2.0/) | <img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" /> | 3.3V-5V | ±2,±4,±8,±16g | / | I2C,SPI | / | [立即购买](https://www.seeedstudio.com/Grove-IMU-9DOF-v2-0.html) |
| [Grove - IMU 10DOF ](https://wiki.seeedstudio.com/cn/Grove-IMU_10DOF/) | <img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" /> | 3.3V-5V | ±2,±4,±8,±16g | / | I2C | / | [立即购买](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html) |
| [Grove - IMU 10DOF v2.0](https://wiki.seeedstudio.com/cn/Grove-IMU_10DOF_v2.0/) | <img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" /> | 3.3V-5V | ±2g,±4g,±8g,±16g | / | I2C | 2.7μA@1Hz | [立即购买](https://www.seeedstudio.com/Grove-IMU-10DOF-v2-0.html) |

### 温馨提示

上面的图表展示了每种加速度计在不同测量范围、灵敏度和功耗方面的各种属性，您可以选择最适合您的产品。此外，如果通信接口是您选择时的考虑因素之一，我们建议使用 SPI 通信，因为它比 I2C 的操作速度更快，这在某些情况下可能是一个优势。

关于每款产品的更多详细信息，请通过产品图片旁边的链接访问它们的专属页面。

## 资源

  - 参考资料
      - [三轴加速度传感器在电子产品计步中的应用历史](http://old.sensorexpert.com.cn/Article/qiantansanzhoujiasud_1.html)
      - [加速度计](https://www.explainthatstuff.com/accelerometers.html)

## 项目

**即插即用遥控帆船**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed' width='350'></iframe>    

**摩托车数据应用**：像专业人士一样从骑行中学习！摩托车赛车团队多年来一直使用 IMU 数据，通过 RideData+Arduino，您也可以轻松实现。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>