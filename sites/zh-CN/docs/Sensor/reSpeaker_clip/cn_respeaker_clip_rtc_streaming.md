---
description: '使用 RTC SDK 通过 BLE 从 reSpeaker Clip 实时传输 Opus 音频：运行 FFT 演示、理解会话建立流程、编写最小接收端并解码实时音频。'
title: 使用 reSpeaker Clip RTC SDK 构建实时音频流
keywords:
  - reSpeaker clip
  - rtc streaming
  - real-time audio
  - live audio streaming
  - opus
  - ble
  - fft spectrum
  - python sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_rtc_streaming
sku: 100020126
last_update:
  date: 11/20/2026
  author: Ray
createdAt: '2026-08-24'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_rtc_streaming/
---

# 使用 reSpeaker Clip RTC SDK 构建实时音频流

本教程将教你如何在 reSpeaker Clip 采集音频的同时接收实时音频，而不是先录制再下载。你将运行一个实时 FFT 频谱演示，理解 RTC 会话是如何建立的，亲自编写一个最小化的流式应用，并了解这些音频数据在主机端实际长什么样。

> **这里的 RTC 指的是 reSpeaker Clip 的实时音频流功能，而不是 WebRTC。** 没有浏览器、没有 SDP、没有 ICE——只有一个 Clip 通过 BLE 产生 Opus 帧，以及一个 Python 应用在另一端消费这些数据。

## 1. 介绍

### 1.1 reSpeaker Clip 上的 RTC 流式传输是什么？

普通录音会把音频写入 SD 卡，然后你再把它下载下来。RTC 流式传输完全跳过 SD 卡：编码后的音频在产生的同时就被发送到你的主机。

```text
Recording:
Mic -> DSP -> Opus -> SD Card -> Download

RTC:
Mic -> DSP -> Opus -> BLE -> Host Application
```

只要“此刻”很重要，这种差异就很关键：实时频谱显示、流式 ASR、语音活动检测、唤醒词流水线，或者需要在用户仍在说话时就做出响应的语音助手。

### 1.2 你将学到什么

完成本教程后，你将能够：

- 使用 Python SDK 连接到 reSpeaker Clip；
- 创建一个 RTC 会话并接收实时 Opus 数据包；
- 解释完整的 RTC 流生命周期；
- 运行 FFT 演示并读懂其输出；
- 在 RTC SDK 之上构建你自己的实时应用。

## 2. RTC 流式传输的工作原理

### 2.1 RTC 流式传输架构

在 RTC 模式下，音频路径是一条从麦克风直达你应用的流水线：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_streaming_architecture.png" alt="RTC streaming architecture: microphone through DSP and Opus encoder to BLE and the Python SDK" width={900} height="auto" /></p>

在 RTC 模式下，音频是实时产生的，从不会触及 SD 卡，主机可以在数据到达时就对其进行处理。没有任何东西会等待录音结束，因为根本不存在录音文件。

### 2.2 RTC 会话生命周期

一个 RTC 流通过两个步骤建立，然后一直流动直到你将其停止：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_session_lifecycle.png" alt="RTC session lifecycle sequence diagram between the Python app and reSpeaker Clip" width={900} height="auto" /></p>

这两个调用可以映射到一个简单的心智模型：

```text
start_rtc()   =  start producing audio
stream_rtc()  =  start receiving audio
```

在 `start_rtc()` 之后，设备会运行麦克风流水线，但此时还不会向你发送任何数据。在 `stream_rtc()` 之后，设备开始推送 `STREAM_DATA` 帧——每个帧一个 Opus 数据包——直到 `stop_recording()` 用 `STREAM_END` 结束会话。

### 2.3 为什么 RTC 要使用会话？

`start_rtc()` 会创建一个实时音频会话并返回其会话 ID。随后 `stream_rtc(session, receiver)` 告诉设备：主机现在希望消费这个会话的实时音频。具体来说，它会发出 `AT+DOWNLOAD=<session>`，而固件会丢弃在那一刻之前排队的所有内容——RTC 只传输“现在”，因此在你订阅之前产生的音频永远不会被发送。

这与文件下载的关键区别在于：不要把 RTC 会话想象成一个在设备上不断增长的文件。它是一个你可以附着上的实时源，在你附着之前错过的任何内容，按设计都会消失。

## 3. 准备 RTC SDK

### 3.1 前置条件

- 一块 reSpeaker Clip；
- 固件 **v0.1.5 或更高版本**，这是第一个正式支持 `AT+START=rtc` 的版本（可通过 `AT+VERSION` 或 `clip.firmware_version()` 检查；如果你的 Clip 运行的是更早的版本，请按照 [固件更新指南](/cn/respeaker_clip#固件更新指南) 进行更新）；
- Python 3.10+；
- 主机上可用的 BLE 环境；
- 从官方 [`Seeed-Studio/reSpeaker_Clip`](https://github.com/Seeed-Studio/reSpeaker_Clip) 仓库检出的 reSpeaker Clip Python SDK。

### 3.2 安装 SDK

RTC 流式传输包含在官方 v0.1.5 版本中。克隆官方仓库，检出该标签，并安装带有 BLE 和 examples 扩展的 SDK：

```bash
git clone https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git checkout v0.1.5

cd sdk
python -m pip install -e '.[ble,examples]'
```

该标签固定了本教程所针对的版本；`main` 分支跟踪相同的 RTC API，并会接收后续修复。

本教程中这两个扩展很重要：

- `ble` 安装 BLE 传输层（Bleak）；
- `examples` 安装 FFT 演示所需的依赖（Opus 解码器和 NumPy）。

在这个版本中，RTC 实时流仅支持 BLE：它承载在 BLE 文件数据通知上，而不是 Wi-Fi/UDP 传输。

## 4. 运行 RTC FFT 演示

这一节才是你的真正入口：先运行演示，最后再理解它。

### 4.1 启动演示

在安装步骤留下的 `sdk` 目录中，使用你的设备地址运行示例：

```bash
python examples/demo_stream_fft_display.py \
  --address AA:BB:CC:DD:EE:FF \
  --duration 30
```

省略 `--address` 将自动扫描名为 "Clip" 的 BLE 设备，省略 `--duration` 则会一直流式传输直到按下 Ctrl-C：

```bash
python examples/demo_stream_fft_display.py
```

如果你只想在阅读任何代码之前先确认发布的固件确实能进行流式传输，SDK 还会安装 `clip.stream`，它会将同样的实时帧捕获到 `rtc-<session>.bin` 中，并打印流的诊断信息：

```bash
clip.stream --transport ble --address AA:BB:CC:DD:EE:FF --duration 10
```

该演示还接受 `--depth-frames` 参数来改变抖动缓冲区深度（默认 5 帧；`0` 则禁用缓冲）。

### 4.2 演示启动时发生了什么？

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
avg inter-frame : 20.0 ms (max 120 ms)
```

- **frames received / bytes received** —— 收到多少个 Opus 数据包以及它们的总大小。
- **avg inter-frame** —— 数据包到达之间的平均间隔。RTC 大约每 20 ms 产生一个 Opus 帧，因此在流运行期间，你应该能看到每秒大约 50 个数据包，平均间隔接近 20 ms。
- **seq discontin.** —— 观测到的序列号不连续事件。固件只有在帧已经交给 BLE 链路之后才会递增序列号，因此设备端队列丢弃和暂停不会消耗序列号；把非零值视为协议或链路异常，而不是直接的丢包计数。

具体数值会随 BLE 链路状况和流式传输时长而变化。在这些统计下方，演示还会打印 JitterBuffer 统计信息（欠载、追赶丢弃、队列深度分布）以及延迟拆分（队列 / 解码 / FFT）。第 7 节会解释它们的含义。

## 5. 构建一个最小 RTC 流式应用

这一节是本教程的核心：把演示中执行的同样 RTC 建立过程精简到本质，方便你在此基础上扩展。

### 5.1 连接到 reSpeaker Clip

一切都从传输层和客户端开始，与 [基础 SDK 指南](/cn/respeaker_clip_basic_sdk_guide) 中完全相同：

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

接收器会把收到的流帧转换为回调调用。最简单的消费者是打印每个数据包的长度：

```python
from clip.stream import StreamReceiver


def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))


receiver = StreamReceiver(on_frame=on_frame)
```

一次回调调用就对应一个 Opus 数据包。`on_frame` 在接收路径内联运行，因此要保持其非阻塞——把字节交给队列、线程或其他任务，在别处做耗时工作。

### 5.3 启动一个 RTC 会话

```python
session = await clip.start_rtc()
print("RTC session:", session)
```

这会发送 `AT+START=rtc`；设备启动其 RTC 音频流水线并返回会话 ID。此时设备只是在产生音频——主机尚未订阅，也还没有任何数据流向你。

### 5.4 开始接收 RTC 音频

```python
token = await clip.stream_rtc(session, receiver)
await receiver.wait_start(timeout=10)
```

`stream_rtc()` 会把你的接收器附着到传输层的帧路径上，并发出 `AT+DOWNLOAD=<session>`；从这一刻起，设备会将 `STREAM_START`，然后是 `STREAM_DATA` 帧，推送到 `receiver` 中。`wait_start()` 会在 `STREAM_START` 到达后返回——那一刻起，实时数据通道才算真正建立。

在发送 `STREAM_START` 之前，固件会等待紧凑的 BLE 连接参数（最长约 5 秒），因此这里出现短暂延迟是正常的，而 `timeout=10` 也为此预留了余量。

返回的 `token` 是传输层帧处理槽位的租约；当流结束时（第 5.6 节）你需要释放它。

### 5.5 接收 Opus 数据包

回到你的回调函数：

```python
def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))
```

这是你的应用程序入口点。无论你要构建什么——FFT、VAD、流式 ASR、WebSocket 中继——都从这些字节开始。下一节会精确解释它们包含什么。

### 5.6 停止 RTC 流

停止过程与录音 API 相对应：`stop_recording()` 发送 `AT+STOP`，设备以 `STREAM_END` 响应，然后你释放处理程序租约：

```python
try:
    await clip.stop_recording()
    await receiver.wait_end(timeout=5)
finally:
    transport.detach_file_frame_handler(token)
```

在 `finally` 中释放租约，可以在流失败或脚本被中断时保持传输层的帧处理槽位干净。

完整的最小应用程序，组装如下：

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
        try:
            await receiver.wait_start(timeout=10)

            await asyncio.sleep(10)      # consume the live stream for 10 s

            await clip.stop_recording()
            await receiver.wait_end(timeout=5)
        finally:
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

你的回调接收到的是普通的 `bytes`——每次调用一个 Opus 编码的音频数据包。不是 WAV，不是 PCM，也不是原始 BLE 通知：SDK 已经解析了 RTC 传输帧（`STREAM_START` / `STREAM_DATA` / `STREAM_END`），只把负载交给你。

```text
BLE STREAM_DATA -> SDK parses the frame -> StreamReceiver -> Opus payload (bytes)
```

接收器还维护了实时统计信息，你可以随时读取：`frames_received`、`bytes_received`、`sequence_gaps`、`avg_inter_frame_ms`、`max_inter_frame_ms` 和 `first_frame_delay_s`。在 `STREAM_END` 之后，`receiver.end_reason` 会告诉你流结束的原因（被停止、超时或断开连接）。

一个接收器可以为多个消费者提供数据：`receiver.add_sink(sink)` 会注册一个额外的原始帧分流器，它在 `on_frame` 之前运行。SDK 提供了两个现成的 sink——`StreamCapture` 将相同的 Opus 数据包写入带长度前缀的 `.bin` 日志，而 `StreamConsumer` 将有界的块和栈推送到异步回调，用于转发或流式 ASR。第 4.1 节中的 `clip.stream` 命令就是构建在 `StreamCapture` 之上的。

### 6.2 RTC 音频格式

当前的 RTC 流为：

```text
Codec: Opus
Sample rate: 16 kHz
Channels: mono
Frame duration: ~20 ms (320 samples)
```

因此大约每 20 ms 一帧，即在流运行时每秒约 50 帧——这与你在演示中看到的 `avg inter-frame` 输出数字相同。

### 6.3 从 Opus 到 PCM

由于负载是压缩的 Opus，你绝不能把它直接重新解释为采样数据：

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

这个解码步骤是你的回调与真实音频采样之间唯一的隔阂——而这正是你刚刚编写的最小应用之上，FFT 演示所添加的全部内容。

## 7. 理解 demo_stream_fft_display.py

本节会把演示与已学内容对应起来，让这个演示不再是“魔法脚本”，而变成“我的最小程序，加一个解码器，再加一个 FFT”。

### 7.1 演示结构

该演示是在最小应用结构的基础上，将一个处理链附加到 `on_frame` 上：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="FFT demo pipeline mapped to SDK components" width={900} height="auto" /></p>

`on_frame` 将每个 Opus 数据包送入一个 `LiveSpectrum` 对象；后台线程以每帧 20 ms 的节奏消费、解码、运行 FFT，并重绘终端的一行。

### 7.2 演示中的 RTC 建立

演示的 `run()` 函数执行的正是第 5 节中的完整序列：

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

如果你理解了第 5 节，你就已经理解了演示的核心——其余的都是音频处理。

### 7.3 解码 RTC 音频

演示的解码方式与第 6.3 节完全相同：一个 `opuslib.Decoder(16000, 1)` 将每个数据包转换为 320 个 int16 采样。你不需要了解 Opus 编解码器的内部工作原理；重要的边界是“回调给出 Opus 字节，解码器给出 PCM 采样”。

### 7.4 为什么演示要使用抖动缓冲区？

BLE 传输到达并不完全均匀。你可能会看到这样的帧间间隔：

```text
20 ms, 20 ms, 35 ms, 5 ms, 20 ms, ...
```

SDK 的 `clip.jitter.JitterBuffer` 会把它平滑为稳定的消费节奏：

```text
BLE packets -> JitterBuffer -> steady 20 ms audio frames
```

演示会创建 `JitterBuffer(depth_frames)`（默认 5 帧，即 100 ms 的初始填充），在 `on_frame` 中对每个到达的数据包调用 `put()`，并在处理线程中每 20 ms tick 调用一次 `get()` 取出一帧。`get()` 在欠载时返回 `None`（静音时不会绘制 FFT），如果主机处理落后，缓冲区会丢弃最旧的帧以追赶到实时边缘。这就是抖动缓冲区的全部作用：在不均匀的生产者和稳定的消费者之间充当一个小型减震器。

### 7.5 从 PCM 到 FFT

每个解码后的 20 ms 帧会加窗（Hann），用 `np.fft.rfft` 做变换，分箱到 64 个显示频带，并以 Unicode 方块字符绘制。终端频谱因此成为整个流水线端到端正常工作的证明：

```text
Mic -> Clip -> BLE -> SDK -> Opus decode -> PCM -> FFT -> your eyes
```

当你说话时柱状条随之变化，说明这条链路中的每个阶段——包括你在第 5 节中亲手构建的 RTC 建立过程——都在正常工作。

## 8. 后续步骤

RTC SDK 为你的应用提供了实时、可直接解码的音频。之后的一切都由你决定：

```text
RTC SDK -> Opus decode -> PCM
    ├── FFT spectrum (this tutorial)
    ├── VAD / wake word
    ├── Streaming ASR
    ├── WebSocket relay
    └── Voice assistant
```

关于设备控制、录音和文件下载，请参阅 [reSpeaker Clip Basic SDK Guide](/cn/respeaker_clip_basic_sdk_guide)；关于产品设置，请参阅 [入门指南](/cn/respeaker_clip)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
