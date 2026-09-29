---
description: Building an interruptible voice terminal on an edge device — which boards and microphone you need, which interfaces it exposes, the language × device support matrix, and measured RK3576 ASR/TTS results
title: 'Interruptible Conversational Voice AI on the Edge: Build, Deploy, and Measured Results'
keywords:
  - conversational voice AI
  - barge-in voice assistant
  - edge voice terminal
  - AEC microphone array
  - Qwen3-ASR
  - Matcha-TTS
  - sherpa-onnx wake word
  - RK3576
  - RK3588
  - RK1828
  - Jetson Orin NX
  - OpenAI-compatible Chat Completions
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg
slug: /solutions/conversational-voice-ai
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[Usage notice]
This is an open-source reference implementation, not a certified product. Speech accuracy has been measured on RK3576 and on Orin NX (Qwen3-ASR int4) only.
:::

## What this solution does

Someone walks up to a device and talks to it. The device answers out loud; if they start speaking again halfway through the answer, it stops immediately instead of finishing the sentence.

Built for places where a person speaks to a machine with their hands busy: service desks, exhibits and kiosks, robot voice front ends, smart-home and room terminals.

- Open-source implementation: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Speech stays on the device</h3>
                <p>Recognition (Qwen3-ASR) and synthesis (Matcha-TTS) run on the edge host. With a fully local preset the conversation model runs there too, and the device works offline after the first start.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Plug in the mic and interrupt</h3>
                <p>The reSpeaker XVF3800 does echo cancellation in hardware and is detected automatically over USB, including hot-plug. Speak while the answer is playing and the device stops.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source, works with your backend</h3>
                <p>The code is open. The conversation goes through an OpenAI-compatible API, so pointing it at your own knowledge base, agent or ordering backend is one URL change; the speech layer stays as is.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Measured in Chinese and English</h3>
                <p>Measured on RK3576: 1.05% character error rate on short Chinese utterances, synthesis at 0.204× realtime. RK3588 and Jetson hosts offer 30 languages.</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO image: microphone array and speaker as installed on a service desk or kiosk — needs a field shoot -->

## What hardware you need

Four things on site: a microphone array, a speaker and a voice host; if conversation text must not leave the site, also an accelerator card or a host large enough for a 4B model.

**① The microphone array** must do acoustic echo cancellation (AEC) in hardware.

| | Microphone | Notes |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>USB array with hardware AEC, noise suppression and beamforming | The validated default. Both the 2-channel and 6-channel firmware layouts are recognized and the processed channel is selected automatically. Other arrays fall back to capture channel 1 and need an acoustic test on site before going live. |

**② A speaker**: USB or 3.5 mm, on the same device. Do not mute the microphone during playback to avoid echo; that also disables barge-in.

**③ The voice host** runs recognition, synthesis and the resident agent, and determines which languages you can offer:

| | Voice host | Languages it can serve | When to pick it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>Rockchip NPU, Qwen3-ASR W8A8 + Matcha | Chinese, English | Lowest-cost host for the full local speech stack; the measured data under "Performance and measured data" comes from this board |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Rockchip NPU, adds Kokoro RKNN for TTS | All 30 | You need the 28 languages beyond Chinese and English, or plan to add an RK1828 card for local conversation later |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Qwen3-ASR int4 + Matcha on the GPU | All 30 | The host also runs other AI workloads and needs GPU headroom. Do not run a local 4B model on it |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Speech plus Qwen3.5-4B on the same host | All 30 | Conversation text must not leave the site |

reComputer R2000 series also runs a CPU speech stack (sherpa-onnx, English only); it is not offered in the configurator on the reference design page yet. It does not support Chinese, and ASR and TTS share four CPU cores.

**④ Fully local conversation on the RK route**: add an RK1828 / RM182X PCIe NPU card to an RK3588 host to run Qwen3-4B. The card needs its own 12 V supply, and the host needs the driver and device node. Only one large model can be resident on the card at a time.

Also: the first start needs internet access and free disk (at least 25 GB on Orin NX), and the deployment tool must be able to reach the host over the network.

## How to deploy on site

Install the microphone and speaker first, then run the deployment wizard.

### 1. Placing the microphone and speaker

:::tip[Check that the microphone has hardware echo cancellation]
Barge-in, turn detection and keeping the microphone open during playback all require a capture channel with the speaker's output already removed in hardware. A microphone without hardware AEC causes false interruptions or an echo loop, and no software setting fixes that.
:::

- Use the reSpeaker XVF3800 by default. If you use another array, run an acoustic test on site first; unknown arrays default to channel 1.
- Run acceptance with the speaker at normal room volume. A terminal that passes at low volume can fail at operating volume for acoustic reasons unrelated to the models.
- The reSpeaker can be plugged in before deployment or hot-plugged after the agent is up. The agent selects the capture device by USB product identity, ignores HDMI/DP pseudo-inputs, and recovers from unplug/replug without a container restart.

### 2. Installing the software

The SenseCraft Solution app deploys to the host over SSH (or locally, if you are on a Jetson Orin with JetPack 6.2). Per-device steps are in the deployment guide; the outline is four steps.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Choose a preset**: cloud / OpenAI-compatible, or fully local. With a cloud preset, conversation text goes to an external endpoint; with a fully local preset, nothing leaves the site.
2. **Choose the conversation language**: the deployment resolves `(language, device)` to one speech profile before starting the other services. An unsupported pair, such as Chinese on reComputer R2000 series, exits with code 2 and stops the whole `docker compose up`; nothing starts halfway.
3. **Fill in the endpoint and persona**: base URL, key and model ID for the cloud preset (defaults: the Beijing-region Qwen endpoint with `qwen3.5-flash`), plus the system prompt. You can switch from **Always listening** to **Wake word required** and type any short Chinese or English phrase; the open-vocabulary sherpa-onnx detector in the image compiles it locally at startup.
4. **Verify in the dashboard**: the web dashboard on port 18000 shows listening / thinking / speaking / barged-in.

<!-- TODO image: the four dashboard states and a screen recording of one interruption — needs capture on a deployed device -->

Acceptance: three turns in the real room at real speaker volume, interrupting 0.5–1 s after each answer starts. Check that the old reply stops immediately and the interrupting utterance is not lost.

Time: about 30 minutes for a cloud preset. Fully local presets take longer because the first start downloads the model files; after one successful online start, images and model files are cached and the device runs offline.

## Available interfaces

The agent calls a streaming OpenAI-compatible Chat Completions API. Point `LLM_BASE_URL` at your own service to integrate: a RAG endpoint over your documents, an agent framework with tool calls, a robot command layer, an ordering or ticketing backend. The speech layer does not change.

- **Hosted model**: keep the defaults or replace base URL, key and model ID. The endpoint must support streaming Chat Completions.
- **Your own service**: implement the same interface. The agent sends the transcript as the user turn and streams the reply into synthesis, so the first sentence starts playing before your service finishes generating.
- **Speech layer only**: to build a different agent on top, call the duplex WebSocket and offline endpoints below directly.

### Complete port and endpoint list

All services use host networking, so `<host>` is the voice host's own address.

| Endpoint | Which deployment | What it carries |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | every preset | The duplex session: PCM in, transcript and TTS PCM out, plus the abort a barge-in triggers |
| `POST http://<host>:8621/asr` | every preset | Offline whole-file transcription, no VAD and no streaming. The offline accuracy figures under "Performance and measured data" are measured here |
| `POST http://<host>:8621/tts` | every preset | Synthesis; the `x-rtf` response header carries the realtime factor |
| `GET http://<host>:8621/health` | every preset | Readiness; used as the Compose healthcheck |
| `http://<host>:18000` | every preset | Web dashboard: turn state and the transcript of each turn |
| `http://<host>:1828/v1`, `/health` | RK3588 + RK1828 local preset | OpenAI-compatible Chat Completions for the on-device Qwen3-4B |
| `http://<host>:8000/v1`, `/health` | Orin NX local preset | OpenAI-compatible Chat Completions for the on-device Qwen3.5-4B |
| `LLM_BASE_URL` (outbound) | cloud preset | Any OpenAI-compatible endpoint |

Both local routes expose the same interface as the cloud route, so switching changes only `LLM_BASE_URL`. Unless it points outward, there is no broker and no cloud component in the data path.

## Performance and measured data {#measured-detail}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### Runtimes and key parameters

The duplex protocol and the Agent are the same on every host; only the backends that run ASR and TTS differ.

| Speech host | ASR backend / model | TTS backend / model | Resolved profile |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR, RKNN encoder + RKLLM decoder, W8A8 | `rk.tts` — matcha-icefall-zh-en, ORT acoustic + RKNN Vocos | `rk3576-default` |
| RK3588 (zh / en) | `rk.asr` — same | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588 (other 28) | `rk.asr` — same | `rk.tts` — Kokoro v1.0 hybrid, RKNN INT8 decoder front + CPU ONNX prefix/tail | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB (zh / en) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.matcha_trt` — matcha-icefall-zh-en, bf16/fp16 Vocos | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB (other 28) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice, int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000 series (English) | `cpu.sherpa_asr` — sherpa-onnx streaming zh-en, int8 CPU | `cpu.sherpa` — sherpa-onnx CPU voice, int8 | `rpi5-default` |

The fully local Orin NX preset uses the TensorRT-Edge-LLM v0.9.1 image; engines built for other TensorRT / JetPack versions are not loaded. On the RK side, model files are pulled at first start.

**Language × device matrix.** Deployment picks a profile from (language, device). Of the 18 cells, 15 are deployable and 3 are unsupported; of the deployable cells, 5 have end-to-end measurements and in the other 10 each component has on-device measurements. The unsupported cells: Chinese on reComputer R2000 series, and the "other 28" languages on RK3576 and reComputer R2000 series. Chinese does not fall back to Whisper: on every board measured, Whisper's Chinese CER is 35–56%. RK3576 has only the Matcha zh-en TTS voice, so it can transcribe the other 28 languages but cannot synthesize an answer.

Three parameters that affect deployment results:

- `barge_in_min_speaking_ms` `500`, `barge_in_min_chars` `2`: a barge-in counts only once the reply has started playing and the interruption is longer than one syllable.
- `playback_drain_enabled` `true`: the Agent stays in SPEAKING until the local playback buffer is empty. With it off, speech during the tail of the reply is treated as a new turn and the old reply keeps playing.
- Server-side end of turn: silero, 400 ms of silence + `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`, ending the turn at the first natural pause; a long sentence with a pause in the middle gets an answer to its first clause only.

### reComputer RK3576 series measurements

Conditions: Debian 12 + Rockchip BSP, profile `rk3576-default`; the test script and the speech container run on the same device and talk over `127.0.0.1:8621`, so the numbers exclude network transfer.

**ASR on the offline endpoint** (`POST /asr`, whole file, no VAD, no streaming):

| Language | Set | n | Error rate |
|---|---|---:|---:|
| Chinese | short | 5 | CER 1.05% |
| Chinese | long 10–20 s | 5 | CER 9.62% |
| English | short | 5 | WER 3.65% / CER 1.11% |
| English | long 10–20 s | 5 | WER 6.99% / CER 4.16% |

Every English long file came back as full multi-clause text; the remaining errors are recognition deviations (`"3:2"` transcribed as `"three to two"`), not truncation.

**ASR in a live session** (`/v2v/stream`, factory defaults `ASR_MAX_NEW_TOKENS=64`, `ASR_FINAL_STOP_ON_PUNCT=1`), scored against the full reference text:

| Language | Set | n | Error rate |
|---|---|---:|---:|
| Chinese | short | 5 | CER 29.09% |
| Chinese | long 10–20 s | 5 | CER 84.06% |
| English | short | 5 | WER 16.95% / CER 10.16% |
| English | long 10–20 s | 5 | WER 63.38% / CER 62.58% |

The high live-session error rate comes from the server-side end-of-turn decision, not decoder truncation: with `ASR_MAX_NEW_TOKENS` raised to 256 and `ASR_FINAL_STOP_ON_PUNCT` set to 0, the transcripts in both languages are byte-for-byte identical.

**TTS** (`POST /tts`, read from the server's `x-rtf` response header, Matcha ORT acoustic + RKNN Vocos, icefall zh-en voice):

| Language | n | Real-time factor | Range |
|---|---:|---:|---|
| Chinese | 5 | 0.204 | 0.190–0.216 |
| English | 5 | 0.194 | 0.158–0.216 |

English audio per sentence is 2.5–4.3 s long.

**Live-session latency** (echo mode, no LLM in the chain):

| Metric | Language | n | Value |
|---|---|---:|---|
| End of speech → first TTS frame (`stop_to_tts_audio`) | Chinese | 4 | 1575 / 1624 / 1596 / 1580 ms (about 1.6 s) |
| ASR final → first TTS frame (`final_to_tts_audio`) | English | 5 | p50 1127 ms, mean 1126 ms, 1021–1232 ms |
| End of speech → ASR final (`eos_to_final`) | English | 5 | mean 2837 ms |

The measured Chinese end of speech → ASR final (`stop_to_final`) value arrives later than the spoken reply and is not cited.

Reproduce: `docs/perf/rk3576-matrix-20260906.md` and `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md` in the openvoicestream repository; English `eos_to_final` with `asr_stream_ws_bench.py`.

### reComputer J40 series measurements

| Metric | Value | Conditions |
|---|---|---|
| Chinese ASR | CER 0 on the golden set, streaming and offline | Qwen3-ASR 0.6B int4 |

### Known degradation

- **Microphone without hardware AEC.** Every number above was taken on a hardware-AEC capture channel. Without it the microphone causes false barge-ins or feedback, and no configuration value makes up for it.
- **Pauses mid-sentence.** On the same audio, the offline endpoint gives CER 9.62% and the live session 84.06%; the gap comes from the turn-taking policy, and content after a mid-sentence pause gets no answer.
- **Acceptance volume below working volume.** A terminal that passes at low volume can fail at working volume for acoustic reasons.

### Next steps

- Tune the server-side end-of-turn detection so that a mid-sentence pause no longer ends the turn early.
- Measure end-to-end latency and accuracy for the other 10 deployable cells of the language × device matrix.

## Data and asset sources

- **FLEURS**: the ASR corpus for the RK3576 measurements, CC BY 4.0, 5 short and 5 long clips per language, sha256-verified. TTS used 5 self-written sentences per language. The source for the cross-device Whisper comparison is `docs/perf/whisper-cross-device-20260827.md` in the openvoicestream repository.
- **Raw run records**: `docs/perf/rk3576-matrix-20260906.md` in the openvoicestream repository; every RK3576 figure above maps to a record there.
- **Speech models**: Qwen3-ASR, Matcha-TTS (icefall zh-en voice), Kokoro v1.0, Qwen3-TTS CustomVoice and sherpa-onnx each keep their upstream licence terms. Check the licence of each model you actually deploy before commercial shipment.
- The corpora are not distributed with the repository; obtain them separately.
