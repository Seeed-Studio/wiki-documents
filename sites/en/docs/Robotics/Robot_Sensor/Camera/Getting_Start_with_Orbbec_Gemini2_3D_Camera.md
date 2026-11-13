---
description: "How to use the Orbbec Gemini 2 3D camera with reComputer Jetson: driver setup, SDK installation, depth and RGB streaming for robotics perception."
title: Orbbec Gemini2 3D Camera
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
slug: /orbbec_gemini2
sku: 101090144
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-08-22'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/orbbec_gemini2/
---

<div align="center">
    <img alt="Orbbec Gemini 2 3D camera, product photo" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
The compact Gemini 2 3D camera is based on Active Stereo IR technology and is equipped with Orbbec’s latest custom ASIC for high quality depth processing, IMU, and single cable USB 3.0 power + connectivity. The wide FOV and the wide depth sensing range makes Gemini 2 adaptable for many applications, especially for robotics. It is easy to set up and operate with the Orbbec SDK and delivers extremely accurate and reliable data in various lighting conditions from pitch black to semi-outdoor.
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Feature

- **Active Stereo IR** Employs active stereo IR technology for depth output, enabling accurate and reliable data output in various lighting conditions
- **Wide Sensing Range** Provides quality depth data output from 0.15m to 10m
- **Wide FOV** Provides wide field of view data at 91-degree horizontal and 66-degree vertical
- **Multi-camera synchrnoization** Supports multi-camera synchronization for both depth image and RGB image
- **USB Connection** Uses single USB 3.0 Type-C cable for power and connectivity

## Specifications

<div className="table-center">
  <table style={{ height: "700px" }}>
    <tbody>
      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "400px" }}>
          <strong>Parameters</strong>
        </td>
        <td style={{ height: "46px", width: "491px" }}>
          <strong>Detail</strong>
        </td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Voltage</td>
        <td style={{ height: "46px", width: "491px" }}>5V (USB Type-C)</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Depth Technology</td>
        <td style={{ height: "46px", width: "491px" }}>Active Stereo IR</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Operating Temperature</td>
        <td style={{ height: "46px", width: "491px" }}>0°C ~ 40°C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Mechanical Dimension</td>
        <td style={{ height: "46px", width: "491px" }}>90mm x 25mm x 30mm</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Communication Interface</td>
        <td style={{ height: "46px", width: "491px" }}>USB 3.0 Type-C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Camera Driver</td>
        <td style={{ height: "46px", width: "491px" }}>UVC</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Depth Range</td>
        <td style={{ height: "46px", width: "491px" }}>0.15m ~ 10m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Ideal Range</td>
        <td style={{ height: "46px", width: "491px" }}>0.2m ~ 5m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Depth Resolution</td>
        <td style={{ height: "46px", width: "491px" }}>Up to 1280x800 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>RGB Resolution</td>
        <td style={{ height: "46px", width: "491px" }}>Up to 1920x1080 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Horizontal FOV</td>
        <td style={{ height: "46px", width: "491px" }}>91°</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Vertical FOV</td>
        <td style={{ height: "46px", width: "491px" }}>66°</td>
      </tr>
    </tbody>
  </table>
</div>

## Hardware Overview

<div align="center">
    <img alt="Front view of the Gemini 2 labelled with the two IR cameras, the LDP, the LDM and the RGB camera" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-1.png" />
</div>

<div align="center">
    <img alt="Side drawing of the Gemini 2 showing the USB Type-C interface" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-2.png" />
</div>

<div align="center">
    <img alt="Rear drawing of the Gemini 2 showing the 8-pin multi-camera synchronization interface" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-3.png" />
</div>


## Gemini Series Quickstart Guide
- Connect the Orbbec Camera
 ① Assemble the tripod head with the tripod, and then secure the camera onto the assembled tripod, as illustrated in Step 1 below.

  ② Use the USB-C to USB-A cable to connect the camera’s Type-C port, as shown in Step 2 below.

  ③ Connect the USB-A connector to the host using the same USB-C to USB-A cable, as shown in Step 3 below.

<div align="center">
    <img alt="Gemini camera mounted on the tripod head with the USB-C to USB-A cable attached" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Get Orbbec Viewer

Select and download the corresponding [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) based on your system and version.

- Launch Orbbec Viewer

1. After starting the Orbbec Viewer, please make sure that the tool recognizes the 3D camera, as indicated by the following image. 
【Remark】If the camera is not recognized, please check to ensure that the camera and the host are properly connected. You can try disconnecting and then reconnecting the USB cable. If it still isn’t recognized, consider replacing the USB cable or verifying whether the host computer’s power supply meets the required specifications.

<div align="center">
    <img alt="Orbbec Viewer listing the connected Gemini 2 camera" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. Toggle the ‘Depth’ button at the top of the tool to start and preview the depth stream.

<div align="center">
    <img alt="Depth stream toggled on in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. Toggle the ‘Color‘ button at the top of the tool to start and preview the color stream. The color stream and depth stream will be displayed side by side.

<div align="center">
    <img alt="Colour and depth streams shown side by side in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. Toggle the ‘IR Left’ and ‘IR Right’ buttons at the top of the tool to strat and preview the IR stream.

<div align="center">
    <img alt="Left and right IR streams previewed in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. Toggle the ‘IMU’ button at the top of the tool to start and preview the IMU stream.

<div align="center">
    <img alt="Orbbec Viewer with the frame metadata panel open beside the depth and colour streams" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Toggle the button on the top of each window to show the metadata information.

<div align="center">
    <img alt="Frame metadata and the IMU acceleration and gyroscope values in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Toggle the ‘PointCloud‘ button at the top of the tool to start and preview the 3D point cloud

<div align="center">
    <img alt="3D point cloud preview in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Toggle the ‘Display’ button under the ‘Image View’ menu on the left to start and preview the D2C (depth to color registration) stream. The 3D point cloud and the D2C stream will be displayed side by side.

<div align="center">
    <img alt="Point cloud and D2C registered stream displayed side by side" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>



## Getting Start on reComputer

**Step 1.** Download and install the Orbbec SDK for ARM64 architecture:

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**Step 2.** Build examples and test:

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
    <img alt="Orbbec SDK examples built and the test window opened on the reComputer" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## Applications example

<div style={{ textAlign: "justify" }}>
The Orbbec Gemini2 is a compact, high-performance depth camera ideal for robotics, 3D vision, object tracking, and industrial automation.
it fits perfectly in embedded AI and edge computing applications like those on NVIDIA Jetson platforms.
</div>

:::info
There are some case tutorials developed by us using Gemini2:

[Distance Measurement](https://wiki.seeedstudio.com/yolov11_with_depth_camera/)

<div align="center">
    <img alt="Distance measurement demo pairing the Gemini 2 with YOLOv11" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>

[Object Tracking on drone](https://wiki.seeedstudio.com/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img alt="Object tracking demo on a drone using the Gemini 2 and PX4" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## Resources

- [Orbbec SDK v2 API Guide](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [Datasheet](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/orbbec_depth_camera_on_ros/)

## FAQ

**Which stream types can I preview in Orbbec Viewer?**
Depth, colour, left IR, right IR, IMU, the 3D point cloud, and the D2C registered stream. Each one has its own toggle at the top of the viewer, and the point cloud plus D2C can be shown side by side.

**The viewer does not list the camera. What should I check first?**
The USB connection. Re-seat the USB-C to USB-A cable, try another cable, and confirm the host port can supply enough power — the Gemini 2 draws more than a low-power hub port provides.

**What does the Jetson side need beyond the viewer?**
The Orbbec SDK v2.4.11 aarch64 package. Install the udev rules from `shared/install_udev_rules.sh`, then run `./build_examples.sh` and `./setup.sh` before any application talks to the camera.

**Is this the same camera as the Gemini 336 guide?**
No. This page covers the Gemini 2; the tripod and viewer screenshots are shared with the Gemini 336 quickstart because both cameras use the same Orbbec Viewer. The SDK package and depth range differ per model.

**Can I use it for distance measurement or tracking?**
Yes — the two examples linked at the end run on reComputer: distance measurement with YOLOv11 and object tracking on a drone with PX4. Both read the depth stream through the Orbbec SDK.

## Related Resources

- [Pair the Gemini 2 with YOLOv11 for distance measurement](/yolov11_with_depth_camera/)
- [ORB-SLAM3 with Orbbec Gemini2](/orb_slam3_orbbec_gemini2/)
- [Deploy Depth Anything V3 on Jetson AGX Orin](/deploy_depth_anything_v3_jetson_agx_orin/)
- [Orbbec Gemini 2 product page](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)
- [Orbbec Gemini 2 series datasheet](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)

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
