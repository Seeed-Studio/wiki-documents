---
description: "使用 reSpeaker Clip 的 RTC SDK 通过 BLE 推流实时 Opus 音频：运行 FFT 演示、理解会话建立流程、编写最小接收端并解码实时音频。"
title: 使用 reSpeaker Clip RTC SDK 构建实时音频流
keywords:
  - reSpeaker clip
  - rtc 流式传输
  - 实时音频
  - 实时音频推流
  - opus
  - ble
  - fft 频谱
  - python sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_rtc_streaming
sku: 100020126
last_update:
  date: 08/24/2026
  author: Ray
createdAt: '2026-08-24'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_rtc_streaming/
---

# 使用 reSpeaker Clip RTC SDK 构建实时音频流

本教程将教你如何在 reSpeaker Clip 采集音频的同时接收实时音频，而不是先录制再下载。你将运行一个实时 FFT 频谱演示，理解 RTC 会话是如何建立的，亲自编写一个最小流式应用，并了解这些音频数据在主机上的实际样子。

> **这里的 RTC 指的是 reSpeaker Clip 的实时音频流，而不是 WebRTC。** 没有浏览器、没有 SDP、没有 ICE——只有一个 Clip 产生 Opus 帧，以及一个 Python 应用通过 BLE 消费这些数据。

## 1. 介绍

### 1.1 reSpeaker Clip 上的 RTC 流式传输是什么？

普通录音会把音频写入 SD 卡，然后你再下载。RTC 流式传输则完全跳过 SD 卡：编码后的音频在产生的同时就被发送到你的主机。

```text
Recording:
Mic -> DSP -> Opus -> SD Card -> Download

RTC:
Mic -> DSP -> Opus -> BLE -> Host Application
```

当“此刻”很重要时，这种差异就很关键：实时频谱显示、流式 ASR、语音活动检测、唤醒词流水线，或者需要在用户仍在说话时就做出响应的语音助手。

### 1.2 你将学到什么

完成本教程后，你将能够：

- 使用 Python SDK 连接到 reSpeaker Clip；
- 创建一个 RTC 会话并接收实时 Opus 数据包；
- 解释完整的 RTC 流生命周期；
- 运行 FFT 演示并阅读其输出；
- 在 RTC SDK 之上构建你自己的实时应用。

## 2. RTC 流式传输的工作原理

### 2.1 RTC 流式传输架构

在 RTC 模式下，音频路径是一条从麦克风直达你应用的流水线：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_streaming_architecture.png" alt="RTC streaming architecture: microphone through DSP and Opus encoder to BLE and the Python SDK" width={900} height="auto" /></p>

在 RTC 模式下，音频是实时产生的，从不会触及 SD 卡，主机可以在音频到达时就进行处理。没有任何东西在等待录音结束，因为根本不存在录音文件。

### 2.2 RTC 会话生命周期

一个 RTC 流通过两步建立，然后一直流动直到你停止它：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_session_lifecycle.png" alt="RTC session lifecycle sequence diagram between the Python app and reSpeaker Clip" width={900} height="auto" /></p>

这两个调用可以映射到一个简单的心智模型：

```text
start_rtc()   =  start producing audio
stream_rtc()  =  start receiving audio
```

在 `start_rtc()` 之后，设备会运行麦克风流水线，但此时还不会向你发送任何数据。在 `stream_rtc()` 之后，设备开始推送 `STREAM_DATA` 帧——每帧一个 Opus 数据包——直到 `stop_recording()` 用 `STREAM_END` 结束会话。

### 2.3 为什么 RTC 要使用会话？

`start_rtc()` 会创建一个实时音频会话并返回其会话 ID。随后 `stream_rtc(session, receiver)` 告诉设备：主机现在希望消费这个会话的实时音频。具体来说，它会发出 `AT+DOWNLOAD=<session>`，固件会丢弃在那一刻之前排队的所有内容——RTC 只传递“现在”，因此在你订阅之前产生的音频永远不会被发送。

这是与文件下载的关键区别：不要把 RTC 会话想象成一个在设备上不断增长的文件。它是一个你附着其上的实时源，在你附着之前错过的任何内容，按设计都会消失。

## 3. 准备 RTC SDK

### 3.1 前置条件

- 一块 reSpeaker Clip；
- 支持 RTC 流式传输的固件（`feat/rtc-live-streaming` 开发分支）；
- Python 3.10 及以上版本；
- 主机上可用的 BLE 环境；
- 从源码检出的 reSpeaker Clip Python SDK。

### 3.2 安装 SDK

RTC 流式传输发布在开发分支上，因此需要检出该分支，并带上 BLE 和 examples 的 extras 安装 SDK：

```bash
git clone https://github.com/rayheto/reSpeaker_Clip.git
cd reSpeaker_Clip
git checkout feat/rtc-live-streaming

cd sdk
python -m pip install -e '.[ble,examples]'
```

这两个 extras 对本教程很重要：

- `ble` 安装 BLE 传输层（Bleak）；
- `examples` 安装 FFT 演示所需的依赖（Opus 解码器和 NumPy）。

Wi-Fi/UDP 传输不需要额外依赖，但本教程中的 RTC 流式传输是通过 BLE 运行的。

## 4. 运行 RTC FFT 演示

这一节才是你的真正入口：先运行演示，最后再理解它。

### 4.1 启动演示

在仓库根目录下，使用你的设备地址运行示例：

```bash
python sdk/examples/demo_stream_fft_display.py \
  --address AA:BB:CC:DD:EE:FF \
  --duration 30
```

省略 `--address` 将自动扫描名为 "Clip" 的 BLE 设备，省略 `--duration` 则会一直流式传输，直到按下 Ctrl-C：

```bash
python sdk/examples/demo_stream_fft_display.py
```

### 4.2 演示启动后会发生什么？

在演示运行时对着 Clip 说话。终端会显示一个随你的声音变化的实时 Unicode 频谱，它由如下主机端流水线构建：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="FFT demo pipeline: Clip over BLE into StreamReceiver, JitterBuffer, Opus decoder, PCM, FFT and terminal spectrum" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_terminal.gif" alt="Terminal recording of the live RTC FFT spectrum demo" width={900} height="auto" /></p>

> 你看到的频谱来自此刻正通过 BLE 传输的音频，而不是存储在设备上的录音。把手在麦克风前挥动，频谱条会在不到一秒的时间内做出反应。

### 4.3 理解演示输出

当流结束时，演示会打印统计信息。其中最有意义的是：

```text
RTC session: 00000000082552
Streaming for 50s ...

frames received : 2503
bytes received  : 191846
seq discontin.  : 0
avg inter-frame : 20.0 ms (max 35 ms)
```

- **frames received / bytes received** —— 收到多少个 Opus 数据包以及它们的总大小。
- **avg inter-frame** —— 数据包到达之间的平均间隔。RTC 大约每 20 ms 产生一个 Opus 帧，因此在流运行时，你应该看到每秒大约 50 个数据包，平均值接近 20 ms。
- **seq discontin.** —— 观察到的序列不连续次数；在健康的 BLE 链路上，这个值应保持为 0。

在这些统计信息下面，演示还会打印 JitterBuffer 统计（欠载、追赶丢包、队列深度分布）以及延迟拆分（队列 / 解码 / FFT）。第 7 节会解释它们的含义。

## 5. 构建一个最小 RTC 流式应用

这一节是教程的核心：把演示中执行的同样 RTC 建立过程剥离到最精简的形式，方便你在此基础上构建自己的应用。

### 5.1 连接到 reSpeaker Clip

一切都从传输层和客户端开始，与[基础 SDK 指南](/cn/respeaker_clip_basic_sdk_guide)中的方式完全相同：

```python
import asyncio

from clip import BleTransport, ClipClient


async def main() -> None:
    transport = BleTransport(name="Clip")   # or BleTransport(address="AA:BB:CC:DD:EE:FF")

    async with ClipClient(transport) as clip:
        ...  # the rest of this tutorial goes here


asyncio.run(main())
```

`BleTransport` 负责 BLE 通信；`ClipClient` 在其之上为你提供高层的 Clip API。

### 5.2 创建一个 StreamReceiver

接收器会把传入的流帧转换为回调调用。最简单的消费者只是打印每个数据包的长度：

```python
from clip.stream import StreamReceiver


def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))


receiver = StreamReceiver(on_frame=on_frame)
```

一次回调调用就对应一个 Opus 数据包。`on_frame` 在接收路径上同步运行，因此要保持其非阻塞——把字节交给队列、线程或其他任务，在别处做耗时工作。

### 5.3 启动一个 RTC 会话

```python
session = await clip.start_rtc()
print("RTC session:", session)
```

这会发送 `AT+START=rtc`；设备启动其 RTC 音频流水线并返回会话 ID。此时设备只是在产生音频——主机尚未订阅，尚未向你传输任何数据。

### 5.4 开始接收 RTC 音频

```python
token = await clip.stream_rtc(session, receiver)
await receiver.wait_start(timeout=10)
```

`stream_rtc()` 会把你的接收器挂接到传输层的帧路径上，并发出 `AT+DOWNLOAD=<session>`；从这一刻起，设备会向 `receiver` 推送 `STREAM_START`，然后是 `STREAM_DATA` 帧。`wait_start()` 会在 `STREAM_START` 到达后返回——那一刻起，实时数据通道才算真正建立。

返回的 `token` 是对传输层帧处理槽位的租约；当流结束时你将释放它（见第 5.6 节）。

### 5.5 接收 Opus 数据包

回到你的回调：

```python
def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))
```

这里就是你应用的入口。无论你要构建什么——FFT、VAD、流式 ASR、WebSocket 中继——都从这些字节开始。下一节会精确解释它们包含什么。

### 5.6 停止 RTC 流

停止过程与录音 API 对应：`stop_recording()` 发送 `AT+STOP`，设备用 `STREAM_END` 响应，然后你释放处理器租约：

```python
await clip.stop_recording()
await receiver.wait_end(timeout=5)
transport.detach_file_frame_handler(token)
```

完整的最小应用，组装如下：

```python
import asyncio

from clip import BleTransport, ClipClient
from clip.stream import StreamReceiver


async def main() -> None:
    transport = BleTransport(name="Clip")
    async with ClipClient(transport) as clip:
        receiver = StreamReceiver(on_frame=lambda p: print(len(p)))

        session = await clip.start_rtc()
        token = await clip.stream_rtc(session, receiver)
        await receiver.wait_start(timeout=10)

        await asyncio.sleep(10)          # consume the live stream for 10 s

        await clip.stop_recording()
        await receiver.wait_end(timeout=5)
        transport.detach_file_frame_handler(token)

        print("frames:", receiver.frames_received, "bytes:", receiver.bytes_received)


asyncio.run(main())
```

因此完整的生命周期是：

```text
BLE connect -> start_rtc() -> stream_rtc() -> STREAM_START
-> STREAM_DATA x N -> stop_recording() -> STREAM_END -> detach handler
```

## 6. 理解 RTC 音频数据

### 6.1 StreamReceiver 返回什么？

你的回调会接收到普通的 `bytes` —— 每次调用对应一个 Opus 编码的音频包。不是 WAV，也不是 PCM，更不是原始的 BLE 通知：SDK 已经解析了 RTC 传输帧（`STREAM_START` / `STREAM_DATA` / `STREAM_END`），只把负载部分交给你。

```text
BLE STREAM_DATA -> SDK parses the frame -> StreamReceiver -> Opus payload (bytes)
```

接收器还维护了一些实时统计信息，你可以随时读取：`frames_received`、`bytes_received`、`sequence_gaps`、`avg_inter_frame_ms`、`max_inter_frame_ms` 和 `first_frame_delay_s`。在 `STREAM_END` 之后，`receiver.end_reason` 会告诉你流结束的原因（被停止、超时或断开连接）。

### 6.2 RTC 音频格式

当前的 RTC 流为：

```text
Codec: Opus
Sample rate: 16 kHz
Channels: mono
Frame duration: ~20 ms (320 samples)
```

因此大约每 20 ms 一帧，也就是在流运行时每秒大约 50 帧 —— 这与你在演示程序中看到的 `avg inter-frame` 输出数值相同。

### 6.3 从 Opus 到 PCM

由于负载是压缩的 Opus，你绝不能把它直接当作采样数据来解释：

```python
# WRONG — the packet is compressed Opus, not samples
import numpy as np
samples = np.frombuffer(opus_packet, dtype=np.int16)
```

先解码，然后再把结果当作 PCM 处理：

```python
import opuslib

decoder = opuslib.Decoder(16000, 1)          # 16 kHz, mono
pcm = decoder.decode(opus_packet, 320)       # 320 samples = 20 ms
samples = np.frombuffer(pcm, dtype=np.int16)
```

这个解码步骤是你的回调与真实音频采样之间唯一的隔层 —— 而这正是 FFT 演示在你刚刚编写的最小应用之上额外添加的内容。

## 7. 理解 demo_stream_fft_display.py

本节会把演示程序映射回你已经学到的内容，这样它就不再是“魔法脚本”，而是“我的最小程序，加上一个解码器，再加一个 FFT”。

### 7.1 演示程序结构

演示程序是在最小应用结构的基础上，把一个处理链挂接到了 `on_frame` 上：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="FFT demo pipeline mapped to SDK components" width={900} height="auto" /></p>

`on_frame` 将每个 Opus 包送入一个 `LiveSpectrum` 对象；后台线程以每帧 20 ms 的节奏消费数据、解码、运行 FFT，并重绘终端中的一行。

### 7.2 演示程序中的 RTC 建立过程

演示程序的 `run()` 函数执行的步骤与第 5 节完全一致：

```text
BleTransport / ClipClient          (5.1)
receiver = StreamReceiver(on_frame)  (5.2)
session = await clip.start_rtc()     (5.3)
token = await clip.stream_rtc(...)   (5.4)
await receiver.wait_start(timeout=10)
... frames flow ...
await clip.stop_recording()          (5.6)
await receiver.wait_end(timeout=5)
transport.detach_file_frame_handler(token)
```

如果你已经理解了第 5 节，那么你已经理解了演示程序的核心 —— 其余的都是音频处理。

### 7.3 解码 RTC 音频

演示程序的解码方式与第 6.3 节完全相同：一个 `opuslib.Decoder(16000, 1)` 将每个包转换为 320 个 int16 采样。你不需要了解 Opus 编解码器的内部工作原理；真正重要的边界是“回调给出 Opus 字节，解码器给出 PCM 采样”。

### 7.4 为什么演示程序要使用抖动缓冲区（Jitter Buffer）？

BLE 传输到达的时间并不完全均匀。你可能会看到这样的帧间间隔：

```text
20 ms, 20 ms, 35 ms, 5 ms, 20 ms, ...
```

SDK 的 `clip.jitter.JitterBuffer` 会把它平滑为稳定的消费节奏：

```text
BLE packets -> JitterBuffer -> steady 20 ms audio frames
```

演示程序创建 `JitterBuffer(depth_frames)`（默认 5 帧，即 100 ms 的初始填充），在 `on_frame` 中对每个到达的包调用 `put()`，并在处理线程中每 20 ms 的节拍调用一次 `get()` 取出一帧。`get()` 在欠载时返回 `None`（此时不会为静音绘制 FFT），如果主机处理落后，缓冲区会丢弃最旧的帧以追赶到实时边缘。这就是抖动缓冲区的全部含义：在不均匀的生产者和稳定的消费者之间加一个小小的减震器。

### 7.5 从 PCM 到 FFT

每个解码后的 20 ms 帧会先加窗（Hann），再用 `np.fft.rfft` 做变换，分箱到 64 个显示频带，并以 Unicode 方块字符绘制出来。因此终端中的频谱就是整个流水线端到端正常工作的证据：

```text
Mic -> Clip -> BLE -> SDK -> Opus decode -> PCM -> FFT -> your eyes
```

当你说话时柱状条随之变化，说明这条链路中的每一个阶段 —— 包括你在第 5 节中亲手构建的 RTC 建立过程 —— 都在正常工作。

## 8. 后续步骤

RTC SDK 为你的应用提供了实时、可直接解码的音频。之后的一切都由你来决定：

```text
RTC SDK -> Opus decode -> PCM
    ├── FFT spectrum (this tutorial)
    ├── VAD / wake word
    ├── Streaming ASR
    ├── WebSocket relay
    └── Voice assistant
```

关于设备控制、录音和文件下载，请参阅 [reSpeaker Clip Basic SDK Guide](/cn/respeaker_clip_basic_sdk_guide)；关于产品的初始设置，请参阅 [Getting Started](/cn/respeaker_clip)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
