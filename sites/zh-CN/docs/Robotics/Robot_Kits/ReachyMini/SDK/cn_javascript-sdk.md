---
description: Reachy Mini JavaScript SDK和Web应用完整指南，通过WebRTC和Hugging Face Spaces实现零安装基于浏览器的机器人控制。
title: JavaScript SDK和Web应用
slug: /reachymini_sdk_javascript-sdk
keywords:
  - javascript
  - web应用
  - webrtc
  - 浏览器控制
  - hugging face spaces
  - 静态应用
  - 零安装
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_sdk_javascript-sdk/
---

# JavaScript SDK和Web应用

Reachy Mini支持**完整的JavaScript Web应用**，完全在浏览器中运行。无需安装、无需服务器、无需Python — 只需打开一个URL，即可从任何设备（包括手机）控制您的机器人。

## 为什么选择Web应用？

Python SDK功能强大，但需要安装、GStreamer依赖和一台有能力的机器。Web应用采用不同的方法：

- **零安装** — 打开链接即可使用。节省磁盘空间和设置时间。
- **跨平台** — 适用于任何有浏览器的设备：笔记本、平板、手机。
- **随时随地控制** — 从世界任何角落控制您的机器人。
- **利用设备硬件** — 使用手机的麦克风、扬声器和触摸屏。
- **即时分享** — 发送链接给别人，他们可以立即使用该应用。

Web应用部署为**静态Hugging Face Spaces**（`sdk: static`）。没有服务器端代码 — 浏览器通过WebRTC直接连接到机器人，通过中央信号服务器。

> Python应用不会消失。Web应用是一种补充选项，特别适合轻量级控制、远程访问和快速演示。

## 架构

```
┌─────────────────────────────────┐
│  浏览器                          │
│  (您的应用 + reachy-mini.js)    │
└───────┬────────────┬────────────┘
        │ SSE/HTTP   │ WebRTC (点对点)
        │ 信号        │ 视频 + 音频 + 数据
┌───────▼──────┐     │
│  信号服务器  │     │
│  (HF Space) │     │
└───────┬──────┘     │
        │            │
┌───────▼────────────▼────────────┐
│  机器人                          │
│  GStreamer WebRTC守护进程        │
│  摄像头 · 麦克风 · 电机          │
└─────────────────────────────────┘
```

1. **您的应用**是一个托管在Hugging Face Spaces上的静态HTML/JS页面。
2. **reachy-mini.js**处理身份验证、信号和WebRTC协商。
3. **信号服务器**中继SDP offer/answer和ICE候选。它还验证Hugging Face OAuth令牌。
4. 一旦WebRTC连接建立，**视频、音频和命令流以点对点方式传输** — 信号服务器不再在路径中。

## 快速入门

### 1. 创建Hugging Face Space

在[huggingface.co](https://huggingface.co/new-space)上创建一个新Space，使用`sdk: static`。

您的`README.md` front matter应该如下：

```yaml
---
title: 我的Reachy Mini应用
emoji: 🤖
sdk: static
pinned: false
hf_oauth: true
hf_oauth_expiration_minutes: 480
---
```

`hf_oauth: true`是必需的 — 它启用信号服务器用于身份验证的Hugging Face登录按钮。

### 2. 添加SDK

在您的`index.html`中，将SDK作为ES模块导入：

```html
<script type="module">
  import { ReachyMini } from "./reachy-mini.js";

  const robot = new ReachyMini();
</script>
```

您可以从[参考示例](https://huggingface.co/spaces/cduss/webrtc_example)或npm CDN获取`reachy-mini.js`：

```js
import { ReachyMini } from "https://cdn.jsdelivr.net/npm/@anthropic-robotics/reachy-mini/+esm";
```

### 3. 连接到您的机器人

```js
// 使用Hugging Face进行身份验证
if (!await robot.authenticate()) {
    robot.login();  // 重定向到HF登录页面
    return;
}

// 连接到信号服务器
await robot.connect();

// 等待机器人出现
robot.addEventListener("robotsChanged", (e) => {
    const robots = e.detail.robots;
    console.log("可用机器人:", robots);
});

// 使用特定机器人开始会话
const detach = robot.attachVideo(document.querySelector("video"));
await robot.startSession(robotId);

// 您已上线 — 视频正在流传输，数据通道已打开
```

### 4. 控制机器人

```js
// 移动头部（roll, pitch, yaw以度为单位）
robot.setHeadRpyDeg(0, 10, -5);

// 移动天线（右、左以度为单位）
robot.setAntennasDeg(30, -30);

// 旋转身体（yaw以度为单位）
robot.setBodyYawDeg(15);

// 原子性原始单位更新（单个数据通道消息；无XYZ丢失）
robot.setTarget({
    head: rpyToMatrix(0, 10, -5).flat(),    // number[16] 扁平4×4
    antennas: [degToRad(30), degToRad(-30)],
    body_yaw: degToRad(15),
});

// 在机器人上播放声音文件
robot.playSound("wake_up.wav");

// 通过数据通道发送任意JSON命令
robot.sendRaw({ my_custom_command: "hello" });
```

### 5. 接收机器人状态

```js
// 流传输时每约500ms发出。线形状、原始单位 —
// 使用导出的数学工具进行人类转换。
robot.addEventListener("state", (e) => {
    const { head, antennas, body_yaw, motor_mode, is_move_running } = e.detail;
    // head:            number[16]            — 扁平行主4×4
    // antennas:        [rightRad, leftRad]
    // body_yaw:        number                — 弧度
    // motor_mode:      "enabled" | "disabled" | "gravity_compensation"
    // is_move_running: boolean
    const rpy = matrixToRpy(head);   // { roll, pitch, yaw } 以度为单位
});
```

### 6. 音频

```js
// 取消机器人扬声器静音（浏览器中默认静音）
robot.setAudioMuted(false);

// 取消您的麦克风静音（双向音频，如果机器人支持）
robot.setMicMuted(false);

// 检查双向音频是否可用
robot.addEventListener("micSupported", (e) => {
    console.log("麦克风支持:", e.detail.supported);
});
```

### 7. 清理

```js
detach();                    // 移除视频绑定
await robot.stopSession();   // 返回'connected'状态
robot.disconnect();          // 关闭信号（保持身份验证）
robot.logout();              // 清除HF凭据
```

## API参考

### 构造函数

```js
new ReachyMini({
    signalingUrl: "https://pollen-robotics-reachy-mini-central.hf.space",  // 默认
    enableMicrophone: true,  // 默认 — 在startSession()时请求麦克风
})
```

### 状态机

```
'disconnected' ──connect()──▸ 'connected' ──startSession()──▸ 'streaming'
     ▴ disconnect()                ▴ stopSession()
     └─────────────────────────────┘
```

### 属性（只读）

| 属性 | 类型 | 描述 |
| :--- | :--- | :--- |
| `state` | `string` | `"disconnected"`、`"connected"`或`"streaming"` |
| `robots` | `Array` | 可用机器人：`[{ id, meta: { name } }]` |
| `robotState` | `Object` | 最新`state`事件详情 — `{ head: number[16], antennas: [rRad, lRad], body_yaw, motor_mode, is_move_running }`（线形状） |
| `username` | `string\|null` | `authenticate()`后的HF用户名 |
| `isAuthenticated` | `boolean` | 是否有有效的HF令牌 |
| `micSupported` | `boolean` | 机器人是否提供双向音频 |
| `micMuted` | `boolean` | 您的麦克风静音状态 |
| `audioMuted` | `boolean` | 机器人扬声器静音状态（本地） |

### 方法

| 方法 | 返回值 | 描述 |
| :--- | :--- | :--- |
| `authenticate()` | `Promise<boolean>` | 检查现有HF OAuth令牌 |
| `login()` | — | 重定向到HF登录页面 |
| `connect()` | `Promise` | 打开SSE连接，接收机器人列表 |
| `startSession(robotId)` | `Promise` | 协商WebRTC，在视频+数据就绪时resolve |
| `stopSession()` | `Promise` | 结束会话，返回`connected` |
| `disconnect()` | — | 关闭信号（保持身份验证） |
| `logout()` | — | 清除HF凭据 |
| `attachVideo(videoEl)` | `() => void` | 绑定视频流到元素；返回清理函数 |
| `setTarget({ head?, antennas?, body_yaw? })` | `boolean` | 原子性原始单位更新 — `head`是`number[16]`（扁平4×4），`antennas`是`[rRad, lRad]`，`body_yaw`是弧度 |
| `setHeadRpyDeg(roll, pitch, yaw)` | `boolean` | 以度为单位设置头部方向（包装`setTarget`） |
| `setAntennasDeg(right, left)` | `boolean` | 以度为单位设置天线位置（包装`setTarget`） |
| `setBodyYawDeg(yaw)` | `boolean` | 以度为单位设置身体偏航（包装`setTarget`） |
| `playSound(filename)` | `boolean` | 在机器人上播放声音文件 |
| `sendRaw(data)` | `boolean` | 通过数据通道发送任意JSON |
| `requestState()` | `boolean` | 请求状态快照 |
| `setAudioMuted(muted)` | — | 静音/取消静音机器人扬声器（本地） |
| `setMicMuted(muted)` | — | 静音/取消静音您的麦克风 |

### 事件

使用`robot.addEventListener(name, handler)` — SDK扩展自`EventTarget`。

| 事件 | 详情 | 描述 |
| :--- | :--- | :--- |
| `connected` | `{ peerId }` | 信号连接已建立 |
| `disconnected` | `{ reason }` | 信号连接丢失 |
| `robotsChanged` | `{ robots }` | 机器人列表已更新 |
| `streaming` | `{ sessionId, robotId }` | WebRTC会话活动 |
| `sessionStopped` | `{ reason }` | 会话结束 |
| `state` | `{ head, antennas, body_yaw, motor_mode, is_move_running }` | 机器人状态更新（约500ms；线形状 — 见上文"接收机器人状态"） |
| `videoTrack` | `{ track, stream }` | 视频轨道可用 |
| `micSupported` | `{ supported }` | 双向音频可用性 |
| `error` | `{ source, error }` | 来自`signaling`、`webrtc`或`robot`的错误 |

### 数学工具

```js
import { rpyToMatrix, matrixToRpy, degToRad, radToDeg } from "./reachy-mini.js";

rpyToMatrix(roll, pitch, yaw)  // 度 → 4×4旋转矩阵 (ZYX)
matrixToRpy(matrix)            // 4×4矩阵 → { roll, pitch, yaw } 以度为单位
```

## 安全

- 身份验证通过Hugging Face OAuth进行 — 只有登录HF的用户才能访问信号服务器。
- 默认情况下，您只能连接到注册在您自己HF账户下的机器人。
- WebRTC连接已加密（DTLS/SRTP）。

## 先决条件

- 您的机器人必须运行无线固件并连接到中央信号服务器。
- 机器人必须配置有有效的Hugging Face令牌（见[使用](/reachymini_platforms_reachy_mini_usage)）。
- 目前仅支持**无线版本**。

## 示例

一个完整的工作示例可作为Hugging Face Space使用：
[cduss/webrtc_example](https://huggingface.co/spaces/cduss/webrtc_example)

它演示了视频流传输、头部/天线控制、双向音频和声音播放 — 所有这些都来自一个静态HTML页面。
