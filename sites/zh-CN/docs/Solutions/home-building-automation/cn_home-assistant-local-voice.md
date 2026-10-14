---
description: 用一句话控制 Home Assistant 里的灯和家电、语音在本地识别：需要哪些设备、怎么部署、有哪些接口，以及 reComputer J40 上的实测数据
title: Home Assistant 本地语音控制方案：选型、部署与实测数据
keywords:
  - Home Assistant 本地语音
  - Home Assistant 语音助手
  - 全屋智能 语音控制
  - 本地语音识别
  - Wyoming
  - Home Assistant Voice
  - Zigbee
  - Jetson Orin NX
  - Qwen3-ASR
  - Matcha-TTS
image: https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg
slug: /solutions/home-assistant-local-voice
sidebar_position: 24
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/solutions/home-assistant-local-voice/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[使用须知]
支持中文和英文语音指令。Home Assistant 官方的 Xiaomi Home 集成只允许非商业用途，本方案不预装；用于商业交付时不要使用该集成。
:::

## 这套方案是干什么的

把家里的灯、窗帘、空调和 Zigbee 传感器接进 Home Assistant，用一句话控制它们。说「打开客厅灯」，Home Assistant 在本地执行并语音回复「客厅灯已打开」。语音识别和语音合成在本地的 reComputer J40 上完成，说话的录音不上传到云端语音服务。用在家庭客厅、卧室，也适合全屋智能集成商在客户家里交付。

- 部署包（Docker Compose 与 Home Assistant 配置模板）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/home_assistant_whole_home)
- 语音引擎源码：[github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/home-assistant-local-voice-hub)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>录音不上云</h3>
                <p>听懂指令、生成回复语音都在 reComputer J40 上完成，指令由 Home Assistant 在本地执行。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>说完 0.12 秒出文字</h3>
                <p>5 条中英文指令的中位数，见「性能与实测数据」。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Home Assistant 原生接入</h3>
                <p>语音服务经 Wyoming Protocol 集成接入 Home Assistant 语音助手，不改 Home Assistant 本身。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Zigbee 设备直接接入</h3>
                <p>插上 Connect ZBT-2，Zigbee 传感器和开关接入 Home Assistant，不需要各品牌网关。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

Home Assistant 语音助手里的一次对话：说「把客厅灯打开」，本地语音服务识别后由 Home Assistant 执行，回复「客厅灯已打开」，右侧的客厅灯卡片随即变为开启。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg" alt="Home Assistant 语音助手：「把客厅灯打开」→「客厅灯已打开」，客厅灯变为开启"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/dashboard-zh-20261008-53455231.jpg" alt="Home Assistant 面板：客厅灯、窗帘、温湿度、空调，卧室灯和加湿器"/>
</div>

截图中的灯、窗帘、空调和传感器是演示用的模拟设备；语音输入是同一台 reComputer J40 合成的语音，不是真人录音。

## 需要哪些硬件

现场需要四样东西：Home Assistant 主机、语音主机、Zigbee 协调器、语音终端。

| 设备 | 承担什么 | 说明 |
|---|---|---|
| ARM64 Linux 主机（64 位系统，8 GB 内存） | 运行 Home Assistant | 一户一台 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> [reComputer J40 系列（J4012，Orin NX 16GB）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | 本地语音识别和语音合成 | 首次启动下载语音模型，预留至少 30 GB 磁盘 |
| Home Assistant Connect ZBT-2 | 接入 Zigbee 设备 | 插在 Home Assistant 主机的 USB 口 |
| Home Assistant Voice 预览版 | 房间里的语音终端：听指令、播报回复 | 每个房间一台 |
| SONOFF SNZB Zigbee 传感器（可选） | 采集温湿度等状态 | 经 ZBT-2 接入 |

Home Assistant 主机、reComputer J40 和语音终端连在同一局域网。使用苹果「家庭」App 时，iPhone 与 Home Assistant 主机在同一局域网。

## 现场怎么部署

### 一、放置设备

:::tip[语音主机与 Home Assistant 分开放]
reComputer J40 只跑语音服务，可以放在机柜或弱电箱里，经局域网与 Home Assistant 通信；语音终端放在要说话的房间。
:::

### 二、装软件：三步

逐设备的操作步骤在可部署方案页，这里只讲轮廓。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/home-assistant-local-voice-hub" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **Home Assistant 主机**：部署 Home Assistant，带上预置的中英日语音指令句式和房间设备模板。
2. **语音主机**：在 reComputer J40 上部署语音服务，首次启动下载模型；完成后语音识别和合成在本机运行。
3. **接入与验证**：在 Home Assistant 里添加 Wyoming Protocol 集成，指向 reComputer J40 的两个端口，设为语音助手的语音转文字与文字转语音；对语音终端说「打开客厅灯」，确认灯被打开。

## 有哪些接口

语音服务以 Wyoming Protocol 提供给 Home Assistant，其余自动化都在 Home Assistant 里完成。

- **Home Assistant**：添加 Wyoming Protocol 集成即可使用，语音助手里出现 `seeed-local-voice` 的语音转文字与文字转语音。
- **苹果「家庭」 / Siri**：Home Assistant 的 HomeKit 桥接把设备同步到 iPhone。
- **自建系统**：通过 Home Assistant 自带的接口读写设备状态。

| 端口 | 在哪台机器 | 内容 |
|---|---|---|
| HTTP 8123 | Home Assistant 主机 | Home Assistant 网页与接口 |
| TCP 10300 | reComputer J40 | 语音转文字服务（Wyoming） |
| TCP 10200 | reComputer J40 | 文字转语音服务（Wyoming） |

## 性能与实测数据

### 整链：说话到执行

Home Assistant 运行在 8 GB 内存的 ARM64 Linux 主机上，语音服务运行在 reComputer J40 系列（Orin NX 16GB）上；输入为合成语音，送入 Home Assistant 语音助手。

| 指标 | 结果 |
|---|---|
| 中英文开关灯指令 | 5/5 条执行成功，均由 Home Assistant 在本地处理（实测） |
| 语音结束到识别出文字 | 中位数 0.12 秒，范围 0.11–0.95 秒（实测） |

复现：`sensecraft-solutions/solutions/home_assistant_whole_home`（部署包）

### 语音服务单独测量

同一台 reComputer J40 系列，语音服务直连，输入 16 kHz 单声道合成语音。

| 文本 | 回复语音首包 | 识别结果 | 语音结束后转写用时 |
|---|---:|---|---:|
| 打开客厅灯 | 0.122 秒（实测） | 打开客厅灯。 | 0.383 秒（实测） |
| 关闭卧室的灯 | 0.049 秒（实测） | 关闭卧室的灯。 | 0.421 秒（实测） |
| Turn on the living room light | 0.115 秒（实测） | Turn on the living room light. | 0.579 秒（实测） |

经 Wyoming 路径时两条样本转写用时 0.13 秒（实测）。

复现：`sensecraft-solutions/solutions/home_assistant_whole_home/assets/docker/docker-compose.jetson-voice.yml`

### 模型与运行时

| 设备 | 语音识别 | 语音合成 | 运行时 |
|---|---|---|---|
| reComputer J40 系列 | Qwen3-ASR | Matcha-TTS | TensorRT-Edge-LLM / TensorRT |

影响效果的设置：

- 语音助手语言：中文或英文，各自用预置的指令句式。
- 设备与房间命名：指令按 Home Assistant 里的名称匹配，「客厅灯」要与实体名称一致。

### 已知退化

- **实体别名与命名偏离**：意图匹配依赖实体精准命名，若语音口令（如「大厅吸顶灯」）与 Home Assistant 配置实体别名（「客厅灯」）存在较大语义差异，文字识别正确但意图可能未命中。
- **复合与连续意图**：当前模型针对单意图家居控制优化，多动作复合指令（如「打开空调并把窗帘关上一半」）需拆为单句交互下发。
- **多终端并发交互**：单台 J4012 主机推荐承载 1–3 台语音拾音终端并发；若多房间同时长语音下发，首字响应时延会轻微增加。

## 数据与素材出处

- 截图来自 Home Assistant 2026.9.3（Apache License 2.0，[home-assistant.io](https://www.home-assistant.io)），设备为模拟设备。
- 语音输入由同一台 reComputer J40 的语音合成生成，未使用真人录音或第三方音频。
