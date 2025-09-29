---
description: Grove - 6轴加速度计和陀螺仪
title: Grove - 6轴加速度计和陀螺仪
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-6-Axis_AccelerometerAndGyroscope
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 6轴加速度计和陀螺仪是一款具有成本效益的Grove接口集成传感器，结合了3轴数字加速度计和3轴数字陀螺仪。

它采用了低功耗数字芯片LSM6DS3（[数据手册](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)）和内置电源调节器，具有高灵敏度、绿色技术和低噪声干扰的特点。它可以配置为不同的加速度灵敏度级别和不同的角速度测量范围。提供详细的SDK，使原型开发过程更快更简单。

该产品可用于倾斜、运动和敲击感应的不同应用场景，例如机器人、物联网设备和消费电子设备。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Gyroscope-p-2606.html)

功能特点
--------

-   Grove接口，具有成本效益。
-   数字输出6自由度运动数据。
-   ±2/±4/±8/±16 g全量程线性加速度感应范围，适用于各种环境。
-   ±125、±245、±500、±1000、±2000度每秒（dps）的角速度测量范围，具有多功能性。
-   提供详细的SDK，便于编程。
-   稳定的电源供应，确保数据可靠采集。
-   针对不同事件的可编程中断。
-   8 kB数据缓冲。

:::tip
    更多关于Grove模块的详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用场景
--------

-   机器人
-   消费级飞行器
-   计算机输入设备
-   可穿戴设备
-   物联网设备

规格参数
--------

详细信息请参考[数据手册](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)。

| 参数                                 | 值                                                                                   |
|-------------------------------------|-------------------------------------------------------------------------------------|
| 模拟供电电压:                       | 5V/3.3V(DC)                                                                         |
| 功耗:                               | 组合正常模式下为0.9 mA，高性能模式下为1.25 mA，最高可达1.6 kHz                       |
| 线性加速度测量范围                  | ±2/±4/±8/±16 g全量程（典型值）                                                     |
| 角速度测量范围                      | ±125、±245、±500、±1000、±2000 dps（典型值）                                       |
| 线性加速度灵敏度                    | 0.061(FS = ±2), 0.122(FS = ±4), 0.244(FS = ±8), 0.488(FS = ±16) mg/LSB             |
| 角速度灵敏度                        | 4.375(FS = ±125), 8.75(FS = ±245), 17.50(FS = ±500), 35(FS = ±1000), 70(FS = ±2000)|

### 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上述提到的支持平台是指模块的软件或理论兼容性。在大多数情况下，我们仅为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户需要自行编写软件库。
:::

硬件概览
--------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

**Grove 接口**  
连接主控制板（如 Seeeduino 板）与驱动板。

**LSM6DS3**  
主 MCU。

### **部件清单**

| 部件名称                                | 数量     |
|----------------------------------------|----------|
| Grove - 6轴加速度计和陀螺仪         | 1个      |
| Grove 线缆                          | 1根      |

开始使用
-----------

### **所需材料**

-   Seeeduino * 1

-   Grove - Base Shield v2

### **准备工作**

参考以下指南以构建合适的 IDE：

<div class="admonition note">
<p class="admonition-title">注意</p>
我们选择了 Seeeduino，它在本案例中与 Arduino 兼容。您也可以使用 Arduino 板代替。
</div>

- Windows 上的入门指南

- Mac OS X 上的入门指南

### **硬件连接**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

<div classname="admonition note">
  <p classname="admonition-title">注意</p>
  将 Grove - 6轴加速度计和陀螺仪插入 Grove - Base Shield 的 I<sup>2</sup>C 接口。使用 USB 线连接电源。
</div>

### **一个小演示**

下载 [库文件](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3) 以支持 Grove - 6轴加速度计和陀螺仪。参考 Seeed 的 Github 上的指南，以更快地将代码刷入主控制板。子目录 ***examples*** 中共有三个演示示例。

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 资源
---------

- **[Eagle]** [Grove - 6轴加速度计和陀螺仪 v1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip)
- **[库文件]** [Grove-6轴加速度计和陀螺仪](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3)
- **[数据手册]** [LSM6DS3 数据手册](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)

## 项目

**即插即用遥控帆船**

<iframe frameBorder="{0}" height="327.5" scrolling="no" src="https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed" width="{350}">
</iframe>



<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Gyroscope -->

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>