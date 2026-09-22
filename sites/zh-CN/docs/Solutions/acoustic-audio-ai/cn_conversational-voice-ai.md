---
description: 在边缘设备上做一台可打断的语音终端——需要哪些板子和麦克风、打断与轮次判定到底怎么实现、语言 × 设备支持矩阵，以及 RK3576 上带完整口径的实测数据
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[使用须知]
这是一份**参考实现**，不是通过认证的产品。语音精度的台架数字来自一块板（RK3576）与一种模型配置（Orin NX 上的 Qwen3-ASR int4）。打断的验收方式是在真实房间、真实音量下人工测试。不要按本页没有写出的数字做规划。
:::

## 这套方案是干什么的

有人走到设备前开口说话，设备出声回答；他在回答播到一半时重新开口，设备立刻停下——不是等这句话说完才停。这就是产品的全部，而其中"停下"这一步是做出来的，不是默认就有的。

适用于人对着机器出声说话、手上腾不开的场合：服务台、展台与自助终端、机器人语音入口、智能家居与房间终端。

- 开源实现：[github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>所有配置的语音都在本地</h3>
                <p>Qwen3-ASR 与 Matcha-TTS 都跑在边缘板上。只有对话模型可以放远端，而它就在一个环境变量后面。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>打断依赖硬件 AEC</h3>
                <p>麦克风必须提供一路已在硬件上消掉回声的采集通道。没有它，播放期间不关闭的采集会听到设备自己的音箱，终端会自己打断自己。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>语言在启动前解析，不逐句猜</h3>
                <p>（语言，设备）会解析成唯一一份语音配置，服务不了的组合让部署失败，而不是降级。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>只有一块板有完整台架</h3>
                <p>RK3576，2026-09-06 实测：离线接口下中文短句字错率 1.05%，语音合成实时率 0.204。</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO 图：麦克风阵列与音箱在服务台/展台上的现场安装照——需现场拍 -->

## 需要哪些硬件

现场四样东西：麦克风阵列、音箱、一块边缘算力板，以及——如果对话必须留在本地——一块加速卡或一块装得下 4B 模型的板子。

**① 麦克风阵列**是唯一没有替代品的部件，它必须在硬件上做回声消除。

| | 麦克风 | 为什么是它 |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 四麦阵列](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>USB 接口，硬件回声消除、降噪与波束成形 | 已验证的默认选择。2 通道与 6 通道固件布局都会被识别并自动选中已处理通道。其他阵列会退回到第 1 个采集通道，上线前需要在现场做声学实测。 |

**② 音箱**——USB 或 3.5mm，接在同一台设备上。不要用播放期间静音麦克风的办法躲回声：回声没了，打断也一起没了。

**③ 语音主机**跑识别、合成和常驻 Agent，同时决定你能对外提供哪些语言：

| | 语音主机 | 能服务的语言 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>瑞芯微 NPU，Qwen3-ASR W8A8 + Matcha | 中文、英文 | 能跑完整本地语音链路里最便宜的一块，也是唯一有公开台架数据的 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>瑞芯微 NPU，TTS 增加 Kokoro RKNN | 全部 30 种 | 需要其余 28 种语言；或者作为后续可加装 RK1828 卡转本地对话的主机 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011（Orin Nano 8GB）](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>GPU 上跑 Qwen3-ASR int4 + Matcha | 全部 30 种 | 板子要与别的 AI 负载共用、需要 GPU 余量。不要在这块板上起本地 4B 模型 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012（Orin NX 16GB）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>语音与 Qwen3.5-4B 同板运行 | 全部 30 种 | 对话文本不能出场地 |

reComputer R2000 系列也能跑 CPU 语音链路（仅英文，sherpa-onnx）。配置器里暂时没有它的采购档案，报不出价；按设计拒绝中文，而且 CPU 上的 ASR 与 TTS 共用四个核。

**④ RK 路线的全本地对话**需要在 RK3588 主机上挂一块 RK1828 / RM182X PCIe NPU 卡跑 Qwen3-4B。这块卡需要独立 12V 供电、主机驱动与设备节点，并且同一时刻只能常驻一个大模型。

除此之外：首次启动需要联网和空闲磁盘（Orin NX 至少 25 GB），以及部署工具能访问到这块板的网络。

## 现场怎么部署

两部分：先把声学条件做对，再跑部署向导。

### 一、装麦克风与音箱

:::tip[AEC 通道是整套设计的承重假设]
下游的一切——打断、轮次判定、播放期间不静音麦克风这个决定——都建立在"采集通道已在硬件上消掉音箱回声"这个前提上。没有这一层的麦克风会产生误打断或自激循环，任何软件配置都救不回来。
:::

- 除非你已经在现场实测过替代品，否则用 reSpeaker XVF3800。它的固件通道布局会自动识别；未知阵列默认取第 1 个通道。
- 验收时把音箱开到正常房间音量。低音量下验收通过的终端，在实际工作音量下可能因纯声学原因失败，与模型无关。
- reSpeaker 可以在部署前插好，也可以在 Agent 起来之后热插。Agent 按稳定的 USB 产品标识选择物理采集设备，忽略 HDMI/DP 伪输入，拔插后不重启容器即可恢复。

### 二、装软件：四步

部署由 SenseCraft Solution 应用通过 SSH 对板子执行（如果你本机就是装了 JetPack 6.2 的 Jetson Orin，也可以本地部署）。逐设备的操作步骤在部署指南里，这里只讲轮廓。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **选套餐**——云端 / OpenAI 兼容，或全本地。这是整条链路上唯一决定数据要不要出场地的选择。
2. **选对话语言**——部署会先把（语言，设备）解析成唯一一份语音配置，再启动其余服务。不支持的组合（例如reComputer R2000 系列上的中文）以退出码 2 停住整个 `docker compose up`，不会出现"起了一半"。
3. **填接口与人设**——云端套餐填接口地址、Key 和模型 ID（默认是北京地域 Qwen 接口 + `qwen3.5-flash`），以及系统提示词。可选地把"持续监听"改成"唤醒词后响应"，输入任意简短中英文短语，镜像内置的开放词表 sherpa-onnx 检测器会在启动时本地编译它。
4. **在面板里验证**——18000 端口的 Web 面板显示 listening / thinking / speaking / barged-in。

<!-- TODO 图：18000 面板的四种状态截图，以及一次打断的录屏 GIF——需在已部署设备上采集 -->

验收标准是在真实房间、真实音量下连续三轮，每次在回答开始后 0.5–1 秒打断，确认旧回复立刻停止且打断的那句话没有丢。

耗时：云端套餐约 30 分钟。全本地套餐更久，因为首次启动要下载模型产物；成功联网启动一次之后，镜像与产物均已缓存，设备可断网运行。

## 怎么接入自有系统

**对接点是 LLM 接口，不是某条消息总线。** Agent 调用的是流式 OpenAI 兼容 Chat Completions 接口，`LLM_BASE_URL` 就是放你自己服务的地方——查自有文档的 RAG 接口、带工具调用的 Agent 框架、机器人指令层、点单或工单后台。语音层一行不用改。

- **用托管模型**——保留默认值，或替换接口地址、Key 与模型 ID。唯一硬要求是支持流式 Chat Completions。
- **用自己的服务**——实现同一套接口即可。Agent 把转写作为 user 轮发过去，并把回复流式送进合成，所以你的服务还没生成完，第一句话就已经开始播了。
- **直接用语音层**——如果你要在这之上做另一个 Agent，下面的双工 WebSocket 与离线接口可以直接调用。

### 完整的端口与接口

所有服务都跑在 host 网络下，所以 `<host>` 就是语音主机自己的地址。

| 接口 | 哪种部署 | 承载什么 |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | 所有套餐 | 双工会话：送 PCM 进去，拿转写和 TTS PCM 出来，打断触发的 abort 也走这里 |
| `POST http://<host>:8621/asr` | 所有套餐 | 离线整段转写——不经 VAD、不走流式。附录里的精度数字就是在这个接口上测的 |
| `POST http://<host>:8621/tts` | 所有套餐 | 合成；响应头 `x-rtf` 带实时率 |
| `GET http://<host>:8621/health` | 所有套餐 | 就绪状态，Compose healthcheck 用的就是它 |
| `http://<host>:18000` | 所有套餐 | Web 面板：轮次状态与每轮转写 |
| `http://<host>:1828/v1`、`/health` | RK3588 + RK1828 本地套餐 | 设备上 Qwen3-4B 的 OpenAI 兼容 Chat Completions |
| `http://<host>:8000/v1`、`/health` | Orin NX 本地套餐 | 设备上 Qwen3.5-4B 的 OpenAI 兼容 Chat Completions |
| `LLM_BASE_URL`（出向） | 云端套餐 | 任意 OpenAI 兼容接口 |

两条本地路线对外暴露的接口与云端完全一致，这也是它们之间切换只改一个变量的原因。除非你把 `LLM_BASE_URL` 指向外部，数据链路里没有 broker，也没有任何云端组件。

## 给工程师：实现细节

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### 语音：一套协议，四套运行时

双工协议、Agent 状态机和配置解析器在每块板上完全相同，区别只在执行 ASR 与 TTS 的后端。

| 语音主机 | ASR 后端 / 模型 | TTS 后端 / 模型 | 解析出的 profile |
|---|---|---|---|
| RK3576 | `rk.asr`——Qwen3-ASR，RKNN 编码器 + RKLLM 解码器，W8A8 | `rk.tts`——matcha-icefall-zh-en，ORT 声学 + RKNN Vocos | `rk3576-default` |
| RK3588（中 / 英） | `rk.asr`——同上 | `rk.tts`——matcha-icefall-zh-en | `rk3588-default` |
| RK3588（其余 28 种） | `rk.asr`——同上 | `rk.tts`——Kokoro v1.0 混合，RKNN INT8 解码前段 + CPU ONNX 前后缀 | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB（中 / 英） | `jetson.trt_edge_llm`——Qwen3-ASR 0.6B，int4 | `jetson.matcha_trt`——matcha-icefall-zh-en，bf16/fp16 Vocos | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB（其余 28 种） | `jetson.trt_edge_llm`——Qwen3-ASR 0.6B，int4 | `jetson.trt_edge_llm`——Qwen3-TTS CustomVoice，int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000 系列（英文） | `cpu.sherpa_asr`——sherpa-onnx 流式 zh-en，int8 CPU | `cpu.sherpa`——sherpa-onnx CPU 音色，int8 | `rpi5-default` |

移植前值得知道的两条约束。全本地的 Orin NX 套餐跑的是 **TensorRT-Edge-LLM v0.9.1** 镜像，其引擎血统与云端 LLM 的 Orin NX 套餐是分开的——它在矩阵里有自己的设备 id，这样切语言时不会跨出这条血统；为其他 TensorRT / JetPack 版本构建的引擎会在 provenance 校验时失败而不是被加载。RK 侧的模型产物在首次启动时拉取（`RK1828_ARTIFACT_AUTO_DOWNLOAD=1`），一张卡同时只能常驻一个大模型。

### 语言 × 设备矩阵，以及它为什么拒绝

`profile-init` 在其余所有服务之前以 `network_mode: none` 运行，读 `language_device.yaml`，写出唯一一份解析后的 profile 和一小段 env 覆盖。三种结果：

| `status` | 含义 | 解析器行为 |
|---|---|---|
| `measured` | profile 指名的 ASR+TTS 组合在 `evidence[]` 里有设备上的实测数字 | 继续 |
| `unsupported` | 没有 profile 服务这个组合 | **退出码 2**，服务启动前停住整个 `docker compose up` |

语言表是 RK runtime 的 30 语种集合（`qwen3asr_rk/python/qwen3asr/config.py:3-9`），刻意取两份可用列表中较窄的一侧——Qwen3-ASR 上游标称 52 种，Whisper 99 种——这样一张表覆盖所有板子，且没有任何一格因此丢掉语言。

三个 `unsupported` 格子是：reComputer R2000 系列上的中文，以及 RK3576 和reComputer R2000 系列上的"其余 28 种"。中文的拒绝是有数字支撑的设计决定：Whisper 在已实测的每块板上中文 CER 都在 35–56%，悄悄兜底会得到一个"看起来在工作、实际不能用"的部署。RK3576 拒绝其余 28 种是因为它唯一的 TTS 音色是 Matcha zh-en——这块板能转写这些语言，但说不出这些语言的回答。

一条待办时需要重读的偏差：多语种规格书为 Orin NX / RK3576 / RK3588 的"英文及其他"列指定的是 Whisper + Kokoro，但 `configs/profiles/` 里没有任何一份 profile 把 Whisper ASR 后端与某个 TTS 后端配成一对——那里所有 Whisper profile 都是 ASR-only。在这组配对被真正做出来之前，非中文通道走现有的组合 profile，各格子把规格书想要的配对记在 `planned_alternative` 里。

### 打断：到底是什么让回复停下来

打断是四层条件串成的一条链，最后一层最容易做错。

| 环节 | 触发条件 | 配置值 |
|---|---|---|
| 播放期间采集 | 播 TTS 时麦克风侧 VAD 继续跑 | `client_vad_backend` `silero` |
| 语音检测 | Silero 语音概率，用其原生阈值 | `client_vad_threshold` `null`（即 Silero 自带的 0.5，刻意不是 RMS 值） |
| 计为语音的最短时长 | 滤掉瞬态噪声 | `client_vad_speech_min_ms` `200` |
| 客户端判定说完 | 由客户端驱动 EOS，不等服务端 | `client_vad_silence_ms` `600`、`client_vad_drive_eos` `true` |
| 打断是否成立 | 回复必须真的开始播了，且打断内容不能只是一个音节 | `barge_in_enabled` `true`、`barge_in_min_speaking_ms` `500`、`barge_in_min_chars` `2` |
| **播放余音** | **Agent 保持 SPEAKING 直到本地缓冲真的放完** | `playback_drain_enabled` `true`、`playback_drain_timeout_s` `15.0` |

**播放排空是那道必要门。** 语音服务在把 PCM 发完的那一刻就发 `TTSDone`，而本地 PortAudio 缓冲还在出声。没有这道排空，用户在这段余音里说的话会被判定成 IDLE 态的新一轮而不是打断——旧回复继续播，用户的话落在错误的状态里。关掉它不会让打断明显失效，而是让打断恰好在用户真正会打断的那个窗口里失效。

另外两个看着像装饰、其实不是的设定：`client_vad_backend` 显式钉成 `silero`，是为了让损坏或自定义的镜像明确报错，而不是悄悄退回固定 RMS 能量 VAD（那会把语音切碎并可能自激）；`asr_language` 从操作员的选择钉下来而不是留 `auto`，是因为这个值会成为会话的 `asr_language`，而它是 RK 与 Jetson 的 Qwen3-ASR 后端唯一的语言开关。

### 轮次判定：为什么实时转写比音频短

**服务端**的轮次结束判定与上面的客户端 VAD 是两回事。它用 silero，**400 ms 静音**加 `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`，因此会在听到的第一个自然停顿处判定轮次结束。一句中间带停顿的长句只会得到第一个分句的回复。这是为对话时延调出来的轮次策略，不是识别失败——确立这一点的证伪实验见附录。

### 可选唤醒词

选择"唤醒词后响应"会把 `pipeline_mode` 从 `always_on` 切到唤醒词来源，不需要重建镜像——开放词表的 sherpa-onnx KWS 产物已经在镜像里。

| 设定 | 值 |
|---|---|
| `WAKEWORD_BACKEND` | `sherpa_onnx` |
| `WAKEWORD_PHRASE` | 任意简短中文或英文短语（默认 `你好小智`） |
| `WAKEWORD_THRESHOLD` | `0.25` |
| `WAKEWORD_MIC_SKIP_MS` | `120` |
| 确认反馈 | 检测成功后播放一声短促的 880 Hz 提示音 |

短语在启动时本地编译，与灵敏度一起保存在 Agent 状态卷里。默认仍是持续监听，已有的免唤醒部署不受影响。

## 附录：实测数据 {#measured-detail}

这一节给要复核数字的人看，跳过不影响部署。以下都是在所述硬件上的**单次测量，未独立复现**，也不构成任何形式的认证。

### 哪些测了、哪些没测

| 项目 | 状态 |
|---|---|
| 语言 × 设备矩阵 18 格 | **5 格实测**、10 格可部署但未量化、3 格拒绝 |
| RK3576 中文与英文，ASR + TTS + 实时会话 | 2026-09-06 实测 |
| Orin NX 上 Qwen3-ASR 0.6B int4 中文 | 2026-07-04 实测——golden set 流式与离线均 CER 0 |
| RK3588、Orin Nano、reComputer R2000 系列| 无端到端实测 |
| 打断时延 | 没有作为数字测过；验收是人工三轮测试 |
| 含大模型的对话时延 | 未采集——下面的实时数据是 echo 模式，链路里没有模型 |

"可部署但未量化"的意思是各组件在设备上有数字、组合整体没有。它不等于"这些格子的表现与实测过的那些一样"。

### RK3576 详表

**环境。** reComputer RK3576 系列，Debian 12 + Rockchip BSP。openvoicestream commit `a0b043a6`（分支 `feature/language-device-resolver`），镜像 `openvoicestream:rk-20260903.10`（`sha256:fdc480da3061…`）。bench 脚本与 speech 容器同机，经 `127.0.0.1:8621` 通信——这些数字不含任何网络跳数。解析出的 profile 为 `rk3576-default`。

**离线接口下的 ASR**（`POST /asr`，整段送入，不经 VAD、不走流式——这是解码器能力）：

| 语言 | 集合 | n | 错误率 |
|---|---|---:|---:|
| 中文 | 短句 | 5 | CER 1.05% |
| 中文 | 长句 10–20 s | 5 | CER 9.62% |
| 英文 | 短句 | 5 | WER 3.65% / CER 1.11% |
| 英文 | 长句 10–20 s | 5 | WER 6.99% / CER 4.16% |

英文长句在每个文件上都能恢复完整的多分句文本；残余错误是真实的识别偏差（`"3:2"` 被转成 `"three to two"`），不是截断。

**实时会话下的 ASR**（`/v2v/stream`，出厂默认 `ASR_MAX_NEW_TOKENS=64`、`ASR_FINAL_STOP_ON_PUNCT=1`），按完整参考文本计分：

| 语言 | 集合 | n | 错误率 |
|---|---|---:|---:|
| 中文 | 短句 | 5 | CER 29.09% |
| 中文 | 长句 10–20 s | 5 | CER 84.06% |
| 英文 | 短句 | 5 | WER 16.95% / CER 10.16% |
| 英文 | 长句 10–20 s | 5 | WER 63.38% / CER 62.58% |

**"是解码器在截断"这个假设已经被实验证伪。** 用 `ASR_MAX_NEW_TOKENS=256` 和 `ASR_FINAL_STOP_ON_PUNCT=0` 复测（这还额外需要 `RK_ARTIFACT_CONTRACT_STRICT=0`，否则产物集的 runtime_contract 校验会让容器以 SystemExit(1) 崩溃重启），两种语言的转写结果都**逐字节相同**——例如 `en_long_03` 在 43 条消息 / 7.5 s 之后仍然终结为 "To prevent possible infection of others."。服务端启动日志确认覆盖已生效。提前结束轮次的是 VAD 端点（silero，400 ms 静音，2.5 s 最小音频），不是解码器的 token 上限或标点截断标志。把端点放宽到能让对话轮次挺过句中停顿，是待办事项，本次未做。

**TTS**（`POST /tts`，直接读服务端响应头 `x-rtf`，Matcha ORT 声学 + RKNN Vocos，icefall zh-en 音色）：

| 语言 | n | 实时率 | 区间 |
|---|---:|---:|---|
| 中文 | 5 | 0.204 | 0.190–0.216 |
| 英文 | 5 | 0.194 | 0.158–0.216 |

英文每句音频时长 2.5–4.3 s。

**实时会话时延**——echo 模式，链路里没有大模型：

| 指标 | 语言 | n | p50 | 均值 | 最小–最大 |
|---|---|---:|---:|---:|---|
| 说完 → ASR 终稿（`stop_to_final`） | 中文 | 10 | 1771 ms | 1732 ms | 1284–2049 ms |
| 说完 → 第一帧 TTS（`stop_to_tts_audio`） | 中文 | 5 | 3782 ms | 3640 ms | 3061–3892 ms |
| ASR 终稿 → 第一帧 TTS（`final_to_tts_audio`） | 英文 | 5 | 1127 ms | 1126 ms | 1021–1232 ms |

**2026-09-20 重测取代。** 设备空闲、镜像 `rk-20260913.3` 下，`stop_to_tts_audio` 重测为 1575/1624/1596/1580 ms（约 1.6 s，n=4）。上表的 3782 ms 很可能是第二句超时状态下的聚合值。同一轮的 `stop_to_final` 约 5.1 s，大于本该晚于它出现的语音回复，因此该值与上表的 1771 ms 都不可引用。详见 openvoicestream 的 `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md`。


**一条如实保留、没有被抹平的口径问题：** 每次英文 `/v2v/stream` 运行的 `stop_to_final` 与 `stop_to_tts_audio` 都返回 null，而同一次运行的 `final_to_tts_*` 字段正常。因此英文的 ASR 时延（`eos_to_final` 均值 2837 ms，n=5）来自另一次 `asr_stream_ws_bench.py` 运行，不是统一的 V2V 运行；英文这一行报的是 `final_to_tts_audio` 而不是完整往返。这究竟是英文音频上的 VAD 端点差异，还是脚本对 `--multi 2` 的下标计数问题，尚未定论。两种语言都没有采集完整回复（末帧 / `tts_done`）。

**语料。** ASR 复用既有的 FLEURS 语料（CC BY 4.0，已做 sha256 校验），每种语言短句 5 条 + 长句 5 条，不是新下载的 Common Voice。TTS 用每种语言 5 句自定句子。V2V 用 1 条 3.84 s 音频配 `--multi 2` 重复，以规避会话提前关闭。

### 什么情况下会变差

- **麦克风比板子更决定结果。** 上面每个数字都建立在硬件 AEC 采集通道之上。没有它的麦克风会产生误打断或自激循环，任何配置值都补不回来。
- **实时对话不等于离线接口。** 同一段音频上 9.62% 与 84.06% 的差距完全来自轮次策略。如果你的语句中间会停顿，在端点重调之前就要预期只得到第一个分句的回复。
- **验收时的音箱音量很重要。** 低音量下验收通过的终端，在工作音量下可能因纯声学原因失败。
- **本页数字覆盖 RK3576 与 Orin NX 两格。** RK3588、Orin Nano、reComputer R2000 系列以及所有非中非英的格子都可部署。在你把时延或精度写进承诺之前，自己测一遍。

## 数据与素材出处

- **FLEURS**——RK3576 台架用的 ASR 语料，CC BY 4.0。文件已做 sha256 校验；跨设备 Whisper 对比的出处在 openvoicestream 仓库的 `docs/perf/whisper-cross-device-20260827.md`。
- **原始运行记录**——openvoicestream 仓库的 `docs/perf/rk3576-matrix-20260906.md` 保存了完整的 resolver 输出、逐文件 ASR JSON 行、TTS 响应头转储，以及测试前后的容器状态。本页的每个数字都能对到那里的具体记录。
- **语音模型**——Qwen3-ASR、Matcha-TTS（icefall zh-en 音色）、Kokoro v1.0、Qwen3-TTS CustomVoice 与 sherpa-onnx 各自保留其上游许可条款。商业出货前请确认你实际部署的那个模型的授权；运行时本身在其文档描述的接口范围内与模型无关。
- 语料不随仓库分发，需自行获取。
