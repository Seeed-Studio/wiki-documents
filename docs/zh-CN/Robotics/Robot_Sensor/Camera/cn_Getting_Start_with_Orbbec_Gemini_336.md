---
description: Show people how to use Orbbec Gemini 336.
title: Orbbec Gemini336 深度相机
keywords:
- Jetson
- reComputer Robotics
- Computer Vision
- Autonomous Driving
- Industrial Robot
- Orbbec
- AI Camera
- Stereo Camera
- Depth Camera
- Visual SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /cn/orbbec_gemini336
last_update:
  date: 2025-12-1
  author: yaohui
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


Gemini 336是Gemini 330系列的全新成员，延续Gemini335出色的深度效果和性能，通过过滤可见光，提升主动红外成像表现，针对性优化室内反光区域/高动态场景暗部区域/户外强光下的深度成像质量,为用户提供稳定的高质量深度数据。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## 特征

- **主动立体红外** 采用主动立体红外技术进行深度输出，在各种光照条件下实现准确可靠的数据输出
- **宽感知范围** 提供从 0.1m 到 20m 的高质量深度数据输出
- **宽视场角** 提供 90 度水平和 65 度垂直的宽视场角数据
- **多相机同步** 支持深度图像和 RGB 图像的多相机同步
- **USB 连接** 使用单根 USB 3.0 Type-C 线缆进行供电和连接

## 参数表

| 分类     | 规格参数         | 详情                                                                 |
|----------|------------------|----------------------------------------------------------------------|
| 基本参数 | 适用环境         | 全场景：室内 & 室外                                                  |
|          | 最大工作范围 [1] | 0.10 - 20m+                                                          |
|          | 推荐工作范围     | 0.26 - 3m                                                            |
|          | IMU              | 支持                                                                 |
|          | UVC相机          | 支持                                                                 |
|          | SDK              | Orbbec SDK                                                           |
| 深度参数 | 深度技术         | 双目视觉                                                             |
|          | 基线             | 50 mm                                                                 |
|          | 空间相对精度 [2] | ≤1.5%（1280 × 800 @ 2m & 90% × 90% ROI）                             |
|          | 视场角（FoV）    | 90° × 65° @ 2m（1280 × 800）                                         |
|          | 分辨率@帧率      | 最高：1280 × 800 @ 30fps                                             |
|          | 快门类型         | Global Shutter（全局快门）                                           |
| 彩色参数 | 视场角（FoV）    | 86° × 55°                                                             |
|          | 分辨率@帧率      | 最高：1920 × 1080 @ 30fps                                            |
|          | 图像格式         | YUYV & MJPEG                                                         |
|          | 快门类型         | Rolling Shutter（卷帘快门）                                           |
| 电器参数 | 供电建议         | DC 5V & ≥1.5A                                                        |
|          | 平均功耗         | ＜3 W                                                                 |
|          | 滤光盖板         | 有，红外通过                                                         |
| 物理参数 | 工作温度         | -10 - 45℃                                                            |
|          | IP防护等级       | IP5X                                                                 |
|          | 整机尺寸         | 90 mm × 25 mm × 30.7 mm                                              |
|          | 整机重量         | 99g                                                                   |
|          | 数据及供电端口   | USB 3.0 & USB 2.0 Type-C                                             |
|          | 多机同步端口     | 8-pin 接口                                                           |
|          | 安装方式         | 底部安装：1 × 1/4 - 20unc螺孔 背面安装：2 × M3螺孔                |



## 硬件外观
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## 快速上手使用

- 通过USB-C连接ORBBEC相机与你的电脑

① 组装三脚架云台和三脚架，并将相机固定在组装好的三脚架上，如下面的步骤1所示。

② 使用 USB-C to USB-A 数据线连接相机的Type-c连接器，如下面的步骤2所示。

③ 使用 USB-C to USB-A 数据线将USB-A连接器连接到主机，如下面的步骤3所示。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- 根据您的系统和版本选择并下载相应的[Orbbec Viewer工具](https://www.orbbec.com/developers/orbbec-sdk/)。

- 启动ORBBEC VIEWER

1. 启动Orbbec Viewer后，请确保该工具能够识别3D相机，如下图所示。
<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software1.png" />
</div>
如果相机无法识别，首先要检查相机和主机是否正确连接。您可以尝试断开USB电缆，然后重新连接。如果仍然无法识别，请考虑更换USB电缆或确认主机的电源是否符合要求的规格。

2.点击工具顶部的深度按钮后，启动深度相机并可预览深度图
<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software2.png" />
</div>

3. 点击彩色按钮后启动彩色相机并可预览彩色图

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software3.png" />
</div>


 4. 点击左红外和右红外按钮后将启动左右红外相机并可预览左右红外相机的IR图

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software4.png" />
</div>

5. 点击IMU按钮后将启动IMU数据流

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software5.png" />
</div>

 6. 点击每个窗口顶部的image.png按钮可显示元数据信息，再按一次即可隐藏元数据信息。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software6.png" />
</div> 

 7. 点击点云按钮后将启动和预览3D点云

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software7.png" />
</div>

 8. 点击左侧 “图像视图” 菜单下的 “显示” 按钮可启动和预览D2C (深度对齐到彩色图像) 。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/software8.png" />
</div>

## 参考

- [Orbbec 官方教程](https://www.orbbec.com.cn/index/Gemini330/info.html?cate=119&id=74)
- [Datasheet](https://www.orbbec.com.cn/index/Gemini330/info.html?cate=119&id=100)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS使用教程参考Gemini2](https://wiki.seeedstudio.com/orbbec_depth_camera_on_ros/)

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
