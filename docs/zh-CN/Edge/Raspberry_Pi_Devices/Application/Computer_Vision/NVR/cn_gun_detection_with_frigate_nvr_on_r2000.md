---
description: 本 wiki 演示了基于 Frigate NVR 和 reComputer AI 盒子实现枪支检测。
title: 在 R2000 上使用 Frigate NVR 进行枪支检测
keywords:
  - Raspberry pi
  - Edge AI Computer
  - reComputer r2130
  - Object detecton
  - Frigate
image: https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.webp
slug: /cn/gun_detection_with_frigate_nvr_on_r2000
last_update:
  date: 08/12/2025
  author: Nolan Chen

no_comments: false # for Disqus
---

# 在 R2000 上使用 Frigate NVR 进行枪支检测

## 介绍

**Frigate NVR** 是一个开源网络视频录像机，专为 AI 优先的边缘实时视频分析而设计。部署在配备 Hailo 的 **reComputer AI 盒子** 上，该系统在本地接收多个摄像头流，运行量化目标检测模型，并在毫秒内发出 MQTT 事件，消除了云延迟和带宽成本。

在此部署中，我们扩展了 Frigate 现有的模型库，并添加了专门针对手枪和步枪识别进行微调的自定义 **yolov11s** 模型。当检测到枪支时，Frigate 的规则引擎立即触发警报，为安全团队提供宝贵的几秒钟时间来封锁区域并协调响应，防止威胁升级。

## 先决条件

### 硬件要求

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI Industrial R2000</th>
         <th>reComputer AI R2000</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 配置 Frigate

### 修改 PCIe 设置

打开 `config.txt`：

```bash
sudo nano /boot/firmware/config.txt
```

将以下内容添加到 `config.txt`：

```bash
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```

然后使用 `Ctrl+x` 保存文件并重启 AI 盒子。

### 安装 Docker 和 hailo-all

```bash
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### 创建 yml 文件

创建 `frigate.yml` 文件，以便 Docker Compose 可以运行 Frigate。

```bash
cd ~
sudo nano frigate.yml
```

以下是 `frigate.yml` 的示例：

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.16.0-beta3-standard-arm64
    shm_size: "512mb" # calculate on your own
    stop_grace_period: 30s # allow enough time to shut down the various services
    devices:
      - /dev/hailo0:/dev/hailo0
      - /dev/video19:/dev/video19  # USB camera (physical device)
      - /dev/video20:/dev/video20  # USB camera backup device
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - ./media:/media/frigate  # Mapping local media files to the container
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
    environment:
      - FRIGATE_RTSP_PASSWORD=password
      - LIBVA_DRIVER_NAME=i965
    group_add:
      - "44"  # video group
```

下载案例视频：

```bash
mkdir media && cd media
wget -c \
"https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/model_cache/yolov11s.hef"
```

下载 YOLO 模型并创建 config.yml：

```bash
cd .. && mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef
cd .. && nano config.yml
```

以下是 config.yml 的示例：

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    # USB camera streaming
    usb_camera:
      - "ffmpeg:/dev/video0#input=-f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15"

    # RTSP stream configuration

    hikvision_main:
      - "rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream"

    # Video file streaming - close.mp4
    video_files_close:
      - "ffmpeg:/media/frigate/close.mp4"

    # Video file streaming - close2.mp4
    video_files_close2:
      - "ffmpeg:/media/frigate/close2.mp4"

    # Video file streaming - y4.mp4
    video_files_y4:
      - "ffmpeg:/media/frigate/y4.mp4"

    # Video file streaming - y5.mp4
    video_files_y5:
      - "ffmpeg:/media/frigate/y5.mp4"

cameras:
  # USB camera
  usb_camera:
    ffmpeg:
      inputs:
        - path: /dev/video0
          input_args: -f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15
          roles:
            - record
            - detect
    detect:
      width: 640
      height: 480
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 100000
          threshold: 0.25

  # Video file camera - close.mp4
  video_files_close:
    ffmpeg:
      inputs:
        - path: /media/frigate/close.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - close2.mp4
  video_files_close2:
    ffmpeg:
      inputs:
        - path: /media/frigate/close2.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - y4.mp4
  video_files_y4:
    ffmpeg:
      inputs:
        - path: /media/frigate/y4.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.3

  # Video file camera - y5.mp4
  video_files_y5:
    ffmpeg:
      inputs:
        - path: /media/frigate/y5.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.25

  # RTSP IP camera - hikvision
  hikvision_main:
    ffmpeg:
      inputs:
        - path: rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream
          input_args: -rtsp_transport tcp -avoid_negative_ts make_zero
          roles:
            - detect
            - record
    detect:
      width: 1920
      height: 1080
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

mqtt:
  enabled: false

objects:
  track:
    - gun
  filters:
    gun:
      min_area: 10
      max_area: 500000
      threshold: 0.25

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  input_tensor: nhwc
  input_pixel_format: rgb
  input_dtype: int
  model_type: yolo-generic
  path: /config/model_cache/yolov11s.hef
  labelmap:
    0: person
    1: gun

detect:
  enabled: true

snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95

record:
  enabled: true
  retain:
    days: 30
    mode: all

ui:
  timezone: Asia/Shanghai

auth:
  enabled: false

live:
  height: 720
  quality: 8

birdseye:
  enabled: true
  width: 1280
  height: 720
  quality: 8
  mode: objects
version: 0.16-0
semantic_search:
  enabled: false
  reindex: false
  model_size: small
face_recognition:
  enabled: false
lpr:
  enabled: false
```

## 运行项目

拉取并运行项目：

```bash
cd ~
sudo docker pull mjqx2023/frigate_seeed
docker compose -f frigate.yml up -d
```

然后在 AI 盒子的网页浏览器中打开 **localhost:5000**：

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/first.png"
    style={{ width: 1000}}
  />
</div>

选择其中一个视频开始调试，选择显示框，结果将自动显示：

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_1.png"
    style={{ width: 1000}}
  />
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_2.png"
    style={{ width: 1000}}
  />
</div>

切换选项卡查看过去的测试结果：

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.png"
    style={{ width: 1000}}
  />
</div>

## 结果

当它看到有人持枪时，模型会识别并选中它。
切换到调试模式，选择显示框，结果将自动显示；切换选项卡查看过去的检测结果。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/gun_detection_gif.gif" alt="pir" width={1000} height="auto"/></p>

## 其他配置

| 其他视频源配置 | 帧率配置|
|--------------------------|--------------------|
| Frigate 支持 RTSP、视频流和 USB 摄像头。配置文件配置完成后，重启后生效。                | 配置文件可以配置每个摄像头的检测帧率，重启后生效。|
| 您可以在设置中访问配置选项，例如更改 RTSP 路径以连接到 RTSP 摄像头。完成更改后，点击右上角的保存并重启以使更改生效。| ![page](https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/other.png)|

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
