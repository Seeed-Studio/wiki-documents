---
description: "如何开始使用 Orbbec Gemini 336 3D 相机：搭建、SDK 安装，以及用于机器人视觉应用的深度与彩色图像流。"
title: Orbbec Gemini336 3D 相机
keywords:
  - Jetson
  - reComputer Robotics
  - 计算机视觉
  - 自动驾驶
  - 工业机器人
  - Orbbec
  - AI 相机
  - 立体相机
  - 深度相机
  - 视觉 SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /orbbec_gemini336
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-12-01'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/orbbec_gemini336/
---

<div align="center">
    <img alt="Orbbec Gemini 336 3D camera, product photo" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


Gemini 336 是 Gemini 330 系列中的全新成员。在 Gemini 335 出色深度性能的基础上，通过过滤可见光增强了主动红外成像。它针对室内反光区域、高动态范围（HDR）场景中的暗区以及室外强光环境的深度成像质量进行了专门优化，为用户提供稳定、高质量的深度数据。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-336-3D-Camera-3D-p-6662.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 特性

- **主动立体 IR** 采用主动立体 IR 技术进行深度输出，可在多种光照条件下实现准确可靠的数据输出
- **宽感知范围** 在 0.1m 到 20m 范围内提供高质量深度数据输出
- **宽视场角（FOV）** 在 9 度水平和 65 度垂直方向提供宽视场角数据
- **多相机同步** 支持深度图像和 RGB 图像的多相机同步
- **USB 连接** 使用单根 USB 3.0 Type-C 线缆供电和连接

## 规格参数

### Gemini 336 规格表（英文）

| 类别       | 规格参数         | 详情                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| 基本参数 | 工作环境 | 全场景：室内 & 室外                                            |
|                | 最大工作范围 [1] | 0.10 - 20m+                                                             |
|                | 推荐范围     | 0.26 - 3m                                                               |
|                | IMU                   | 支持                                                               |
|                | UVC 相机            | 支持                                                               |
|                | SDK                   | Orbbec SDK                                                              |
| 深度参数 | 深度技术      | 立体视觉                                                           |
|                | 基线              | 50 mm                                                                    |
|                | 空间相对精度 [2] | ≤1.5% (1280 × 800 @ 2m & 90% × 90% ROI)                         |
|                | 视场角 (FoV)   | 90° × 65° @ 2m (1280 × 800)                                             |
|                | 分辨率@帧率 | 最高：1280 × 800 @ 30fps                                               |
|                | 快门类型          | 全局快门                                                          |
| 彩色参数 | 视场角 (FoV)   | 86° × 55°                                                                |
|                | 分辨率@帧率 | 最高：1920 × 1080 @ 30fps                                              |
|                | 图像格式          | YUYV & MJPEG                                                            |
|                | 快门类型          | 滚动快门                                                         |
| 电气参数 | 电源推荐 | DC 5V & ≥1.5A                                                     |
|                | 平均功耗 | ＜3 W                                                                 |
|                | 滤光片盖板          | 有，IR 透过                                                           |
| 物理参数 | 工作温度 | -10 - 45℃                                                             |
|                | 防护等级             | IP5X                                                                    |
|                | 尺寸            | 90 mm × 25 mm × 30.7 mm                                                 |
|                | 重量                | 99g                                                                     |
|                | 数据与电源接口     | USB 3.0 & USB 2.0 Type-C                                                |
|                | 多设备同步接口 | 8 针接口                                                       |
|                | 安装方式       | 底部安装：1 × 1/4 - 20unc 螺纹孔 背部安装：2 × M3 螺纹孔 |


## 硬件概览
<div align="center">
    <img alt="Gemini 336 正视图，标注了两个 IR 模组、LRM、LDM、RGB 模组和 IR 透射滤光片" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img alt="Gemini 336 正视图，显示两个 IR 镜头和 RGB 模组" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img alt="Gemini 336 背面视图，带有散热鳍片" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img alt="Gemini 336 正面尺寸图，标注镜头间距和直径公差" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img alt="背面尺寸图，带有 45 mm 孔距和 M3 安装点，最大插入深度 3 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img alt="侧视图，标注视场角 OP 104 度 / ME 107 度以及 OP 109.6 度" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img alt="侧视图，标注 OP 94 度 / ME 101 度角度以及 1/4-20UNC 安装点，最大插入深度 5 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img alt="侧视图，标注 USB Type-C 安装点和两个 M2 安装点，高度 15.00 正负 0.15 mm" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img alt="侧视图，标注宽度 30.70 正负 0.30 mm 和高度 25.00 正负 0.30 mm" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## Gemini 330 系列快速入门指南
- 连接 Orbbec 相机
 ① 将云台与三脚架组装好，然后将相机固定在已组装好的三脚架上，如下方步骤 1 所示。

  ② 使用 USB-C 转 USB-A 线缆连接相机的 Type-C 接口，如下方步骤 2 所示。

  ③ 使用同一根 USB-C 转 USB-A 线缆，将 USB-A 接头连接到主机，如下方步骤 3 所示。

<div align="center">
    <img alt="Gemini 相机安装在云台上，并连接 USB-C 转 USB-A 线缆" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- 获取 Orbbec Viewer

根据你的系统和版本选择并下载对应的 [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/)。

- 启动 Orbbec Viewer

1. 启动 Orbbec Viewer 后，请确认工具已识别到 3D 相机，如下图所示。 
【备注】如果未识别到相机，请检查相机与主机是否正确连接。你可以尝试断开并重新连接 USB 线缆。如果仍无法识别，请考虑更换 USB 线缆，或确认主机电源供给是否满足要求。

<div align="center">
    <img alt="未连接相机前的 Orbbec Viewer，显示空预览和“未发现设备”消息" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. 切换工具顶部的 ‘Depth’ 按钮，以启动并预览深度流。

<div align="center">
    <img alt="在 Orbbec Viewer 中打开深度流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. 切换工具顶部的 ‘Color‘ 按钮，以启动并预览彩色流。彩色流和深度流将并排显示。

<div align="center">
    <img alt="在 Orbbec Viewer 中并排显示彩色流和深度流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. 切换工具顶部的 ‘IR Left’ 和 ‘IR Right’ 按钮，以启动并预览 IR 流。

<div align="center">
    <img alt="在 Orbbec Viewer 中预览左、右 IR 流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. 切换工具顶部的 ‘IMU’ 按钮，以启动并预览 IMU 流。

<div align="center">
    <img alt="在 Orbbec Viewer 中预览 IMU 流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. 切换每个窗口顶部的按钮以显示元数据信息。

<div align="center">
    <img alt="在 Orbbec Viewer 窗口中启用元数据叠加" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. 切换工具顶部的 ‘PointCloud‘ 按钮以启动并预览 3D 点云

<div align="center">
    <img alt="在 Orbbec Viewer 中预览 3D 点云" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. 切换左侧 ‘Image View’ 菜单下的 ‘Display’ 按钮以启动并预览 D2C（深度到彩色配准）流。3D 点云和 D2C 流将并排显示。

<div align="center">
    <img alt="点云和 D2C 配准流并排显示" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## 资源

- [Orbbec 官方指南](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [数据手册](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/cn/orbbec_depth_camera_on_ros/)

## 相关资源

- [Orbbec Gemini 2 3D 相机](/cn/orbbec_gemini2/)
- [ORB-SLAM3 与 Orbbec Gemini2](/cn/orb_slam3_orbbec_gemini2/)
- [reComputer 上的 PyCuVSLAM](/cn/pycuvslam_recomputer_robotics/)
- [ROS 上的 Orbbec 深度相机](/cn/orbbec_depth_camera_on_ros/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
