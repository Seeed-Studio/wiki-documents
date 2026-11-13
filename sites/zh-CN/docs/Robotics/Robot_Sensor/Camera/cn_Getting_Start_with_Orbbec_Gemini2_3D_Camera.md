---
description: "如何在 reComputer Jetson 上使用 Orbbec Gemini 2 3D 相机：驱动配置、SDK 安装、深度与 RGB 图像流，用于机器人感知。"
title: Orbbec Gemini2 3D Camera
keywords:
  - Jetson
  - reComputer Robotics
  - 计算机视觉
  - 自动驾驶
  - 工业机器人
  - Orbbec
  - AI Camera
  - Stereo Camera
  - Depth Camera
  - 视觉 SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.webp
slug: /orbbec_gemini2
sku: 101090144
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-08-22'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/orbbec_gemini2/
---

<div align="center">
    <img alt="Orbbec Gemini 2 3D camera, product photo" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
紧凑型 Gemini 2 3D 相机基于主动立体 IR 技术，配备 Orbbec 最新定制 ASIC，用于高质量深度处理、IMU，以及单线 USB 3.0 供电与连接。其宽视场角和宽深度感知范围使 Gemini 2 能适应多种应用场景，尤其适用于机器人。借助 Orbbec SDK，易于安装和操作，并且在从全黑到半户外等各种光照条件下都能提供极其精确且可靠的数据。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 特性

- **主动立体 IR** 采用主动立体 IR 技术输出深度信息，可在各种光照条件下实现精确且可靠的数据输出
- **宽感知范围** 在 0.15m 到 10m 范围内提供高质量深度数据输出
- **宽视场角** 提供 91° 水平、66° 垂直的宽视场数据
- **多相机同步** 支持深度图像和 RGB 图像的多相机同步
- **USB 连接** 使用单根 USB 3.0 Type-C 线缆实现供电和数据连接

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
        <td style={{ height: "46px", width: "491px" }}>Active Stereo IR</td>
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

## 硬件概览

<div align="center">
    <img alt="Gemini 2 正面视图，标注了两个 IR 相机、LDP、LDM 和 RGB 相机" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-1.png" />
</div>

<div align="center">
    <img alt="Gemini 2 侧视图示意图，展示 USB Type-C 接口" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-2.png" />
</div>

<div align="center">
    <img alt="Gemini 2 背面示意图，展示 8 针多相机同步接口" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-3.png" />
</div>


## Gemini 系列快速上手指南
- 连接 Orbbec 相机
 ① 将云台与三脚架组装好，然后按照下方步骤 1 所示，将相机固定在已组装好的三脚架上。

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
【备注】如果未识别到相机，请检查相机与主机是否正确连接。你可以尝试先断开再重新连接 USB 线缆。如果仍无法识别，请考虑更换 USB 线缆，或检查主机电源供给是否满足要求。

<div align="center">
    <img alt="Orbbec Viewer 中列出了已连接的 Gemini 2 相机" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. 切换工具顶部的 ‘Depth’ 按钮，以启动并预览深度图像流。

<div align="center">
    <img alt="在 Orbbec Viewer 中打开的深度图像流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. 切换工具顶部的 ‘Color‘ 按钮，以启动并预览彩色图像流。彩色图像流和深度图像流将并排显示。

<div align="center">
    <img alt="在 Orbbec Viewer 中并排显示的彩色和深度图像流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. 切换工具顶部的 ‘IR Left’ 和 ‘IR Right’ 按钮，以启动并预览 IR 图像流。

<div align="center">
    <img alt="在 Orbbec Viewer 中预览的左、右 IR 图像流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. 切换工具顶部的 ‘IMU’ 按钮，以启动并预览 IMU 数据流。

<div align="center">
    <img alt="Orbbec Viewer 中在深度和彩色图像流旁打开的帧元数据面板" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. 切换每个窗口顶部的按钮，以显示元数据信息。

<div align="center">
    <img alt="Orbbec Viewer 中的帧元数据以及 IMU 加速度和陀螺仪数值" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. 切换工具顶部的 ‘PointCloud‘ 按钮，以启动并预览 3D 点云。

<div align="center">
    <img alt="在 Orbbec Viewer 中预览的 3D 点云" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. 在左侧 ‘Image View’ 菜单下切换 ‘Display’ 按钮，以启动并预览 D2C（深度到彩色配准）图像流。3D 点云和 D2C 图像流将并排显示。

<div align="center">
    <img alt="并排显示的点云和 D2C 配准图像流" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>



## 在 reComputer 上开始使用

**步骤 1.** 下载并安装适用于 ARM64 架构的 Orbbec SDK：

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**步骤 2.** 构建示例并进行测试：

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
    <img alt="在 reComputer 上构建完成的 Orbbec SDK 示例及打开的测试窗口" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## 应用示例

<div style={{ textAlign: "justify" }}>
Orbbec Gemini2 是一款紧凑型、高性能深度相机，非常适合用于机器人、3D 视觉、目标跟踪和工业自动化。
它非常适配嵌入式 AI 和边缘计算应用，例如基于 NVIDIA Jetson 平台的应用。
</div>

:::info
这里是我们使用 Gemini2 开发的一些案例教程：

[距离测量](https://wiki.seeedstudio.com/cn/yolov11_with_depth_camera/)

<div align="center">
    <img alt="Distance measurement demo pairing the Gemini 2 with YOLOv11" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>

[无人机目标跟踪](https://wiki.seeedstudio.com/cn/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img alt="Object tracking demo on a drone using the Gemini 2 and PX4" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## 资源

- [Orbbec SDK v2 API 指南](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [数据手册](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/cn/orbbec_depth_camera_on_ros/)

## 常见问题

**我可以在 Orbbec Viewer 中预览哪些数据流类型？**
深度、彩色、左 IR、右 IR、IMU、3D 点云以及 D2C 配准流。每一种在查看器顶部都有自己的开关，并且点云和 D2C 可以并排显示。

**查看器中没有列出相机。我首先应该检查什么？**
USB 连接。重新插拔 USB-C 转 USB-A 线缆，尝试另一根线缆，并确认主机端口能够提供足够的电力——Gemini 2 的功耗高于低功率集线器端口所能提供的电力。

**除了查看器之外，Jetson 端还需要什么？**
Orbbec SDK v2.4.11 aarch64 软件包。先从 `shared/install_udev_rules.sh` 安装 udev 规则，然后在任何应用程序与相机通信之前运行 `./build_examples.sh` 和 `./setup.sh`。

**这和 Gemini 336 指南中的相机是同一款吗？**
不是。本页面介绍的是 Gemini 2；三脚架和查看器截图与 Gemini 336 快速入门共享，因为这两款相机都使用同一个 Orbbec Viewer。不同型号的 SDK 软件包和深度范围是不同的。

**我可以用它做距离测量或跟踪吗？**
可以——末尾链接的两个示例都在 reComputer 上运行：使用 YOLOv11 的距离测量，以及在无人机上结合 PX4 的目标跟踪。两者都通过 Orbbec SDK 读取深度数据流。

## 相关资源

- [将 Gemini 2 与 YOLOv11 配合用于距离测量](/cn/yolov11_with_depth_camera/)
- [在 Orbbec Gemini2 上运行 ORB-SLAM3](/cn/orb_slam3_orbbec_gemini2/)
- [在 Jetson AGX Orin 上部署 Depth Anything V3](/cn/deploy_depth_anything_v3_jetson_agx_orin/)
- [Orbbec Gemini 2 产品页面](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)
- [Orbbec Gemini 2 系列数据手册](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)

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
