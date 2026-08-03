---
title: 使用 Stream Deck 控制 reCamera Gimbal
description: 本维基演示如何使用 Stream Deck 控制 reCamera Gimbal。
keywords:
  - reCamera Gimbal
  - 感官控制
slug: /using_stream_deck_to_control_recamera_gimbal_bak
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif
sidebar_position: 1
last_update:
  date: 2026-05-22
  author: Sizhao zhou
createdAt: '2026-05-22'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/using_stream_deck_to_control_recamera_gimbal_bak/
---

## 介绍

本维基演示如何使用 Stream Deck 控制 reCamera Gimbal。通过从 Stream Deck 通过 HTTP 协议发送指令，你可以控制 reCamera Gimbal 旋转到指定角度、打开/关闭补光灯、播放音频以及执行其他操作。

---

## 演示

旋转 Stream Deck 上的旋钮来控制 reCamera Gimbal 的 X 轴左右旋转，并按下旋钮以切换 LED 灯。

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif" alt="demo" />
</div>

---

## 硬件准备

- 一台 reCamera Gimbal
- 一台 Stream Deck

<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tr>
      <table align="center">
        <tr>
          <th>reCamera Gimbal</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign:'center'}}>
              <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
              <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
              </a>
            </div>
          </td>
        </tr>
      </table>
    </tr>
  </table>
</div>

## reCamera 配置

在浏览器中输入 reCamera Gimbal 的 IP 地址登录 Dashboard。接下来，配置 HTTP 通信节点以接收从 Stream Deck 发送的指令。

### 1. 旋钮事件处理（reCamera Webhook）

#### 偏航轴处理（Process Yaw）

- **节点类型**：`http in` -> `function` -> `set-motor-angle`

- **逻辑概述**：
  - 默认角度设置为 `180°`。
  - 在接收到顺时针（cw）或逆时针（ccw）动作时，以 **10° 步进** 增加或减少角度。
  - 当接收到复位触发时，将角度重置为零。
  - 将安全运动范围限制在 **0° ~ 345°** 之间。

#### 俯仰轴处理（Process Pitch）

- **节点类型**：`http in` -> `function` -> `set-motor-angle`

- **逻辑概述**：
  - 默认角度设置为 `90°`。
  - 在接收到顺时针（cw）或逆时针（ccw）动作时，以 **10° 步进** 增加或减少角度。
  - 当接收到复位触发时，将角度重置为零。
  - 将安全运动范围限制在 **0° ~ 180°** 之间。

#### 数码变焦处理（Process Zoom）

- **节点类型**：`http in` -> `function` -> `ui-template`

- **逻辑概述**：
  - 默认变焦倍率为 `1.0`。
  - 在旋转过程中以 **0.1 步进** 调整变焦级别（cw 增加 / ccw 减少），按下进行复位时恢复为 `1.0`。
  - 将变焦范围限制在 **0.5x ~ 5.0x** 之间。
  - 将最终变焦系数传递给前端 Vue 模板，通过 CSS `scale()` 在 Dashboard 中动态缩放 SVG 画布。

#### 最终的 Node-RED 配置节点示意图如下所示：

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-node_red-config.png" alt="node-red" />
</div>

### 2. 基础按键事件处理

| 按键功能 | 节点类型链路 | 逻辑概述说明 |
| :--- | :--- | :--- |
| **切换 LED** | `http in` -> `function` -> `exec` | 维护一个内部 `ledState` 变量以在 **0 和 1 之间切换**。当状态为 1 时，通过 Linux 命令行写入 `brightness` 以点亮白色 LED，当状态为 0 时将其关闭。 |
| **录制音频** | `http in` -> `exec` | 调用系统级 `arecord` 工具以 **录制 5 秒音频**，采样率为 16000Hz、单声道格式，并本地保存到 `/home/recamera/test.wav`。 |
| **播放音频** | `http in` -> `exec` | 调用系统级 `aplay` 工具直接 **播放** 新录制的 `test.wav` 音频文件。 |

---

## Stream Deck 配置

为了确保在 Stream Deck 上操作时不会在每次触发动作时都打开新的浏览器窗口，我们将使用内置的 **"System -> Website"** 动作，并启用后台静默执行。

> **⚠️ 前提条件**：请确保你的电脑可以成功 ping 设备 IP 地址：`192.168.31.198`（请务必替换为你实际设备的 IP 地址）。

### 1. 旋钮区域配置（Stream Deck）

在 Stream Deck 软件的旋钮区域，为每个旋钮拖入 **3 个独立的 "System -> Website"** 动作，并按如下方式进行配置：

#### 旋钮 1：控制偏航轴（Yaw）

- **顺时针旋转（旋钮操作）：**
  - **URL：** `http://192.168.31.198:1880/deck/yaw?action=cw`
  - **设置：** 勾选 `GET request in background`

- **逆时针旋转（旋钮操作）：**
  - **URL：** `http://192.168.31.198:1880/deck/yaw?action=ccw`
  - **设置：** 勾选 `GET request in background`
- **按下（按压操作）：**
  - **URL：** `http://192.168.31.198:1880/deck/yaw?action=reset`
  - **设置：** 勾选 `GET request in background`

#### 旋钮 2：控制俯仰轴（Pitch）

- **顺时针旋转：**
  - **URL：** `http://192.168.31.198:1880/deck/pitch?action=cw`
  - **设置：** 勾选 `GET request in background`

- **逆时针旋转：**
  - **URL：** `http://192.168.31.198:1880/deck/pitch?action=ccw`
  - **设置：** 勾选 `GET request in background`
- **按下：**
  - **URL：** `http://192.168.31.198:1880/deck/pitch?action=reset`
  - **设置：** 勾选 `GET request in background`

#### 旋钮 3：数码变焦（Zoom）
>
> **注意**：变焦机制通过 CSS 控制 Dashboard 中 SVG 显示框的比例。

- **顺时针旋转：**
  - **URL：** `http://192.168.31.198:1880/deck/zoom?action=cw`
  - **设置：** 勾选 `GET request in background`
- **逆时针旋转：**
  - **URL：** `http://192.168.31.198:1880/deck/zoom?action=ccw`
  - **设置：** 勾选 `GET request in background`
- **按下（恢复默认）：**
  - **URL：** `http://192.168.31.198:1880/deck/zoom?action=reset`
  - **设置：** 勾选 `GET request in background`

### 2. 按键区域配置（LED、录制、播放）

在 Stream Deck 的基础按键区域，拖入 **3 个 "System -> Website"** 动作，并按如下方式进行配置：

| 按键功能 | 请求 URL | 所需设置 |
| :--- | :--- | :--- |
| **切换 LED** | `http://192.168.31.198:1880/deck/led` | 勾选 `GET request in background` |
| **录制音频** *(按下录制 5 秒)* | `http://192.168.31.198:1880/deck/record` | 勾选 `GET request in background` |
| **播放音频** | `http://192.168.31.198:1880/deck/play` | 勾选 `GET request in background` |

---

## 将 Node-RED 流部署到 reCamera

首先，请按照此指南将你的 reCamera 升级到最新的 0.2.4 版本：[reCamera OS 升级教程](https://wiki.seeedstudio.com/cn/recamera_os_version_control/)。如果你的设备已经运行 0.2.4 版本，则可以跳过此步骤。然后，点击右上角的 **"Deploy"** 按钮，将我们新建的节点部署到板子上。

---

## 技术支持与产品讨论

感谢你选择我们的产品！如果你在特定定制目标方面需要指导，或希望进一步扩展你的工作流程，欢迎随时联系我们。我们提供多种支持方式，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
