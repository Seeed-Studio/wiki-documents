---
title: 使用Stream Deck控制reCamera Gimbal
description: 本维基主要演示了如何用Stream Deck控制reCamera Gimbal。
keywords:
  - AI Human Detection
  - Edge AI
  - GPIO Trigger
slug: /Using_Stream_Deck_to_control_reCamera_Gimbal
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
  date: 2026-05-22T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-05-22'
updatedAt: '2026-05-22'
url: https://wiki.seeedstudio.com/cn/Using Stream Deck to control reCamera Gimbal/
---

## 介绍
本维基主要演示了如何用Stream Deck来控制reCamera Gimbal。通过http协议在Stream Deck上发送指令，可以控制reCamera Gimbal的旋转指定角度，开关补光灯，播放音频等等操作。

---

## 部分效果演示
旋转Stream Deck的旋钮控制reCamera Gimbal的X轴进行左右旋转，按下旋钮开关LED灯光。

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif" alt="demo" />
</div>

---

## 硬件准备
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera Gimbal</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:210, height:'auto'}}/></div></td>
</tr>
</tbody></table>

<div style="display: flex; justify-content: center; transform: scale(1.3); transform-origin: center; margin: 20px 0;">
  <div class="get_one_now_container" style="text-align: center;">
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank" style="display: inline-block; padding: 10px 24px; background: #00e30fa1; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px;">
      立即购买 🖱️
    </a>
  </div>
</div>

## reCamera 配置
在浏览器输入reCamera Gimbal的IP地址，即可登陆reCamera Gimbal然后进入Dashboard，配置http通信节点，用于接收Stream Deck发送的指令。

### 1. 旋钮事件处理 (reCamera Webhook)

#### 偏航轴处理 (Process Yaw)
* **节点类型**: `http in` -> `function` -> `set-motor-angle`
* **逻辑摘要**: 
  * 默认角度为 `180°`。
  * 接收到顺时针（cw）或逆时针（ccw）动作时，以 **10° 为步进**进行增减。
  * 触发复位（reset）时角度归零。
  * 限制安全运动范围在 **0° ~ 345°** 之间。

#### 俯仰轴处理 (Process Pitch)
* **节点类型**: `http in` -> `function` -> `set-motor-angle`
* **逻辑摘要**: 
  * 默认角度为 `90°`。
  * 接收到顺时针（cw）或逆时针（ccw）动作时，同样以 **10° 为步进**进行增减。
  * 触发复位（reset）时角度归零。
  * 限制安全运动范围在 **0° ~ 180°** 之间。

#### 数字变焦处理 (Process Zoom)
* **节点类型**: `http in` -> `function` -> `ui-template`
* **逻辑摘要**: 
  * 默认缩放比例为 `1.0`。
  * 旋转时以 **0.1 为步进**进行缩放调整（cw 递增 / ccw 递减），按下复位还原为 `1.0`。
  * 限制缩放范围在 **0.5x ~ 5.0x** 之间。
  * 最终将缩放系数传给前端 Vue 模板，通过 CSS `scale()` 动态缩放 Dashboard 中的 SVG 画布。

#### 最终的NODE-RED配置完成的节点图如下所示：

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-node_red-config.png" alt="node-red" />
</div>

### 2. 基础按键事件处理

| 按键功能 | 节点类型链路 | 逻辑摘要说明 |
| :--- | :--- | :--- |
| **LED 切换 (Toggle LED)** | `http in` -> `function` -> `exec` | 内部维护一个 `ledState` 变量进行 **0 和 1 的状态翻转**。状态为 1 时通过 Linux 命令行向系统写入 `brightness` 开启白色 LED，状态为 0 时关闭。 |
| **音频录制 (Record Audio)** | `http in` -> `exec` | 调用系统底层 `arecord` 工具，以 16000Hz 采样率、单声道格式，**录制 5 秒钟音频**并保存为本地的 `/home/recamera/test.wav`。 |
| **音频播放 (Play Audio)** | `http in` -> `exec` | 调用系统底层 `aplay` 工具，直接**播放**刚刚录制好的 `test.wav` 音频文件。 |

---

## Stream Deck 配置
为了让 Stream Deck 的操作顺滑且不会每次触发都弹出一个浏览器窗口，我们将使用 Stream Deck系统自带的**“网站” (Website)** 动作，并开启后台静默运行。

> **⚠️ 前提条件**：请确保你的电脑此时能够成功 Ping 通设备的 IP：`192.168.31.198`(注意这里换成你自己的设备IP地址)。


### 1. 旋钮区域设置 (Stream Deck)

在 Stream Deck 软件的旋钮区域，为每个旋钮分别拖入 **3 个“系统 -> 网站 (Website)”** 动作，配置如下：

#### 旋钮 1：控制偏航轴 (Yaw)
* **顺时针旋转 (拨号操作):**
  * **URL:** `http://192.168.31.198:1880/deck/yaw?action=cw`
  * **设置:** 勾选 `在后台发送 GET 请求 (GET request in background)`
* **逆时针旋转 (拨号操作):**
  * **URL:** `http://192.168.31.198:1880/deck/yaw?action=ccw`
  * **设置:** 勾选 `在后台发送 GET 请求`
* **按下 (按下操作):**
  * **URL:** `http://192.168.31.198:1880/deck/yaw?action=reset`
  * **设置:** 勾选 `在后台发送 GET 请求`

#### 旋钮 2：控制俯仰轴 (Pitch)
* **顺时针旋转:**
  * **URL:** `http://192.168.31.198:1880/deck/pitch?action=cw`
  * **设置:** 勾选 `在后台发送 GET 请求`
* **逆时针旋转:**
  * **URL:** `http://192.168.31.198:1880/deck/pitch?action=ccw`
  * **设置:** 勾选 `在后台发送 GET 请求`
* **按下:**
  * **URL:** `http://192.168.31.198:1880/deck/pitch?action=reset`
  * **设置:** 勾选 `在后台发送 GET 请求`

#### 旋钮 3：数字变焦 (Zoom)
> **说明**: 缩放机制是通过 CSS 控制 Dashboard 中的 SVG 显示框比例。
* **顺时针旋转:**
  * **URL:** `http://192.168.31.198:1880/deck/zoom?action=cw`
  * **设置:** 勾选 `在后台发送 GET 请求`
* **逆时针旋转:**
  * **URL:** `http://192.168.31.198:1880/deck/zoom?action=ccw`
  * **设置:** 勾选 `在后台发送 GET 请求`
* **按下 (归零复原):**
  * **URL:** `http://192.168.31.198:1880/deck/zoom?action=reset`
  * **设置:** 勾选 `在后台发送 GET 请求`

### 2. 按键区域设置 (LED、录音、播放)

在 Stream Deck 的基础按键区，拖入 **3 个“系统 -> 网站 (Website)”** 动作进行以下配置：

| 按键功能 | 请求 URL | 必备设置 |
| :--- | :--- | :--- |
| **LED 切换** | `http://192.168.31.198:1880/deck/led` | 勾选 `在后台发送 GET 请求` |
| **录音** *(按下录音5秒)* | `http://192.168.31.198:1880/deck/record` | 勾选 `在后台发送 GET 请求` |
| **播放** | `http://192.168.31.198:1880/deck/play` | 勾选 `在后台发送 GET 请求` |

---

## 将node-red流程部署到reCamera
首先，按照本教程将 reCamera 升级到最新的 0.2.4 版本：[reCamera OS Upgrade Tutorial](https://wiki.seeedstudio.com/cn/recamera_os_version_control/) 如果你的版本已经是 0.2.4，则可以跳过此步骤。然后点击右上角的“部署”将我们新创建的节点部署到开发板上面。

---

## 技术支持与产品讨论

感谢你选择我们的产品！如果你在特定定制目标方面需要指导，或希望进一步扩展工作流程，欢迎随时联系我们。我们会为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>