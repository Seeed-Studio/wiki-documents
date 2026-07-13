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
reCamera Pro 内置 Web UI 管理界面，无需用户安装额外的客户端软件。只要电脑与 reCamera Pro 处于同一局域网内，即可通过浏览器直接访问相机的 IP 地址进入设备管理页面。访问方式如下：
```text
http://<reCamera_IP>
```

进入 Web UI 后，首次登录需要输入密码。初始密码（旧密码）为 `recamera`。根据需要输入你的新密码。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />
使用新设置的密码登录。用户名为 `admin`。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />使用新密码登录后，用户可以进行实时预览、拍照、录像、码流切换、查看设备信息、设置图像参数以及配置 AI 推理相关设置，方便快速进行设备调试和功能验证。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />
## 主要功能
### 实时预览
用户可以在浏览器中直接查看来自 reCamera Pro 的实时视频画面，方便进行设备安装、镜头调节和图像确认。点击 "Start" 即可开始播放并查看相机的实时画面。

### 拍照
支持将当前画面保存为图片，适用于场景记录、调试归档或数据采集。图像数据会自动下载到浏览器的默认下载路径中。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

### 录像
支持通过 Web UI 启动或停止录像功能。视频可以保存到设备本地存储，便于后续查看和分析。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />
开始录像后，“Start Recording” 按钮会变为 “End Recording”。再次点击后，稍等片刻以便 reCamera 打包图像数据。浏览器会自动下载对应的 MP4 格式视频流数据，可在浏览器的默认下载路径中找到。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

### 码流切换
支持主码流与子码流之间的切换。用户可根据网络带宽、图像质量要求或预览场景选择合适的码流。

通过内置 Web UI，reCamera Pro 无需额外软件即可访问和配置，适用于快速部署、功能验证以及边缘 AI 相机应用开发。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
