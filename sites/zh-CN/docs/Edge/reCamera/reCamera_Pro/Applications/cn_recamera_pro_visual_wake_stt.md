---
title: 使用 reCamera Pro 构建视觉唤醒与离线语音识别系统
description: 本文介绍如何在 reCamera Pro 上部署一个由视线触发、运行于本地的中英双语流式语音识别系统，并使用终端、网页和 RTSP 查看运行状态。
keywords:
  - reCamera Pro
  - RV1126B
  - RKNN
  - 视觉唤醒
  - 语音识别
  - Zipformer
  - 边缘 AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/gpt_images.png
slug: /recamera_pro_visual_wake_stt
last_update:
  date: 2026-08-24
  author: yylin
createdAt: '2026-08-24'
updatedAt: '2026-08-24'
sidebar_position: 1
url: https://wiki.seeedstudio.com/cn/recamera_pro_visual_wake_stt/
---

# 使用 reCamera Pro 构建视觉唤醒与离线语音识别系统

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/gpt_images.png" /></div>

## 介绍

本项目为 reCamera Pro（RV1126B）实现了一个完全在设备端运行的自然交互流程：摄像头检测人脸、估计头部姿态；当用户持续正视摄像头时，系统才打开麦克风进行流式语音识别。识别完成后进入短暂冷却，以避免重复触发。

它适合用作语音助手、展厅交互终端或隐私优先的边缘语音入口。视觉检测、姿态判断、语音特征提取和 Zipformer 推理均在本地进行，网页仪表盘不依赖云服务、Node.js、CDN 或外部字体。

完整源码和后续发布请见 [GitHub 仓库](https://github.com/yyling0101-a11y/recamera_pro_face_stt)。仓库当前将在上传本项目后提供全部代码、模型和图片资源。

## 功能与工作流程

```text
GStreamer 摄像头
  -> SCRFD 人脸检测（RKNN）
  -> IoU 跟踪 + PFLD 98 点关键点（RKNN）
  -> OpenCV solvePnP 头部姿态估计
  -> EMA 平滑、迟滞和持续注视计时
  -> 视觉唤醒事件
  -> Zipformer 中英双语流式 STT（RKNN）
```

默认状态依次为 `IDLE`、`FACE_DETECTED`、`ATTENTION_PENDING`、`LISTENING` 和 `COOLDOWN`。当偏航角绝对值不超过 18°、俯仰角绝对值不超过 13°，且持续正视 700 ms 后，系统触发 `LISTENING`。进入监听后才会打开音频采集，因此不会持续录音。

## 硬件准备

- 一台 reCamera Pro（RV1126B，aarch64）
- 可通过 USB 虚拟网卡或局域网访问设备的电脑
- 已安装并可用的 reCamera Pro SDK
- 固件提供的 GStreamer 组件：`appsrc`、`videoconvert`、`jpegenc`、`rtpjpegpay`
- 固件提供的 `ai_asr` PCM 音频设备

:::note
默认音频输入为 `ai_asr`，格式为 16 kHz、S16_LE、4 声道，并选择第 0 声道。这避免与厂商进程占用的 `hw:0,0` 发生冲突。
:::

## 获取项目

项目上传到 GitHub 后，在开发主机执行：

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
```

目录中包含视觉模型、Zipformer 模型、网页仪表盘和交叉编译脚本。不要混用不同版本的 RKNN Runtime；本项目的目标运行时和模型转换工具版本均为 **RKNN 2.3.2**，目标平台为 `rv1126b`。

## 编译与部署

### 1. 配置 reCamera Pro SDK

默认脚本从 `/home/yylin/recamera_pro/recamera-pro-sdk` 查找 SDK。若 SDK 位于其他位置，请先设置环境变量：

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

`scripts/build_recamera.sh` 还会校验所使用的 `librknnrt.so`。如你的 SDK 或运行时文件位置不同，请在脚本中将 `qualified_rknnrt` 改为经过验证的 RKNN 2.3.2 运行时路径，并保留校验步骤。

### 2. 交叉编译

在项目根目录执行：

```bash
bash scripts/build_recamera.sh
```

脚本会验证 SDK、加载 SDK 编译环境并生成 `build-recamera/deploy/`。该目录包含以下可直接部署的内容：

```text
deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder、decoder、joiner 和词表
└── web/dashboard.html
```

### 3. 上传到设备

将部署目录的**内容**复制到 reCamera Pro 的同一目录下。例如设备 IP 为 `192.168.42.1`：

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
首次运行前，请确认 `models/` 与 `web/` 保持上述相对路径；程序默认使用这些相对路径加载模型和网页。
:::

## 运行项目

在设备的部署目录中运行：

```bash
./visual_wake_app
```

正常运行时，终端会在有效事件发生时输出：

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

### 启动参数

使用下列命令查看设备上该版本程序支持的完整参数：

```bash
./visual_wake_app --help
```

参数可组合使用，例如仅验证视觉链路并关闭网络服务：

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

#### 摄像头与视觉唤醒

| 参数 | 默认值 | 说明 |
| --- | --- | --- |
| `--detector FILE` | `models/scrfd_500m_640_fp16.rknn` | SCRFD 人脸检测 RKNN 模型路径。 |
| `--landmark FILE` | `models/pfld_98_112_fp16.rknn` | PFLD 98 点关键点 RKNN 模型路径。 |
| `--camera DEVICE` | `/dev/video13` | GStreamer 读取的摄像头设备。 |
| `--width N` | `1920` | 摄像头采集宽度。 |
| `--height N` | `1080` | 摄像头采集高度。 |
| `--fps N` | `30` | 摄像头请求帧率。实际处理帧率取决于推理耗时。 |
| `--attention-dropout-ms N` | `250` | 已进入正视状态后可容忍的短暂无效姿态时间（毫秒）。设为 `0` 禁用容忍。 |
| `--no-stt` | 启用 STT | 不启动语音识别，仅测试视觉唤醒状态机。 |

#### 语音识别与端点检测

| 参数 | 默认值 | 说明 |
| --- | --- | --- |
| `--stt-encoder FILE` | `models/stt/encoder-epoch-99-avg-1-rv1126b.rknn` | Zipformer encoder 模型路径。 |
| `--stt-decoder FILE` | `models/stt/decoder-epoch-99-avg-1-rv1126b.rknn` | Zipformer decoder 模型路径。 |
| `--stt-joiner FILE` | `models/stt/joiner-epoch-99-avg-1-rv1126b.rknn` | Zipformer joiner 模型路径。 |
| `--stt-vocab FILE` | `models/stt/vocab.txt` | 词表路径。模型与词表必须来自同一套模型。 |
| `--audio-device NAME` | `ai_asr` | ALSA/`arecord` 音频设备名。 |
| `--audio-channels N` | `4` | 输入 PCM 的总声道数。 |
| `--audio-channel N` | `0` | 使用的声道编号；设为 `-1` 时对所有声道取平均。 |
| `--stt-chunk-ms N` | `160` | 每次送入 STT 的音频块时长（毫秒）。 |
| `--speech-rms-threshold F` | `0.006` | 判定语音开始的 RMS 阈值；环境嘈杂时可适当提高。 |
| `--stt-min-speech-ms N` | `160` | 识别会话需要接收到的最短语音时长（毫秒）。 |
| `--stt-end-silence-ms N` | `2500` | 检测到语音后，以此持续静音时长结束识别（毫秒）。 |
| `--stt-start-timeout-ms N` | `4000` | 唤醒后迟迟未检测到语音时的超时（毫秒）。 |
| `--stt-max-ms N` | `30000` | 单次监听/识别的最长时长（毫秒）。 |

#### RTSP、网页和终端显示

| 参数 | 默认值 | 说明 |
| --- | --- | --- |
| `--no-rtsp` | 启用 RTSP | 关闭带人脸框、关键点和姿态信息的 RTSP 叠加流。 |
| `--rtsp-port PORT` | `8554` | RTSP 服务端口。 |
| `--rtsp-mount PATH` | `/visual-wake` | RTSP 挂载路径；例如 `/demo` 对应 `rtsp://DEVICE_IP:8554/demo`。 |
| `--rtsp-width N` | `960` | RTSP 输出画面宽度。 |
| `--rtsp-height N` | `540` | RTSP 输出画面高度。 |
| `--rtsp-fps N` | `15` | RTSP 输出声明帧率。实际帧率受推理吞吐量影响。 |
| `--no-web` | 启用网页服务 | 关闭 HTTP 和 WebSocket 网页仪表盘。 |
| `--web-port PORT` | `8080` | 网页仪表盘和健康检查服务端口。 |
| `--web-page PATH` | `web/dashboard.html` | 自定义网页文件路径。 |
| `--dashboard` | 关闭 | 在本地交互式终端显示仪表盘；不能与 `--debug` 同时使用。 |
| `--debug` | 关闭 | 输出启动信息、逐帧姿态、音频电平、RTSP、张量契约和 STT 性能日志；不能与 `--dashboard` 同时使用。 |

## 两种运行状态展示方式

### 终端仪表盘

在交互式终端中使用 `--dashboard`：

```bash
./visual_wake_app --dashboard
```

终端至少需要 80×18 字符。左侧显示 STT 状态、实时文本和最终结果；右侧显示人脸数量、是否正视摄像头、姿态角、RTSP 客户端状态与视觉延迟。按 `Ctrl-C` 可恢复普通终端。`--dashboard` 不能与 `--debug` 同时使用。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/dashboard.png" /></div>

### 网页仪表盘

程序默认在所有网络接口启动 HTTP/WebSocket 服务。使用电脑或手机浏览器打开：

```text
http://DEVICE_IP:8080/
```

例如通过 USB 虚拟网络连接时：

```text
http://192.168.42.1:8080/
```

网页会自动连接 `ws://DEVICE_IP:8080/ws` 并在断线后自动重连，实时显示中间/最终识别文本、视觉状态、人脸数量、yaw/pitch/roll、RTSP 状态及延迟曲线。健康检查地址为 `http://DEVICE_IP:8080/health`。可用 `--web-port 8081` 改端口，或用 `--web-page PATH` 指定自定义网页。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/web.png" /></div>
## 查看带标注的视频流

程序默认启动 RTSP 服务：

```text
rtsp://DEVICE_IP:8554/visual-wake
```

在主机上可使用：

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

视频叠加层包含人脸框、98 个关键点、原始 yaw/pitch、`facing=YES/NO` 和当前状态。绿色表示姿态满足进入阈值，橙色表示姿态有效但未满足阈值，红色表示姿态无效。

## 参数调优

不同安装高度、镜头和房间噪声会影响体验。建议按以下顺序调优：

1. 使用 `--debug` 观察正视时的 yaw/pitch 值，再调整进入阈值。
2. 根据短暂遮挡情况调整 `--attention-dropout-ms`；设为 `0` 可禁用容忍。
3. 在目标环境中观察音频 RMS，调整 `--speech-rms-threshold`。
4. 使用 `--stt-end-silence-ms`、`--stt-start-timeout-ms` 和 `--stt-max-ms` 平衡响应速度与长指令支持。

系统对姿态使用 EMA 平滑和进入/退出迟滞。单个无效帧不会触发监听，也不会立即清除已开始的注视计时；但人脸丢失会立即重置状态。

## 故障排查

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| 构建时报缺少 OpenCV 或 RKNN | SDK 环境未加载或运行时不匹配 | 确认 `RECAMERA_PRO_SDK` 正确，并使用 SDK 的 `env.sh` 和 RKNN 2.3.2 运行时。 |
| 程序找不到模型 | 部署时未保留目录结构 | 确认执行目录中有 `models/` 和 `web/dashboard.html`。 |
| 不触发唤醒 | 摄像头设备错误、姿态阈值过严或脸太小 | 使用 `--debug` 和 RTSP 叠加层检查 `/dev/video13`、关键点和 yaw/pitch。 |
| STT 报音频错误 | `ai_asr` 不可用或音频格式不匹配 | 在设备上检查 `arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav`。 |
| 无法打开网页 | 端口不可达或服务被关闭 | 确认未使用 `--no-web`，并检查 `http://DEVICE_IP:8080/health`。 |
| RTSP 无法播放 | 网络、端口或 GStreamer 插件缺失 | 使用 TCP 传输方式播放，并确认固件含所需的 GStreamer 组件。 |


## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
