---
description: 本示例演示如何在 reCamera 上进行实时二维码识别，并通过 UDP 将视频帧和识别结果推送到 PC 端进行显示。
title: 在 reCamera 上进行实时二维码识别
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp_bak
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 07/08/2026
  author: QiYao Lin
createdAt: '2026-06-15'
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/recamera_qrcode_udp_bak/
---

# 在 reCamera 上进行实时二维码识别

## 介绍

本示例演示如何使用 reCamera 搭建一个**实时二维码识别系统**。系统通过摄像头采集实时视频帧，使用 **Quirc** 库解码二维码，并通过 **RTSP** 和 HTTP 协议将视频帧和识别结果推送到 PC 端进行显示。

**主要特性**：
- 实时摄像头采集与二维码识别
- 支持视频流模式和单张图片模式
- 通过 RTSP 将 JPEG 帧 + 识别结果推送到 PC
- PC 端 Python 脚本实现实时视频与结果显示

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.gif" /></div>

## 工作原理

### 视频流 + 二维码检测结果分离模式

本示例采用“实时视频传输”和“异步二维码检测结果查询”分离的架构。reCamera 端负责采集摄像头图像、推送 RTSP 视频流，并在设备内部运行独立的二维码检测线程。PC 端通过 RTSP 获取实时视频的同时，通过 HTTP 接口访问最新的二维码检测结果。

实时识别流程如下：

- 摄像头采集：reCamera 通过 SG2002 视频接口采集摄像头图像，并同时配置两个视频通道。
- RTSP 视频推流：一个视频通道编码为 H.264，通过 RTSP 实时推流到同一网段的设备。PC 可以直接通过 RTSP 地址拉取并显示实时视频流。
- 二维码检测帧获取：另一个视频通道输出低分辨率 NV21 图像帧用于二维码检测。程序仅使用 NV21 的 Y 平面作为二维码检测器的灰度图输入，避免额外的 RGB 转换开销。
- 最新帧队列缓存：二维码检测线程与视频采集回调解耦。采集回调不直接进行二维码检测，而是将最新的灰度帧放入长度为 1 的队列中。当检测线程处理速度较慢时，新帧会覆盖旧帧，确保队列中始终只保留最新帧，避免因检测任务堆积导致的延迟增加。
- 异步二维码检测：二维码检测线程从最新帧队列中取出图像，使用 quirc 二维码识别库进行检测和解码。由于检测过程在独立线程中运行，不会阻塞 RTSP 视频推流。
- 结果缓存：每次检测完成后，程序会更新最新的二维码检测结果，包括是否检测到二维码、二维码内容、检测耗时、frame_id、PTS、采集时间、检测完成时间以及二维码边界框坐标。
- HTTP 结果查询：同一网段的设备可以通过 GET `/api/qr/latest` 获取最新的二维码检测结果。该接口仅返回最近一次检测的状态，不会阻塞视频流，也不会主动传输历史检测队列。
- PC 端显示：Windows 客户端通过 RTSP 在左侧显示实时视频流，并在右侧通过 HTTP 周期性轮询 `/api/qr/latest`，显示最新的二维码检测结果和检测时间。如果返回结果中包含二维码边界框坐标，客户端会将检测框按比例缩放并叠加到 RTSP 视频流上。

数据链路如下：

```text
reCamera
├── RTSP Video Stream
│   └── Address:
│       rtsp://<device-ip>:8554/live0
│
└── QR Code Detection Result HTTP API
    └── Address:
        http://<device-ip>:8080/api/qr/latest
```

这种设计将高实时性的视频传输与相对耗时的二维码检测解耦。RTSP 视频流可以保持连续输出，而二维码检测线程只处理最新帧，即使二维码检测耗时较长，也不会导致视频卡顿或检测队列堆积。

## 演示搭建

要搭建本演示，你需要：

1. 在 PC 上交叉编译 C++ 程序。
2. 在 ReCamera 上运行编译好的可执行文件。
3. 在 PC 上运行 Python 接收脚本。

### 1. 编译 C++ 程序

在构建该方案之前，你需要配置 recamera 环境。你可以直接从以下位置下载对应的预编译库：

```text
https://codeload.github.com/Seeed-Studio/sscma-example-sg200x/tar.gz/refs/tags/0.2.4
````
解压并设置环境变量：
```bash
export SG200X_SDK_PATH=<PATH_TO_RECAMERA-OS>/output/sg2002_recamera_emmc/
export PATH=<PATH_TO_RECAMERA-OS>/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

克隆二维码识别仓库并进入对应的解决方案目录进行编译。在 PC 的终端中依次执行以下命令。

```bash
git clone https://github.com/yyling0101-a11y/qrcode_rec.git
cd /qrcode_rec/
```

克隆完成后的仓库目录结构如下所示：
```text
(base) yylin@LAPTOP-TI348HL9:~/qrcode_rec$ tree -L 2 -I "build"
.
├── CMakeLists.txt
├── main
│   ├── CMakeLists.txt
│   ├── frame_sei.cpp
│   ├── frame_sei.hpp
│   ├── frame_sync.cpp
│   ├── frame_sync.hpp
│   ├── http_server.cpp
│   ├── http_server.hpp
│   ├── latest_frame_queue.hpp
│   ├── main.cpp
│   ├── placeholder
│   ├── qr_detector.cpp
│   ├── qr_detector.hpp
│   ├── qr_result_store.cpp
│   ├── qr_result_store.hpp
│   ├── qr_worker.cpp
│   ├── qr_worker.hpp
│   ├── rtsp_demo.cpp
│   ├── rtsp_demo.h
│   └── third_party
└── recamera_qr_win_client
    ├── README.md
    ├── recamera_qr_viewer.py
    └── requirements.txt
```

`main` 目录中包含要在 recamera 上运行的源代码，`recamera_qr_win_client` 中包含在 x86 设备上运行的可视化结果源代码。编译前，你需要修改 main 目录下 `CMakeLists.txt` 文件中指定的目录，将其指向上一步中解压预编译包所在的目录。

开始编译：
```bash
mkdir build && cd build
cmake ..
make
```

编译成功后，可执行文件位于 `build/qrcode_rec`。使用 `scp` 命令将其上传到 ReCamera 上的 `/home/recamera/` 目录：

```bash
sudo scp qrcode_rec recamera@192.168.42.1:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
根据提示输入对应平台的密码，即可完成 `qrcode_rec` 的传输。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/make.png" /></div>


### 2. 配置 ReCamera

:::warning
在运行 C++ 程序之前，必须先停止默认的 Node-RED 服务，因为它们会占用摄像头资源。请通过 SSH 运行以下命令：
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. 在 ReCamera 上运行可执行文件

然后，运行以下命令授予执行权限：

```bash
chmod +x qrcode_udp
```

#### 示例命令

你可以在 reCamera 的终端中直接运行此命令来启动程序。
```bash
sudo ./qrcode_rec
```

成功启动后的日志大致如下：

```
[recamera@reCamera]~$ sudo  ./qrcode_rec
Password:
prio:0
rtsp://192.168.4.5:8554/live0
[rtsp] session name=live0 channel=2 codec=1 result=0 session=0x3fe0c53210
ISP Vipipe(0) Allocate pa(0x8cf31000) va(0x0x3fe072f000) size(311584)
awbInit ver 6.9@2021500
0 R:1400 B:3100 CT:2850
1 R:1500 B:2500 CT:3900
2 R:2300 B:1600 CT:6500
Golden 1024 1024 1024
WB Quadratic:0
isWdr:0
ViPipe:0,===OV5647 1080P 30fps 10bit LINE Init OK!
********************************************************************************
cvi_bin_isp message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

PQBIN message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

author:        hongtai.liu    desc:          Seeed OV5647
createTime:    2025-08-14 14:37:24version:       V1.1
tool Version:       v3.0.8.6            mode: M
********************************************************************************
20260708 03:45:31.704 2248 E isp AF_SetAttr:558 pstFocusMpiAttr is NULL

reCamera QR scanner is running
RTSP      : rtsp://192.168.4.5:8554/onvif
QR latest : http://192.168.4.5:8080/api/qr/latest
Health    : http://192.168.4.5:8080/api/health

[http] listening on 0.0.0.0:8080
0 R:1008 B:2206 CT:2777
1 R:1313 B:1866 CT:3894
2 R:1609 B:1206 CT:7164
Golden 1313 1024 1866
wdrLEOnly:1

```


### 4. 在 PC 上运行 Python 接收端

在 PC 上，你需要为可视化工具安装相应的环境依赖。

```bash
cd qrcode_rec/recamera_qr_win_client
pip install -r ./requirements.txt
```

然后使用以下命令直接运行 Python 程序。你需要将对应的 IP 地址修改为你的 reCamera 的 IP 地址。

```bash
# in powershell
python recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest

# in linux
python3 recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest
```

#### Python 接收端参数

| 参数 | 描述 | 默认值 |
|-----------|-------------|---------|
| `--rtsp` | RTSP 地址 | `192.168.4.5` |
| `--qr-url` | 获取识别结果的 URL | `http://192.168.4.5:8080/api/qr/latest` |


### 在 Python 接收端窗口中

PC 将显示一个实时视频窗口，其中包括：
- JPEG 视频流
- 识别结果
- HTTP 返回的原始 JSON
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种形式的支持，以确保您的使用体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>