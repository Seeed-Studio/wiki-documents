---
description: recamera_pro_live_view
title: 实时预览
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_view
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/cn/recamera_pro_live_view/
---

reCamera Pro 内置了实时视频监控页面，允许用户通过浏览器直接查看摄像头的实时画面。用户可以配置视频码流、显示设置、OSD 叠加、隐私遮挡以及推流参数。该页面适用于设备安装调试、画面预览、视频参数调整以及部署前的功能验证。
reCamera Pro 内置了实时视频监控页面，允许用户通过浏览器直接查看摄像头的实时画面。用户可以配置视频码流、显示设置、OSD 叠加、隐私遮挡以及推流参数。该页面适用于设备安装调试、画面预览、视频参数调整以及部署前的功能验证。
进入实时视频监控页面后，左侧为视频预览区域，右侧为功能配置区域。用户可以在同一页面完成视频播放、码流切换及相关参数配置。

## 视频预览

页面左侧提供实时视频预览窗口，用户可以选择播放主码流或子码流。点击 **Start Playback** 即可在浏览器中查看当前摄像头画面。

预览区域底部提供基础播放控制功能，包括：

- 主码流 / 子码流选择

- 开始播放 / 停止播放

- 音量调节

- 当前连接状态显示


当设备断开连接、视频码流异常或网络不可达时，预览窗口会显示连接失败提示，方便用户快速判断当前视频码流状态。

## 基本设置

在右侧功能区域中，用户可以进入 **Basic Settings** 页面分别配置主码流和子码流的视频编码参数。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

可配置参数包括：

| 参数 | 说明 |
|---|---|
| 分辨率 | 设置视频输出分辨率，例如 1920×1080（1080P） |
| 编码格式 | 设置视频编码格式，例如 H.264 |
| 帧率 (FPS) | 设置视频帧率，例如 30 FPS |
| GOP | 设置关键帧间隔，用于控制关键帧生成频率 |
| 码率控制模式 | 设置码率控制方式，例如 VBR（可变码率） |
| 最大码率 | 设置视频码流的最大发电码率，单位为 Kbps |
| 码率质量 | 设置视频编码质量等级 |

用户可根据实际应用场景选择配置主码流或子码流。主码流适用于高清预览、视频存储和 AI 分析；子码流适用于低带宽预览、远程查看或多路视频接入等场景。

修改完成后，点击 **Save Video Settings** 以应用当前配置。如需恢复或重新输入参数，可点击 **Reset**。

页面还提供音频相关开关，包括 **Audio Settings** 和 **Audio Storage Settings**，用户可根据需要开启或关闭音频采集和音频存储功能。

## 显示设置

**Display Settings** 页面用于调节摄像头的显示效果和基础图像参数。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

支持的显示设置包括：

| 参数 | 说明 |
|---|---|
| 翻转 | 设置图像是否翻转，可用于适配不同的安装方向 |
| 旋转 | 设置图像旋转角度，例如 0° |
| 视频制式 | 设置视频制式，例如 PAL（50HZ） |

此外，本页面支持昼/夜参数切换配置，包括：

| 参数 | 说明 |
|---|---|
| 切换模式 | 设置昼/夜模式的切换方式，例如自动切换 |
| 切换阈值灵敏度 | 设置触发昼/夜切换的灵敏度 |
| 切换滞后时间 | 设置昼/夜模式切换的延迟时间，以避免频繁切换 |

在基础图像调节区域，用户可以选择不同的配置档位，并调节摄像头图像参数，例如：

- 亮度

- 对比度

- 饱和度

- 锐度

- 色调

- 曝光模式

- 增益模式


这些参数可根据现场光照环境（如室内、室外、弱光或强光等）进行优化调整，以获得更佳的图像效果。

修改完成后，点击 **Save Display Settings** 或 **Save Configuration** 以应用当前设置。

## OSD 设置

**OSD Settings** 用于配置视频画面上的叠加信息，例如通道名称、日期时间和设备序列号。该功能适用于视频监控、录像回放以及设备标识等场景。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

支持的 OSD 配置包括：

| 配置项 | 说明 |
|---|---|
| 字体大小 | 设置 OSD 文本大小 |
| 字体颜色 | 设置 OSD 文本颜色 |
| 颜色模式 | 设置 OSD 颜色模式，可选择自定义颜色 |
| 通道名称叠加 | 开启后在画面上显示通道名称 |
| 通道名称 | 自定义显示的通道名称，例如 Camera 01 |
| 通道名称坐标 | 设置通道名称在画面中的显示位置 |
| 日期时间叠加 | 开启后在画面上显示日期和时间 |
| 日期格式 | 设置日期显示格式 |
| 时间格式 | 设置时间显示格式，例如 24 小时制 |
| 显示星期 | 控制是否显示星期信息 |
| 日期时间坐标 | 设置日期和时间在画面中的显示位置 |
| 序列号叠加 | 控制是否在画面上显示设备序列号 |

OSD 坐标采用相对位置配置，用户可以根据画面布局将文字放置在合适的位置，也可以直接拖动文字到期望的位置。

配置完成后，点击 **Save Settings** 以应用 OSD 参数。

## 图像遮挡

**Image Masking** 功能用于配置隐私遮挡区域。用户可以开启隐私遮挡，对视频画面中的敏感区域进行遮挡，防止隐私信息在实时预览、录像或推流中被暴露。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

可以手动添加并自动绘制遮挡区域。添加完成后，保存设置即可立即看到效果。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

该功能适用于以下场景：

- 遮挡办公区域中的敏感信息

- 遮挡住宅、门牌号、屏幕等私密区域

- 满足各类场景下的视频隐私保护需求


## 推流设置

**Streaming Settings** 页面用于配置视频码流输出方式，便于将 reCamera Pro 接入第三方平台、NVR、视频管理系统或自定义应用。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

支持的配置项包括：

| 参数 | 说明 |
| --------- | ----------------- |
| 码流设置开关 | 控制当前码流推流功能的开启或关闭 |
| 主码流 / 子码流 | 选择需要配置的码流 |
| 推流协议 | 设置推流协议，例如 RTSP |
| 认证类型 | 设置访问视频码流的认证方式，例如无认证 |
| 应用设置 | 保存并应用当前推流配置 |

用户可根据实际部署需求分别配置主码流或子码流的推流参数。配置完成后，第三方客户端或平台即可通过对应的码流地址访问 reCamera Pro 的视频画面。

## AI 结果

页面还提供 **AI Results** 入口，用于查看或配置 AI 推理结果的显示方式。该功能可用于目标检测、分类识别等边缘 AI 应用场景，方便用户在实时画面中观察模型输出结果。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4t447lMV5W.png" />

## 典型应用场景

实时视频监控页面适用于以下场景：

- 摄像头安装完成后的实时画面确认

- 主码流和子码流参数配置

- 调整视频分辨率、帧率、码率和编码格式

- 调试昼/夜模式和图像参数

- 叠加 OSD 时间、通道名称和设备信息

- 配置隐私遮挡区域

- 通过 RTSP 推流接入第三方平台或 NVR

- 验证 AI 推理结果显示


通过实时视频监控页面，用户无需安装额外客户端即可完成 reCamera Pro 的视频预览、图像调试、码流配置和推流设置，大幅提升设备部署和调试效率。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
