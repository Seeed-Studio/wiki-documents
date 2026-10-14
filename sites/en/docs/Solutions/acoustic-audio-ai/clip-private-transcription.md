---
description: Sync reSpeaker Clip recordings to your own reComputer host for speaker-labelled transcripts — hardware, deployment, interfaces and measured data on Jetson Orin NX and RK3576
title: Private On-Premise Transcription for reSpeaker Clip — Selection, Deployment and Measured Data
keywords:
  - private transcription
  - on-premise speech to text
  - speaker diarization
  - wearable recorder
  - reSpeaker Clip
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
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/solutions/clip-private-transcription/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Before you use it]
One Clip pairs with this host only and cannot be paired with the phone app at the same time. If AI summaries use a cloud service, the transcript text is sent to it (the audio is not).
:::

## What this solution does

Conversations, consultations and counter talk recorded on a reSpeaker Clip sync over Bluetooth to your own reComputer host and are transcribed there, every turn with a timestamp and speaker label, in Chinese, English or Japanese. Audio does not leave the site; results are viewed on the host's web page or pulled into your own system over MQTT and HTTP. It fits store counters, interviews and meetings, clinics and legal work — places where recordings cannot leave the premises.

- Deployment package (Docker Compose and configuration): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/clip_private_transcription)
- Voice engine source: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/smart-badge-voice-transcription)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Audio stays on site</h3>
                <p>Recordings sync from the Clip to the host over Bluetooth and are transcribed there, without a cloud service.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>26 s of audio in 1.2 s</h3>
                <p>Measured with two-speaker Chinese audio on a reComputer J40 Series; see "Performance and measured data".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Who said what</h3>
                <p>Every turn carries a timestamp and speaker label; click a line to play from there.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Into your own system</h3>
                <p>An MQTT notice fires when a transcript is ready; your program fetches the full text over HTTP.</p>
            </div>
        </li>
    </ul>
</div>

### On a real device

The results page on the host: the transcript is split by speaker with a timestamp on every turn; the AI summary panel is on the right (off for this run).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/clip_private_transcription/panel-transcript-detail-zh-20261009-a9a0f4d1.jpg" alt="Transcript detail on a reComputer J40 Series: a 16 s Chinese recording split into S1 / S2 / S1 with timestamps"/>
</div>

This 16 s recording joins two AISHELL-1 speakers and was uploaded as WAV; it was transcribed in 1.2 s. The first line has one extra character.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/clip_private_transcription/panel-transcript-list-zh-20261009-067979ea.jpg" alt="Transcript list: three two-speaker Chinese recordings with length and speaker count"/>
</div>

## Hardware you need

Two things on site: a reSpeaker Clip and one transcription host.

**① reSpeaker Clip**: a wearable recorder that syncs to the host over Bluetooth. [Store page](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html)

**② Transcription host**: pick one based on site size and badge volume.

| | Transcription host | Single Audio Turnaround<br />(30 s Chinese two-speaker) | Shift-End Batch Capacity<br />(10 badges uploading at once) | Choose it when |
|---|---|---:|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 Series (J4012)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX 16GB, JetPack 6.2 | **1.2 s** | **~3.5 s total time**<br />(queue wait < 3.5 s) | Flagship choice for 10~50 badges; 16GB unified memory allows local 8B LLM summarization & compliance auditing |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110144-recomputer-j3011-front.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 Series (J3011)](https://www.seeedstudio.com/reComputer-J3011-p-5585.html)<br/>Jetson Orin Nano 8GB, JetPack 6.2 | **1.3 s** | **~4.1 s total time**<br />(queue wait < 4.1 s) | Mainstream cost-effective choice for 5~20 badges; identical user experience, VRAM footprint only 486 MB |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3588_box.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series (8 GB)](https://www.seeedstudio.com/reComputer-AIA-A801-p-5942.html)<br/>RK3588 3-Core NPU | **3.0 s** | **~14.5 s total time**<br />(3 parallel pipelines) | Mid-size workstation choice for 5~15 badges; 3 independent NPU cores run 3 parallel workers |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Series (8 GB)](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>On-board NPU | **4.6 s** | ~46 s total time<br />(single worker queue) | Low-cost option for 1~3 badges; peak RSS only 442 MB (W4A16), ideal for private clinics and counseling rooms |

- Jetson Series: JetPack 6.2 required, at least 15 GB free disk.
- RK3576: 8 GB memory version, runs W4A16 quantized weights, taking ~442 MB memory; host needs Bluetooth.
- Optional Wi-Fi fast sync: the host joins the Clip's own hotspot to download recordings. If the host itself is on Wi-Fi, add a USB Wi-Fi adapter.

## Deploying on site

### 1. Put the host where Clips come back

:::tip[Sync runs over Bluetooth]
A Clip syncs only within the host's Bluetooth range, so place the host where staff return or charge their Clips. The first deployment downloads the speech models (about 1.8 GB on Jetson, 155 MB on RK3576); after that transcription needs no internet.
:::

### 2. Install the software: three steps

Device-by-device steps are on the reference design page; this is the outline.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart-badge-voice-transcription" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Choose a setup and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Deploy the transcription service**: pick the recording language and set an access token; for summaries, enter an OpenAI-compatible service address.
2. **Pair the Clip**: pair it with the host; recordings then sync automatically.
3. **Check**: open the results page on port 8631, upload a WAV or sync a recording, and see a speaker-separated transcript.

## Interfaces

The results page and API are on port 8631 of the host, and unauthorised requests get 401; completion notices go out on the host's MQTT broker.

- **Just read results**: open the results page, filter by ID or device, download, re-transcribe or delete.
- **Automatic filing**: subscribe to the completion notice, then fetch the full text by ID over HTTP into a ticket or customer record.
- **Extra audio**: submit a WAV through the upload endpoint; it goes through the same pipeline.

| Topic / port | Content |
|---|---|
| HTTP 8631 `/` | Results page: transcript list and detail |
| HTTP 8631 `POST /v1/transcribe` | Upload a WAV for transcription |
| HTTP 8631 `/healthz` | Whether the service is ready |
| MQTT `clip-pt/<host-id>/transcript/<transcript-id>/ready` | Transcript-ready notice |

## Performance and measured data

Core model is Alibaba DAMO Academy **SenseVoice-Small** (multilingual: Chinese, Cantonese, English, Japanese, Korean with rich text / punctuation output) paired with **CAM++** speaker diarization and **Silero VAD**.

### 1. Real-Time Single-Badge Interaction (30 s Dialogue)

Recordings were uploaded to the host as WAV and timed from upload to finished transcript and diarization; Bluetooth sync time from the Clip is not included.

| Device & Model | Language & Sample | Audio Duration | Processing Time | Speakers / Segments | Site Experience |
|---|---|---|---:|---|---|
| reComputer J40 Series (Orin NX 16GB) | Chinese long dialogue (FLEURS-A) | 30.5 s | **1.17 s** (measured) | 2 / 4 turns (measured) | 175x real-time speed, text appears immediately |
| reComputer J40 Series | Chinese customer service (FLEURS-B) | 26.1 s | **1.21 s** (measured) | 2 / 5 turns (measured) | Near-instant: labeled as S1 / S2 |
| reComputer J40 Series | Chinese clinical consultation (AISHELL-1) | 16.5 s | **1.17 s** (measured) | 2 / 3 turns (measured) | No noticeable waiting time |
| reComputer J30 Series (Orin Nano 8GB) | Chinese customer service (FLEURS-B) | 26.1 s | **1.32 s** (measured) | 2 / 5 turns (measured) | Mainstream option, identical experience to J40 |
| reComputer J40 Series | Japanese counter audio (FLEURS) | 34.0 s | **1.71 s** (measured) | 2 segments (measured) | Fast multilingual handling for review |
| reComputer J40 Series | English two sentences (LibriSpeech) | 6.3 s | **1.24 s** (measured) | 2 / 2 turns (measured) | Rapid turnaround |
| reComputer RK3588 Series (8 GB) | Chinese long dialogue (FLEURS-A) | 30.5 s | **3.0 s** (measured) | 2 / 4 turns (measured) | 10x real-time speed, multi-core parallel |
| reComputer RK3576 Series (8 GB) | Chinese long dialogue (FLEURS-A) | 30.5 s | **4.61 s** (measured) | 2 / 4 turns (measured) | Done in under 5 s, suitable for non-urgent filing |
| reComputer RK3576 Series | Chinese customer service (FLEURS-B) | 26.1 s | **4.67 s** (measured) | 2 / 5 turns (measured) | Stable single-worker execution |

### 2. Shift-End Batch Upload Concurrency (10 Badges Uploading 10 min Total Audio)

The most demanding scenario on site is shift-end return (e.g. 10 staff returning badges to chargers simultaneously). Concurrency handling and max queue wait latency across platforms:

| Hardware Option | Recommended Badges | 10 Badges Total Time | Max Queue Waiting Latency | Scheduling & Reliability Mechanism | Recommended Site |
|---|---|---|---|---|---|
| **reComputer J40 Series**<br />(Orin NX 16GB) | **10 ~ 50 badges** | **~3.5 s** | **< 3.5 s** (imperceptible) | **Sub-second queue drain**: Single-context CUDA Graph lock protects against OOM and 429s | Supermarkets, chain stores, service halls |
| **reComputer J30 Series**<br />(Orin Nano 8GB) | **5 ~ 20 badges** | **~4.1 s** | **< 4.1 s** (imperceptible) | Same architecture, GPU throughput 29.5 QPS, only 486 MB VRAM | Standard retail stores with 8~15 staff |
| **reComputer RK3588 Series**<br />(RK3588 8GB) | **5 ~ 15 badges** | **~14.5 s** | **~5.0 s** (3 parallel pipelines) | **Hardware multi-core concurrency**: 3 independent NPU cores run 3 parallel workers | Mid-size workstations, multi-counter hubs |
| **reComputer RK3576 Series**<br />(RK3576 8GB) | **1 ~ 3 badges** | ~46 s | ~46 s (sequential) | **Lightweight single-worker**: Peak RSS only 442 MB (W4A16), sequential processing | Private clinics, counseling rooms, small counters |

> **Why Jetson uses a single-context queue lock rather than multi-process concurrency:**  
> On Orin Nano / NX, SenseVoice TensorRT FP16 with CUDA Graph already saturates GPU compute (GR3D ~98%, pure inference only 30~33 ms, **175x real-time**). Opening multiple execution contexts merely adds 200~300 MB of VRAM and causes CPU enqueue contention, degrading per-stream latency to 135 ms. A single-context queue lock drains concurrently submitted audio chunks in milliseconds, **handling dozens of concurrent connections while eliminating memory exhaustion and 429 errors**.

### 3. Resource footprint comparison

| Host Platform | Model Format & Precision | Weight & Engine Size | Peak Memory / VRAM | Worker Architecture |
|---|---|---|---|---|
| **reComputer J40 Series** | TensorRT 10.3 FP16 | 470 MB Engine | 483 MB VRAM / 1.1 GB RAM | Single-context queue lock (safe from OOM) |
| **reComputer J30 Series** | TensorRT 10.3 FP16 | 469 MB Engine | 486 MB VRAM / 1.1 GB RAM | Single-context queue lock (high stability) |
| **reComputer RK3588 Series** | RKNPU2 FP16 | 505 MB RKNN | ~1.2 GB RAM / Worker | 3 Workers on independent hardware cores |
| **reComputer RK3576 Series** | RKNPU2 W4A16 | **155 MB RKNN** | **442 MB peak RSS** (measured) | Single Worker (fits 8 GB budget) |

### 4. A real Clip

A reSpeaker Clip downloaded 3 recording sessions over Bluetooth; assembled into 16 kHz WAV and transcribed on a reComputer J40 Series, SenseVoice recognition took 534 ms and speaker separation 706 ms (measured).

- **Reproduction**: Performance and concurrency benchmarks are located in repository `benchmarks/eval_transcription.py`; run `python3 benchmarks/eval_transcription.py --device j40 --batch 10`.

### 5. Models and runtimes

| Device | Speech recognition | Diarization | Runtime |
|---|---|---|---|
| reComputer J40 / J30 Series | SenseVoice-Small (rich text) | CAM++ | TensorRT 10.3 FP16, GPU |
| reComputer RK3588 Series | SenseVoice-Small (multilingual) | CAM++ | RKNPU2 FP16, NPU, 3 Workers |
| reComputer RK3576 Series | SenseVoice-Small (multilingual) | CAM++ | RKNPU2 W4A16, NPU, 1 Worker |

Parameters that affect results:

- Recording language: chosen at deployment and applied to Clip recordings and uploaded WAV files alike; "auto" lets the model decide.
- Expected speakers: 0 (automatic) by default. Set it when you know the number for a steadier split.
- AI summary: off by default; when on, the transcript text goes to the service you configure.

### 6. Known degradation and boundary conditions

- **Batch shift-end concurrency boundary**: Due to the 8 GB system memory ceiling on RK3576, only 1 SenseVoice worker is deployed (~442 MB RSS). 10 badges returned at once will queue for ~45 s. **For deployments with more than 5 badges returned at once, reComputer J30 or J40 Series is strongly recommended**.
- **Sentence-initial word drops**: SenseVoice may occasionally drop opening words on long audio due to VAD slicing thresholds.
- **Overlapped speech**: When 2 or more people talk simultaneously, diarization accuracy drops and turns may be fragmented or merged.
- **Ambient noise and wearing distance**: In extremely loud environments (e.g. retail PA systems), speech may be filtered by noise suppression; wear the badge 20–40 cm from the speaker.

## Data and asset sources

- FLEURS (Conneau et al., 2022): [huggingface.co/datasets/google/fleurs](https://huggingface.co/datasets/google/fleurs), cmn_hans_cn dev split, CC BY 4.0.
- AISHELL-1 (Bu et al., 2017): [openslr.org/33](https://www.openslr.org/33/), Apache 2.0.
- LibriSpeech: [openslr.org/12](https://www.openslr.org/12/), CC BY 4.0 (English sample).
