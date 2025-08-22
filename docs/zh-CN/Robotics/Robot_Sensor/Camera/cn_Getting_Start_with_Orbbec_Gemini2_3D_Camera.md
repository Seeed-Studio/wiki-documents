---
description: 展示如何在 reComputer Jetson 平台上使用 Orbbec Gemini 335Lg。
title: Orbbec Gemini2 3D 相机入门指南
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
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.webp 
slug: /cn/orbbec_gemini2
last_update:
  date: 2025-08-22
  author: Zibo
---

<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
紧凑型 Gemini 2 3D 相机基于主动立体红外技术，配备 Orbbec 最新的定制 ASIC 芯片，用于高质量深度处理、IMU 和单线 USB 3.0 供电+连接。宽视场角和宽深度感知范围使 Gemini 2 适用于许多应用，特别是机器人技术。它易于设置和操作，配合 Orbbec SDK 使用，在从完全黑暗到半户外的各种光照条件下都能提供极其准确和可靠的数据。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>


## 特性
- **主动立体红外** 采用主动立体红外技术进行深度输出，在各种光照条件下实现准确可靠的数据输出
- **宽感知范围** 提供从 0.15m 到 10m 的高质量深度数据输出
- **宽视场角** 提供 91 度水平和 66 度垂直的宽视场角数据
- **多相机同步** 支持深度图像和 RGB 图像的多相机同步
- **USB 连接** 使用单根 USB 3.0 Type-C 线缆进行供电和连接

## 规格参数
<div className="table-center">
  <table style={{ height: "700px" }}>
    <tbody>
      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "400px" }}>
          <strong>参数</strong>
        </td>
        <td style={{ height: "46px", width: "491px" }}>
          <strong>详细信息</strong>
        </td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>电压</td>
        <td style={{ height: "46px", width: "491px" }}>5V (USB Type-C)</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度技术</td>
        <td style={{ height: "46px", width: "491px" }}>主动立体红外</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>工作温度</td>
        <td style={{ height: "46px", width: "491px" }}>0°C ~ 40°C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>机械尺寸</td>
        <td style={{ height: "46px", width: "491px" }}>90mm x 25mm x 30mm</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>通信接口</td>
        <td style={{ height: "46px", width: "491px" }}>USB 3.0 Type-C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>相机驱动</td>
        <td style={{ height: "46px", width: "491px" }}>UVC</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度范围</td>
        <td style={{ height: "46px", width: "491px" }}>0.15m ~ 10m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>理想范围</td>
        <td style={{ height: "46px", width: "491px" }}>0.2m ~ 5m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度分辨率</td>
        <td style={{ height: "46px", width: "491px" }}>最高 1280x800 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>RGB 分辨率</td>
        <td style={{ height: "46px", width: "491px" }}>最高 1920x1080 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>水平视场角</td>
        <td style={{ height: "46px", width: "491px" }}>91°</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>垂直视场角</td>
        <td style={{ height: "46px", width: "491px" }}>66°</td>
      </tr>
    </tbody>
  </table>
</div>

## 硬件概述

<div align="center">
    <img width={700} 
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-1.png" />
</div>

<div align="center">
    <img width={700} 
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-2.png" />
</div>

<div align="center">
    <img width={700} 
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-3.png" />
</div>

## 在 reComputer 上开始使用

**步骤 1.** 下载并安装适用于 ARM64 架构的 Orbbec SDK：

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**步骤 2.** 构建示例并测试：
```bash
# Install udev rules
cd OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64/shared/
sudo chmod +x ./install_udev_rules.sh
sudo ./install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
# Build examples and setup
cd ..
./build_examples.sh
./setup.sh
```


<div align="center">
    <img width={1000} 
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## 应用示例

<div style={{ textAlign: "justify" }}>
Orbbec Gemini2 是一款紧凑、高性能的深度相机，非常适合机器人技术、3D 视觉、物体跟踪和工业自动化。
它完美适用于嵌入式 AI 和边缘计算应用，如 NVIDIA Jetson 平台上的应用。
</div>

:::info
以下是我们使用 Gemini2 开发的一些案例教程：

[距离测量](https://wiki.seeedstudio.com/cn/yolov11_with_depth_camera/)

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>


[无人机物体跟踪](https://wiki.seeedstudio.com/cn/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## 资源

- [Orbbec SDK v2 API 指南](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [数据手册](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
