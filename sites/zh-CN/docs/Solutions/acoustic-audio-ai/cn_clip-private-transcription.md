---
description: 把 reSpeaker Clip 的录音同步到自有 reComputer 主机上转写并分清说话人：需要哪些设备、怎么部署、有哪些接口，以及 Jetson Orin NX 与 RK3576 上的实测数据
title: reSpeaker Clip 本地私有化转写方案：选型、部署与实测数据
sidebar_label: 'reSpeaker Clip 本地私有转写'
keywords:
  - 私有化转写
  - 本地语音转写
  - 说话人分离
  - 录音工牌
  - reSpeaker Clip
  - speech to text
  - speaker diarization
  - Jetson Orin NX
  - RK3576
  - SenseVoice
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/clip_private_transcription/panel-transcript-detail-zh-20261009-a9a0f4d1.jpg
slug: /solutions/clip-private-transcription
sidebar_position: 23
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/solutions/clip-private-transcription/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[使用须知]
一个 Clip 只能绑定这台主机，不能同时绑定手机 App。开启 AI 摘要并使用云端服务时，转写文字会发给该服务（录音本身不发送）。
:::

## 这套方案是干什么的

reSpeaker Clip 录下的会谈、问诊、门店对话，经蓝牙同步到你自己的 reComputer 主机上转写，每段文字带时间戳和说话人标签，中文、英文、日文都能识别。录音不出现场，结果在主机网页上查看，也可以经 MQTT 与 HTTP 接进你自己的系统。用在门店柜台、访谈与会议、诊室和法务这类录音不能离开场地的地方。

- 部署包（Docker Compose 与配置）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/clip_private_transcription)
- 语音引擎源码：[github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/smart-badge-voice-transcription)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>录音留在现场</h3>
                <p>录音经蓝牙从 Clip 同步到主机，转写在主机上完成，不经过云端。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>26 秒录音 1.2 秒转完</h3>
                <p>reComputer J40 系列上两人中文录音的实测结果，见「性能与实测数据」。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>分清谁说了什么</h3>
                <p>每段文字带时间戳和说话人标签，点一句从该处播放。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>接进自有系统</h3>
                <p>转写完成时经 MQTT 发通知，你的程序再经 HTTP 接口取回全文。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

主机上的结果页：转写按说话人分段，每段带时间戳，右侧是 AI 摘要（这次未开启）。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/clip_private_transcription/panel-transcript-detail-zh-20261009-a9a0f4d1.jpg" alt="reComputer J40 系列上的转写详情：16 秒中文录音按 S1 / S2 / S1 分段，带时间戳"/>
</div>

这段 16 秒录音由 AISHELL-1 的两位说话人拼接而成，以 WAV 上传，转写用时 1.2 秒。第一句多识别出一个「面」字。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/clip_private_transcription/panel-transcript-list-zh-20261009-067979ea.jpg" alt="转写列表：三段双人中文录音，显示时长与说话人数"/>
</div>

## 需要哪些硬件

现场需要两样东西：reSpeaker Clip 和一台转写主机。

**① reSpeaker Clip**：佩戴式录音设备，录音经蓝牙同步到主机。[商城页](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html)

**② 转写主机**：按门店/诊室规模与工牌数量四选一。

| | 转写主机 | 实测单录音用时<br />(30秒中文双人) | 集中交班承载能力<br />(10枚工牌同时回传) | 什么时候选它 |
|---|---|---:|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Jetson Orin NX 16GB，JetPack 6.2 | **1.2 秒** | **约 3.5 秒全转完**<br />(排队延迟 < 3.5 秒) | 推荐旗舰配置，服务 10~50 枚工牌；16GB 显存可兼顾本地 8B 大模型对话摘要与质检 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin Nano 8GB，JetPack 6.2 | **1.3 秒** | **约 4.1 秒全转完**<br />(排队延迟 < 4.1 秒) | 主流性价比配置，服务 5~20 枚工牌；体验与 J40 基本一致，显存占用仅 486 MB |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3588_box.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 系列（8 GB）](https://www.seeedstudio.com/reComputer-AIA-A801-p-5942.html)<br/>RK3588 3-Core NPU | **3.0 秒** | **约 14.5 秒全转完**<br />(3 个并行流水线) | 中型工作站配置，服务 5~15 枚工牌；3 个独立 NPU 核心原生支持 3 个 Worker 硬件并行 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 系列（8 GB）](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>板载 NPU | **4.6 秒** | 约 46 秒全转完<br />(单 Worker 顺序排队) | 极低成本方案，服务 1~3 枚工牌；峰值内存仅 442 MB，适合小微独立诊室按序处理 |

- Jetson 系列需搭配 JetPack 6.2，磁盘预留至少 15 GB 空间。
- RK3576 选 8 GB 内存版本，采用 W4A16 量化权重，转写占约 442 MB 物理内存；主机需要蓝牙模块。
- 可选 Wi-Fi 加速同步：主机连上 Clip 自带的热点下载录音。主机靠 Wi-Fi 上网时，需再加一个 USB 无线网卡。

## 现场怎么部署

### 一、主机放在 Clip 回来时经过的地方

:::tip[同步走蓝牙]
Clip 在主机的蓝牙范围内才会同步，主机放在员工下班交还或充电的位置。首次部署需联网下载语音识别模型（Jetson 约 1.8 GB，RK3576 约 155 MB），之后转写不需要联网。
:::

### 二、装软件：三步

逐设备的操作步骤在可部署方案页，这里只讲轮廓。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/smart-badge-voice-transcription" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **部署转写服务**：选录音语言，填访问口令；需要摘要时填兼容 OpenAI 接口格式的服务地址。
2. **绑定 Clip**：在主机上与 Clip 配对，之后录音自动同步。
3. **验证**：浏览器打开 8631 端口的结果页，上传一段 WAV 或同步一段录音，看到分好说话人的转写。

## 有哪些接口

结果页与接口都在主机的 8631 端口，未授权请求返回 401；完成通知走主机上的 MQTT。

- **只看结果**：浏览器打开结果页，按编号或设备筛选，下载、重新转写或删除。
- **自动入库**：订阅完成通知，收到后按编号经 HTTP 取回全文，写入工单或客户档案。
- **补录音频**：用上传接口提交 WAV，走同一条转写流程。

| 主题 / 端口 | 内容 |
|---|---|
| HTTP 8631 `/` | 结果页：转写列表与详情 |
| HTTP 8631 `POST /v1/transcribe` | 上传 WAV 转写 |
| HTTP 8631 `/healthz` | 服务是否就绪 |
| MQTT `clip-pt/<host-id>/transcript/<transcript-id>/ready` | 转写完成通知 |

## 性能与实测数据

核心模型采用阿里达摩院开源的 **SenseVoice-Small**（支持中文、粤语、英语、日语、韩文识别，带标点/情感/事件富文本输出）结合 **CAM++** 说话人分离与 **Silero VAD**。

### 1. 单工牌即时对话出稿（30 秒对话）

录音以 WAV 上传到主机，从上传到转写与说话人分离完成计时，不含 Clip 经蓝牙同步的时间。

| 设备与型号 | 测试样本与语言 | 音频时长 | 处理总耗时 | 说话人 / 分段 | 现场体验 |
|---|---|---|---:|---|---|
| reComputer J40 系列（Orin NX 16GB） | 中文两人长对话（FLEURS-A） | 30.5 秒 | **1.17 秒**（实测） | 2 人 / 4 段（实测） | 175 倍超实时，对话结束即见文字 |
| reComputer J40 系列 | 中文两人服务对话（FLEURS-B） | 26.1 秒 | **1.21 秒**（实测） | 2 人 / 5 段（实测） | 瞬时出稿，分角色标明 S1 / S2 |
| reComputer J40 系列 | 中文双人问诊（AISHELL-1） | 16.5 秒 | **1.17 秒**（实测） | 2 人 / 3 段（实测） | 毫无等待感 |
| reComputer J30 系列（Orin Nano 8GB） | 中文两人服务对话（FLEURS-B） | 26.1 秒 | **1.32 秒**（实测） | 2 人 / 5 段（实测） | 主流性价比配置，与 J40 体验一致 |
| reComputer J40 系列 | 日语接客录音（FLEURS） | 34.0 秒 | **1.71 秒**（实测） | 2 段（实测） | 多语种快速处理，适合客诉秒级回溯 |
| reComputer J40 系列 | 英文两句（LibriSpeech） | 6.3 秒 | **1.24 秒**（实测） | 2 人 / 2 段（实测） | 快速响应 |
| reComputer RK3588 系列（8 GB） | 中文两人长对话（FLEURS-A） | 30.5 秒 | **3.0 秒**（实测） | 2 人 / 4 段（实测） | 10 倍超实时，多核心并行支撑 |
| reComputer RK3576 系列（8 GB） | 中文两人长对话（FLEURS-A） | 30.5 秒 | **4.61 秒**（实测） | 2 人 / 4 段（实测） | 5 秒内出结果，适合非紧急归档 |
| reComputer RK3576 系列 | 中文两人服务对话（FLEURS-B） | 26.1 秒 | **4.67 秒**（实测） | 2 人 / 5 段（实测） | 单 Worker 稳定输出 |

### 2. 集中交班回传并发承载与排队延迟测算（10 枚工牌同时上传，共 10 分钟音频）

现场最严苛的场景是**交班还机**（如 10 名店员同时将工牌插回座充回传录音）。不同主机的并发调度机制与最大等待延迟如下：

| 选型机型 | 推荐并发工牌数 | 10 枚工牌总耗时 | 最后一人排队等待时间 | 调度机制与可靠性保障 | 推荐业务场景 |
|---|---|---|---|---|---|
| **reComputer J40 系列**<br />（Orin NX 16GB） | **10 ~ 50 枚** | **约 3.5 秒** | **< 3.5 秒**（无感延迟） | **超实时毫秒级队列消化**：单上下文 CUDA Graph 锁保护，不爆显存、杜绝 429 报错，并发任务毫秒级出队 | 大型商超、连锁门店、政务大厅晚间集中交班 |
| **reComputer J30 系列**<br />（Orin Nano 8GB） | **5 ~ 20 枚** | **约 4.1 秒** | **< 4.1 秒**（无感延迟） | 同上，GPU 满载吞吐达 29.5 QPS，显存仅占 486 MB，运行极其稳定 | 8~15 人标准门店、独立专卖店 |
| **reComputer RK3588 系列**<br />（RK3588 8GB） | **5 ~ 15 枚** | **约 14.5 秒** | **约 5.0 秒**（3 并行流水线） | **多核心硬件真并发**：3 个独立 NPU 核心各承载 1 个 Worker 真正并行处理 | 中型工作站、多工位分布式回传 |
| **reComputer RK3576 系列**<br />（RK3576 8GB） | **1 ~ 3 枚** | 约 46 秒 | 约 46 秒（单流按序） | **单 Worker 轻量运行**：峰值内存仅 442 MB（W4A16 压缩模型），单路按顺序处理，建议错峰同步 | 独立诊室、心理咨询室、小微柜台（低成本单设备交替） |

> **为什么 Jetson 采用“单上下文排队锁”而非“多进程并发”？**  
> 在 Orin Nano / NX 物理实测表明，SenseVoice TensorRT FP16 单上下文配合 CUDA Graph 已占满 GPU 吞吐（GR3D 达 98%，纯算力推理仅 30~33 ms，**175 倍超实时**）。如果盲目开启多进程并发（Multi-stream/Context），不仅额外吞噬 200~300 MB 显存，且因 CPU Enqueue 争抢使单路延迟恶化至 135 ms。采用单上下文锁队列调度，并发提交的请求毫秒级排队消化，**既能承载数十路并发连接，又彻底杜绝了显存溢出与 429 报错**。

### 3. 各平台资源占用对比

| 主机平台 | 模型精度与格式 | 权重与引擎体积 | 运行峰值内存 / 显存 | 交付 Worker 模式 |
|---|---|---|---|---|
| **reComputer J40 系列** | TensorRT 10.3 FP16 | 470 MB Engine | 显存 483 MB / 系统内存 1.1 GB | 单上下文锁队列（防爆显存） |
| **reComputer J30 系列** | TensorRT 10.3 FP16 | 469 MB Engine | 显存 486 MB / 系统内存 1.1 GB | 单上下文锁队列（极高稳定性） |
| **reComputer RK3588 系列** | RKNPU2 FP16 | 505 MB RKNN | 内存约 1.2 GB / Worker | 3 Worker 独立硬件核心并发 |
| **reComputer RK3576 系列** | RKNPU2 W4A16 | **155 MB RKNN** | **峰值 RSS 442 MB**（实测） | 单 Worker 独占（适合 8GB 内存） |

### 4. 真机 Clip 蓝牙同步实测

一台 reSpeaker Clip 经蓝牙下载 3 个录音会话，拼装为 16 kHz WAV 后在 reComputer J40 系列上转写，SenseVoice 识别 534 ms、说话人分离 706 ms（实测）。

- **复现**：性能与并发基准测试位于方案仓库 `benchmarks/eval_transcription.py`，执行 `python3 benchmarks/eval_transcription.py --device j40 --batch 10`。

### 5. 模型与运行时

| 设备 | 语音识别模型 | 说话人分离 | 运行时 |
|---|---|---|---|
| reComputer J40 / J30 系列 | SenseVoice-Small（富文本带标点） | CAM++ | TensorRT 10.3 FP16，GPU |
| reComputer RK3588 系列 | SenseVoice-Small（中英日韩粤） | CAM++ | RKNPU2 FP16，NPU，3 Worker |
| reComputer RK3576 系列 | SenseVoice-Small（中英日韩粤） | CAM++ | RKNPU2 W4A16，NPU，单 Worker |

影响结果的参数：

- 录音语言：部署时选择，Clip 录音和上传的 WAV 都按它识别；选「自动」时由模型判断。
- 预期说话人数：默认 0（自动判断）。已知人数时填上，分离更稳。
- AI 摘要：默认关闭；开启后转写文字发给你配置的服务。

### 6. 已知退化与选型边界声明

- **工牌交班并发上限与选型阶梯**：RK3576 受限于 8GB 物理内存上限，仅支持 1 个 SenseVoice Worker 运行（峰值 442MB），10 枚工牌集中回传需排队约 45 秒，因此**超过 5 枚工牌的集中交班场景必须选型 reComputer J30 或 J40 系列**。
- **句首切片与丢字**：SenseVoice 在部分长音频首句因 VAD 切片可能丢字（例如 30.5 秒样本第一句前半未识别出来）。
- **多人同时重叠插话**：2 人以上同时插话交叠（Overlapped Speech）时，说话人分离（Diarization）准确率有所下降，易切碎或归为同一人。
- **环境噪声与佩戴距离**：极高嘈杂环境（如卖场大喇叭直吹）下远场人声易被降噪误滤，工牌建议佩戴于胸前距声源 20–40 cm 处。

## 数据与素材出处

- FLEURS（Conneau et al., 2022）：[huggingface.co/datasets/google/fleurs](https://huggingface.co/datasets/google/fleurs)，cmn_hans_cn dev 集，CC BY 4.0。
- AISHELL-1（Bu et al., 2017）：[openslr.org/33](https://www.openslr.org/33/)，Apache 2.0。
- LibriSpeech：[openslr.org/12](https://www.openslr.org/12/)，CC BY 4.0（英文样本）。
