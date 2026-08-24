---
title: 使用 reCamera 实现 RTSP 到 WebRTC 的实时视频流
description: 本文介绍如何使用 reCamera 通过 RTSP 协议向 PC 推送视频流，并在 PC 端将 RTSP 流转换为 WebRTC 格式，从而在浏览器中实现低延迟的实时视频播放。
keywords:
  - reCamera
  - RTSP
  - WebRTC
slug: /rtsp_to_webrtc_with_recamera
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif
sidebar_position: 15
last_update:
  date: 06/10/2026
  author: Xuanjun Zhu
createdAt: '2026-06-10'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/cn/rtsp_to_webrtc_with_recamera/
---

# 使用 reCamera 实现 RTSP 到 WebRTC 的实时视频流

## 介绍

当你希望**将 reCamera 的视频流集成到自己的 Web 应用中**，或者通过浏览器以低延迟**远程**查看摄像头画面时，可以参考本示例。
本项目通过 **RTSP 协议**推送 reCamera 的视频流，通过 **mqtt out** 节点将推理结果传输到 PC 端，然后在 PC 端将 RTSP 视频流与推理结果进行融合并转换为 **WebRTC** 格式，使任意浏览器无需插件即可实时播放带推理结果的视频流。它提供了一种**“解放” reCamera 视频流**的方式——一旦视频流可以通过 RTSP 输出，你就可以轻松地：

- **集成到自己的 Web 应用或管理平台中**：将实时视频画面嵌入现有的看板、监控系统或物联网平台。

- **多设备视频聚合**：在同一个网页上同时查看多路 reCamera 画面，搭建多通道视频监控墙。

- **远程访问与跨网络穿透**：借助 WebRTC 的 NAT 穿透能力，即使处于不同网络环境，也能以低延迟查看 reCamera 的实时画面。

- **为 AI 推理结果可视化提供传输通道**：reCamera 在边缘侧完成 AI 推理后，将推理结果随视频一同输出，PC 端可在浏览器中实时展示 AI 分析结果，适用于构建远程巡检、智能安防等应用。

本示例展示了一种方法，可以**将 reCamera 从一台独立的视觉设备转变为可被任意 Web 系统集成的视频源**。我们希望这个项目能启发你探索更多 reCamera 与 Web 技术结合的可能性。
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif" />
</div>
### 系统架构

整个系统由两部分协同完成：**reCamera 端**和 **PC 服务器端**。架构如下：

| 阶段 | 执行位置 | 使用的技术/协议 | 描述 |
|------|----------|-----------------|------|
| 视频采集与编码 | reCamera | 摄像头 + H.264 编码 | 采集视频并进行编码 |
| AI 推理 | reCamera | YOLO11n 模型 | 对视频帧进行 AI 目标检测推理 |
| RTSP 推流 | reCamera | RTSP 协议（端口 554） | 通过 RTSP 协议向网络推送视频流 |
| MQTT 推理结果传输 | reCamera → PC 服务器 | MQTT 协议（端口 1883） | 通过 MQTT 将推理结果（框坐标、标签）传输到 PC |
| 视频接收与解码 | PC 服务器 | OpenCV + FFmpeg | 接收 RTSP 流并解码为原始帧 |
| 推理结果与视频融合 | PC 服务器 | detection_store + OpenCV | 将 AI 检测框和标签叠加到视频帧上 |
| WebRTC 编码与传输 | PC 服务器 | aiortc | 将融合后的视频帧编码为 WebRTC 格式并传输 |
| 实时播放 | PC 浏览器 | WebRTC | 在浏览器中以低延迟播放带推理结果的视频 |

## 硬件准备

要运行本示例，你需要以下硬件：

- **一台 reCamera 设备**（支持所有 reCamera 机型）
- **一台 PC 电脑**（用于运行 WebRTC 中转服务，需与 reCamera 处于同一局域网）

你可以根据部署需求选择**任意版本的 reCamera**：

- reCamera 2002 系列（Wi-Fi）
- reCamera Gimbal
- reCamera HQ PoE（以太网 + PoE）

> **注意：**
> PoE 版本不支持 Wi-Fi，必须通过支持 PoE 的交换机接入同一局域网。

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 示例配置

### 步骤 1：配置 reCamera

首先，按照官方入门指南完成 reCamera 的基础配置：[reCamera Getting Started](https://wiki.seeedstudio.com/cn/recamera_getting_started/)

完成初始设置后，确保设备已上电并正确连接到网络。
然后，通过浏览器访问地址 192.168.42.1 登录 reCamera，进入 **Node-RED** 工作空间。

如果你能够成功访问如下图所示的 Node-RED 流程界面，则说明配置已完成。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### 步骤 2：配置 RTSP 推流

reCamera 内置 RTSP 推流功能，可以通过 Node-RED 流程轻松配置。你只需要在流程中部署两个节点。关于 SenseCraft AI 教程，请参考链接 [Access SenseCraft AI reCamera Dashboard](https://wiki.seeedstudio.com/cn/recamera_getting_started/#access-recamera-preview-dashboard)。


#### 2.1 导入并配置 Camera 节点

从左侧拖拽 **Camera Node** 到工作区，双击进入配置界面，你可以根据需要设置分辨率、帧率等参数。按照下图所示的流程导入并配置 Camera 节点。
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/nodeimport1sum1.png" />
</div>
<p align="center">Camera 参数配置</p>

#### 2.2 导入并配置 Stream 节点

从左侧拖拽 **Stream Node** 到工作区，选择 RTSP 协议并配置流地址和端口。reCamera 默认的 RTSP 流地址为：

```
rtsp://admin:admin@192.168.42.1:554/live
```

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/streamset.png" />
</div>
<p align="center">RTSP 推流参数配置</p>

#### 2.3 导入 Model 节点

从左侧拖拽 **Model Node** 到工作区，点击 Device 并选择 YOLO11n Detection 模型。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/modelimport.png" />
</div>
#### 2.4 导入 MQTT Out 节点

从左侧拖拽 **MQTT Out Node** 到工作区，并按照下图设置 MQTT broker 地址以及与服务器通信的 topic。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/mqttimportsum.png" />
</div>



配置完成后，点击右上角的 **Deploy** 部署流程，reCamera 即会开始通过 RTSP 协议推流。

### 步骤 3：在 PC 上部署 WebRTC 转换服务

WebRTC 中转服务运行在 PC 上，负责接收 RTSP 流和 MQTT 消息，将推理结果与视频流进行融合，并转换为 WebRTC 格式供浏览器实时播放。

#### 3.1 环境准备

请确保你的 PC 已安装以下环境：

- **Python 3.8+**
- **pip** 包管理器

> **注意：** 在 Windows 上安装 `aiortc` 可能需要先安装 Microsoft C++ Build Tools。你可以从 [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) 下载并安装。

#### 3.2 获取代码并安装依赖

从[仓库](https://github.com/hunter5299/Node-Red-project/tree/main/rtsp_to_webrtc)获取 RTSP 到 WebRTC 的 Python 项目代码。将项目代码下载到 PC 后，进入项目目录并安装 Python 依赖：

```bash
cd rtsp_to_webrtc
pip install -r requirements.txt
```

#### 3.3 项目文件说明

项目包含以下核心文件：

| 文件 | 说明 |
|------|------|
| `server.py` | WebRTC 信令服务器，启动内嵌 MQTT Broker，处理浏览器连接请求并建立 WebRTC 会话 |
| `mqtt_broker.py` | 内嵌 MQTT 3.1.1 Broker（纯 asyncio 实现）及订阅客户端，接收从 reCamera 的 Node-RED 推送的 YOLO 推理结果 |
| `detection_store.py` | 推理结果存储模块，缓存最新的检测框和标签数据，用于视频帧叠加渲染 |
| `video_sources.py` | 视频协议抽象层 |
| `index.html` | 前端播放器页面，提供协议选择和 WebRTC 视频播放功能 |
| `requirements.txt` | Python 依赖列表 |

#### 3.4 启动服务

使用默认配置启动服务：

```bash
python server.py
```

服务启动后，你将看到如下日志输出：

```
INFO:webrtc-server:Starting server on http://0.0.0.0:8080
INFO:webrtc-server:Default source: rtsp://admin:admin@192.168.42.1:554/live
INFO:webrtc-server:Supported protocols: rtsp, onvif, gb28181, rtmp, hls
INFO:webrtc-server:MQTT Broker: 0.0.0.0:1883, topic: yolo11n_result
INFO:webrtc-server:Open http://localhost:8080 in your browser
```

你也可以通过命令行参数自定义配置：

```bash
# Specify the default video source address
python server.py --source rtsp://admin:admin@192.168.42.1:554/live

# Specify the service port
python server.py --port 9090

# Specify both address and port
python server.py --source rtsp://admin:admin@192.168.42.1:554/live --port 8080
```

**命令行参数说明：**

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `--host` | `0.0.0.0` | 服务器绑定地址 |
| `--port` | `8080` | 服务器监听端口 |
| `--source` | `rtsp://admin:admin@192.168.42.1:554/live` | 默认视频源地址 |

> **注意：** 请确保 PC 的防火墙允许 8080 端口（或你指定的端口）的入站连接，并且 PC 与 reCamera 处于同一局域网中。

### 步骤 4：运行 Demo

1. 确保 reCamera 已配置为 RTSP 推流并已部署工作流
2. 确保 PC 上的 `server.py` 已启动并在运行
3. 在 PC 浏览器中访问 `http://localhost:8080`
4. 在页面中选择协议（RTSP），并输入 reCamera 的 RTSP 流地址（默认已填入）
5. 点击 **"Start Playing"** 按钮

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.png" />
</div>
<p align="center">在浏览器中实时播放 reCamera 视频</p>

连接成功后，页面将显示以下信息：

- **视频画面**：实时显示 reCamera 的视频
- **连接状态**：页面左上角的绿色连接状态指示
- **流信息**：显示视频流地址、连接状态、ICE 连接状态以及视频分辨率
- **操作日志**：页面底部显示详细的连接日志

## 工作原理

整个系统的高层工作流程如下：

1. **视频采集与 AI 推理**
   reCamera 通过摄像头持续采集视频，使用 YOLO11n 模型进行目标检测推理，并获得边界框和标签结果。

2. **RTSP 推流与 MQTT 结果传输**
   reCamera 通过 RTSP 协议向网络推送编码后的视频流，同时通过 MQTT 协议（主题：`yolo11n_result`）将推理结果发布到 PC 上的嵌入式 MQTT Broker。

3. **视频接收与推理结果融合**
   PC 服务使用 OpenCV + FFmpeg 后台线程持续从 RTSP 流中读取最新视频帧，从 detection_store 中获取最新推理结果，并将边界框和标签叠加到视频帧上。

4. **WebRTC 编码与传输**
   当浏览器发起连接请求时，PC 通过 aiortc 库将融合后的视频帧编码为 WebRTC 格式，建立 WebRTC PeerConnection 进行传输。

5. **浏览器实时播放**
   浏览器通过 WebRTC 接收视频流，并实时播放带有 AI 推理标注的视频，无需安装任何插件。

## 注意事项

- reCamera 的 RTSP 流默认仅支持 **1-2 路并发连接**。如果其他程序（如 VLC）已经占用了 RTSP 连接，WebRTC 服务可能无法接收视频流。请在使用前关闭其他连接到 RTSP 流的程序。
- 如果遇到 `aiortc` 安装失败，请确保已安装 **Microsoft C++ Build Tools**（Windows）或 `gcc`/`make` 工具（Linux）。
- 如果在服务器日志中出现 `non-existing PPS` 错误，这是由于尚未接收到关键帧所致，属于正常现象。关键帧到达后（大约 1 秒）会自动恢复。
- 如需更改服务端口，请使用 `python server.py --port <port_number>` 指定其他端口。
- 如果出现视频延迟较高的情况，请检查网络带宽是否充足，并确保 PC 与 reCamera 之间的网络连接稳定。

## 技术支持与产品讨论

感谢你选择我们的产品！如果你需要针对特定定制化目标的指导，或希望进一步扩展工作流，欢迎随时联系我们。我们将为你提供不同层级的支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
