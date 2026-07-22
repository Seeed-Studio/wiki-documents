---
description: 这是基于 recamera2002 的选定区域运动检测
title: 基于 recamera2002 的选定区域运动检测
keywords:
  - reCamera
  - 运动检测
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png
slug: /recamera_motion_detection_bak
sku: 102991897, 100029708, 108990120
sidebar_position: 13
last_update:
  date: 07/03/2026
  author: Qiyao Lin
createdAt: '2026-07-03'
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/recamera_motion_detection_bak/
---

## I. 项目介绍

这是基于 recamera2002 的选定区域运动检测。该检测所需的全部算力都在 reCamera 内部完成，而不依赖外部计算。外部系统只需要渲染图像并选择检测区域。
你可以从以下 GitHub 仓库克隆该示例：

[reCamera Motion Detection Demo](https://github.com/yyling0101-a11y/recamera_motion_detection)

## II. reCamera 配置指南

在 Linux 系统上编译好 `motion_detection` 可执行程序后，通过 SCP 将其推送到 reCamera。然后远程访问 reCamera 的 SSH 终端，使用以下命令直接运行该程序：

```bash
./motion_detection
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155625.png" /></div>

## III. Win 渲染界面配置

在同一目录下，有一个 `windows_ui` 目录。这是 Win 界面渲染项目。建议使用 conda 虚拟环境来配置运行环境。

```bash
conda create -n motion_detection python=3.10

conda activate motion_detection

# Download corresponding environment dependencies
cd ./windows_ui
pip install -r requirements.txt
```

环境准备就绪后，直接运行 `app.py` 文件：

```bash
python app.py --rtsp=rtsp://192.168.42.1:8554/live0 --api=http://192.168.42.1:8080
```

启动后的界面如下：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703153920.png" /></div>
输入正确的 URL 后，可以点击 "Connect RTSP" 获取视频流。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154419.png" /></div>

### 1. 定义检测区域

在左侧的 "Area Editing" 中选择区域类型。共有两种类型：一种是 "Detection Area" 类型，用于定义检测区域；另一种是 "Whitelist"，用于在检测区域内定义不进行检测的区域，以过滤掉在检测区域内可能自然移动的物体，例如摇摆的树枝、喷泉等。
选择类型并输入区域名称后，可以在图像上点击选择点。右键单击可撤销一个点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154948.png" /></div>

选点完成后，点击 "Complete Current Polygon"。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155033.png" /></div>

### 2. 启用检测框

然后选择 "Upload to Device" 保存界面设置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155107.png" /></div>

如果在图像中检测到运动，左下角会出现告警信息，并在图像上绘制运动框。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png" /></div>

重新启动 Win 界面后，已有的选框可能会丢失，需要点击 "Read from Device" 以读取已有的检测框。如果当前摄像头移动或场景发生变化，而你又不需要修改检测区域，可以点击 "Reconstruct Background" 以重新定义静态图像。

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
