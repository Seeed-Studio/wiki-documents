---
description: recamera_pro_live_preview
title: 实时预览
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_preview
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/cn/recamera_pro_live_preview/
---

## Web UI 介绍
reCamera Pro 内置了 Web UI 管理界面，用户无需额外安装客户端软件。只要电脑与 reCamera Pro 处于同一局域网内，即可直接通过浏览器访问摄像头的 IP 地址，进入设备管理页面。访问方式如下：
```text
http://<reCamera_IP>
```

进入 Web UI 后，首次登录需要输入密码，初始密码（旧密码）是recamera，新密码按照自己需要输入即可。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />
输入刚刚设定的新密码进行登录，用户名为admin。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260707095701.png" />使用新密码登录之后，用户可以进行实时画面预览、拍照、录像、码流切换、设备信息查看、画面参数设置以及 AI 推理相关配置，方便快速完成设备调试与功能验证。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260707100239.png" />
## 主要功能
### 实时预览
用户可以在浏览器中直接查看 reCamera Pro 的实时视频画面，便于设备安装、镜头调节和画面确认。点击开始开始播放之后可以看到摄像头的实时画面。

### 拍照
支持将当前画面保存为图片，适用于画面记录、调试留档或数据采集。然后在浏览器中会自动下载图像数据到默认的下载路径中。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260707100440.png" />

### 录像
支持通过 Web UI 启动或停止录像功能，可将视频保存到设备本地存储中，便于后续查看和分析。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260707100518.png" />
启动录制之后开始录制按钮会变为结束录制，再次点击之后，稍等recamera打包图像数据，浏览器会自动下载对应的mp4格式的视频流数据，可以在浏览器默认的下载路径中查找到对应的mp4文件。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260707100611.png" />

### 码流切换
支持在主码流和子码流之间切换。用户可以根据网络带宽、画质需求或预览场景选择合适的码流。

通过内置 Web UI，reCamera Pro 可以在无需额外软件的情况下完成设备访问和基础配置，适合快速部署、功能验证以及边缘 AI 摄像头应用开发。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
