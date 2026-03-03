---
description: 基于 Frigate-on-Jetson 和 Node-RED 的边缘 AI 枪支检测系统，支持 Jetson 和 reComputer R2000 (Hailo) 平台。
title: 实时边缘告警的 AI 枪支检测解决方案
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/scene_3.webp
slug: /cn/solutions/frigate-on-jetson-nodered-gun-alerts
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Spencer Y
---

:::note[注意]
此项目**仅供教育和演示目的**。  
如果您打算在真实环境中部署，请**确保符合当地法规**并在部署前获得**任何必要的授权**。
:::

## 概述

Frigate + Node-RED 枪支检测解决方案是一个边缘 AI 视频分析堆栈，可检测实时摄像头流中的枪支并协调告警、审查和集成。专为**AI 盒子**、NVIDIA **Jetson** 系列和 **reComputer R2000** 上的隐私保护、低延迟部署而构建，它结合了优化的检测引擎（Frigate）、可视化自动化层（Node‑RED）和可选的 LLM 辅助审查。

<div align="center">
  <img class='img-responsive' width={680} src="https://www.seeed.cc/wp-content/uploads/2025/09/archi_2-1.png" alt="solution diagram"/>
</div>

它提供完整的 AI NVR[^nvr] 体验：

- 实时检测来自实时 RTSP/HTTP 流的枪支。  
- 自动化事件告警、日志记录和通知。  
- 本地运行以确保隐私、低延迟和可靠性。  

[^nvr]: AI NVR 利用先进的机器学习模型提供**实时洞察和自动化功能**，而传统 NVR 主要专注于录制和存储视频素材。
`

如果您的设备不是来自 Seeed 的套装，或者您想要根据自己的设置进行定制，请按照本指南部署解决方案。

<table class="table-center">
  <tr>
      <th>校园安全管理</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://www.seeed.cc/wp-content/uploads/2025/08/scene_3.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/campus-safety-management" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 解决方案套装 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 特性

传统 NVR 依赖人工监控，速度慢、不一致且难以扩展。此解决方案通过专注于提供即时价值的可衡量结果来解决这些挑战。
<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>更快的响应时间</h3>
                <p>通过自动化告警和实时仪表板实现即时态势感知，绕过人工监控的延迟。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>更低的误报率</h3>
                <p>利用可选的 LLM 辅助验证来智能审查告警，显著减少误报并集中操作员注意力。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>数据主权和隐私</h3>
                <p>所有推理和数据处理都在本地进行，无云依赖，确保完全的数据隐私和控制。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>可扩展的多流支持</h3>
                <p>利用 Jetson 和 Hailo 平台上强大的硬件解码功能，同时监控多个摄像头流而不会出现性能损失。</p>
            </div>
        </li>
    </ul>
</div>

## 系统架构

该解决方案由几个协同工作的关键模块组成：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Architecture%20Diagram.png" alt="system architecture"/>
</div>

- **Frigate** 处理实时视频并通过 MQTT 发布检测事件。
- **Node-RED** 订阅这些事件，协调告警工作流程，并更新仪表板。
- **实时仪表板** 提供可视化监控、事件审查和系统配置。
- **Webhooks** 支持与任何第三方系统集成，用于通知和数据导出。

## 部署指南

### 先决条件

- **AI 盒子/边缘硬件：** reComputer J3011/J4012（Jetson Nano/Xavier/Orin 系列）。
- **网络摄像头：** 在同一网络上可访问的 RTSP/HTTP 流。
- 对 Docker、Node-RED 和 Frigate 配置的基本了解。

<!-- 
This is a ready-to-use AI NVR solution that unifies hardware and software.

- Pre-installed **Frigate** detection engine with a baseline gun model.  
- Built-in **Node-RED Dashboard** for alert visualization and event management.  
- Web-based access — configure RTSP streams and start monitoring immediately.   -->

在本页面中，我们将使用 **reComputer J4012（Jetson Orin™ NX 16GB）** 作为示例平台。但是，其他支持的硬件的步骤类似。

### 步骤 1：Frigate 安装

:::note[注意]
如果尚未安装 `curl`，请运行以下命令进行安装：

```bash
sudo apt update && sudo apt install -y curl
```

⚠️ 不要运行 `sudo apt upgrade`，因为它可能会破坏 Jetson 特定的依赖项。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/frigate-on-jetson" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>frigate-on-jetson</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

使用预配置的一键安装脚本在您的 Jetson 设备上自动部署 **Frigate**。

```shell
curl -sSL https://raw.githubusercontent.com/Seeed-Studio/frigate-on-jetson/main/install.sh | bash
```

安装完成后，打开浏览器并访问 `http://<your_jetson_ip>:5000` 来访问 Frigate Web UI 并配置您的摄像头。

如果不起作用，请检查您是否缺少在不使用 `sudo` 的情况下运行 Docker 的权限。请参考 [FAQ 部分](#docker-permission-denied) 获取故障排除步骤。然后重新运行上述命令。

<div style={{textAlign:'center'}}>
  <img alt="Frigate Homepage" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/homepage%20demo.png" />
</div>

在 NodeRED 上，我们将订阅 Frigate 的 MQTT 主题以接收检测事件并协调告警工作流程。您可以参考 [Frigate MQTT 文档](https://docs.frigate.video/integrations/mqtt) 了解有关可用主题和负载的更多详细信息。

### 步骤 2：Node-RED 设置

我们使用 NodeRED 作为编排层来处理编程。

#### Node-RED 安装

如果您尚未安装 Node-RED，请按照以下步骤在您的 Jetson 设备上设置它。

使用以下命令在容器中运行 Node-RED：

```bash
sudo docker run -d --restart=always -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

容器启动后，打开浏览器并访问 `http://<your_jetson_ip>:1880` 来访问 Node-RED 编辑器。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-panel.png" alt="nodered-panel"/>
</div>

#### 节点安装

在开始之前，请确保从 Node-RED 编辑器中的 "Manage palette" 选项安装以下 Node-RED 节点：

- `node-red-dashboard` 用于构建简单的前端仪表板。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-install-dashboard.png" alt="nodered-install-dashboard"/>
</div>

## 应用场景

在校园、交通枢纽、工业园区和公共场所等环境中，运营商需要对枪支风险做出即时响应。此解决方案专为以下场景设计：

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>
            </div>
            <div class="info-content">
                <h3>校园与教育</h3>
                <p>为安全团队提供主动警报，并通过记录的事件数据和快照促进快速事件审查。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5M5.625 13.5a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0zm12.75 0a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>公共交通枢纽</h3>
                <p>在车站部署多摄像头监控，并通过 webhook 将警报直接集成到安全运营中心（SOC）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.625-6.25a3.75 3.75 0 00-6.25-.625l-6.402 6.401a3.75 3.75 0 000 5.304m7.496-9.191a3.75 3.75 0 015.304 0l6.401 6.402a3.75 3.75 0 010 5.304l-6.401 6.402a3.75 3.75 0 01-5.304 0l-6.401-6.402a3.75 3.75 0 010-5.304l6.401-6.402z" /></svg>
            </div>
            <div class="info-content">
                <h3>工业园区与物流</h3>
                <p>通过永不疲倦或分心的自动监控系统保护周边、出入口和敏感区域。</p>
            </div>
        </li>
    </ul>
</div>

<br />

以下示例演示将指导您完成部署和自定义解决方案的过程。

### 演示 1 — 枪支检测警报

此演示展示如何构建一个 Node-RED 流程，通过 **MQTT** 监听来自 **Frigate** 的枪支检测事件，然后在仪表板和 webhook 通知中触发*实时警报*。

#### 数据管道

Frigate（检测枪支）→ MQTT（发布）→ Node-RED（过滤/警报）→ 仪表板 + Webhook

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/security/nodered-sample-gun-shot.png" alt="Node-RED gun detection sample"/>
  <br/>
</div>

#### Node-RED 流程设置

您可以使用提供的流程配置文件（[gist flow.json](https://gist.github.com/Love4yzp/2fccdfa6a2d8e64e2740cd566b9b991c)）直接将示例流程导入到您的 Node-RED 编辑器中。

> **注意：** 更新流程中的 IP 地址和 webhook URL，以匹配您的 Frigate 实例和通知端点。

仪表板入口路径配置为 `/frigate`。
访问仪表板地址：`http://<your_jetson_ip>:1880/dashboard/frigate`

例如：`http://192.168.101.100:1880/dashboard/frigate`。

#### 流程概述

- MQTT 监听器 – 订阅指定主题（例如 frigate/reviews）以接收检测事件。
- 事件过滤器 – 仅通过标记为"gun"的事件。
- 警报构建器 – 构建详细的警报消息，包括缩略图、时间戳和计数器。
- 仪表板更新 – 使用最新图像、事件历史和检测计数器更新仪表板。
- Webhook 通知 – 向外部端点发送 HTTP POST 请求，如 Telegram 机器人、Slack 或自定义 API。

#### 结果

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/frigateevents.png" alt="Frigate event visualization"/>
</div>

设置此流程后，**Node-RED** 将自动响应 **Frigate 的枪支检测事件**，更新您的仪表板并发送即时 webhook 通知。

继续查看 [Frigate 配置部分](#frigate-config)，了解如何设置检测参数的说明。

## 默认 Frigate 配置 {#frigate-config}

快速导航到 Frigate 配置页面 `http://<your_jetson_ip>:5000/config` 查看您当前的设置。

Frigate 使用名为 `config.yml` 的 YAML 文件来定义其运行方式。
此文件告诉 Frigate 在哪里找到您的摄像头流、使用哪个 AI 模型，以及如何通过 MQTT 发送检测结果。
通过调整它，您可以控制对象的检测、记录和显示方式。

### 存储位置

默认情况下，Frigate 将视频录制和快照存储在您的 Jetson 设备上的：`/media/frigate`。

例如：

```bash
seeed@desktop:/$ docker exec -it frigate /bin/sh
root@274103ae951b:/opt/frigate# cd /media/frigate/
root@274103ae951b:/media/frigate# ls
clips  exports  handgun.mp4  machinegun.mov  recordings
```

如果您计划长期保存视频，请将此目录挂载到**外部 SSD 或网络驱动器**，以防止 Jetson 的内部存储空间不足。

### 摄像头配置

在 Frigate 中，每个摄像头都需要在 `cameras:` 部分下定义。
每个摄像头块描述视频流的来源以及在被检测模型分析之前如何解码。

```YAML
cameras:
  handgun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/handgun.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
  machinegun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/machinegun.mov
          input_args: -stream_loop -1 -re
          roles:
            - detect
```

**说明：**

- `enabled`：启用或禁用此摄像头。
- `ffmpeg`：定义 Frigate 如何使用 FFmpeg 读取和解码视频流。
  - FFmpeg 是一个媒体框架，可以从文件、RTSP 摄像头或其他源转换和流式传输视频。
- `hwaccel_args`：启用硬件加速（例如，Jetson 上的 H.264 解码）。
- `inputs`：列出一个或多个视频输入。
  - `path`：实际的视频源。
    - 在此示例中，它是一个本地演示文件，如 `/media/frigate/handgun.mp4`。
    - 在实际部署中，您可以将其替换为实时摄像头流，例如：`path: rtsp://user:password@192.168.1.21:554/stream1`
- `input_args`：额外的 FFmpeg 参数。
  - `-stream_loop -1` 无限循环演示视频。
  - `-re` 确保播放匹配实时速度。
- `roles`：定义此输入的使用方式。
  - `detect` 表示流用于对象检测。
  - 其他可能的角色包括用于流式传输的 `record` 或 `rtmp`。

:::tip
每个摄像头可以有多个输入 — 例如，一个用于检测，另一个用于高质量录制。
Frigate 通过 FFmpeg 自动管理所有定义源的解码和帧提取。
:::

### AI 模型和检测设置

定义摄像头后，下一步是告诉 Frigate 使用哪个 AI 模型以及如何处理每个视频帧。
此部分定义检测器类型、模型文件路径以及检测行为，如帧大小、对象跟踪和阈值。

```YAML
detectors:
  tensorrt:
    type: tensorrt
    device: 0

model:
  path: /config/model_cache/tensorrt/yolov4-tiny-288_gun_v3.trt
  width: 288
  height: 288
  labelmap_path: /config/guns.txt
  input_tensor: nchw
  input_pixel_format: rgb
```

**说明：**

- `detectors`：定义 Frigate 用于推理的 AI 后端。
  - `type`：tensorrt 告诉 Frigate 使用 NVIDIA TensorRT 加速（针对 Jetson 优化）。
  - `device`：指定 GPU 索引。对于大多数 Jetson 设备，使用 0。
- `model`：指向 AI 模型文件并描述其输入格式。
  - `path`：您的 .trt（TensorRT 引擎）文件的路径。
  - `width` / height：模型的输入分辨率（必须与模型期望的匹配）。
  - `labelmap_path`：将类索引映射到标签的文件，例如 guns.txt → 包含"gun"。
  - `input_tensor`：定义张量布局；nchw = 批次、通道、高度、宽度。
  - `input_pixel_format`：指定像素格式，通常为 rgb。

:::tip
TensorRT 模型是训练网络的编译版本，针对快速 GPU 推理进行了优化。
如果您训练新模型，可以用自己的模型替换此文件 — 只需确保宽度、高度和标签匹配。
:::

### 对象跟踪配置

Frigate 可以检测和跟踪特定类型的对象。
对于此项目，我们只跟踪枪支，这使系统保持高效和专注。

```YAML
objects:
  track:
    - gun
  filters:
    gun:
      threshold: 0.3
```

**说明：**

- `track`：要检测和跟踪的对象列表。
  - 这里只有 "gun"，但如果您的模型支持，您可以添加更多标签（例如，person、car 等）。
- `filters`：为每种对象类型微调检测置信度。
- `threshold`：最小置信度值（0.0–1.0）。
  - 较低的值（如 0.3）更敏感，但可能包含误报。
  - 较高的值（如 0.5）使检测更严格。

:::tip
如果您发现误检太多，请尝试将阈值提高到 0.5 或更高。
对于经常被遗漏的小物体，您可以稍微降低阈值——但要在准确性和噪声之间取得平衡。
:::

### 录制设置

一旦 Frigate 检测到对象，它可以录制视频并保存快照以供进一步分析或警报显示。
这些设置控制录制内容的存储时间以及捕获图像中显示的信息。

```YAML
record:
  enabled: true
  retain:
    days: 3
    mode: all
```

**说明：**

- `enabled`：开启视频录制。
- `retain`：控制录制文件的保存时间以及存储的录像类型。
  - `days`：自动删除前保留录制内容的天数。
  - `mode`：
    - `all` – 连续录制（适用于测试）。
    - `motion` – 仅在检测到运动时录制。
    - `events` – 仅在出现跟踪对象（例如枪支）时录制。

:::tip
对于实际部署，使用 `mode: events` 或 `mode: motion` 来节省存储空间，同时保留有用的录制内容。
:::

### 快照设置

```YAML
snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95
```

**说明：**

- `enabled`：在检测事件发生时启用快照保存。
- `clean_copy`：保存不带检测框的额外版本。
- `timestamp`：在快照上添加时间和日期叠加。
- `bounding_box`：在检测到的对象周围绘制框。
- `crop`：当为 true 时，仅保存裁剪的检测区域。
- `retain.default`：保留快照的天数。
- `quality`：设置图像质量（1–100）。更高 = 更好的细节但文件更大。

:::tip
快照非常适合警报或仪表板，因为它们比视频片段小得多，并且易于通过 webhook 或 MQTT 发送。
:::

### 鸟瞰视图

Frigate 还支持鸟瞰视图，可以将多个摄像头画面显示在一起以便快速概览。

```YAML
birdseye:
  enabled: true
  mode: objects
```

**说明：**

- `enabled`：开启鸟瞰复合视图。
- `mode`：
  - `objects` – 仅显示当前检测到对象的摄像头。
  - `continuous` – 始终显示所有摄像头画面。

### MQTT 配置

Frigate 通过 MQTT 传达其检测事件，这允许其他服务——如 Node-RED、Home Assistant 或自定义仪表板——在检测到对象时接收实时更新。
它还提供日志选项来帮助监控系统性能和调试检测问题。

```YAML
mqtt:
  enabled: true
  host: 172.17.0.1
  port: 1883
```

**说明：**

- `enabled`：开启 MQTT 通信。
- `host`：您的 MQTT 代理的 IP 地址。
  - 在 Jetson 上使用 Docker 时，`172.17.0.1` 通常指向主机。
  - 如果您在另一台设备上运行 MQTT 服务器，请替换为实际的 MQTT 服务器 IP。
- `port`：默认 MQTT 端口，通常为 1883。

有关更高级的 MQTT 设置，请参考 [Frigate MQTT 文档](https://docs.frigate.video/integrations/mqtt)。

启用 MQTT 后，Frigate 成为实时事件网络的一部分——直接向 Node-RED 或 Home Assistant 发送枪支检测警报，在那里它们可以触发仪表板、通知或自定义工作流。

## 性能与规格

| 硬件平台 | 模型 | FPS（总计） | 稳定流数（≥15 FPS） | 备注 |
| ----------------- | ----- | ----------- | ------------------------- | ------- |
| reComputer R2000（Raspberry Pi + Hailo-8） | YOLOv11-s | 30 | 2 | 紧凑型 AI NVR；高效低功耗边缘设备 |
| reComputer J3011（Jetson Orin Nano 8 GB） | YOLOv4-tiny-288 | 90 | 6 | 入门级 Jetson；预热后 FPS 稳定 |
| reComputer J4012（Jetson Orin NX 16 GB） | YOLOv4-tiny-288 | 120 | 8 | 达到 NVDEC 并发限制；计算余量仍然存在 |

## 资源与后续步骤

- **解决方案套件：** [Frigate + Node-RED Gun Detection on Jetson](https://www.seeed.cc/solutions/campus-safety-management)
- **Frigate 文档：** [https://docs.frigate.video/](https://docs.frigate.video/)
- **GitHub 仓库：** [Seeed-Studio / frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)
- **Node-RED 仪表板插件：** [@flowfuse/node-red-dashboard](https://flows.nodered.org/node/@flowfuse/node-red-dashboard)

<!-- Summary

The **Frigate + Node-RED Gun Detection Solution** delivers real-time firearm detection and intelligent alerting on edge AI hardware — from Raspberry Pi + Hailo systems to Jetson Orin series. It offers a modular, open, and production-ready framework for security integrators, enabling private on-premise analytics, instant visualization, and LLM-driven verification while keeping video data under full control.

| Module | Purpose / Value | Key Capabilities |
| ------ | ---------------- | ---------------- |
| Real-time Video Monitoring | Observe scene context before and after detection | Multi-RTSP/HTTP stream input; split-screen or carousel views; zoom and PTZ control |
| Gun Detection Visualization | Confirm detection accuracy visually | Real-time bounding boxes with confidence overlay; frame pause, magnify, and annotate |
| Event / Alert Queue | Deliver instant alerting and logging | Adjustable confidence and ROI thresholds; popup, sound, light, webhook, email, or SMS actions |
| Event Replay & Retrieval | Support evidence review and playback | Filter by time, camera, or alert type; jump to pre-event and post-event footage |
| Detection Log & Export | Enable third-party analytics and reporting | Timestamp, camera, confidence, snapshot metadata; export in CSV or JSON formats |
| LLM-based Analysis | Reduce false positives and generate summaries | False-positive review for gun/not-gun decisions; semantic summarization and querying (for example, rifle alerts last week); contextual response suggestions for operators | -->

## 常见问题

### 1. 我无法在 Jetson 设备上安装 Docker。我应该怎么办？

如果您在使用默认 Docker 安装脚本时遇到问题，可以使用以下替代脚本：

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

更多信息请访问：https://linuxmirrors.cn

### 2. 如何知道我的 Jetpack 版本？

在您的 Jetson 设备上运行以下命令：

```bash
dpkg -l | grep nvidia-jetpack
```

输出将显示已安装的 Jetpack 版本。

### 3. 如何更新我的 Jetpack 版本？

请按照[您的特定产品 wiki](/cn/NVIDIA_Jetson) 中的说明进行操作。

### 4. 运行 Docker 时出现"Permission Denied" {#docker-permission-denied}

您没有访问 Docker 守护进程的权限。
运行：

```shell
sudo usermod -aG docker $USER
newgrp docker
```

> 注销并重新登录也会应用新的组权限。

然后验证：

```shell
docker ps
```
