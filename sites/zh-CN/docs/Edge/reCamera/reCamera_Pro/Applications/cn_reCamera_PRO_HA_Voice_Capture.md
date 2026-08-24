---
title: reCamera Pro 与 Home Assistant 集成：声音触发拍照告警
description: 本文介绍如何将 reCamera Pro 与 Home Assistant 集成，当检测到特定声音时，自动向 Home Assistant 仪表盘发送自定义消息和当前摄像头快照。
keywords:
  - reCamera
  - Home Assistant
  - MQTT
  - 声音检测
  - 边缘 AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif
slug: /recamera_pro_ha_sound_alert
sidebar_position: 2
last_update:
  date: 2026-07-27
  author: Sizhao zhou
createdAt: '2026-07-27'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/cn/recamera_pro_ha_sound_alert/
---

# reCamera Pro 与 Home Assistant 集成：声音触发拍照告警

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## 介绍

本文介绍如何将 reCamera Pro 与 Home Assistant（HA）集成，当检测到特定声音时，自动向 Home Assistant 仪表盘发送自定义消息和当前摄像头快照。通过使用 MQTT 协议进行双向通信，当 reCamera Pro 检测到指定声音（例如 “help”）且置信度超过阈值时，会自动向 HA 发送告警消息和实时图像。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif" /></div>

## 硬件准备

- 一台运行 Home Assistant 的主机（支持 Docker、HA OS 或 venv 部署）
- 一台 reCamera Pro 设备

<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 在 HA 中安装 reCamera 插件

我们将向 Home Assistant 添加一个 reCamera 插件，用于在 HA 中显示来自 reCamera Pro 的消息和图像。提供两种安装方式：自动安装脚本（推荐）和手动安装。

### 方法一：自动安装脚本（推荐）

下载并运行 [install.py 脚本](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link)，输入 HA 配置目录，即可自动完成整个安装过程。

```bash
# Download install.py (includes all files, no additional downloads needed)
python3 install.py

# Or specify the configuration directory directly (non-interactive)
python3 install.py /home/zsz/HA/config
```

脚本将自动完成以下操作：
1. 将集成代码复制到 `custom_components/recamera_chat/`
2. 将前端文件复制到 `www/recamera_chat/`
3. 将 `recamera_chat` 和 `panel_custom` 配置追加到 `configuration.yaml`（会自动备份原文件）
4. 校验所有文件是否就位

:::tip
该脚本兼容 Linux / Windows / macOS，适用于包括 Docker、HA OS 和 venv 在内的所有部署方式。
:::

安装完成后，跳转到[步骤 4：重启 Home Assistant](#step-4-restart-home-assistant)。

### 方法二：手动安装

#### 步骤 1：下载部署包

下载 [recamera_chat.zip](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link) 部署包并解压，解压后的目录结构如下：

```
recamera_chat/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
└── configuration_snippet.yaml
```

#### 步骤 2：将文件复制到 HA 配置目录

将 `custom_components` 和 `www` 文件夹复制到 Home Assistant 配置目录下。

:::note
HA 配置目录的位置取决于你的安装方式：
- **HA OS**：通过 Samba 或 SSH 访问 `/config`
- **Docker**：挂载的配置目录（例如 `/home/zsz/HA/config`）
- **venv**：你的 HA 安装目录
:::

:::danger
`www/` 和 `custom_components/` 是**同级目录**，必须都直接放在配置根目录下。不要将 `www/` 放在 `custom_components/` 里面，否则侧边栏不会显示。
:::

**Docker 部署示例：**

```bash
# Assuming the HA configuration directory is /home/zsz/HA/config
cd /home/zsz/HA/config

# Copy the integration files
cp -r recamera_chat/custom_components/recamera_chat custom_components/

# Copy the frontend files
cp -r recamera_chat/www/recamera_chat www/
```

复制后的目录结构如下：

```
/config/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
        └── images/          # Images are automatically saved here
└── configuration.yaml
```

#### 步骤 3：编辑 configuration.yaml

在 HA 的 `configuration.yaml` 中添加以下配置：

```yaml
# ===== reCamera Chat (MQTT Bidirectional Chat) =====
recamera_chat:
  broker: 127.0.0.1       # MQTT broker address (127.0.0.1 if HA and broker are on the same host)
  port: 1883              # MQTT broker port
  # username: youruser    # Uncomment and fill in if authentication is required
  # password: yourpass
  topic_in: recamera/chat/to_ha       # reCamera publishes to this topic -> HA receives
  topic_out: recamera/chat/to_camera  # HA panel sends -> reCamera subscribes to this topic
  message_field: ""       # Leave empty = auto-extract message/text/payload/msg/content
  max_history: 200        # Maximum number of message history entries

panel_custom:
  - name: recamera-chat
    sidebar_title: reCamera
    sidebar_icon: mdi:camera
    url_path: recamera-chat
    module_url: /local/recamera_chat/panel.js?v=13
    require_admin: false
```

:::warning
`module_url` 中的版本号（例如 `?v=13`）必须与 `panel.js` 文件中的版本号一致。如果版本号不一致，浏览器可能会加载旧缓存，导致面板无法显示。
:::

#### 步骤 4：重启 Home Assistant

重启 HA 以应用配置：

- Web 界面：Settings -> System -> 右上角电源图标 -> Restart
- 命令行（Docker）：`docker restart homeassistant`

#### 步骤 5：验证部署

1. 重启完成后，HA 侧边栏中应出现带摄像头图标的 **reCamera** 选项卡。
2. 点击后可看到聊天界面，右上角状态应为 **Connected**。
3. 在输入框中输入文本并按 Enter 或点击 **Send** 按钮。
4. 订阅 `recamera/chat/to_camera` 的 reCamera 端应能收到消息。

:::warning
如果重启后侧边栏中仍未出现 reCamera 选项卡，请按以下顺序排查：
1. 检查 `www/recamera_chat/panel.js` 是否位于配置根目录下的 `www/` 目录中（而不是 `custom_components/www/` 下）
2. 检查 `configuration.yaml` 中是否包含 `panel_custom` 配置块
3. 检查 `panel.js` 中的 `?v=13` 版本号是否与 `configuration.yaml` 中 `module_url` 的版本号一致
4. 按 Ctrl+F5 强制刷新浏览器并清除缓存
:::

## 配置 reCamera Pro

由于本示例需要摄像头拍照，你需要先停止 reCamera Pro 的主进程以释放摄像头资源。运行以下命令：

```bash
pkill -x rkipc
```

停止主进程后，下载 Python 程序：[reCamera 程序](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)

### 修改程序配置参数

下载程序后，需要修改以下参数才能正确运行：

```python
# ===================== MQTT Configuration =====================

MQTT_HOST = "192.168.6.215"         # MQTT Broker Address
MQTT_PORT = 1883                    # MQTT Broker Port
TARGET_SOUND = "help"               # Name of the sound to detect
CONFIDENCE_THRESHOLD = 94.0         # Trigger threshold, unit: percentage
MQTT_MESSAGE = "Someone is calling for help!!"  # Message to send when triggered
```

- **MQTT_HOST**：MQTT Broker 地址，填写你的 HA 主机 IP 地址
- **MQTT_PORT**：MQTT Broker 端口，填写 1883
- **TARGET_SOUND**：要检测的声音名称，填写 `"help"`
- **CONFIDENCE_THRESHOLD**：触发阈值，单位：百分比，填写 `94.0`。只有当置信度超过该值时才会发送消息和图像。
- **MQTT_MESSAGE**：触发时要发送的消息，可以填写你希望在 HA 面板上显示的内容。

### 将代码上传到 reCamera Pro 并执行

1. 使用以下命令将修改后的代码上传到 reCamera Pro：

```bash
scp voice_capture.py root@<device_IP>:/userdata
```

2. 运行以下命令执行代码：

```bash
python3 ./voice_capture.py
```

## 预期结果

1. 启动声音检测程序后，reCamera Pro 会持续监测环境声音。
2. 当检测到指定声音（例如 “help”）且置信度超过阈值时，会自动抓拍当前场景。
3. 通过 MQTT 向 Home Assistant 发送自定义告警消息和图像。
4. HA 侧边栏中的 reCamera 面板会显示接收到的消息和图像。

## 故障排查

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| HA 侧边栏中没有 reCamera 选项卡 | 文件路径错误或配置未生效 | 检查 `www/recamera_chat/panel.js` 路径和 `configuration.yaml` 配置 |
| 面板显示 "Disconnected" | MQTT 连接失败 | 检查 MQTT Broker 地址和端口是否正确 |
| 声音检测无响应 | 麦克风未连接或权限不足 | 确认 USB 麦克风已连接，在 reCamera Pro 上检查音频设备 |
| 图像未显示 | 摄像头资源被占用 | 确认已执行 `pkill -x rkipc` 以释放摄像头 |

## 资源

- [reCamera Pro 产品页面](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Home Assistant 官方文档](https://www.home-assistant.io/)
- [reCamera 聊天部署包](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link)
- [reCamera 声音检测程序](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)
- [自动安装脚本](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供不同层级的支持，以确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>