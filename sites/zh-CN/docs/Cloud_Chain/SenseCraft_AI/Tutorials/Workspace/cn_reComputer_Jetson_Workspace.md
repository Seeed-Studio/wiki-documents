---
sidebar_position: 13
description: SenseCraft AI 平台上的 Nvidia Jetson 工作空间
title: reComputer Jetson 工作空间
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/nvidia-jetson-workspace/
---


## 入门指南

在将 Jetson 设备添加到工作空间之前，请先在 Jetson 上安装 SenseCraft AI 应用。

SenseCraft AI-Jetson 是一款为 NVIDIA Jetson 边缘 AI 设备设计的开发工具包和平台。只需运行 "Quickstart Script"，即可看到一个交互式用户界面，用预加载的视频和预加载的 AI 模型展示示例应用。如果你想添加自己的 USB 摄像头或 IP 摄像头，只需点击几下就能完成！

**硬件要求**

- NVIDIA Jetson 设备
- 通过以太网 / WiFi 连接互联网
- 显示器

**软件要求**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**快速开始**<br />

1. 将 Jetson 连接到显示器并开机<br />
2. 将鼠标和键盘插入设备，在终端中输入以下命令来运行应用

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. 在应用安装过程中，你需要设置以下可选配置，请根据你的需求进行设置

- **[Optional] Enable jetson_clocks script to maximize Jetson performance by setting max frequency to CPU, GPU, and EMC clocks? [y/n] (default: y): y**<br />
提供 jetson_clocks 脚本，通过将 CPU、GPU 和 EMC 时钟设置为静态最高频率来最大化 Jetson 性能。

- **[Optional] Save space by uninstalling some unnecessary packages like libreoffice, change the size of the Swap Memory? (/swapfile) [y/n] (default: n): n**<br />
在内存不足的情况下（尤其是 jetson nano），最好启用 Swap 以确保程序正常运行。

- **[Optional] Do you want to create or change the size of the Swap Memory? (/swapfile)?**<br />
为了让 nano 获得更好的性能，请打开 Swap。

- **[Optional] Use external · to store the Docker data directory? (for docker images & volumes)?**<br />

- **(Recommended if your root partition is smaller than 32 GB). [y/n] (default: n): n**<br />

边缘 AI 程序运行至少需要 32G 的存储空间，如果没有，你可以选择将 docker 数据卷挂载到外部磁盘。

4. 现在你可以体验 SenseCraft AI-Jetson 了

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### 添加设备

1. 在设备工作空间页面点击 "Add Device" 按钮
2. 输入设备自定义名称，并从设备上获取绑定码。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. 回到设备上的 SenseCraft AI 应用。点击 "Bind to SenseCraft AI platform"，然后应用会显示绑定码和临时名称。

- Bind Code: 在 SenseCraft AI-Model Zoo 上输入正确且有效的绑定码以完成设备绑定。
- Temporary Name: 如果绑定码重复，则需要输入正确的临时名称。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. 输入正确且有效的绑定码并点击 "Comfirm" 按钮

5. 绑定成功，现在你可以管理该设备

:::note

每个账号只能添加 5 台免费设备

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### 设备信息

设备信息分为三部分：常规信息、视频流信息和 AI 模型。

### 常规信息

设备信息分为三部分：常规信息、视频流信息和 AI 模型。详情请查看下表

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **字段** | **内容** |
| --- | --- |
| **Device Name** | 设备自定义名称，用户可以修改名称 |
| **Device SN** | 设备唯一生产序列号 |
| **Device EUI** | 设备 EUI |
| **Online Status** | Online: 设备在线<br />Offline: 设备离线，用户无法操作离线设备 |
| **Equipped Module** | 设备所搭载的模组 |
| **CPU Usage** | 设备 CPU 使用率 |
| **Memory** | 设备 RAM 使用率 |
| **Storage** | 设备磁盘使用率 |
| **IP Address** | 设备网络 IP 地址 |
| **MAC Address** | 设备 MAC 地址 |
| **SenseCraft AI Version** | 设备上安装的 SenseCraft AI 应用版本 |
| **Collect Time** | 最近一次从设备采集信息的时间 |

### 删除设备

如果你已经完成 AI 模型的部署且不再需要远程管理设备，可以将设备从平台中移除，此时设备可以在边缘侧独立进行本地推理、流管理和 AI 模型管理。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### 视频流管理

视频流可以远程查看实时推理结果并管理设备视频流，支持添加流、编辑流、查看流以及删除流。

#### 实时推理

如果设备已经添加了视频流，用户可以在平台上查看所有流的实时推理结果，实现对推理结果和异常情况的实时监控。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### 添加流

点击 "Add Stream" 并输入有效的视频流信息，然后点击 "Confirm" 按钮将新视频流发送到设备。设备添加新视频流需要一定时间，平台信息会稍后更新。详细信息请查看下表。

:::note

设备必须在线才能添加新视频流

:::

| **字段** | **内容** |
| --- | --- |
| **Stream Name** | 1 此视频流的自定义名称。<br />2 不能为空 |
| **Video Type** | 1 Ip camera：接入 IP 摄像头，需要输入有效的 rtsp url<br />2 Usb camera：将 USB 摄像头连接到设备，自动识别 USB，然后在视频路径中选择正确的 USB 摄像头。 |
| **Video Path** | 视频路径，格式由 "Video Type" 决定，如果错误，将使用默认视频。 |
| **Device AI Model** | 1 选择一个已经下载到设备上的 AI 模型<br />2 如果设备上没有 AI 模型，请前往 AI Models 页面将模型下载到设备。 |
| **Confidence Threshold** | 1 目标检测的置信度阈值。<br />2 格式：float [0, 1] |
| **IoU Threshold** | 1 IoU 用于评估预测框与真实框的重叠精度 2 格式：float [0, 1] |
| **FPS** | 1 视频流的每秒帧数<br />2 格式：INT [1,60] |
| **Quality** | 1 输出视频流质量。默认：50<br />2 格式：int [0,100] |
| **Maximum Detections** | 1 每张图像的最大检测数量。默认：3002 格式：int [0,1000] |
| **Display Frame Rate** | 1 是否显示视频流的帧率<br />2 格式：Bool [True,False]<br />● True: 显示 FPS<br />● False: 不显示 FPS |
| **Display Clock** | 1 是否显示时间<br />2 格式：Bool [True,False]<br />● True: 显示时间<br />● False: 不显示时间 |

#### 流详情

点击视频流的 "Eye" 图标，你将看到该视频流的详细信息

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### 编辑流

点击视频流的 "Edit" 图标，用户可以编辑该视频流的所有配置，并点击 "Confirm" 按钮将修改后的视频流信息发送到设备。设备更新视频流配置需要一定时间，平台信息会稍后更新。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### 删除流

点击视频流的 "Delete" 图标以删除该视频流。设备删除视频流需要一定时间，平台信息会稍后更新

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### 设备 AI 模型

管理设备上已下载的所有 AI 模型，并支持添加模型、查看模型详情和删除模型。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

## **技术支持**

**需要 reComputer Jetson 相关帮助？我们随时为你提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
/div>
