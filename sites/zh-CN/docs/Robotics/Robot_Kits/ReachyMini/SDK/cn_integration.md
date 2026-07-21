---
description: Reachy Mini集成和应用指南，涵盖应用构建、JavaScript SDK、HTTP/WebSocket API以及AI实验技巧。
title: 集成与应用
slug: /reachymini_sdk_integration
keywords:
  - integrations
  - apps
  - LLM
  - javascript sdk
  - web apps
  - REST API
  - websocket
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_sdk_integration/
---

# 集成与应用

Reachy Mini专为AI构建者设计。以下是集成LLM和分享您作品的方法。

## 构建应用

我们提供了一个CLI工具来生成、检查和发布标准应用结构（与Hugging Face Spaces兼容）。请参阅完整指南：**[构建和发布应用](/reachymini_sdk_apps)**。

## JavaScript Web应用
想要一个零安装、跨平台、在浏览器中运行的应用？请查看[JavaScript SDK和Web应用](/reachymini_sdk_javascript-sdk)指南 — 构建静态Hugging Face Spaces，通过WebRTC从任何设备（包括手机）控制您的机器人。

## HTTP和WebSocket API
构建仪表板或非Python控制器？守护进程通过REST公开完整控制。

* **文档：** `http://localhost:8000/docs`
* **获取状态：** `GET /api/state/full`
* **WebSocket：** `ws://localhost:8000/api/state/ws/full`

## AI实验技巧

* **对话演示：** 查看我们的结合VAD（语音活动检测）、LLM和TTS的参考实现：[reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo)。
* **自定义视觉/音频管道：** 如果您的AI管道需要直接访问摄像头或麦克风（例如自定义OpenCV检测器、使用sounddevice的Whisper），您可以使用`media_backend="no_media"`停用内置媒体管理器。请参阅[禁用媒体](/reachymini_sdk_media-architecture#disabling-media--direct-hardware-access)了解详情。