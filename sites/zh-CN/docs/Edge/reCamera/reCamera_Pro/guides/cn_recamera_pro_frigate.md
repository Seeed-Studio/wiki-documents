---
description: 将 reCamera Pro 连接到 Frigate
title: 将 reCamera Pro 连接到 Frigate
keywords:
  - Edge AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_pro_frigate
sidebar_position: 1
last_update:
  date: 10/22/2026
  author: yylin
createdAt: 2026-10-22
updatedAt: 2026-10-22
url: https://wiki.seeedstudio.com/cn/recamera_pro_frigate/
---

# 将 reCamera Pro 集成到 Frigate 中

Frigate 是一个开源的 NVR 和视频分析平台，可以拉取标准 RTSP 视频流进行目标检测、录像和告警。reCamera Pro 可以直接从其 Web UI 发布 RTSP 流，因此与 Frigate 的集成只需两步：在 reCamera Pro 上启用 RTSP 流，然后在 Frigate 中将该流添加为摄像头。

:::tip
本指南适用于 **reCamera Pro**。reCamera 2002 系列使用不同的连接方式；请参阅 reCamera 2002 连接文档。
:::

整个集成过程包括两步：

1. 在 reCamera Pro 的 Web UI 中启用 RTSP 流；
2. 在 Frigate 的 Web UI 中将该 RTSP 流添加为摄像头。

## 前提条件

- 一台 reCamera Pro 设备，已上电并连接到你的局域网，且已知其 IP 地址（本指南示例使用 `192.168.3.207`）。
- 设备的 Web UI 登录信息（默认用户名为 `admin`；密码为设备上设置的密码，本指南中为 `recamera.1`）。
- 一台在同一局域网内已安装 Frigate 的主机（Docker 部署也可以），并且可以访问其 Web UI。
- 一台安装了 `ffprobe` / `ffplay` 或 VLC 的电脑，用于验证视频流（可选）。

## 在 reCamera Pro 上启用 RTSP 流

1. 在浏览器中打开 reCamera Pro 的 Web UI，例如 `https://192.168.42.1/`，并使用设备的用户名和密码登录。
2. 从左侧导航中打开 **Live View**。
3. 在右侧的设置面板中，选择 **Stream Settings** 选项卡。
4. 打开 **Streaming Settings** 开关。此时面板会显示流协议（**RTSP**）、**Stream URL** 和 **Authentication** 凭据。保持默认设置或根据需要调整，然后点击 **Apply Settings**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/pro_stream_settings.png" alt="reCamera Pro Development Skill workflow" /></div>

5. 复制面板中显示的 **Stream URL**；这是 Frigate 将要拉取的地址。在默认设置下，它为：

```
rtsp://admin:admin@<device-ip>:554/main
```

:::note
Stream Settings 面板中的 RTSP 用户名/密码与 Web UI 登录是相互独立的。本指南中 Web UI 使用 `admin` / `recamera.1`，而 RTSP 流使用 `admin` / `admin`。如果你在这里更改了 RTSP 凭据，请在 Frigate 中使用新的值。
:::

reCamera Pro 暴露了两个视频流：

| 流 | URL | 默认格式 |
| --- | --- | --- |
| 主码流 | `rtsp://<user>:<password>@<device-ip>:554/main` | 3840x2160 (4K) @ 30fps，H.264，G.711A 音频 |
| 子码流 | `rtsp://<user>:<password>@<device-ip>:554/sub` | 640x480，H.265 |

对于 Frigate，主码流是正确的选择：同时用于检测和录像。在配置 Frigate 之前，先在电脑上验证该流：

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"

# Play it directly
ffplay  -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"
```

你应该能看到一个 `h264`、`3840x2160`、30fps 的视频流以及一条 `pcm_alaw` 音频轨道。

## 在 Frigate UI 中添加摄像头

1. 打开 Frigate 的 Web UI 并登录。如果尚未配置任何摄像头，仪表盘会显示 “No Cameras Configured”；点击 **Add Camera** 打开向导。你也可以通过 **Settings → Global configuration → Camera management** 进入，然后点击 **Add New Camera**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_no_camera.png" alt="reCamera Pro Development Skill workflow" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_management.png" alt="reCamera Pro Development Skill workflow" /></div>

2. 在 “Add Camera” 向导中输入摄像头名称和设备 IP。对于 **Stream Detection Method** 选择 **Manual selection**，将 **Camera Brand** 设置为 **Other**，然后将 reCamera Pro 主码流的 URL（包含 RTSP 凭据）粘贴到 **Custom Stream URL** 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_add_camera_rtsp.png" alt="reCamera Pro Development Skill workflow" /></div>

3. 点击 **Continue**。Frigate 会连接到该地址并测试视频流。如果成功，它会显示一帧画面以及分辨率、帧率、编码格式和音频信息（3840x2160，30 FPS，h264，pcm_alaw）；确认无误后再次点击 **Continue**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_test_ok.png" alt="reCamera Pro Development Skill workflow" /></div>

4. 在流配置页面中，为该流启用你需要的角色：打开 **detect**（目标检测）和 **record**（录像）。保持 **audio** 关闭（见下方说明）。然后点击 **Next**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_roles.png" alt="reCamera Pro Development Skill workflow" /></div>

5. 最后一步会在保存前验证视频流。它会给出估算带宽（4K 主码流大约每小时 3.4 GB）以及两个可以放心忽略的提示：
   - *The AAC audio codec is required to support audio in recordings*：Pro 主码流携带的是 G.711A（`pcm_alaw`）音频，Frigate 无法在录像中存储该格式。由于 **audio** 角色已关闭，录像中将不会包含声音；除此之外不会有任何影响。
   - *A resolution of 3840x2160 may cause increased resource usage*：对于 4K 视频流来说这是预期现象。检测会在缩放后的 1280x720 画面上运行（见下文），并且硬件加速解码可以让主机负载保持在合理水平。

   当状态显示为 **Connected** 时，点击 **Save New Camera**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_validate.png" alt="reCamera Pro Development Skill workflow" /></div>

6. 保存后，该摄像头会出现在摄像头管理列表中，其状态为 **On**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_saved.png" alt="reCamera Pro Development Skill workflow" /></div>

7. 返回仪表盘即可看到 reCamera Pro 的实时画面；Frigate 现在会在该视频流上执行目标检测和录像。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_live_view.png" alt="reCamera Pro Development Skill workflow" /></div>

### 可选：调整检测参数

在 **Settings → Camera configuration → `<camera name>` → Object detection** 中，你可以调整检测分辨率和帧率。Pro 输出的是 4K，但检测并不需要完整分辨率：保持默认的 1280x720、5 fps 即可在大多数场景中获得稳定的检测效果，同时让主机 CPU / GPU 占用保持较低。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_detect_settings.png" alt="reCamera Pro Development Skill workflow" /></div>

:::tip
如果你的主机在解码 4K 视频时负载较高，可以在 reCamera Pro 的 Web UI 中降低主码流分辨率（Live View → Basic Settings），或者将子码流（`rtsp://<user>:<password>@<device-ip>:554/sub`）作为第二路输入专门用于 **detect** 角色，同时保留主码流用于 **record**。
:::

上述 UI 操作等价于在 `config.yaml` 中写入以下内容，熟悉配置文件的用户可以直接编辑：

```yaml
go2rtc:
  streams:
    recamera_pro:
      - rtsp://admin:admin@192.168.3.207:554/main

cameras:
  recamera_pro:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://admin:admin@192.168.3.207:554/main
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
```

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
