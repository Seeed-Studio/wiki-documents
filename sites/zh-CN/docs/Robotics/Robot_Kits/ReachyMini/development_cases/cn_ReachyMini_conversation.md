---
description: 本教程介绍如何为 Reachy Mini 部署开源对话机器人应用 Reachy Mini Conversation，串联豆包大模型、豆包流式语音识别与 Edge TTS，实现语音对话、动作执行、声源定位、手部跟随与仿真/真机镜像。
title: Reachy Mini 豆包语音对话应用
slug: /reachymini_conversation
keywords:
  - reachy mini
  - robotics
  - open source
  - robot kit
  - expressive robot
  - python sdk
  - ai robot
  - Doubao
  - 语音对话
last_update:
  date: 09/30/2026
  author: FanWenhan
translation:
  skip: [es, ja, pt, en]
createdAt: '2026-05-27'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/cn/reachymini_conversation/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Reachy Mini 豆包语音对话应用

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/DoubaoVedio.jpg" alt="Reachy Mini 语音对话应用" />
</div>

<p align="center">
    <a href="https://github.com/TheMoonAstronaut/Reachy_Mini_conversation/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.12-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/reachy__mini-1.10.0-green.svg" alt="reachy_mini SDK" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%20%7C%20Windows-orange.svg" alt="Platform" />
</p>

<p align="center">
    <strong>语音对话 · 豆包 LLM 工具调用 · 声源定位 · 手部跟随 · 仿真/真机镜像 · Gradio Web UI</strong>
</p>

[Reachy Mini Conversation](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation) 是一个开源的对话式机器人应用，为 Pollen Robotics 的 Reachy Mini 设计。它把**豆包大语言模型（豆包方舟 Ark）**、**豆包流式语音识别 WebSocket API**、**Edge TTS** 三者串联起来，通过 Reachy Mini SDK 提供完整的语音对话体验。Web UI 基于 Gradio，支持 MuJoCo 仿真与真机镜像、声源定位驱动头部、MediaPipe 手部跟随。

<GitHubStarButton
  owner="TheMoonAstronaut"
  repo="Reachy_Mini_conversation"
  ariaLabel="在 GitHub 上为 Reachy_Mini_conversation 点亮 Star"
/>

:::tip

本 wiki 仅以豆包大语言模型 Doubao-Seed-Character 与豆包流式语音识别 2.0 为案例，再次提醒 Reachy Mini 本身支持接入任意一款国内外模型，也支持本地部署且以服务化 API 公开的模型。

:::

---

## 项目特点

1. **语音对话**：说中文 → 豆包 ASR 实时识别 → 豆包 LLM 回复（可调用动作工具）→ Edge TTS 播音，动作与语音并行执行。
2. **身体动作**：LLM 主动调用工具（dance / move_head / play_emotion / idle_sway 等），后台线程执行，不阻塞对话。
3. **声源定位**：麦克风阵列检测说话人方向，自动转头（默认关闭，可手动开启）。
4. **手部跟随**：MediaPipe 检测手掌，头部实时跟随（对话中说「开始手部跟随」或使用 UI 开关）。
5. **真机 ↔ 仿真镜像**：左侧 three.js 交互式 3D 视图 + MuJoCo 渲染对照，右侧真机摄像头实时画面。
6. **待机微动**：空闲时呼吸式头部微动 + 天线摆动（官方 BreathingMove 移植），说话时自动切换为音频驱动的摆头。
7. **Gradio Web UI**：浏览器打开 `localhost:7860` 即可使用，深色主题。

**适用硬件**：Reachy Mini Lite（有线 USB）与无线版（RPi CM4 本体）；仿真模式无需硬件。三种形态一条命令隔离：`--sim` / `--wired` / `--robot`。

---

## 效果展示

| **📺 演示视频** |
| :---: |
| [![点击观看 Bilibili 演示视频](https://files.seeedstudio.com/wiki/robotics/Reachymini/DoubaoVedio.jpg)](https://www.bilibili.com/video/BV1WP7C63EgA)<br/>[**📺 点击前往 Bilibili 观看完整演示视频**](https://www.bilibili.com/video/BV1qraZ6GEYi) |

---

## 环境要求

:::caution 前置要求 — 请先完成 Reachy Mini SDK 安装

开始本教程前，请**务必**先完成 Reachy Mini 的 Python SDK 安装，具体流程请参考 [Reachy Mini Python SDK 安装指南](/cn/reachymini_sdk_installation/)。

:::

| 项目 | 要求 |
|------|------|
| **Python** | 3.12（推荐通过 conda 安装） |
| **操作系统** | Ubuntu 22.04 / Debian，或 Windows 11 |
| **硬件（可选）** | Reachy Mini Lite（有线 USB）/ 无线版（内置树莓派 CM4） |
| **网络** | 需访问火山引擎 API；语音对话需配置 API Key |

**三种配置方式，按你的环境选一条**：

| 你的情况 | 走哪条 |
|----------|--------|
| **有线版机器人** + Ubuntu PC | 👉 [方式 A：Ubuntu](#方式-aubuntu有线真机--纯仿真) |
| **有线版机器人** + Windows PC | 👉 [方式 B：Windows](#方式-bwindows有线真机--纯仿真) |
| **无线版机器人**（内置树莓派 CM4） | 👉 [方式 C：无线版](#方式-c无线版跑在机器人本体) |
| 还没买机器人，先体验仿真 | 任选 A / B 的纯仿真模式，无需硬件 |

三者的**配置 API Key、局域网访问、故障排查**是共用的，见各自方式之后的公共章节。

---

## 快速上手

<Tabs>
<TabItem value="ubuntu" label="方式 A：Ubuntu（有线真机 / 纯仿真）">

**前置**：Ubuntu / Debian 系统，Python 3.12（conda 提供），sudo 权限。已在 Ubuntu 22.04 全新环境实测通过（290 测试全过 + 真机全链路验收）。

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>克隆仓库</h4>
<p className="rebot-step-label">第 1 步</p>

```bash
git clone https://github.com/TheMoonAstronaut/Reachy_Mini_conversation.git
cd Reachy_Mini_conversation
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>安装系统依赖（cairo / gstreamer / ffmpeg）</h4>
<p className="rebot-step-label">第 2 步</p>

```bash
sudo ./scripts/install_deps.sh
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>创建并激活 conda 环境</h4>
<p className="rebot-step-label">第 3 步</p>

```bash
conda env create -f environment.yml
conda activate reachy
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>安装 Python 包 + SDK 降级补丁</h4>
<p className="rebot-step-label">第 4 步</p>

```bash
pip install -e ".[dev]"
./scripts/patch_sdk_p7b.sh
```

:::tip 为什么需要 patch_sdk_p7b.sh

Ubuntu 22.04 必需：官方仓库没有 gst-plugins-rs，webrtcsink 缺失时 SDK 原版直接抛错导致整个应用起不来；补丁降级为"仅本地 IPC"。脚本幂等，重建 conda 环境 / 升级 reachy-mini 后重跑一次即可。
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>（可选，推荐）防止机器人 USB 频繁掉线：禁用 autosuspend</h4>
<p className="rebot-step-label">第 5 步 · 可选</p>

```bash
sudo cp scripts/udev/50-reachy-mini-usb.rules /etc/udev/rules.d/
sudo udevadm control --reload && sudo udevadm trigger
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>配置 API Key</h4>
<p className="rebot-step-label">第 6 步 · 语音对话必需</p>

见下方 [配置 API Key](#配置-api-key三种方式共用) 章节。

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>（可选）下载手部跟随模型（~8 MB）</h4>
<p className="rebot-step-label">第 7 步 · 可选</p>

不装则「手部跟随」不可用：

```bash
mkdir -p ~/.cache/reachymini
curl -L -o ~/.cache/reachymini/hand_landmarker.task \
  https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task
# 国内访问不通时换 GitHub 镜像:
# curl -L -o ~/.cache/reachymini/hand_landmarker.task \
#   "https://gh-proxy.com/https://raw.githubusercontent.com/google-ai-edge/mediapipe-samples/main/examples/hand_landmarker/ios/HandLandmarker/hand_landmarker.task"
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4>启动（三种形态一条命令隔离，各自独立日志）</h4>
<p className="rebot-step-label">第 8 步</p>

```bash
./scripts/start.sh --sim        # 纯仿真（默认，跑在 PC）
./scripts/start.sh --wired      # 有线真机：PC + USB 接入的机器人（启动即自动连）
./scripts/start.sh --robot      # 无线版唯一形态：跑在机器人树莓派本体（SSH 上去执行）
# 日志：logs/start-<模式>-<时间戳>.log
```

启动后浏览器打开 [http://localhost:7860](http://localhost:7860)。切换调试模式：Ctrl+C 停掉换命令重启（sim daemon 健康实例自动复用）。

:::tip 🐧 Ubuntu 自检
装完可先跑 `python -m pytest tests/` 自检（期望 290 全过，skip 为无硬件相关）；更多细节见仓库 [`docs/INSTALL.md`](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation/blob/main/docs/INSTALL.md) Linux 章节。
:::

</div>
</section>
</div>

</TabItem>
<TabItem value="windows" label="方式 B：Windows（有线真机 / 纯仿真）">

支持原生 Windows（官方 SDK 经 `gstreamer-bundle` 自动带 GStreamer，无需手动装 GTK）

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>创建 Python 3.12 环境（名字随意）</h4>
<p className="rebot-step-label">第 1 步</p>

```powershell
conda create -n reachy-conversation-test python=3.12 -y
conda activate reachy-conversation-test
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>安装依赖</h4>
<p className="rebot-step-label">第 2 步</p>

```powershell
python -m pip install -e ".[dev]"
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>（仅当报 DLL 错时）修复 GStreamer bundle 的 libexpat 冲突</h4>
<p className="rebot-step-label">第 3 步 · 仅异常时</p>

正常情况下无需操作：包导入时（含 daemon B 子进程）会自动预加载 conda 的兼容 libexpat。若绕开本包直接 import reachy_mini 后遇到 "DLL load failed while importing pyexpat"，再执行下面的手动替换（先备份）：

```powershell
$envs = python -c "import sys; print(sys.prefix)"   # 当前环境路径
Copy-Item "$envs\Lib\site-packages\gstreamer_libs\bin\libexpat.dll" `
          "$envs\Lib\site-packages\gstreamer_libs\bin\libexpat.dll.bak"
Copy-Item "$envs\Library\bin\libexpat.dll" `
          "$envs\Lib\site-packages\gstreamer_libs\bin\libexpat.dll" -Force
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>配置 API Key（可选，纯仿真看 UI 可跳过）</h4>
<p className="rebot-step-label">第 4 步</p>

```powershell
内容见下文「配置 API Key」节
```

国内网络注意：edge-tts 直连微软语音端点 TLS 频繁被重置（现象=合成频繁超时重试）。有本地代理（Clash/v2ray 等）时在 env.json 加一行即可走代理：

```json
"edge_tts": { "voice": "zh-CN-XiaoxiaoNeural", "proxy": "http://127.0.0.1:7890" }
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>（可选）手部跟随模型（~8MB）</h4>
<p className="rebot-step-label">第 5 步 · 可选</p>

官方源 storage.googleapis.com 国内不通，用 GitHub 镜像（gh-proxy）：

```powershell
mkdir -p ~/.cache/reachymini
curl -L -o ~/.cache/reachymini/hand_landmarker.task \
  https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task
# 国内访问不通时换 GitHub 镜像:
# curl -L -o ~/.cache/reachymini/hand_landmarker.task \
#   "https://gh-proxy.com/https://raw.githubusercontent.com/google-ai-edge/mediapipe-samples/main/examples/hand_landmarker/ios/HandLandmarker/hand_landmarker.task"

```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>启动</h4>
<p className="rebot-step-label">第 6 步</p>

```powershell
.\scripts\start.ps1            # 纯仿真
.\scripts\start.ps1 -Wired     # 有线真机（机器人 USB 插本机，启动即自动连）
###
如果上述命令运行失败可选择备用方案
```
备用方案：

激活conda环境检查 reachy_mini 可导入），手动起两个终端的等价命令：

```powershell
# 终端1
$env:REACHYMINI_RUN_MODE="pure_sim"; python -m reachymini_conversation.daemon_launcher --sim --headless
# 终端2
python -m reachymini_conversation --ui
```

**验证安装**：

```powershell
python -m pytest tests/   # 期望：全通过，skip 为 v4l2（Linux-only）/无硬件相关
```

</div>
</section>
</div>

</TabItem>
<TabItem value="wireless" label="方式 C：无线版（跑在机器人本体）">

无线版内置树莓派 CM4（官方 daemon 已在上面运行：电机 + 相机 + 麦克风 + 扬声器）。把项目部署到机器人本体后，**同一 WiFi 下任意设备的浏览器都能直接控制机器人**，无需 PC 常驻、无需 USB 线：

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>SSH 上树莓派</h4>
<p className="rebot-step-label">第 1 步</p>

```bash
ssh pollen@reachy-mini.local   # 官方系统 Raspberry Pi OS
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>安装项目（同方式 A，CM4 为 aarch64）</h4>
<p className="rebot-step-label">第 2 步</p>

装系统依赖 → 建 conda 环境 → `pip install -e .`

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>启动 on-robot 模式</h4>
<p className="rebot-step-label">第 3 步</p>

```bash
./scripts/start.sh --robot
```

纯真机 `pure_real` 模式，不跑仿真。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>局域网内任意设备打开 Web UI</h4>
<p className="rebot-step-label">第 4 步</p>

同一 WiFi 设备打开 `http://reachy-mini.local:7860`

</div>
</section>
</div>

:::caution 📡 无线版限制
CM4 缺 ARMv8 crypto 指令，Python 版 MediaPipe 手部跟随在本体上不可用（自动降级，其余功能正常）。麦克风录音异常先查 FPC 排线。
:::

完整步骤（含麦克风/扬声器排障）见仓库 [`docs/ROBOT.md`](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation/blob/main/docs/ROBOT.md)。

</TabItem>
</Tabs>

---

## 火山引擎（豆包）API 申请

### LLM 模型 API 接入

1. 进入[火山引擎方舟管理控制台官网](https://www.volcengine.com/docs/6561/1354869?lang=zh)

2. 在 API Key 管理中进行模型 API 申请

| **进行 API Key 申请** | **设置 API 名称并创建** |
| :---: | :---: |
| ![API Key 申请](https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Create1.png) | ![确认创建](https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Create2.png) |

3. 进入体验中心，选择合适的模型

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access1.png" width="600" alt="体验中心选择模型" />
</div>

4. 选择自己所需要的文本生成模型

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access2.png" width="600" alt="选择文本生成模型" />
</div>

5. 选择之前创建好的 API Key，完成模型 API 接入

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access3.png" width="600" alt="选择 API Key 完成接入" />
</div>

6. 创建完成，可以根据开发需求查看 API 调用的小 demo 代码

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access4.png" width="600" alt="查看 API 调用 demo" />
</div>

如果需要关闭 LLM 模型服务，可以在`开通管理`中进行模型服务管理

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_Server_Manage.png" width="600" alt="模型服务管理" />
</div>

---

### 语音识别模型 API 申请

1. 进入[豆包语言界面](https://console.volcengine.com/speech/new/experience/asr?projectName=default)

2. 选择语音识别模型并进行 API 调用

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/Voice_API_Create1.png" width="600" alt="选择语音识别模型" />
</div>

3. 创建新的 API Key 并选择，完成模型 API 接入

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/Voice_API_Create2.png" width="600" alt="创建语音识别 API Key" />
</div>

:::warning

注意这里的 API Key 和之前的 LLM 模型使用的 API Key 不同，需要创建新的 API Key。

:::

如果需要关闭 Voice 模型服务，可以在`开通管理`中进行模型服务管理

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/Voice_Server_Manage.png" width="600" alt="语音模型服务管理" />
</div>

---

## 配置 API Key（三种方式共用）

把 API Key 写到 `~/.reachymini/env.json`（用户级配置，不入 git）：

```bash
mkdir -p ~/.reachymini
cat > ~/.reachymini/env.json <<'EOF'
{
  "doubao_llm": {
    "api_key": "your-ark-api-key",
    "model": "doubao-seed-character-251128"
  },
  "doubao_asr": {
    "api_key": "your-asr-api-key"
  },
  "edge_tts": {
    "voice": "zh-CN-XiaoxiaoNeural"
  }
}
EOF
chmod 600 ~/.reachymini/env.json
```

也可以在 UI 里展开「⚙️ 设置（API Key / Model）」在线编辑保存（UI 保存后新对话立即生效；直接改文件需重启进程）。

申请地址：

- **豆包 LLM**：[火山引擎方舟控制台](https://www.volcengine.com/docs/6561/1354869)
- **豆包 ASR**：[火山引擎语音技术](https://www.volcengine.com/product/asr)

全部配置项见仓库 [`docs/CONFIG.md`](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation/blob/main/docs/CONFIG.md)。

---

## 启动与使用

### 启动

按上文方式 A / B / C 选择对应命令启动后，浏览器打开 [http://localhost:7860](http://localhost:7860) 即可使用 Gradio Web UI。

### 局域网访问（三种方式共用）

UI 监听 `0.0.0.0`，同一 WiFi 下的手机/平板/其他电脑直接用 `http://<本机局域网IP>:7860` 打开即可（启动时控制台会打印，如 `http://192.168.x.x:7860`；无线版用 `http://reachy-mini.local:7860`）；视频流、3D 视图、语音播报会自动跟随访问用的 IP，无需任何配置。

:::warning ⚠️ 安全提示
局域网链接意味着**同网络的任何人都能控制机器人**，请只在可信 WiFi 下使用，不要在公共网络开放。
:::

:::tip 📱 手机浏览器提示
输入链接时请**带 `http://` 前缀**（部分浏览器默认升级 https 会报"连接不安全"）。
:::

## 系统架构（简版）

```text
┌──────────────────────────────────────┐
│  Web UI (Gradio @ localhost:7860)    │
│  ┌─────────────┐ ┌─────────────────┐ │
│  │ 3D 视图+视频 │ │  对话 / 配置面板 │ │
│  └─────────────┘ └─────────────────┘ │
└──────────────────────────────────────┘
                 ↕
┌──────────────────────────────────────┐
│  App 进程                             │
│  MirrorOrchestrator │ VoicePipeline   │
│  ├ sim + real 镜像   │ ASR→LLM→TTS    │
│  SoundLocalizer │ HandFollower        │
│  IdleBreath（待机微动）               │
└──────────────────────────────────────┘
                 ↕
┌──────────────────────────────────────┐
│  reachy_mini SDK (1.10.0)             │
└──────────────────────────────────────┘
                 ↕
┌──────────────────────────────────────┐
│  硬件 / 仿真                          │
│  reachy-mini-daemon --sim / 真机      │
└──────────────────────────────────────┘
```

详细架构见仓库 [`docs/ARCHITECTURE.md`](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation/blob/main/docs/ARCHITECTURE.md)。

---

## 故障排查

遇到问题先查仓库 [`docs/TROUBLESHOOTING.md`](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation/blob/main/docs/TROUBLESHOOTING.md)。

常见问题：

- **找不到 conda**：安装 [Miniconda](https://docs.conda.io/en/latest/miniconda.html)
- **端口被占（7860/7861/8000/8001）**：`lsof -i :7860` 找占用进程杀掉再启动
- **浏览器听不到声音**：页面上先点任意处（浏览器自动播放策略），或检查 🔊 音量滑条
- **录音没声音**：确认系统默认输入源是活麦克风（`pactl info | grep 默认源`），部分机器默认是哑设备
- **真机连不上**：确认已通电、USB 线插紧（有线版）；日志看 `/tmp/reachy-daemon.log`
- **Ubuntu 应用起不来报 WebRTC 连接拒绝**：漏跑 `./scripts/patch_sdk_p7b.sh`
- **机器人 USB 频繁掉线/真机画面卡死**：装 `scripts/udev/50-reachy-mini-usb.rules`（方式 A 第 5 步）

---

## 参考文档

- [Reachy Mini Conversation 项目仓库](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation)
- [reachy_mini SDK](https://github.com/pollen-robotics/reachy_mini) — Pollen Robotics
- [reachy_mini_conversation_app](https://github.com/pollen-robotics/reachy_mini_conversation_app) — 官方 HF-Realtime 参考实现
- [reachy_mini_dances_library](https://github.com/pollen-robotics/reachy_mini_dances_library) — 舞蹈动作库

许可证：[Apache 2.0](https://github.com/TheMoonAstronaut/Reachy_Mini_conversation/blob/main/LICENSE)（与 [reachy_mini](https://github.com/pollen-robotics/reachy_mini) 一致）。

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供不同的支持，以确保您与我们的产品体验尽可能顺畅。我们提供多种沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
