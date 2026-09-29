---
description: 在您自己的 reCamera Pro 应用中开发相机采集、音频采集与回放、RKNN 推理以及 RTSP 流媒体管线。
title: 相机、音频与推理开发
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - GStreamer
  - RKNN
  - ALSA
  - RTSP
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_media_dev
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_media_dev/
---

# 相机、音频与推理开发

本页介绍原生 reCamera Pro 应用的构建模块：使用 GStreamer 的相机采集、使用 ALSA 的音频采集与回放、RKNN 推理以及 RTSP 视频输出。这里的所有内容都来自实际在设备上运行的项目——大多数示例来自 [视觉唤醒与离线语音识别](/cn/recamera_pro_visual_wake_stt/) 应用。

有关环境搭建和部署，请参阅 [SDK 与最小应用](/cn/recamera_pro_sdk_setup/)。

## 参考管线

一个完整的端侧 AI 应用会串联下面这些阶段。这就是 Visual Wake 项目的实际管线：

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

对你自己的应用来说，关键点是：相机帧通过 GStreamer 流动，每一帧（或其下采样副本）被送入一个或多个 RKNN 模型，应用逻辑消费模型输出。音频采集仅在应用逻辑请求时才启动——应用不会持续录音。

## 相机采集

- 相机设备：`/dev/video13`，由 GStreamer（`v4l2src`）读取
- 默认采集格式：`1920x1080`，最高 30 fps；实际处理帧率取决于推理耗时
- 已有项目使用的固件 GStreamer 元素：`appsrc`、`videoconvert`、`jpegenc`、`rtpjpegpay`

在你的应用中通过 GStreamer 管线采集帧，然后执行模型所需的精确预处理。

:::warning
不要将 NV12 相机字节直接送入 RGB 或 BGR 模型。管线或应用必须执行模型所需的 NV12 到 RGB/BGR 转换和归一化；颜色顺序或归一化不匹配会产生错误的颜色和错误的推理结果。
:::

## 音频采集与回放

### 麦克风输入

固件为应用提供了一个专用的 PCM 音频设备：

- 设备名：`ai_asr` —— 16 kHz、S16_LE、四通道；通常选择通道 0
- 使用 `ai_asr` 可以避免与占用 `hw:0,0` 的厂商进程竞争

直接在设备上录制一段测试音频，以验证音频输入链路：

```bash
arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav
```

### 扬声器输出

板载扬声器通过标准 Linux ALSA 接口驱动。使用以下命令播放 WAV 文件：

```bash
aplay test.wav
```

`aplay` 是一个 ALSA PCM 播放器：它只能播放 PCM/WAV 数据，不能解码 MP3。如有需要，请先转换：

```bash
ffmpeg -i test.mp3 test.wav
```

音量控制和设备列表（`aplay -l`、`amixer`）请参阅 [播放音频与控制音量](/cn/recamera_pro_speaker_usage/)。

{/* TODO(verify): document how the vendor audio service coexists with user applications — which processes hold hw:0,0, how to release audio/camera resources safely, and how to restore vendor services after stopping them */}

## RKNN 推理

- 对于原生 C/C++ 应用，使用 **RKNN Runtime C API**；此工作流不使用 `rknn-toolkit-lite2`
- 工具链与运行时版本：**RKNN-Toolkit2 2.3.2 / RKNN Runtime 2.3.2**，目标 `rv1126b`
- 链接与开发板兼容的 RKNN Runtime，并使用设备上已安装的运行时——你的应用不应替换它
- 模型成功转换并不保证推理正确：请将 RKNN 数值输出与源 ONNX 模型进行对比，并保持预处理逻辑显式清晰

从 ONNX 进行模型转换（包括使用校准图像的 FP16 和 INT8 量化）在 [使用 AI 编码智能体开发](/cn/recamera_pro_development_cpp_skill/) 以及本 Wiki 的模型部署章节中有介绍。

## RTSP 视频输出

应用可以通过 RTSP 发布带标注的视频流，用于远程监控。Visual Wake 项目运行的 RTSP 服务器默认配置如下：

| 项目 | 默认值 |
| --- | --- |
| 端口 | `8554` |
| 挂载路径 | `/visual-wake` |
| 输出分辨率 | `960x540` |
| 声明帧率 | 15 fps（实际帧率取决于推理吞吐量） |

在主机电脑上使用 TCP 传输播放该流：

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

出厂固件还为通过 WebUI 配置的管线提供了自己的 RTSP 流——请参阅“构建你自己的应用”章节中的 RTSP 文档。

{/* TODO(verify): document whether a user application's RTSP server can run at the same time as the stock firmware's RTSP service, and which ports each uses by default */}

## 监控与调试辅助

实际应用会通过多种渠道暴露状态；请选择适合你项目的方式：

- **终端事件** —— 将可执行操作的事件（例如 `VISUAL_WAKE track=1`、`STT_RESULT ...`）打印到标准输出
- **调试日志** —— 在 `--debug` 标志下输出启动信息、逐帧姿态、音频电平、RTSP 以及推理性能日志
- **Web 仪表盘** —— 一个 HTTP/WebSocket 服务（默认端口 `8080`，健康检查端点 `/health`），无云端依赖
- **终端仪表盘** —— 交互式终端视图（至少 80×18 字符）

## 快速故障排查

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| 没有相机帧 | 视频设备错误 | 确认 `/dev/video13` 存在且未被其他进程占用 |
| 颜色错误或检测效果差 | NV12 到 RGB/BGR 或归一化不匹配 | 重新检查模型约定；将预处理逻辑显式写清 |
| 音频采集失败 | `ai_asr` 不可用或格式不匹配 | 在设备上运行上面的 `arecord` 测试命令 |
| RTSP 无法播放 | 网络、端口或 GStreamer 插件问题 | 使用 TCP 播放并确认所需的固件 GStreamer 元素可用 |

对于设备级问题，请参阅 [故障排查](/cn/recamera_pro_faqs/)。

## 技术支持与产品交流

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
