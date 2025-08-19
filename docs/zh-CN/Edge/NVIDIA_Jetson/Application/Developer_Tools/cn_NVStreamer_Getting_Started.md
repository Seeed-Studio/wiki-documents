---
description: 本文档提供了在 reComputer Jetson 上使用 NVStreamer 进行 RTSP 视频流传输的教程。
title: NVStreamer 入门指南
keywords:
- reComputer
- NVStreamer
- RTSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/getting_started_with_nvstreamer
last_update:
  date: 2024/7/24
  author: ZhuYaoHui
---
# 如何在 Jetson 平台服务的 reComputer 上使用 NVStreamer 进行 RTSP 流传输

## 简介
[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html) 是 NVIDIA 开发的一款软件，可以存储和提供视频文件，这些文件可以通过 RTSP 协议进行流式传输。它在与 VST 测试时特别有用，因为它为创建视频源作为 VST 输入提供了一种替代摄像头的方法。具体来说，它提供了一种机制，可以使用特定的视频文件作为 VST 测试的输入。VST 可以配置为接收 RTSP 流，就像它们来自 ONVIF-S 摄像头一样。

本文档提供了如何在 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 上使用 NVStreamer 进行 RTSP 视频流传输的教程。

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前置条件
在开始设置过程之前，请确保您的系统满足以下前置条件：
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

- 一台运行 Ubuntu `22.04` 或更高版本的 reComputer J4012 Orin NX 16G。
- Linux 系统必须有足够的可用空间来存储您将提供的视频文件（通常需要几百 GB）。
- 驱动版本：`535.113.01`，Jetpack `6.0` 和 CUDA 版本：`12.2`。
- 确保已安装 `JetPack` 和相关的 `Jetson services` 软件包。
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## 入门

### 安装与启动

**步骤 1**：从 NGC 下载应用程序包 **`nvstreamer-1.1.0.tar.gz`** 到您的 Jetson 上，使用以下链接：[NGC 参考工作流和资源](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。您需要输入您的 NGC 凭据。在页面上，使用 **`Download`** 菜单（右上角）中的任一选项：

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**步骤 2**：运行以下命令以增加操作系统的套接字缓冲区大小。这是为了避免在处理高比特率或大 IDR 帧的视频时出现数据包丢失。如果不增加这些缓冲区大小，您可能会在某些视频文件中看到块状伪影：

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**步骤 3**：使用以下命令启动 NVStreamer：

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml up -d  --force-recreate
```

要终止 NVStreamer 实例，请使用以下命令：

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml down --remove-orphans
```

### 上传视频到 NVStreamer
**步骤 1**：打开一个网页浏览器（推荐使用 Chrome），并导航到以下地址（在同一系统或同一网络中的其他系统上）。

```markdown
http://[reComputer-IP]:31000
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**步骤 2**：选择 **`File Upload`**，并选择您想要测试为摄像头的视频磁盘文件（支持的编解码器：h264/h265，容器：mp4/mkv）。将其拖放到指定区域。如果视频文件包含 B 帧，NVStreamer 将自动对文件进行转码，这可能需要几分钟，具体取决于文件大小。
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**步骤 3**：文件上传成功后，左下角的绿色进度条将完成，表示上传过程结束。然后，转码过程将开始。完成后，文件名将显示为灰色，并自动创建一个以文件名命名的 RTSP 流。

<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

RTSP 流传输教程到此结束。复制或记下 RTSP 地址（包括 "rtsp://"；确保前面没有空格）。您需要在下一步中将此地址输入到另一个用户界面中。

### 将 RTSP 流添加到 VST

**步骤 1**：访问 VST Web 服务器：**`http://[JETSON-IP]:30080/vst/`**（注意：使用 HTTP，而非 HTTPS），其中 `[JETSON-IP]` 是运行 Docker 容器的 Jetson 设备的 IP 地址。

您将看到类似以下的界面：
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig4.png" />
</div>

- 如果无法启动，请在终端中输入以下命令：

    ```bash
    sudo systemctl start jetson-ingress
    sudo systemctl start jetson-monitoring
    sudo systemctl start jetson-sys-monitoring
    sudo systemctl start jetson-gpu-monitoring
    sudo systemctl start jetson-redis
    sudo systemctl start jetson-vst
    ```

**步骤 2**：点击 **`Camera Management`** 标签，选择 **`RTSP`**，将从 NVStreamer UI 复制的 RTSP 地址粘贴到 **`rtsp url`** 框中。在 **`location`** 和 **`name`** 字段中填入相同的字符串（它将成为摄像头名称），然后点击 **`Submit`**。
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**步骤 3**：现在，您可以点击 **`Streams 标签`** 查看文件。
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## 更多详情
- Jetson Orin 上的 NVStreamer: https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>