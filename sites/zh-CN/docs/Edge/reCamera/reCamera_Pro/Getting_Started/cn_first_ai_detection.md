---
description: 启动 reCamera Pro，登录 Web UI，开始实时预览，并确认你的首次 AI 检测结果——从开箱到获得一台可用 AI 相机的最快路径。
title: '快速上手：完成你的首次 AI 检测'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - quick start
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/
---

# 快速上手：完成你的首次 AI 检测

本指南将带你在大约 10 分钟内，从拆箱 reCamera Pro 到在实时视频预览中看到 AI 检测结果：

1. [连接硬件](#1-connect-the-hardware)
2. [登录 Web UI](#2-log-in-to-the-web-ui)
3. [启动实时预览](#3-start-the-live-preview)
4. [确认 AI 检测正常工作](#4-confirm-ai-detection-is-working)

{/* TODO(verify): add a "detection success" screenshot showing the live preview with a bounding box overlaid on a person, and confirm which model ships preloaded on current firmware and which firmware versions this first-login flow applies to. */}

## 1. Connect the hardware

在开始之前，请确保你已经准备好：

- **电源**：DC 电源线（规格：**12 V，至少 1 A**；出厂电源适配器为 12 V，3 A）。
- **数据线**：一根支持**数据传输**的 USB Type-C 线（不是仅充电线），用于首次与电脑的直连。

连接步骤：

1. 将 12 V DC 电源线插入设备的电源接口。将 USB Type-C 线的一端连接到 reCamera Pro，另一端连接到你的电脑（下图以 Windows 主机为例）。
2. 观察状态指示灯：当**绿色指示灯常亮**时，表示设备已完成启动。

![System status light and cable connection diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

### 状态指示灯参考

绿色指示灯显示系统状态；红色指示灯为电源指示灯。

| 绿色指示灯状态 | 含义 |
| --- | --- |
| 呼吸灯 | 设备正在上电启动 |
| 常亮 | 设备运行正常 |
| 熄灭 | 异常状态——核心进程未运行 |
| 100 ms 闪烁 | 正在进行 OTA 升级 |
| 短闪 | 检测到文件系统不干净的 SD 卡 |

## 2. Log in to the Web UI

reCamera Pro 内置 Web UI——无需安装客户端软件。连接 USB 数据线后，你的电脑可以通过默认地址直接访问设备。

:::note
在登录前，请确保 USB Type-C 线连接牢固，并且绿色指示灯为常亮状态。
:::

1. 在电脑上打开浏览器（推荐使用 Chrome 或 Edge）。
2. 访问默认 IP 地址：`http://192.168.42.1`。
3. **首次登录**：初始密码为 `recamera`。系统会要求你设置一个新密码——输入新密码后，使用用户名 `admin` 和你设置的新密码登录。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />

4. 登录后，你会进入主界面（默认是 **Real-time Preview** 页面）。

![Web login and main interface diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip 在 Windows 上无法访问 192.168.42.1？
如果页面无法加载，通常是因为 Windows 虚拟网卡没有自动获取 IP 地址。请参考 [按现象排查](/cn/recamera_pro_faqs/) 中的步骤修复网卡。
:::

:::info 想改为无线连接？
USB 连接只在首次配置时需要。如果你希望通过本地网络来管理设备，请参考 [通过 Wi-Fi 访问设备](/cn/recamera_pro_wifi_access/)。
:::

## 3. Start the live preview

在 **Real-time Preview** 页面，点击 **Start** 开始播放。你应该能在浏览器中看到相机的实时视频流——可以用它来调整相机朝向、调节镜头，并确认画质。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

预览页面还支持拍照、手动录像，以及在主码流和子码流之间切换。详情请参见：[预览、抓拍与手动录像](/cn/recamera_pro_live_preview/)。

## 4. Confirm AI detection is working

仅有实时预览只能证明视频链路正常。要确认 **AI 检测** 链路正常，需要运行推理任务并观察其输出：

1. 在左侧导航栏中打开 **AI Inference**。
2. 在 **Inference Configuration** 中，确保 **Inference Enable** 已开启，选择正在运行的模型（设备中预置了一个检测模型），然后点击 **Save Configuration**。
3. 确认 **Inference Status** 显示为 **Running**，且实时 FPS 不为 0。
4. 查看 **Real-time Inference Monitoring** 区域：当视野中出现目标时，检测结果会以日志形式不断输出，包含 `class_name`、`score`、`bbox` 和 `detection_count` 字段。

**如何验证**：站到相机前（或举起一张手机/人物图片）。在一两秒内，你应该能看到类似 `class_name: person` 的条目以及对应的置信度 `score`——同时在预览画面上会绘制出一个边界框。如果这些结果出现，就说明你的首次 AI 检测已确认成功。

完整的推理配置参考（模型选择、检测类别、置信度/IOU 阈值、推理频率、监控控制）请参见 [AI Inference 配置页面](/cn/recamera_pro_ai_inference/)。

{/* TODO(verify): confirm the exact preloaded model name shown in Running Model on current shipping firmware, and capture a screenshot of Real-time Inference Monitoring with a person detection. */}

## 下一步

- [第一个任务：检测并录像](/cn/recamera_pro_first_recording/)——将一次检测转化为事件录像并回放。
- [通过 Wi-Fi 访问设备](/cn/recamera_pro_wifi_access/)——拔掉 USB 线，改为无线管理设备。
- [部署前检查清单](/cn/recamera_pro_deploy_checklist/)——在将设备安装到现场之前。

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
