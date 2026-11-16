---
description: 将 reCamera 2002 系列连接到 Frigate
title: 连接到 Frigate
keywords:
  - 边缘 AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_firgate
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/18/2026
  author: yylin
createdAt: 2026-10-18
updatedAt: 2026-10-18
url: https://wiki.seeedstudio.com/cn/recamera_firgate/
---

# 将 reCamera 集成到 Frigate 中

Frigate 是一个开源的 NVR 和视频分析平台，可以拉取标准 RTSP 视频流进行目标检测、录像和告警。reCamera 2002 系列可以发布稳定的 RTSP 流，因此与 Frigate 的集成只需两步：先让 reCamera 发布 RTSP 流，然后在 Frigate 中将该流添加为摄像头。

:::tip
本指南仅适用于 **reCamera 2002 系列**。reCamera Pro 使用不同的连接方式；请参阅 Pro 版本的连接文档。
:::

整个集成过程包含两步：

1. 在 reCamera 上启用 RTSP 推流（任选以下三种方法之一）；
2. 在 Frigate Web UI 中将该 RTSP 流添加为摄像头。

## 前提条件

- 一台 reCamera 2002 系列设备，已上电并通过以太网 / Wi-Fi 连接到你的局域网，且已知其 IP 地址（本指南示例使用 `192.168.4.82`）。
- 一台安装了 Frigate 的主机，位于同一局域网中（Docker 部署也可以），并且可以访问其 Web UI。
- 一台安装了 `ffprobe` / `ffplay` 或 VLC 的电脑，用于验证视频流（可选）。

## 配置 reCamera 的视频流输出

reCamera 2002 系列支持以下三种方式发布 RTSP 流。**任选其一** 即可。生成的 RTSP URL 在下面的 Frigate 配置中用法完全相同；只需替换为你自己的地址。

| 方法 | 流地址（默认参数） | 特点 |
| --- | --- | --- |
| 方法 1：Node-RED | `rtsp://admin:admin@<device-ip>:554/live` | 图形化配置，无需编译，固件内置 |
| 方法 2：C++ 发布器 | `rtsp://<device-ip>:8554/live0` | 1080p@30fps，无认证，一条命令安装 |
| 方法 3：烧录 ONVIF 应用 | `rtsp://<username>:<password>@<device-ip>:8554/onvif` | 可被支持 ONVIF 的 NVR / VMS 自动发现 |

:::note
这三种方法都会独占摄像头管线，因此同一时间只能运行一种。在切换到另一种方法前，请先停止当前正在运行的方法。
:::

### 方法 1：使用 Node-RED 启用 RTSP 流

reCamera 固件内置了 Node-RED 和 SSCMA 节点（`node-red-contrib-sscma`）。其中的 **stream 节点** 会将摄像头画面发布为 RTSP。完整的 Node-RED 开发教程（节点参考、导入 flow、部署等）请参阅：

[Node-RED 开发教程](https://wiki.seeedstudio.com/cn/recamera_develop_with_node-red/)

快速步骤：

1. 在浏览器中打开 Node-RED 编辑器：`http://<device-ip>:1880`。
2. 从左侧面板中拖拽一个 **camera** 节点和一个 **stream** 节点（都在 `Vision AI` 分类下），并将 camera 的输出连到 stream 的输入。
3. 双击每个节点，在 `Client` 字段中点击添加按钮，创建一个 **sscma** 配置节点（默认的 `host=localhost`、`mqttport=1883`、`apiport=80` 即可）。保存后，节点上的红色三角形会消失。
4. 在 stream 节点中确认协议为 `RTSP`，并根据需要调整端口、会话名和凭据（默认端口为 `554`，会话名为 `live`，用户名 `admin`，密码 `admin`）。
5. 点击右上角的 **Deploy**。

你也可以将下面的最小 flow JSON 粘贴到 Node-RED 的 `Import` 对话框中，一步创建好连线：

```json
[
    {"id":"tab-recamera-rtsp","type":"tab","label":"reCamera RTSP","disabled":false,"info":""},
    {"id":"cfg-sscma","type":"sscma","host":"localhost","mqttport":"1883","apiport":"80","clientid":"recamera","username":"","password":""},
    {"id":"node-camera","type":"camera","z":"tab-recamera-rtsp","name":"camera","client":"cfg-sscma","audio":false,"volume":80,"option":0,"fps":15,"mirror":false,"flip":false,"x":220,"y":200,"wires":[["node-stream"]]},
    {"id":"node-stream","type":"stream","z":"tab-recamera-rtsp","name":"stream","protocol":0,"port":554,"session":"live","username":"admin","password":"admin","onvif":false,"client":"cfg-sscma","x":460,"y":200,"wires":[]}
]
```

部署完成后，在电脑上验证视频流（输出为 1080p；推荐的 Node-RED 推流上限为 1080p@15fps）：

```bash
ffplay rtsp://admin:admin@192.168.4.82:554/live
```

在 Frigate 中使用的 URL 为：`rtsp://admin:admin@<device-ip>:554/live`。

### 方法 2：部署 C++ RTSP 发布器

社区为 reCamera 2002（SG2002 / CV181X，riscv64）提供了一个现成的发布器，用于解决原始 `video_demo` 10 fps 的限制，并输出 **1920x1080 H.264 30fps** 的 RTSP 流。它无需编译，只需一条命令即可安装。项目仓库：

[C++ RTSP 发布器仓库](https://github.com/yyling0101-a11y/recamera-rtsp30.git)

由于 reCamera 无法直接访问 GitHub，请在一台既能访问 GitHub 又能通过网络访问设备的电脑上运行安装脚本。脚本会提示输入设备 IP、SSH 用户名和密码，然后将二进制文件上传到设备，停止占用摄像头的服务（Node-RED / sscma），配置开机自启并启动视频流：

```bash
# Linux
curl -fLO https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-linux.sh
chmod +x install-linux.sh
./install-linux.sh
```

```bash
# Windows PowerShell
Invoke-WebRequest https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-windows.ps1 -OutFile install-windows.ps1
powershell -ExecutionPolicy Bypass -File .\install-windows.ps1
```

安装完成后，视频流可通过 `rtsp://<device-ip>:8554/live0` 访问（无认证）。在电脑上验证：

```bash
ffplay rtsp://192.168.4.82:8554/live0
```

在设备上，你可以通过以下命令管理该服务并检查其运行状态：

```bash
/etc/init.d/S99rtsp30 start|stop|restart   # service control (stop uses SIGTERM; never kill -9)
sh /root/rtsp30-status.sh                  # process / pipeline / port / measured fps
tail -f /tmp/rtsp30.log                    # runtime log
```

:::caution
该发布器与 Node-RED 和 ONVIF 方法互斥：安装后会禁用 Node-RED 和 sscma 服务，并独占 8554 端口和摄像头管线。要卸载，请运行 `sh /root/uninstall-rtsp30.sh`；重启后会恢复出厂默认行为。
:::

### 方法 3：在设备上烧录 ONVIF 应用

使用 Seeed 的 SenseCraft Solution 软件，你可以在 reCamera 上烧录 ONVIF 应用，使设备既提供 RTSP 流，又能被支持 ONVIF 的 NVR / VMS 平台自动发现。烧录和配置步骤请参阅：

[ONVIF 烧录与配置指南](https://wiki.seeedstudio.com/cn/recamera_onvif/)

烧录完成后，视频流地址为 `rtsp://<username>:<password>@<device-ip>:8554/onvif`，其中用户名和密码为你在烧录过程中设置的凭据。

### 验证视频流

无论你选择哪种方法，都应在配置 Frigate 之前先在电脑上确认视频流工作正常。不同的设置方法对应不同的视频流 URL。

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp rtsp://192.168.4.82:8554/live0

# Play it directly
ffplay  -rtsp_transport tcp rtsp://192.168.4.82:8554/live0
```

你应该能看到一个 `h264`、`1920x1080` 的视频流（方法 1 为 15fps，方法 2 和方法 3 为 30fps）。

## 在 Frigate UI 中添加摄像头

下面的演示使用方法 2 的地址 `rtsp://192.168.4.82:8554/live0` 作为示例。如果你使用了方法 1 或方法 3，请替换为上表中对应的 URL（需要时在 URL 中包含用户名和密码）。

1. 打开 Frigate Web UI 并登录。如果尚未配置任何摄像头，仪表盘会显示 “No Cameras Configured”；点击 **Add Camera** 打开向导。你也可以通过 **Settings → Global configuration → Camera management** 进入，然后点击 **Add New Camera**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_no_camera.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_management.png" /></div>

2. 在 “Add Camera” 向导中输入摄像头名称和设备 IP。对于 **Stream Detection Method** 选择 **Manual selection**，将 **Camera Brand** 设置为 **Other**，然后将 reCamera 的 RTSP URL 粘贴到 **Custom Stream URL** 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_add_camera_rtsp.png" /></div>

:::tip
如果你使用了方法 3（ONVIF），也可以保留默认的 **Probe camera**，填写用户名 / 密码和 ONVIF 端口，让 Frigate 通过 ONVIF 自动发现视频流 URL。手动输入 RTSP URL 适用于三种方法。
:::

3. 点击 **Continue**。Frigate 会连接到该地址并测试视频流。成功后会显示一帧画面以及分辨率、帧率和编码格式；确认无误后再次点击 **Continue**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_test_ok.png" /></div>

4. 在视频流配置页面中，为该视频流启用你需要的角色：打开 **detect**（目标检测）和 **record**（录像）。然后点击 **Next**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_roles.png" /></div>

5. 最后一步会在保存前再次验证视频流，并给出预估带宽以及编码 / 音频说明。当状态显示为 **Connected** 时，点击 **Save New Camera**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_validate.png" /></div>

6. 保存后，该摄像头会出现在摄像头管理列表中，其状态为 **On**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_saved.png" /></div>


7. 返回仪表盘查看实时 reCamera 画面；Frigate 现在会在该视频流上进行目标检测和录像。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_live_view.png" /></div>

### 可选：微调检测参数

在 **Settings → Camera configuration → `camera name` → Object detection** 中，你可以调整检测分辨率和帧率。reCamera 输出为 1080p，但检测并不需要完整分辨率：保持默认的 1280x720、5 fps，在大多数场景中都能提供稳定的检测效果，同时保持主机 CPU / GPU 占用较低。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_detect_settings.png" /></div>

上述 UI 操作等价于在 `config.yaml` 中写入以下内容，熟悉配置文件的用户也可以直接编辑：

```yaml
go2rtc:
  streams:
    recamera2002:
      - rtsp://192.168.4.82:8554/live0

cameras:
  recamera2002:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://192.168.4.82:8554/live0
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
```

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
