---
description: 本wiki提供了如何在reComputer Jetson上使用NVStreamer进行RTSP视频流传输的教程。
title: NVStreamer入门指南
keywords:
- reComputer
- NVStreamer
- RTSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/getting_started_with_nvstreamer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---
# 如何在reComputer上使用Jetson平台服务的NVStreamer进行RTSP流传输

## 简介

[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html)是NVIDIA开发的软件，可以存储和提供视频文件，然后使用RTSP协议进行流传输。它对于VST测试特别有用，因为它提供了一种替代摄像头的方法来创建视频源作为VST的输入。具体来说，它提供了一种机制来使用特定的视频文件作为VST测试的输入。VST可以配置为接收RTSP流，就像它们来自ONVIF-S摄像头一样。

本wiki提供了如何在[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)上使用NVStreamer进行RTSP视频流传输的教程。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 先决条件

在进行设置过程之前，请确保您的系统满足以下先决条件：
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

- 运行Ubuntu `22.04`或`更高版本`的reComputer J4012 Orin NX 16G。
- Linux系统必须有足够的可用空间来存储您将要提供的视频文件（通常需要几百GB）。
- 驱动程序版本：`535.113.01`，Jetpack `6.0`和CUDA版本：`12.2`。
- 确保已安装`JetPack`和相关的`Jetson services`软件包。

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## 入门指南

### 安装和启动

**步骤 1**：使用此链接从 NGC 下载应用程序包 **`nvstreamer-1.1.0.tar.gz`** 到您的 Jetson：[NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。您需要输入您的 NGC 凭据。在页面上，使用 **`Download`** 菜单（右上角）中的可用选项之一：

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**步骤 2**：运行以下命令来增加操作系统套接字缓冲区大小。这是为了避免在高比特率视频或大型 IDR 帧情况下出现数据包丢失。如果不增加这些缓冲区大小，您可能会在一些视频文件中看到块状伪影：

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**步骤 3**：使用以下命令行启动 NVStreamer：

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

**步骤 1**：打开网页浏览器（我们推荐使用 Chrome）并导航到此地址（在同一系统或同一网络上的另一个系统上）。

```markdown
http://[reComputer-IP]:31000
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**步骤 2**：选择 **`File Upload`** 并选择您想要作为摄像头测试的视频磁盘文件（支持的编解码器：h264/h265，容器：mp4/mkv）。将其拖放到指定区域。如果视频文件包含 B 帧，NVStreamer 将自动转码该文件，这可能需要几分钟时间，具体取决于文件大小。
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**步骤 3** 文件成功上传后，左下角的绿色进度条将完成，表示上传过程结束。然后，转码过程将开始。完成后，文件名将以灰色显示，并且将自动创建一个以文件名命名的 RTSP 流。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

RTSP 流媒体教程到此步骤结束。复制或记下 RTSP 地址（包括"rtsp://"；确保前面没有空格）。您需要在下一步讨论的另一个用户界面中输入此地址。

### 将 RTSP 流添加到 VST

**步骤 1**：在此处访问 VST Web 服务器：**`http://[JETSON-IP]:30080/vst/`**，（注意：HTTP，不是 HTTPS）其中 `[JETSON-IP]` 是您运行 docker 容器的 Jetson 设备的 IP 地址。

您将看到类似这样的 UI：
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig4.png" />
</div>

- 如果启动失败，请在终端中输入以下命令：

    ```bash
    sudo systemctl start jetson-ingress
    sudo systemctl start jetson-monitoring
    sudo systemctl start jetson-sys-monitoring
    sudo systemctl start jetson-gpu-monitoring
    sudo systemctl start jetson-redis
    sudo systemctl start jetson-vst
    ```

**步骤 2**：点击 **`Camera Management`** 选项卡并点击 **`RTSP`**，将从 NVStreamer UI 复制的 RTSP 地址粘贴到 **`rtsp url`** 框中。在 **`location`** 和 **`name`** 字段中填入相同的字符串（它将成为摄像头名称）并点击 **`Submit`**。
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**步骤 3**：您现在可以点击 **`Streams tab`** 来查看文件。
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## 更多详情

- Jetson Orin 上的 NVStreamer：https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

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
