---
description: 在浏览器中观看实时画面、拍照、开始和停止手动录像，并在 reCamera Pro 上在主码流和子码流之间切换。
title: "预览、拍照和手动录像"
keywords:
  - reCamera
  - reCamera Pro
  - 实时预览
  - 拍照
  - 录像
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_live_preview
aliases:
  - /recamera_pro_live_view
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_live_preview/
---

# 预览、拍照和手动录像

reCamera Pro 内置 Web UI，因此你无需安装额外的客户端软件。只要你的电脑和设备在同一局域网内，打开浏览器并访问：

```text
http://<reCamera_IP>
```

首次登录时，Web UI 会要求你修改密码。初始密码（旧密码）为 `recamera`；输入你选择的新密码，然后使用用户名 `admin` 登录。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

登录后，你可以预览实时画面、拍照、录像、切换码流，并打开图像、AI 推理和设备设置——完成快速调试和功能验证所需的一切操作。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

## 观看实时预览

在实时预览页面，左侧是视频预览区域，右侧是功能配置区域。点击 **Start Playback** 即可在浏览器中观看当前摄像头画面。

预览区域底部提供基础播放控制：

- 主码流 / 子码流 选择
- 开始播放 / 停止播放
- 音量调节
- 当前连接状态显示

如果设备断开连接、视频码流异常或网络不可达，预览窗口会显示连接失败提示，帮助你快速判断码流出现了什么问题。

## 拍照

**Take Photo** 会将当前画面保存为一张图片——适合用于场景记录、调试归档或数据采集。图片会自动下载到浏览器的默认下载文件夹。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

## 手动录像

你可以直接在 Web UI 中开始和停止录像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />

1. 点击 **Start Recording**。按钮会变为 **End Recording**。
2. 完成后，点击 **End Recording**，稍等片刻，等待 reCamera Pro 打包视频。
3. 浏览器会自动将录像以 MP4 文件的形式下载到你的默认下载文件夹。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

:::note
从预览页面进行的手动录像不同于基于 AI / 事件的录像。若要在检测到目标、声音或外部触发时自动录像，并将录像保存在设备存储中，请参阅 [配置事件录像](/cn/recamera_pro_record_settings/) 和 [查找录像与存储](/cn/recamera_pro_storage/)。
{/* TODO(verify): confirm whether manual Web UI recordings are ever kept on device storage in addition to the browser download, and the exact firmware version behavior */}
:::

## 在主码流和子码流之间切换

Web UI 支持在**主码流**和**子码流**之间切换。你可以根据网络带宽、画质需求或预览场景进行选择：

- **主码流**——用于高清预览、视频存储和 AI 分析。
- **子码流**——用于低带宽预览、远程查看或多路访问。

码流编码参数（分辨率、帧率、码率等）会为每路码流分别配置；参见 [图像质量与弱光表现](/cn/recamera_pro_image_quality/)。

## 下一步

- [调整图像质量和弱光表现](/cn/recamera_pro_image_quality/)
- [在外部播放器中观看码流（RTSP）](/cn/recamera_pro_rtsp/)
- [添加 OSD 叠加和隐私遮罩](/cn/recamera_pro_osd_masks/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
