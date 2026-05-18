---
description: Reachy Mini守护进程完整REST API参考，涵盖用于应用、守护进程、状态、运动、电机、运动学、音量和Hugging Face认证的HTTP和WebSocket端点。
title: REST API参考
slug: /reachymini_api_rest-api
keywords:
  - rest api
  - http api
  - websocket
  - endpoints
  - daemon
  - apps
  - state
  - motors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_api_rest-api/
---

# REST API

Reachy Mini守护进程在`http://<daemon-ip>:8000/api`公开HTTP和WebSocket API。

- **Lite** — 守护进程在您的机器上运行：`http://localhost:8000`
- **无线** — 守护进程在机器人上运行：`http://reachy-mini.local:8000`

当守护进程运行时，您可以在以下位置浏览交互式**Swagger UI**

- [http://localhost:8000/docs](http://localhost:8000/docs)（Lite — 守护进程在您的机器上）
- [http://reachy-mini.local:8000/docs](http://reachy-mini.local:8000/docs)（无线 — 守护进程在机器人上）

下面的参考从相同的OpenAPI规范生成，可以在没有运行守护进程的情况下查阅。

## 端点概览

| 类别 | 前缀 | 描述 |
|----------|--------|-------------|
| **应用** | `/api/apps` | 列出、安装、启动和停止应用 |
| **守护进程** | `/api/daemon` | 启动、停止和重启守护进程 |
| **状态** | `/api/state` | 读取头部姿态、身体偏航、天线、DoA |
| **移动** | `/api/move` | Goto、设置目标、播放录制移动 |
| **电机** | `/api/motors` | 获取电机状态、设置控制模式 |
| **运动学** | `/api/kinematics` | IK信息、URDF和STL网格文件 |
| **音量** | `/api/volume` | 扬声器和麦克风音量控制 |
| **HF认证** | `/api/hf-auth` | Hugging Face令牌管理 |

## 完整参考

<iframe
  src="https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json"
  style={{width: '100%', height: '80vh', border: 'none'}}
></iframe>

[在全页打开](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json) · [下载OpenAPI规范（JSON）](https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json)

## 更复杂的应用

请参阅[JavaScript SDK和Web应用](../SDK/javascript-sdk.md)页面，了解使用JavaScript SDK的更复杂应用的示例，该SDK利用WebRTC传输并为视频、音频和机器人控制提供更高级别的抽象。