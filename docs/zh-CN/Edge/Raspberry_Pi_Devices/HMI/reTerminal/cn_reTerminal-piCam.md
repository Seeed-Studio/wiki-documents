---
description: reTerminal 和 Pi 摄像头模块集成
title: reTerminal 和 Pi 摄像头模块
keywords:
  - Edge
  - reTerminal 
  - piCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-piCam
last_update:
  date: 5/17/2023
  author: Kasun Thushara
---
# reTerminal 和 Pi 摄像头模块

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

树莓派摄像头，通常称为 PiCam，是专为树莓派单板计算机设计的摄像头模块。它为直接从您的树莓派设备捕获图像和录制视频提供了紧凑便捷的解决方案。

以下是每个版本 PiCam 的规格：

**PiCam v1（摄像头模块 v1.3）：**

- 传感器：OmniVision OV5647
- 分辨率：500万像素
- 视频模式：1080p30、720p60、640x480p60/90

**PiCam v2（摄像头模块 v2）：**

- 传感器：Sony IMX219
- 分辨率：800万像素（3280 x 2464 像素）
- 视频模式：1080p30、720p60、640x480p90

**PiCam v3（摄像头模块 3）：**

- 传感器：Sony IMX708
- 分辨率：1200万像素（4056 x 3040 像素）
- 视频模式：1080p30、720p60、640x480p90

| 树莓派摄像头模块 V1|树莓派摄像头模块 V2| 树莓派摄像头模块 3 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|
|树莓派摄像头模块 3 广角 NoIR | 树莓派摄像头模块 3 NoIR | 树莓派摄像头模块 3 广角 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

所有版本的 PiCam 都通过 MIPI CSI-2 接口连接到 Raspberry Pi，为传输图像和视频数据提供直接的高速连接。

PiCam 提供了一系列功能和特性，使其适用于各种应用，**包括摄影、录像、计算机视觉项目、监控等等**。其小巧的外形尺寸和与 Raspberry Pi 的轻松集成使其成为爱好者、创客和专业人士的热门选择。

请注意，上述规格是针对标准 PiCam 模块的，第三方制造商可能提供变体或替代相机模块。

在安装 PiCam 时，您有两个选择。第一个选择是使用 Seeed Studio 提供的预构建镜像，可以在我们的 wiki 页面上找到。这些预构建镜像专门为 PiCam 配置，确保兼容性和易用性。但是，请注意这些镜像仅适用于 PiCam v1（OmniVision OV5647 传感器）。

或者，您可以选择从官方网站安装最新版本的 Raspberry Pi OS。这样做，您将能够访问最新的功能和改进。Seeed Studio 推荐这种方法，并在我们的 wiki 页面上提供了安装必要驱动程序和相关组件的说明，以确保 PiCam 在全新的 Raspberry Pi OS 安装上正常运行。

## 使用预构建的 raspberry pi 镜像

要为 Seeed Studio reTerminal 安装 PiCam，您可以选择使用 Seeed Studio 提供的预构建镜像。这些镜像可在我们的 wiki 页面上获得，专门为 reTerminal 设计。

:::note

重要的是要注意，预构建镜像目前**仅支持 PiCam v1，它使用 OmniVision OV5647 传感器**。这意味着您可以使用 `raspistill` 命令捕获图像或录制视频。

:::

- **步骤 1** 访问专门针对 reTerminal 的 Seeed Studio wiki 页面，并导航到提供预构建镜像的部分。（您可以参考此链接获取镜像并了解安装程序。如果您已经完成，请跳过此步骤。[此链接](https://wiki.seeedstudio.com/cn/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)）
- **步骤 2** 关闭 reTerminal 电源，将 PiCam v1 模块连接到 reTerminal 上的相机接口。确保其牢固连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3** 组装 reTerminal 并启动 reTerminal。转到您可以在桌面上找到的 reTerminal 图标，启用相机并重新启动。

- **步骤 4** 打开终端或通过 SSH 连接到 reTerminal 以访问命令行界面。
- **步骤 5** 使用 `raspistill` 命令捕获图像。您可以访问此网站获取更多命令。[链接](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)

```sh
raspistill -o Desktop/image.jpg
```

## 对于全新的树莓派操作系统

我们推荐为 Seeed Studio reTerminal 使用来自树莓派官方网站的 Raspbian Bullseye 64 位全新镜像：

- **步骤 1** Seeed Studio 提供了在刷写新的 Raspberry Pi OS 或其他操作系统后如何安装驱动程序的详细说明。请参考 Seeed Studio 的 reTerminal wiki 页面，并按照["刷写新的 Raspberry Pi OS"](https://wiki.seeedstudio.com/cn/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)部分和["如何安装 reTerminal 驱动程序"](https://wiki.seeedstudio.com/cn/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)部分中提供的说明进行操作。如果您已经完成了这些步骤，请跳过此步骤。

- **步骤 2** 关闭 reTerminal 电源，并将 PiCam 模块连接到 reTerminal 上的摄像头接口。确保连接牢固。

- **步骤 3** 打开终端或通过 SSH 连接到您的 reTerminal，执行以下命令来编辑 config.txt 文件：

```sh
sudo nano /boot/config.txt 
```

- **步骤 4** 在 config.txt 文件中，您需要进行特定的更改以启用 PiCam。按照以下步骤操作：

  - 找到 camera_auto_detect=1 这一行，在行首添加 "#" 将其注释掉。此步骤是为了禁用摄像头模块的自动检测。

  - 在 config.txt 文件中添加以下行：
    - dtoverlay=ov5647,cam0
    - dtoverlay=camera-mux-2port

:::note

如果您使用的是 PiCam v3 NoIR wide 而不是 PiCam v1，请使用 **dtoverlay=imx708,cam0** 而不是 **dtoverlay=ov5647,cam0**。dtoverlay 配置指定了正在使用的摄像头模块和摄像头多路复用器。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **步骤 5** : 通过按 Ctrl + X，然后按 Y，再按 Enter 确认来保存对 config.txt 文件所做的更改。最后，重启 reTerminal 以应用修改：

```sh
sudo reboot
```

 重启后，PiCam 应该已经配置完成并准备好与您的 Seeed Studio reTerminal 一起使用。您现在可以继续使用 libcamera 捕获图像或录制视频。

- **步骤 6**：打开终端并编写以下代码来测试一切是否正常工作。

```sh
sudo libcamera-hello
```

libcamera-hello 相当于相机的"hello world"应用程序。它启动相机，显示预览窗口，除此之外什么都不做。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

您可以参考以下文档了解更多关于 [libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html) 的详细信息
