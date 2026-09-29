---
description: 在边缘设备上做一台可打断的语音终端：需要哪些板子和麦克风、有哪些接口、语言 × 设备支持矩阵，以及 RK3576 上的设备实测数据
title: 端侧可打断对话式语音 AI 方案：搭建、部署与实测数据
keywords:
  - 对话式语音 AI
  - 可打断 语音助手
  - 边缘语音终端
  - AEC 麦克风阵列
  - Qwen3-ASR
  - Matcha-TTS
  - sherpa-onnx 唤醒词
  - RK3576
  - RK3588
  - RK1828
  - Jetson Orin NX
  - OpenAI 兼容接口
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg
slug: /solutions/conversational-voice-ai
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[使用须知]
这是开源参考实现，不是认证产品；语音精度只在 RK3576 与 Orin NX（Qwen3-ASR int4）上做过设备实测。
:::

## 这套方案是干什么的

有人走到设备前开口说话，设备出声回答；回答播到一半时他再开口，设备立刻停下，不等这句话播完。

适用于人对着机器说话、手上腾不开的场合：服务台、展台与自助终端、机器人语音入口、智能家居与房间终端。

- 开源实现：[github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>语音在本地处理</h3>
                <p>识别（Qwen3-ASR）和合成（Matcha-TTS）都跑在边缘设备上。选全本地套餐时对话模型也在设备上，首次启动后可断网运行。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>插上麦克风就能打断</h3>
                <p>reSpeaker XVF3800 带硬件回声消除，USB 插上即自动识别、可热插拔。回答播放中开口，设备立即停下。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>开源，可接自有业务系统</h3>
                <p>代码开源。对话走 OpenAI 兼容接口，换成你自己的知识库、Agent 或点单后台只改一个地址，语音层不用动。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>中英文有设备实测数据</h3>
                <p>RK3576 上实测：中文短句字错率 1.05%，合成实时率 0.204。RK3588 与 Jetson 可选 30 种语言。</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO 图：麦克风阵列与音箱在服务台/展台上的现场安装照——需现场拍 -->

## 需要哪些硬件

现场四样东西：麦克风阵列、音箱、一台语音主机；如果对话文本不能出场地，还要一块加速卡或一台装得下 4B 模型的主机。

**① 麦克风阵列**必须带硬件回声消除（AEC）。

| | 麦克风 | 说明 |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 四麦阵列](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>USB 接口，硬件回声消除、降噪与波束成形 | 已验证的默认麦克风。2 通道与 6 通道固件布局都能识别，自动选用已处理通道。其他阵列会取第 1 个采集通道，上线前要在现场做声学测试。 |

**② 音箱**：USB 或 3.5mm，接在同一台设备上。播放时不能靠静音麦克风来避开回声，静音后打断也跟着失效。

**③ 语音主机**跑识别、合成和常驻 Agent，也决定能提供哪些语言：

| | 语音主机 | 能服务的语言 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>瑞芯微 NPU，Qwen3-ASR W8A8 + Matcha | 中文、英文 | 能跑完整本地语音链路的最低成本主机，「性能与实测数据」里的设备实测数据就在这台上测 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>瑞芯微 NPU，TTS 增加 Kokoro RKNN | 全部 30 种 | 需要中英以外的 28 种语言；或以后要加装 RK1828 卡做本地对话 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011（Orin Nano 8GB）](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>GPU 上跑 Qwen3-ASR int4 + Matcha | 全部 30 种 | 主机还要跑别的 AI 任务、需要 GPU 余量。不要在这台上起本地 4B 模型 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012（Orin NX 16GB）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>语音与 Qwen3.5-4B 同机运行 | 全部 30 种 | 对话文本不能出场地 |

reComputer R2000 系列也能跑 CPU 语音链路（sherpa-onnx，只支持英文），可部署方案页的配置器里暂不提供。它不支持中文，ASR 与 TTS 共用四个 CPU 核。

**④ RK 路线的全本地对话**：在 RK3588 主机上加一块 RK1828 / RM182X PCIe NPU 卡跑 Qwen3-4B。卡要独立 12V 供电，主机要装驱动并有设备节点，同一时刻只能常驻一个大模型。

另外：首次启动要联网，并留出空闲磁盘（Orin NX 至少 25 GB）；部署工具要能通过网络访问到主机。

## 现场怎么部署

先装好麦克风和音箱，再跑部署向导。

### 一、装麦克风与音箱

:::tip[先确认麦克风带硬件回声消除]
打断、轮次判定和播放期间不静音麦克风，都要求采集通道已在硬件上消掉音箱回声。没有硬件 AEC 的麦克风会误打断或自激，改软件配置解决不了。
:::

- 默认用 reSpeaker XVF3800。换别的阵列，先在现场做声学测试；未知阵列默认取第 1 个通道。
- 验收时音箱开到正常房间音量。低音量下验收通过的终端，到工作音量可能因声学原因失败，与模型无关。
- reSpeaker 可以在部署前插好，也可以在 Agent 起来后热插。Agent 按 USB 产品标识选采集设备，忽略 HDMI/DP 伪输入，拔插后不用重启容器。

### 二、装软件：四步

部署由 SenseCraft Solution 应用通过 SSH 在主机上执行（本机就是装了 JetPack 6.2 的 Jetson Orin 时，也可以本地部署）。逐设备的操作步骤在部署指南里，这里只列流程。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **选套餐**：云端 / OpenAI 兼容，或全本地。选云端时对话文本发往外部接口；选全本地时数据不出场地。
2. **选对话语言**：部署先把（语言，设备）解析成一份语音配置，再启动其余服务。不支持的组合（例如 reComputer R2000 系列上的中文）以退出码 2 停止整个 `docker compose up`，不会只起一半。
3. **填接口与人设**：云端套餐填接口地址、Key 和模型 ID（默认是北京地域 Qwen 接口 + `qwen3.5-flash`），以及系统提示词。可以把"持续监听"改成"唤醒词后响应"，输入任意简短中英文短语，镜像内置的开放词表 sherpa-onnx 检测器会在启动时本地编译。
4. **在面板里验证**：18000 端口的 Web 面板显示 listening / thinking / speaking / barged-in。

<!-- TODO 图：18000 面板的四种状态截图，以及一次打断的录屏 GIF——需在已部署设备上采集 -->

验收：在真实房间、真实音量下连续三轮，每次在回答开始后 0.5–1 秒打断，确认旧回复立刻停止，打断的那句话没有丢。

耗时：云端套餐约 30 分钟。全本地套餐更久，首次启动要下载模型文件；联网启动成功一次后，镜像与模型文件都已缓存，设备可断网运行。

## 有哪些接口

Agent 调用流式 OpenAI 兼容 Chat Completions 接口。把 `LLM_BASE_URL` 指向你自己的服务即可接入：查自有文档的 RAG 接口、带工具调用的 Agent 框架、机器人指令层、点单或工单后台。语音层不用改。

- **用托管模型**：保留默认值，或替换接口地址、Key 与模型 ID。接口必须支持流式 Chat Completions。
- **用自己的服务**：实现同一套接口。Agent 把转写作为 user 轮发过去，回复边生成边送进合成，服务还没生成完，第一句话已经开始播。
- **直接用语音层**：要在上面做别的 Agent，可以直接调用下面的双工 WebSocket 与离线接口。

### 完整的端口与接口

所有服务都跑在 host 网络下，`<host>` 就是语音主机自己的地址。

| 接口 | 哪种部署 | 承载什么 |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | 所有套餐 | 双工会话：送 PCM 进去，拿转写和 TTS PCM 出来，打断触发的 abort 也走这里 |
| `POST http://<host>:8621/asr` | 所有套餐 | 离线整段转写，不经 VAD、不走流式。「性能与实测数据」中的离线精度数字在这个接口上测 |
| `POST http://<host>:8621/tts` | 所有套餐 | 合成；响应头 `x-rtf` 带实时率 |
| `GET http://<host>:8621/health` | 所有套餐 | 就绪状态，Compose healthcheck 用它 |
| `http://<host>:18000` | 所有套餐 | Web 面板：轮次状态与每轮转写 |
| `http://<host>:1828/v1`、`/health` | RK3588 + RK1828 本地套餐 | 设备上 Qwen3-4B 的 OpenAI 兼容 Chat Completions |
| `http://<host>:8000/v1`、`/health` | Orin NX 本地套餐 | 设备上 Qwen3.5-4B 的 OpenAI 兼容 Chat Completions |
| `LLM_BASE_URL`（出向） | 云端套餐 | 任意 OpenAI 兼容接口 |

两条本地路线对外的接口与云端相同，切换时只改 `LLM_BASE_URL`。不把它指向外部，数据链路里就没有 broker，也没有云端组件。

## 性能与实测数据 {#measured-detail}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### 运行时与关键参数

双工协议与 Agent 在每台主机上相同，只有执行 ASR 与 TTS 的后端不同。

| 语音主机 | ASR 后端 / 模型 | TTS 后端 / 模型 | 解析出的 profile |
|---|---|---|---|
| RK3576 | `rk.asr`——Qwen3-ASR，RKNN 编码器 + RKLLM 解码器，W8A8 | `rk.tts`——matcha-icefall-zh-en，ORT 声学 + RKNN Vocos | `rk3576-default` |
| RK3588（中 / 英） | `rk.asr`——同上 | `rk.tts`——matcha-icefall-zh-en | `rk3588-default` |
| RK3588（其余 28 种） | `rk.asr`——同上 | `rk.tts`——Kokoro v1.0 混合，RKNN INT8 解码前段 + CPU ONNX 前后缀 | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB（中 / 英） | `jetson.trt_edge_llm`——Qwen3-ASR 0.6B，int4 | `jetson.matcha_trt`——matcha-icefall-zh-en，bf16/fp16 Vocos | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB（其余 28 种） | `jetson.trt_edge_llm`——Qwen3-ASR 0.6B，int4 | `jetson.trt_edge_llm`——Qwen3-TTS CustomVoice，int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000 系列（英文） | `cpu.sherpa_asr`——sherpa-onnx 流式 zh-en，int8 CPU | `cpu.sherpa`——sherpa-onnx CPU 音色，int8 | `rpi5-default` |

全本地的 Orin NX 套餐用 TensorRT-Edge-LLM v0.9.1 镜像；为其他 TensorRT / JetPack 版本构建的引擎不会被加载。RK 侧的模型文件在首次启动时拉取。

**语言 × 设备矩阵。** 部署按（语言，设备）选 profile，18 格里 15 格可部署、3 格不支持；可部署的格子中 5 格有端到端实测，其余 10 格的各组件在设备上有实测数字。不支持的格子：reComputer R2000 系列上的中文，以及 RK3576 和 reComputer R2000 系列上的"其余 28 种"。中文不用 Whisper 兜底：Whisper 在已实测的每块板上中文 CER 都在 35–56%。RK3576 只有 Matcha zh-en 一个 TTS 音色，能转写其余 28 种语言，但合成不出回答。

影响部署效果的三个参数：

- `barge_in_min_speaking_ms` `500`、`barge_in_min_chars` `2`：回复已经开始播放、且打断内容不止一个音节时，打断才成立。
- `playback_drain_enabled` `true`：Agent 保持 SPEAKING 直到本地播放缓冲放完。关掉后，用户在余音里说的话会被当成新一轮，旧回复继续播。
- 服务端轮次结束：silero，400 ms 静音 + `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`，在第一个自然停顿处结束轮次；一句中间带停顿的长句只会得到对第一个分句的回复。

### reComputer RK3576 系列实测

条件：Debian 12 + Rockchip BSP，profile `rk3576-default`；测试脚本与语音容器同机，经 `127.0.0.1:8621` 通信，数字不含网络传输。

**离线接口下的 ASR**（`POST /asr`，整段送入，不经 VAD、不走流式）：

| 语言 | 集合 | n | 错误率 |
|---|---|---:|---:|
| 中文 | 短句 | 5 | CER 1.05% |
| 中文 | 长句 10–20 s | 5 | CER 9.62% |
| 英文 | 短句 | 5 | WER 3.65% / CER 1.11% |
| 英文 | 长句 10–20 s | 5 | WER 6.99% / CER 4.16% |

英文长句每个文件都转出了完整的多分句文本；剩下的错误是识别偏差（`"3:2"` 被转成 `"three to two"`），不是截断。

**实时会话下的 ASR**（`/v2v/stream`，出厂默认 `ASR_MAX_NEW_TOKENS=64`、`ASR_FINAL_STOP_ON_PUNCT=1`），按完整参考文本计分：

| 语言 | 集合 | n | 错误率 |
|---|---|---:|---:|
| 中文 | 短句 | 5 | CER 29.09% |
| 中文 | 长句 10–20 s | 5 | CER 84.06% |
| 英文 | 短句 | 5 | WER 16.95% / CER 10.16% |
| 英文 | 长句 10–20 s | 5 | WER 63.38% / CER 62.58% |

实时会话错误率高来自服务端轮次结束判定，不是解码器截断：把 `ASR_MAX_NEW_TOKENS` 放到 256、`ASR_FINAL_STOP_ON_PUNCT` 设为 0 后，两种语言的转写结果逐字节相同。

**TTS**（`POST /tts`，读服务端响应头 `x-rtf`，Matcha ORT 声学 + RKNN Vocos，icefall zh-en 音色）：

| 语言 | n | 实时率 | 区间 |
|---|---:|---:|---|
| 中文 | 5 | 0.204 | 0.190–0.216 |
| 英文 | 5 | 0.194 | 0.158–0.216 |

英文每句音频时长 2.5–4.3 s。

**实时会话时延**（echo 模式，链路里没有大模型）：

| 指标 | 语言 | n | 数值 |
|---|---|---:|---|
| 说完 → 第一帧 TTS（`stop_to_tts_audio`） | 中文 | 4 | 1575 / 1624 / 1596 / 1580 ms（约 1.6 s） |
| ASR 终稿 → 第一帧 TTS（`final_to_tts_audio`） | 英文 | 5 | p50 1127 ms，均值 1126 ms，1021–1232 ms |
| 说完 → ASR 终稿（`eos_to_final`） | 英文 | 5 | 均值 2837 ms |

中文说完 → ASR 终稿（`stop_to_final`）的实测值晚于语音回复出现，不作引用。

复现：openvoicestream 仓库的 `docs/perf/rk3576-matrix-20260906.md`、`docs/known-issues/rk3576-v2v-multi-utterance-timeout.md`；英文 `eos_to_final` 用 `asr_stream_ws_bench.py`。

### reComputer J40 系列实测

| 指标 | 数值 | 条件 |
|---|---|---|
| 中文 ASR | golden set 流式与离线均 CER 0 | Qwen3-ASR 0.6B int4 |

### 已知退化

- **麦克风不带硬件 AEC。** 上面每个数字都在硬件 AEC 采集通道上测得。没有它的麦克风会误打断或自激，调配置值补不回来。
- **句中有停顿。** 同一段音频，离线接口 CER 9.62%，实时会话 84.06%，差距来自轮次策略；句中停顿后的内容得不到回复。
- **验收音量低于工作音量。** 低音量下验收通过的终端，到工作音量可能因声学原因失败。

### 下一步

- 调整服务端轮次结束判定，让句中停顿不再提前结束轮次。
- 对语言 × 设备矩阵里其余 10 格可部署组合做端到端时延与精度实测。

## 数据与素材出处

- **FLEURS**：RK3576 实测用的 ASR 语料，CC BY 4.0，每种语言短句 5 条 + 长句 5 条，文件已做 sha256 校验。TTS 用每种语言 5 句自拟句子。跨设备 Whisper 对比的出处在 openvoicestream 仓库的 `docs/perf/whisper-cross-device-20260827.md`。
- **原始运行记录**：openvoicestream 仓库的 `docs/perf/rk3576-matrix-20260906.md`，上文 RK3576 的数字都能在里面对到具体记录。
- **语音模型**：Qwen3-ASR、Matcha-TTS（icefall zh-en 音色）、Kokoro v1.0、Qwen3-TTS CustomVoice 与 sherpa-onnx 各自保留上游许可条款。商业出货前按实际部署的模型核对授权。
- 语料不随仓库分发，需自行获取。
