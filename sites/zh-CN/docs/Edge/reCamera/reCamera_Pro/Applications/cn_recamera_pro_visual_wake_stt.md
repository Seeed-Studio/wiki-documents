---
title: 使用 reCamera Pro 构建视觉唤醒与离线语音识别系统
description: 了解如何在 reCamera Pro 上部署一个由凝视触发、完全本地运行的双语流式语音识别系统，并通过终端、网页和 RTSP 查看状态。
keywords:
  - reCamera Pro
  - RV1126B
  - RKNN
  - 视觉唤醒
  - 语音识别
  - Zipformer
  - 边缘 AI
image: https://raw.githubusercontent.com/yyling0101-a11y/recamera_pro_face_stt/main/images/gpt_images.png
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

本项目为 reCamera Pro（RV1126B）实现了一套自然的、完全在设备端运行的交互流程。摄像头会检测人脸并估计头部姿态。只有当有人持续注视摄像头一段时间后，应用才会打开麦克风并开始流式语音识别。随后会进入一个短暂的冷却期，以避免重复触发。

该方案适用于语音助手、展览互动终端以及隐私优先的边缘语音入口。视觉、姿态评估、语音特征提取和 Zipformer 推理均在本地运行。Web 仪表盘不依赖任何云服务、Node.js 进程、CDN 或外部字体。

源代码和后续版本发布在 [recamera_pro_face_stt GitHub repository](https://github.com/yyling0101-a11y/recamera_pro_face_stt) 中。该仓库会在推送本目录后包含完整项目。

## 功能与处理流程

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

默认状态包括 `IDLE`、`FACE_DETECTED`、`ATTENTION_PENDING`、`LISTENING` 和 `COOLDOWN`。当绝对偏航角不超过 18° 且绝对俯仰角不超过 13° 时，视为注视成立。保持该姿态 700 ms 会触发 `LISTENING`。只有在监听状态下才会开始采集音频，因此应用不会持续录音。

## 硬件需求

- 一台 reCamera Pro（RV1126B，aarch64）
- 一台可以通过 USB 虚拟以太网或局域网访问设备的电脑
- 一套可用的 reCamera Pro SDK
- 固件中的 GStreamer 元素：`appsrc`、`videoconvert`、`jpegenc` 和 `rtpjpegpay`
- 固件提供的 `ai_asr` PCM 音频设备

:::note
默认音频输入为 `ai_asr`：16 kHz、S16_LE、4 通道，选择通道 0。这样可以避免与占用 `hw:0,0` 的厂商进程产生竞争。
:::

## 获取项目

项目发布后，在开发主机上克隆仓库：

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
```

仓库包含视觉模型、Zipformer 模型、Web 仪表盘以及交叉构建脚本。请勿混用任意 RKNN Runtime 版本：本项目使用 **RKNN 2.3.2**，目标平台为 `rv1126b`。

## 构建与部署

### 1. 配置 reCamera Pro SDK

构建脚本默认在 `/home/yylin/recamera_pro/recamera-pro-sdk` 查找 SDK。如果你的 SDK 位于其他位置，请设置该变量：

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

`scripts/build_recamera.sh` 还会校验 `librknnrt.so`。如果你的 SDK 或 runtime 使用了其他路径，请在脚本中将 `qualified_rknnrt` 更新为一个已验证的 RKNN 2.3.2 runtime，同时保留校验和验证步骤。

### 2. 交叉编译

在项目根目录下运行：

```bash
bash scripts/build_recamera.sh
```

脚本会验证 SDK、加载其构建环境，并创建 `build-recamera/deploy/`：

```text
deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

### 3. 将部署包复制到设备

将部署目录中的**内容**复制到 reCamera Pro 上的某个目录中。对于 IP 为 `192.168.42.1` 的设备：

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
请保持 `models/` 和 `web/` 目录在所示的相对路径下。应用会使用这些默认相对路径加载其资源。
:::

## 运行应用

在部署目录中运行应用：

```bash
./visual_wake_app
```

在正常运行期间，可操作事件会显示在终端中：

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

### 启动选项

使用以下命令查看设备上可执行文件支持的所有选项：

```bash
./visual_wake_app --help
```

选项可以组合使用。例如，下面的命令只验证视觉处理流程并禁用网络服务：

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

#### 摄像头与视觉唤醒

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `--detector FILE` | `models/scrfd_500m_640_fp16.rknn` | SCRFD 人脸检测 RKNN 模型路径。 |
| `--landmark FILE` | `models/pfld_98_112_fp16.rknn` | PFLD 98 关键点 RKNN 模型路径。 |
| `--camera DEVICE` | `/dev/video13` | 由 GStreamer 读取的摄像头设备。 |
| `--width N` | `1920` | 请求的摄像头采集宽度。 |
| `--height N` | `1080` | 请求的摄像头采集高度。 |
| `--fps N` | `30` | 请求的摄像头帧率；实际处理帧率取决于推理时间。 |
| `--attention-dropout-ms N` | `250` | 在开始注视后，短暂姿态无效的宽限时间（毫秒）。设为 `0` 可禁用该机制。 |
| `--no-stt` | STT 启用 | 不启动语音识别；仅测试视觉唤醒状态机。 |

#### 语音识别与端点检测

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `--stt-encoder FILE` | `models/stt/encoder-epoch-99-avg-1-rv1126b.rknn` | Zipformer 编码器模型路径。 |
| `--stt-decoder FILE` | `models/stt/decoder-epoch-99-avg-1-rv1126b.rknn` | Zipformer 解码器模型路径。 |
| `--stt-joiner FILE` | `models/stt/joiner-epoch-99-avg-1-rv1126b.rknn` | Zipformer 连接器模型路径。 |
| `--stt-vocab FILE` | `models/stt/vocab.txt` | 词表路径。必须与所选模型集合匹配。 |
| `--audio-device NAME` | `ai_asr` | ALSA/`arecord` 音频设备名称。 |
| `--audio-channels N` | `4` | 输入 PCM 的总通道数。 |
| `--audio-channel N` | `0` | 要使用的通道；设为 `-1` 表示对所有通道取平均。 |
| `--stt-chunk-ms N` | `160` | 传递给 STT 的每个音频块时长（毫秒）。 |
| `--speech-rms-threshold F` | `0.006` | 检测语音起始的 RMS 阈值；在更嘈杂的房间中可适当增大。 |
| `--stt-min-speech-ms N` | `160` | 在一次识别会话中接受的最短语音时长（毫秒）。 |
| `--stt-end-silence-ms N` | `2500` | 语音开始后，用于结束识别的静音时长（毫秒）。 |
| `--stt-start-timeout-ms N` | `4000` | 视觉唤醒后若未开始说话的超时时间（毫秒）。 |
| `--stt-max-ms N` | `30000` | 单次监听/识别会话的最长时长（毫秒）。 |

#### RTSP、网页与终端显示

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `--no-rtsp` | RTSP 启用 | 禁用带人脸框、关键点和姿态标注的 RTSP 流。 |
| `--rtsp-port PORT` | `8554` | RTSP 服务器端口。 |
| `--rtsp-mount PATH` | `/visual-wake` | RTSP 挂载路径；例如 `/demo` 会得到 `rtsp://DEVICE_IP:8554/demo`。 |
| `--rtsp-width N` | `960` | RTSP 输出宽度。 |
| `--rtsp-height N` | `540` | RTSP 输出高度。 |
| `--rtsp-fps N` | `15` | 声明的 RTSP 输出帧率；实际帧率取决于推理吞吐。 |
| `--no-web` | Web 服务启用 | 禁用 HTTP 和 WebSocket 仪表盘。 |
| `--web-port PORT` | `8080` | Web 仪表盘和健康检查端点的端口。 |
| `--web-page PATH` | `web/dashboard.html` | 自定义仪表盘页面路径。 |
| `--dashboard` | 关闭 | 在本地交互式终端中显示仪表盘。不能与 `--debug` 同时使用。 |
| `--debug` | 关闭 | 打印启动、逐帧姿态、音频电平、RTSP、张量运算以及 STT 性能日志。不能与 `--dashboard` 同时使用。 |

## 两种系统监控方式

### 终端仪表盘

在交互式终端中使用 `--dashboard`：

```bash
./visual_wake_app --dashboard
```

终端至少需要 80×18 个字符。左侧面板显示 STT 状态、部分识别文本和最终结果；右侧面板显示人脸数量、是否面向摄像头、姿态角度、RTSP 客户端状态以及视觉延迟。按下 `Ctrl-C` 可恢复普通终端界面。`--dashboard` 不能与 `--debug` 同时使用。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/dashboard.png" /></div>

### Web 仪表盘

默认情况下，应用会在每个网络接口上启动 HTTP/WebSocket 服务。请在电脑或手机上打开以下地址：

```text
http://DEVICE_IP:8080/
```

对于 USB 虚拟网络连接，例如：

```text
http://192.168.42.1:8080/
```

页面会自动连接到 `ws://DEVICE_IP:8080/ws`，并在中断后重新连接。它会显示部分和最终转写文本、视觉状态、人脸数量、偏航/俯仰/翻滚角、RTSP 状态以及延迟曲线。健康检查端点为 `http://DEVICE_IP:8080/health`。使用 `--web-port 8081` 可更换端口，或使用 `--web-page PATH` 指定自定义页面。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/web.png" /></div>

## 查看带标注的视频流

应用默认会启动一个 RTSP 服务器：

```text
rtsp://DEVICE_IP:8554/visual-wake
```

在主机电脑上使用：

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

叠加层会显示人脸框、全部 98 个关键点、原始偏航/俯仰角、`facing=YES/NO` 以及当前状态。绿色表示姿态在进入阈值范围内，橙色表示姿态有效但在阈值之外，红色表示姿态无效。

## 调优

摄像头摆放位置、镜头特性和房间噪声都会影响体验。请按以下顺序调优：

1. 使用 `--debug` 在面向摄像头时观察偏航/俯仰角，然后调整进入阈值。
2. 调整 `--attention-dropout-ms` 以适应短暂遮挡；使用 `0` 可禁用宽限期。
3. 在目标环境中观察音频 RMS，并调整 `--speech-rms-threshold`。
4. 使用 `--stt-end-silence-ms`、`--stt-start-timeout-ms` 和 `--stt-max-ms` 在响应速度与较长指令之间取得平衡。

控制器使用 EMA 平滑和进入/离开滞后。单个无效姿态不会触发监听，也不会立即清除正在进行的注意计时器，而人脸跟踪丢失会立即重置状态。

## 故障排除

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| 构建无法找到 OpenCV 或 RKNN | SDK 环境缺失或运行时不兼容 | 检查 `RECAMERA_PRO_SDK`，加载 SDK 的 `env.sh`，并使用 RKNN 2.3.2。 |
| 找不到模型文件 | 部署目录结构未保持 | 确认执行目录中存在 `models/` 和 `web/dashboard.html`。 |
| 视觉唤醒从未触发 | 摄像头错误、阈值过严或人脸过小 | 使用 `--debug` 和 RTSP 叠加层检查 `/dev/video13`、关键点和偏航/俯仰角。 |
| STT 报告音频错误 | `ai_asr` 不可用或其格式不同 | 在设备上测试 `arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav`。 |
| 网页不可用 | 端口不可达或 Web 服务被禁用 | 不要使用 `--no-web`；测试 `http://DEVICE_IP:8080/health`。 |
| 无法播放 RTSP | 网络、端口或 GStreamer 插件问题 | 使用 TCP 播放并验证固件中所需的 GStreamer 元素。 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供不同层级的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
