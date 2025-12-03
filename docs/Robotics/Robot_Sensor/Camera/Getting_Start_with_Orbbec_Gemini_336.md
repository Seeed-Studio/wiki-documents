---
description: Show people how to use Orbbec Gemini 336.
title: Orbbec Gemini336 3D Camera
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
slug: /orbbec_gemini336
last_update:
  date: 2025-08-22
  author: Zibo
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


The Gemini 336 is a brand-new addition to the Gemini 330 series. Building on the exceptional depth performance of the Gemini 335, it enhances active infrared imaging by filtering visible light. Specifically optimized for depth imaging quality in indoor reflective areas, dark regions of high-dynamic-range (HDR) scenarios, and outdoor strong light conditions, it delivers stable, high-quality depth data for users.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Feature

- **Active Stereo IR** Employs active stereo IR technology for depth output, enabling accurate and reliable data output in various lighting conditions
- **Wide Sensing Range** Provides quality depth data output from 0.1m to 20m
- **Wide FOV** Provides wide field of view data at 9-degree horizontal and 65-degree vertical
- **Multi-camera synchrnoization** Supports multi-camera synchronization for both depth image and RGB image
- **USB Connection** Uses single USB 3.0 Type-C cable for power and connectivity

## Specifications

### Gemini 336 Specification Table（English）

| Category       | Specification         | Details                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| Basic Parameters | Operating Environment | Full scene: Indoor & Outdoor                                            |
|                | Max Working Range [1] | 0.10 - 20m+                                                             |
|                | Recommended Range     | 0.26 - 3m                                                               |
|                | IMU                   | Supported                                                               |
|                | UVC Camera            | Supported                                                               |
|                | SDK                   | Orbbec SDK                                                              |
| Depth Parameters | Depth Technology      | Stereo Vision                                                           |
|                | Baseline              | 50 mm                                                                    |
|                | Spatial Relative Accuracy [2] | ≤1.5% (1280 × 800 @ 2m & 90% × 90% ROI)                         |
|                | Field of View (FoV)   | 90° × 65° @ 2m (1280 × 800)                                             |
|                | Resolution@Frame Rate | Up to: 1280 × 800 @ 30fps                                               |
|                | Shutter Type          | Global Shutter                                                          |
| Color Parameters | Field of View (FoV)   | 86° × 55°                                                                |
|                | Resolution@Frame Rate | Up to: 1920 × 1080 @ 30fps                                              |
|                | Image Format          | YUYV & MJPEG                                                            |
|                | Shutter Type          | Rolling Shutter                                                         |
| Electrical Parameters | Power Supply Recommendation | DC 5V & ≥1.5A                                                     |
|                | Average Power Consumption | ＜3 W                                                                 |
|                | Filter Cover          | Yes, IR Pass                                                           |
| Physical Parameters | Operating Temperature | -10 - 45℃                                                             |
|                | IP Rating             | IP5X                                                                    |
|                | Dimensions            | 90 mm × 25 mm × 30.7 mm                                                 |
|                | Weight                | 99g                                                                     |
|                | Data & Power Port     | USB 3.0 & USB 2.0 Type-C                                                |
|                | Multi-device Sync Port | 8-pin Interface                                                       |
|                | Mounting Method       | Bottom Mount: 1 × 1/4 - 20unc Threaded Hole Back Mount: 2 × M3 Threaded Holes |


## Hardware Overview
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

## Gemini 330 Series Quickstart Guide
- Connect the Orbbec Camera
 ① Assemble the tripod head with the tripod, and then secure the camera onto the assembled tripod, as illustrated in Step 1 below.

  ② Use the USB-C to USB-A cable to connect the camera’s Type-C port, as shown in Step 2 below.

  ③ Connect the USB-A connector to the host using the same USB-C to USB-A cable, as shown in Step 3 below.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Get Orbbec Viewer

Select and download the corresponding [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) based on your system and version.

- Launch Orbbec Viewer

1. After starting the Orbbec Viewer, please make sure that the tool recognizes the 3D camera, as indicated by the following image. 
【Remark】If the camera is not recognized, please check to ensure that the camera and the host are properly connected. You can try disconnecting and then reconnecting the USB cable. If it still isn’t recognized, consider replacing the USB cable or verifying whether the host computer’s power supply meets the required specifications.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. Toggle the ‘Depth’ button at the top of the tool to start and preview the depth stream.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. Toggle the ‘Color‘ button at the top of the tool to start and preview the color stream. The color stream and depth stream will be displayed side by side.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. Toggle the ‘IR Left’ and ‘IR Right’ buttons at the top of the tool to strat and preview the IR stream.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. Toggle the ‘IMU’ button at the top of the tool to start and preview the IMU stream.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Toggle the button on the top of each window to show the metadata information.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Toggle the ‘PointCloud‘ button at the top of the tool to start and preview the 3D point cloud

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Toggle the ‘Display’ button under the ‘Image View’ menu on the left to start and preview the D2C (depth to color registration) stream. The 3D point cloud and the D2C stream will be displayed side by side.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## Resources

- [Orbbec Official Guide](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [Datasheet](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/orbbec_depth_camera_on_ros/)

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
