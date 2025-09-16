---
description: This wiki provides a tutorial on how to use NVStreamer for RTSP video streaming on reComputer Jetson.
title: Getting Started with NVStreamer
keywords:
- reComputer
- NVStreamer
- RTSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /getting_started_with_nvstreamer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---
# How to Use NVStreamer for RTSP Streaming on reComputer with Jetson Platform Services

## Introduction

[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html) is a software developed by NVIDIA that can store and serve video files, which can then be streamed using the RTSP protocol. It is particularly useful for testing with VST, as it provides an alternative method to cameras for creating video sources as input for VST. Specifically, it offers a mechanism to use specific video files as input for VST testing. VST can be configured to receive RTSP streams as if they were coming from ONVIF-S cameras.

This wiki provides a tutorial on how to use NVStreamer for RTSP video streaming on [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerequisites

Before proceeding with the setup process, please ensure that your system meets the following prerequisites:
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- A reComputer J4012 Orin NX 16G running Ubuntu `22.04` or `later`.
- The Linux system must have sufficient available space to store the video files you will be serving (typically several hundred GB).
- Driver Version: `535.113.01`, Jetpack `6.0` and CUDA Version: `12.2`.
- Make sure that `JetPack` and the related `Jetson services` packages are installed.

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## Getting Started

### Installation and Startup

**Step 1**: Download the application package **`nvstreamer-1.1.0.tar.gz`** from NGC to your Jetson using this link: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). You will need to enter your NGC credentials. On the page, use one of the options available in the **`Download`** menu (top right corner):

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**Step 2**: Run the following commands to increase the operating system socket buffer size. This is to avoid packet loss in cases of videos with high bit rates or large IDR frames. Without increasing these buffer sizes, you may sometimes see blocky artifacts in a few video files:

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**Step 3**: Start NVStreamer using the following command line:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml up -d  --force-recreate
```

To terminate the NVStreamer instance, use the following command:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml down --remove-orphans
```

### Upload Video to NVStreamer

**Step 1**: Open a web browser (we recommend using Chrome) and navigate to this address (on the same system or another system on the same network).

```markdown
http://[reComputer-IP]:31000
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**Step 2**: Select **`File Upload`** and choose the video disk file you want to test as a camera (supported codecs: h264/h265, containers: mp4/mkv). Drag and drop it into the indicated area. If the video file contains B-frames, NVStreamer will automatically transcode the file, which may take a few minutes depending on the file size.
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**Step 3** Once the file is successfully uploaded, a green progress bar in the bottom left corner will complete, indicating the end of the upload process. Then, the transcoding process will begin. After completion, the file name will be displayed in gray, and an RTSP stream with the file name will be automatically created.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

The RTSP streaming tutorial ends at this step. Copy or note down the RTSP address (including "rtsp://"; make sure there are no spaces before it). You will need to enter this address into another user interface discussed in the next step.

### Adding RTSP Stream to VST

**Step 1**: Access VST web server here: **`http://[JETSON-IP]:30080/vst/`**, (Note: HTTP, not HTTPS) where `[JETSON-IP]` is the IP address of the Jetson device on which you are running the docker container.

 You will see a UI similar to this:
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig4.png" />
</div>

- If it fails to start, enter the following in the terminal:

    ```bash
    sudo systemctl start jetson-ingress
    sudo systemctl start jetson-monitoring
    sudo systemctl start jetson-sys-monitoring
    sudo systemctl start jetson-gpu-monitoring
    sudo systemctl start jetson-redis
    sudo systemctl start jetson-vst
    ```

**Step 2**: Click the **`Camera Management`** tab and Click on **`RTSP`**, paste the RTSP address copied from NVStreamer UI to **`rtsp url`** box. Fill **`location`** and **`name`** fields with the same string (it will become the camera name) and hit **`Submit`**.
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**Step 3**: You can now click on **`Streams tab`** to see the file.
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## More Details

- NVStreamer on Jetson Orin: https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

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
