---
description: Building an interruptible voice terminal on an edge device — which boards and microphone you need, how the barge-in and turn-taking logic actually works, the language × device support matrix, and the measured RK3576 ASR/TTS numbers with their full scope
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[Usage notice]
This is a **reference implementation**, not a certified product. Speech accuracy has been benchmarked on one board (RK3576) and one model configuration (Qwen3-ASR int4 on Orin NX); **10 of the 18 cells in the language × device matrix are deployable but carry no measured number**. Barge-in has no published latency figure — acceptance is a manual test in the real room at the real speaker volume. Do not plan around a number this page does not state.
:::

## What this solution does

Someone walks up to a device and talks to it. The device answers out loud, and when they start speaking again mid-answer, it stops — immediately, not at the end of the sentence. That is the whole product, and the part that is engineered rather than assumed is the stopping.

Built for places where a person speaks to a machine out loud with their hands busy: service desks, exhibits and kiosks, robot voice front ends, smart-home and room terminals.

- Open-source implementation: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Speech is local on every configuration</h3>
                <p>Qwen3-ASR and Matcha-TTS run on the edge board itself. Only the conversation model may be remote, and it is behind a single environment variable.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Interruption requires hardware AEC</h3>
                <p>The microphone must expose a capture channel with echo already removed. Without it, capture — which stays open during playback — hears the device's own speaker and the terminal interrupts itself.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>The language is resolved before startup, not per utterance</h3>
                <p>A (language, device) pair becomes exactly one speech profile, and an unserviceable pair fails the deployment instead of degrading it.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>One board has a full bench</h3>
                <p>RK3576, measured 2026-09-06: 1.05% character error rate on short Chinese utterances through the offline endpoint, synthesis at 0.204× realtime.</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO image: microphone array and speaker as installed on a service desk or kiosk — needs a field shoot -->

## What hardware you need

Four things on site: a microphone array, a speaker, one edge board, and — if the conversation must stay local — either an accelerator card or a board large enough to hold a 4B model.

**① The microphone array** is the one component with no substitute. It must do acoustic echo cancellation in hardware.

| | Microphone | Why this one |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>USB array with hardware AEC, noise suppression and beamforming | The validated default. Its 2-channel and 6-channel firmware layouts are both recognized and the processed channel is selected automatically. Any other array falls back to capture channel 1 and needs an on-site acoustic check first. |

**② A speaker** — USB or analog, on the same device. Muting the microphone during playback is not an acceptable workaround: it removes the echo and removes barge-in with it.

**③ The voice host** runs recognition, synthesis and the resident agent. It also decides which languages you can offer:

| | Voice host | Languages it can serve | When to pick it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>Rockchip NPU, Qwen3-ASR W8A8 + Matcha | Chinese, English | Lowest-cost board that runs the full local speech stack, and the only one with a published bench |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Rockchip NPU, adds Kokoro RKNN for TTS | All 30 | The other 28 languages, or a host that can later take an RK1828 card for local conversation |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Qwen3-ASR int4 + Matcha on the GPU | All 30 | The board is shared with another AI workload and needs GPU headroom. Do not start a local 4B model here |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Speech plus Qwen3.5-4B on the same board | All 30 | Conversation text must not leave the site |

reComputer R2000 series also runs the CPU speech stack (English only, sherpa-onnx). It is not offered in the configurator yet, so there is no purchase profile to quote; it refuses Chinese by design, and CPU-only ASR and TTS share four cores.

**④ For fully local conversation on the RK route**, an RK1828 / RM182X PCIe NPU card behind an RK3588 host runs Qwen3-4B. It needs independent 12 V power, its host driver and device node, and it holds only one large model resident at a time.

Beyond that: internet and free disk for the first start (Orin NX needs at least 25 GB), and a network the deployment tool can reach the board on.

## How to deploy on site

Two parts: get the acoustics right, then run the deployment wizard.

### 1. Placing the microphone and speaker

:::tip[The AEC channel is the load-bearing assumption]
Everything downstream — barge-in, turn detection, the decision not to mute during playback — assumes the capture channel has already had the speaker's output removed in hardware. A microphone without that will produce false interruptions or an echo loop, and no software setting recovers it.
:::

- Use the reSpeaker XVF3800 unless you have measured an alternative on site. Its firmware channel layout is detected automatically; an unknown array defaults to channel 1.
- Keep the speaker at a normal room volume for acceptance testing. A device tested at low volume can fail at operating volume for acoustic reasons that have nothing to do with the models.
- The reSpeaker may be plugged in before deployment or hot-plugged afterwards. The agent selects the physical capture device by stable USB product identity, ignores HDMI/DP pseudo-inputs, and recovers from unplug/replug without a container restart.

### 2. Installing the software

Deployment runs from the SenseCraft Solution app against the board over SSH (or locally, if you are already on a Jetson Orin with JetPack 6.2). The per-device steps are in the deployment guide; the outline is four moves.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Choose a preset** — cloud/OpenAI-compatible, or fully local. This is the only choice that decides whether anything leaves the site.
2. **Choose the conversation language** — the deployment turns `(language, device)` into exactly one speech profile before any service starts. An unsupported pair, such as Chinese on reComputer R2000 series, exits with code 2 and stops the whole `docker compose up`. Nothing partially starts.
3. **Fill in the endpoint and personality** — base URL, key and model ID for the cloud preset (defaults are the Beijing Qwen endpoint with `qwen3.5-flash`), plus the system prompt. Optionally switch from **Always listening** to **Wake word required** and type any short Chinese or English phrase; the open-vocabulary sherpa-onnx detector compiles it locally on startup.
4. **Verify in the dashboard** — the web dashboard on port 18000 shows listening / thinking / speaking / barged-in.

<!-- TODO image: the four dashboard states and a screen recording of one interruption — needs capture on a deployed device -->

 Acceptance is three turns in the real room at real speaker volume, interrupting 0.5–1 s after each answer begins, confirming the old reply stops immediately and the interrupting utterance is not lost.

Timing: about 30 minutes for a cloud preset. Fully local presets take longer because the first start downloads model artifacts; after one successful online start every image and artifact is cached and the device runs offline.

## How to connect it to your own system

**The integration point is the LLM endpoint, not a message bus.** The agent calls a streaming OpenAI-compatible Chat Completions API, and `LLM_BASE_URL` is where you put your own service — a RAG endpoint over your documents, an agent framework with tool calls, a robot command layer, an ordering or ticketing backend. Nothing in the speech layer changes.

- **Using a hosted model** — leave the defaults or replace base URL, key and model ID. The only requirement is streaming Chat Completions support.
- **Using your own service** — implement the same interface. The agent sends the transcript as the user turn and streams the reply into synthesis, so the first sentence starts playing before your service has finished generating.
- **Reading the raw speech layer** — the duplex WebSocket and the offline endpoints below are available directly if you want to build something other than the shipped agent on top of them.

### Complete port and endpoint list

Every service listens on host networking, so `<host>` is the voice host's own address.

| Endpoint | Which deployment | What it carries |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | every preset | The duplex session: PCM in, transcript and TTS PCM out, plus the abort a barge-in triggers |
| `POST http://<host>:8621/asr` | every preset | Offline whole-file transcription — no VAD, no streaming. The accuracy figures in the appendix were measured here |
| `POST http://<host>:8621/tts` | every preset | Synthesis; the response carries an `x-rtf` header with the realtime factor |
| `GET http://<host>:8621/health` | every preset | Readiness; used as the Compose healthcheck |
| `http://<host>:18000` | every preset | Web dashboard: turn state and the transcript of each turn |
| `http://<host>:1828/v1`, `/health` | RK3588 + RK1828 local preset | OpenAI-compatible Chat Completions for the on-device Qwen3-4B |
| `http://<host>:8000/v1`, `/health` | Orin NX local preset | OpenAI-compatible Chat Completions for the on-device Qwen3.5-4B |
| `LLM_BASE_URL` (outbound) | cloud preset | Any OpenAI-compatible endpoint |

The two local routes expose the same interface as the cloud route, which is why switching between them changes one variable and nothing else. No broker and no cloud component sits in the data path unless you point `LLM_BASE_URL` outward.

## For engineers: implementation details

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### Speech: one protocol, four runtimes

The duplex protocol, the agent state machine and the profile resolver are identical on every board. What differs is the backend that executes ASR and TTS.

| Voice host | ASR backend / model | TTS backend / model | Resolved profile |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR, RKNN encoder + RKLLM decoder, W8A8 | `rk.tts` — matcha-icefall-zh-en, ORT acoustic + RKNN Vocos | `rk3576-default` |
| RK3588 (zh / en) | `rk.asr` — same as above | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588 (other 28) | `rk.asr` — same as above | `rk.tts` — Kokoro v1.0 hybrid, RKNN INT8 decoder-front + CPU ONNX prefix/tail | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB (zh / en) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.matcha_trt` — matcha-icefall-zh-en, bf16/fp16 Vocos | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB (other 28) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice, int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000 series (en) | `cpu.sherpa_asr` — sherpa-onnx streaming zh-en, int8 CPU | `cpu.sherpa` — sherpa-onnx CPU voice, int8 | `rpi5-default` |

Two constraints worth knowing before you plan a port. The fully local Orin NX preset runs a **TensorRT-Edge-LLM v0.9.1** image whose engine lineage is separate from the cloud-LLM Orin NX preset — it carries its own device id in the matrix so a language switch stays inside that lineage, and engines built for another TensorRT/JetPack version fail the provenance check rather than loading. On the RK side, the model artifacts are pulled at first start (`RK1828_ARTIFACT_AUTO_DOWNLOAD=1`) and the card holds one large model resident at a time.

### The language × device matrix, and why it refuses

`profile-init` runs before every other service with `network_mode: none`, reads `language_device.yaml`, and writes exactly one resolved profile plus a small env overlay. Three outcomes:

| `status` | Meaning | Resolver behaviour |
|---|---|---|
| `measured` | The exact ASR+TTS combination named by the profile has an on-device number in `evidence[]` | proceeds |
| `unsupported` | No profile provides this pair | **exits 2**, `docker compose up` stops before a service starts |

The language catalogue is the RK runtime's 30-language set (`qwen3asr_rk/python/qwen3asr/config.py:3-9`), deliberately the narrower of the two available lists — Qwen3-ASR upstream advertises 52 and Whisper 99 — so one list covers every board and no cell loses a language.

The three `unsupported` cells are Chinese on reComputer R2000 series, and the other-28 group on RK3576 and reComputer R2000 series. The Chinese refusal is a design decision with a number behind it: Whisper's Chinese ceiling is 35–56% CER on every board measured, so a silent fallback would produce a deployment that appears to work and does not. RK3576 refuses the other 28 because its only TTS voice is Matcha zh-en — the board could transcribe those languages but could not speak the answer.

A deviation to re-read when the targeted bench lands: the multilingual spec names Whisper + Kokoro for the "English and other" column on Orin NX / RK3576 / RK3588, but no profile in `configs/profiles/` pairs a Whisper ASR backend with any TTS backend — every Whisper profile there is ASR-only. Until that pairing is built, those lanes route to the existing combined profiles, and each cell records the intended pairing under `planned_alternative`.

### Barge-in: what actually stops the reply

Interruption is a chain of four conditions, and the last one is the part that is easy to get wrong.

| Stage | Condition | Configured value |
|---|---|---|
| Capture during playback | Microphone-side VAD keeps running while TTS plays | `client_vad_backend` `silero` |
| Speech detection | Silero speech probability, native threshold | `client_vad_threshold` `null` (Silero's own 0.5, deliberately not an RMS value) |
| Minimum speech before it counts | Filters transient noise | `client_vad_speech_min_ms` `200` |
| End-of-utterance on the client | Client drives EOS rather than waiting for the server | `client_vad_silence_ms` `600`, `client_vad_drive_eos` `true` |
| Barge-in admissibility | The reply must have actually started, and the interruption must be more than a syllable | `barge_in_enabled` `true`, `barge_in_min_speaking_ms` `500`, `barge_in_min_chars` `2` |
| **Playback tail** | **The agent stays in SPEAKING until the local buffer is audibly empty** | `playback_drain_enabled` `true`, `playback_drain_timeout_s` `15.0` |

**The playback drain is the necessary gate.** The speech service signals `TTSDone` as soon as it has finished sending PCM, while the local PortAudio buffer is still draining audibly. Without the drain, a real utterance spoken into that tail is classified as a new idle-state turn instead of a barge-in — the old reply keeps playing and the user's words land in the wrong state. Turning it off does not disable barge-in visibly; it makes barge-in fail exactly in the window where users actually interrupt.

Two more settings that look cosmetic and are not: `client_vad_backend` is pinned to `silero` explicitly so a broken or custom image fails visibly instead of silently falling back to fixed-RMS energy VAD, which fragments speech and can self-barge; and `asr_language` is pinned from the operator's choice rather than left at `auto`, because that value becomes the session's `asr_language` and it is the only language knob the RK and Jetson Qwen3-ASR backends have.

### Turn-taking: why the live transcript is shorter than the audio

The **server-side** turn end is separate from the client VAD above. It uses silero with **400 ms of silence** and `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`, so the session finalizes on the first natural pause it hears. A long sentence containing a mid-utterance pause is answered after its first clause. That is a turn-taking policy tuned for conversational latency, not a recognition failure — see the appendix for the falsification test that established it.

### Optional wake word

Selecting **Wake word required** switches `pipeline_mode` from `always_on` to the wake-word source without rebuilding the image; the open-vocabulary sherpa-onnx KWS assets are already inside it.

| Setting | Value |
|---|---|
| `WAKEWORD_BACKEND` | `sherpa_onnx` |
| `WAKEWORD_PHRASE` | any short Chinese or English phrase (default `你好小智`) |
| `WAKEWORD_THRESHOLD` | `0.25` |
| `WAKEWORD_MIC_SKIP_MS` | `120` |
| Confirmation | a short 880 Hz tone after a successful detection |

The phrase is compiled locally at startup and, with sensitivity, is retained in the agent state volume. Always-listening remains the default so existing hands-free deployments are unaffected.

## Appendix: measured data {#measured-detail}

This section is for readers checking the numbers; skipping it does not affect deployment. Everything below is a single measurement pass on the stated hardware, **not independently reproduced**, and it is not a certification of any kind.

### What has been measured and what has not

| Item | Status |
|---|---|
| Language × device matrix, 18 cells | **5 measured**, 10 deployable but unquantified, 3 refused |
| RK3576, Chinese and English, ASR + TTS + live session | measured 2026-09-06 |
| Orin NX, Qwen3-ASR 0.6B int4, Chinese | measured 2026-07-04 — CER 0 on the golden set, streaming and offline |
| Conversation latency including an LLM | not collected — the live figures below are echo mode with no model in the loop |

"Deployable but unquantified" means the components have on-device numbers and the combination as a whole does not. It is not a claim that those cells perform like the measured ones.

### RK3576 detail

**Environment.** reComputer RK3576 series, Debian 12 with the Rockchip BSP. openvoicestream commit `a0b043a6` (branch `feature/language-device-resolver`), image `openvoicestream:rk-20260903.10` (`sha256:fdc480da3061…`). Bench script and speech container on the same machine over `127.0.0.1:8621` — the numbers do not include any network hop. Resolved profile `rk3576-default`.

**ASR through the offline endpoint** (`POST /asr`, whole file, no VAD and no streaming — this is decoder capability):

| Language | Set | n | Error |
|---|---|---:|---:|
| Chinese | short utterances | 5 | 1.05% CER |
| Chinese | long form, 10–20 s | 5 | 9.62% CER |
| English | short utterances | 5 | 3.65% WER / 1.11% CER |
| English | long form, 10–20 s | 5 | 6.99% WER / 4.16% CER |

English long-form recovers the full multi-clause text on every file; the residual error is real recognition slips (`"3:2"` transcribed as `"three to two"`), not truncation.

**ASR through the live session** (`/v2v/stream`, shipped defaults `ASR_MAX_NEW_TOKENS=64`, `ASR_FINAL_STOP_ON_PUNCT=1`), scored against the full reference text:

| Language | Set | n | Error |
|---|---|---:|---:|
| Chinese | short utterances | 5 | 29.09% CER |
| Chinese | long form, 10–20 s | 5 | 84.06% CER |
| English | short utterances | 5 | 16.95% WER / 10.16% CER |
| English | long form, 10–20 s | 5 | 63.38% WER / 62.58% CER |

**The hypothesis that the decoder was truncating was tested and falsified.** Re-running with `ASR_MAX_NEW_TOKENS=256` and `ASR_FINAL_STOP_ON_PUNCT=0` (which additionally required `RK_ARTIFACT_CONTRACT_STRICT=0` to stop the artifact set's runtime-contract check from crash-looping the container) produced **byte-identical transcripts** in both languages — for example `en_long_03` still finalizes as "To prevent possible infection of others." after 43 messages and 7.5 s. The override was confirmed applied in the server startup log. What ends the turn early is the VAD endpoint (silero, 400 ms silence, 2.5 s minimum audio), not the decoder's token budget or its punctuation-stop flag. Relaxing the endpoint so a conversational turn survives a mid-utterance pause is open follow-up work and was not done.

**TTS** (`POST /tts`, `x-rtf` response header read directly from the server, Matcha ORT acoustic + RKNN Vocos, icefall zh-en voice):

| Language | n | Realtime factor | Range |
|---|---:|---:|---|
| Chinese | 5 | 0.204 | 0.190–0.216 |
| English | 5 | 0.194 | 0.158–0.216 |

Each English sentence was 2.5–4.3 s of audio.

**Live session latency** — echo mode, no LLM in the loop:

| Measure | Language | n | p50 | mean | min–max |
|---|---|---:|---:|---:|---|
| Speech end → ASR final (`stop_to_final`) | Chinese | 10 | 1771 ms | 1732 ms | 1284–2049 ms |
| Speech end → first TTS frame (`stop_to_tts_audio`) | Chinese | 5 | 3782 ms | 3640 ms | 3061–3892 ms |
| ASR final → first TTS frame (`final_to_tts_audio`) | English | 5 | 1127 ms | 1126 ms | 1021–1232 ms |

**Superseded on 2026-09-20.** On an idle board running image `rk-20260913.3`, `stop_to_tts_audio` re-measured at 1575/1624/1596/1580 ms (about 1.6 s, n=4). The 3782 ms above was most likely an aggregate taken while the second utterance timed out. In the same runs `stop_to_final` came back at about 5.1 s, larger than the spoken reply it should precede, so neither that figure nor the 1771 ms above can be quoted. See `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md` in openvoicestream.


**A reporting caveat kept as-is rather than papered over:** on every English `/v2v/stream` run, `stop_to_final` and `stop_to_tts_audio` came back null while `final_to_tts_*` on the same runs populated normally. The English ASR-latency row (`eos_to_final` mean 2837 ms, n=5) therefore comes from a separate `asr_stream_ws_bench.py` run, not from the unified V2V run, and `final_to_tts_audio` is reported for English instead of the round trip. Whether that is a VAD endpoint difference on English audio or a script indexing issue against `--multi 2` is unresolved. The complete reply (final frame / `tts_done`) was not collected in either language.

**Corpus.** ASR reuses the existing FLEURS corpus (CC BY 4.0, sha256-checked), 5 short + 5 long per language, rather than a fresh Common Voice download. TTS used 5 self-written sentences per language. The V2V runs used one 3.84 s clip repeated with `--multi 2` to work around an early session close.

### Where it degrades

- **The microphone decides more than the board does.** Every number above assumes a hardware-AEC capture channel. A microphone without one produces false interruptions or an echo loop, and no configuration value compensates.
- **Live conversation is not the offline endpoint.** The gap between 9.62% and 84.06% CER on the same audio is entirely turn-taking policy. If your utterances contain mid-sentence pauses, expect first-clause answers until the endpoint is retuned.
- **Speaker volume matters at acceptance.** A terminal validated at low volume can fail at operating volume for purely acoustic reasons.
- **The published figures cover the RK3576 board and the Orin NX Qwen3-ASR int4 configuration.** RK3588, Orin Nano, reComputer R2000 series and every non-Chinese-non-English cell are deployable. Measure them yourself before committing to a latency or accuracy target.

## Data and asset sources

- **FLEURS** — the ASR corpus for the RK3576 bench, CC BY 4.0. Files are sha256-checked; provenance for the cross-device Whisper comparison is in `docs/perf/whisper-cross-device-20260827.md` in the openvoicestream repository.
- **Raw run records** — `docs/perf/rk3576-matrix-20260906.md` in the openvoicestream repository holds the full resolver output, per-file ASR JSON lines, TTS header dumps and the before/after container state. Every number on this page traces to a line there.
- **Speech models** — Qwen3-ASR, Matcha-TTS (icefall zh-en voice), Kokoro v1.0, Qwen3-TTS CustomVoice and sherpa-onnx each keep their own upstream licence terms. Confirm the licence of the model you deploy before shipping a commercial product; the runtime is model-agnostic within its documented interface.
- Corpora are not distributed with the repository and must be obtained separately.
