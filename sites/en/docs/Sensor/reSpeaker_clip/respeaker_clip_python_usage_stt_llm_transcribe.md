---
description: Learn how to build your own reSpeaker Clip applications with the Python SDK for real-time Live STT (RTC streaming), transcription, diarization, and summary workflows. This tutorial covers BLE and Wi-Fi communication, RTC audio streaming, audio recording, file synchronization, device configuration, and more.
title: Build Your Own App for reSpeaker Clip with Live STT, Transcription, Diarization, and Summary Using Python SDK
keywords:
  - reSpeaker clip
  - Live STT
  - RTC
  - real-time
  - Transcribe
  - diarization
  - STT
  - Summary
  - sdk
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 08/27/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/respeaker_clip_python_build_app/
---

## Introduction

**reSpeaker STT Web** transforms the reSpeaker Clip into an intelligent, AI-powered voice and meeting assistant, connecting embedded audio hardware with modern web and cloud AI technologies. Using BLE or Wi-Fi, it continuously synchronizes recordings from the device and processes them through powerful speech and language AI pipelines. It also adds a **real-time Live STT tab** that streams the Clip's microphone audio over BLE (RTC mode) and transcribes it to text as you speak.

With dedicated workflows for **live real-time speech-to-text**, **speech transcription**, **speaker diarization**, and **AI-generated meeting summaries**, users can turn conversations into structured, actionable information — instantly, or after the fact. Built with Python and a modular architecture, the project provides a flexible foundation for developers and embedded engineers to build next-generation voice and AI applications with the reSpeaker Clip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

## How it works

The app has **four tabs**. The **Live STT** tab is real-time; the other three record to the SD card and process after you stop.

**Live STT (real-time, BLE only):**
1. Connect to the Clip over BLE (auto-scan, or scan and pick a specific device).
2. Press **Start Streaming**. The backend sends `AT+START=RTC` (live session, nothing written to the SD card) then `AT+DOWNLOAD=<session>` to start the stream.
3. The Clip pushes one **20 ms Opus packet per frame** over BLE (File Data characteristic).
4. The backend decodes each packet to PCM, runs a **layered VAD** (WebRTC + adaptive energy gate), and only sends completed **speech utterances** to Groq — silence is never uploaded.
5. Transcripts are pushed live to the browser over a WebSocket as text lines; a `listening`/`SPEAKING` indicator shows VAD state.
6. Press **Stop** to flush the final utterance and tear the stream down (`AT+STOP`).

**Record-and-process tabs (BLE or WiFi):**
1. Connect to the Clip over BLE (default) or WiFi.
2. Pick a tab and hit Start. Audio streams off the device in the background as it records (continuous sync — same as the original `clip-web` tool). Which tab you started from decides the pipeline that runs on this recording.
3. Stop recording. Once the final sync finishes, the app:
   - encodes the merged audio to `.ogg` (Opus),
   - converts that to a 16kHz mono `.wav` (via PyAV — no separate ffmpeg install needed),
   - **Transcription tab:** sends the `.wav` to Groq, gets plain text back.
   - **Diarization tab:** sends the `.wav` to Speechmatics with `diarization: "speaker"`, fetches the word-level JSON transcript, and groups it into speaker turns (`S1`, `S2`, ...).
   - **Summary tab:** sends the `.wav` to Groq for transcription, then feeds the transcript to Groq's chat API (`openai/gpt-oss-20b`) to generate structured meeting minutes (title, key points, action items, decisions).
   - pushes the result to the browser over the existing WebSocket.
4. Each tab has its own "Recordings" list (filtered by which pipeline the session was recorded under), with playback and a Process/Re-run button per recording.

> Live STT sessions are never stored on the SD card, so they don't appear in the Recordings lists — the transcript is the output.

## API keys

Each tab has its own Settings card — Groq key on the Live STT, Transcription and Summary tabs (shared — set it once, usable by all three), Speechmatics key on the Diarization tab. Nothing is hardcoded or committed. Keys live in memory for the life of the server process. Check "Remember on this machine" to also persist them to `app/settings.local.json` (gitignored) so they survive a restart.

- **Groq:** get a key at https://console.groq.com — used for live STT (`whisper-large-v3-turbo`, per-utterance calls), transcription (`whisper-large-v3-turbo`) and summarization (`openai/gpt-oss-20b` chat completions).
- **Speechmatics:** get a key at https://portal.speechmatics.com — uses the batch REST API with `diarization: "speaker"` (submit → poll → fetch JSON transcript → group into speaker turns), `enhanced` operating point by default. See [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) in their docs.

## Project structure

```
respeaker-stt-clip-rtc/
├── clip/                       # vendored Clip SDK (BLE/WiFi device control, RTC stream callbacks)
├── app/
│   ├── main.py                 # FastAPI app: device control + recording + live STT + pipelines
│   ├── stream.py               # RTCStreamManager: BLE RTC stream -> decode -> VAD -> Groq -> WebSocket
│   ├── opus_decode.py          # PyAV raw-Opus -> int16 PCM decoder (48 kHz, 20 ms frames)
│   ├── vad.py                  # StreamVAD: WebRTC VAD AND adaptive energy gate + hangover/pre-roll
│   ├── demo_sample_packets.json  # bundled Opus packets for no-hardware demo mode
│   ├── audio_convert.py        # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py               # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py             # STTProvider interface
│   │   ├── groq_provider.py    # transcribe() / transcribe_bytes() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html          # UI — Live STT + three record tabs, settings, results
├── reference/web/              # original browser-only Web Bluetooth streaming reference
├── docs/                       # project documentation
└── requirements.txt
```

Each synced recording gets a `meta.json` (written at record-start, records which pipeline the session belongs to) and, once processed, a `transcript.json`. Live STT output is streamed live and not persisted to disk.

## Requirements

- Python 3.10+
- No separate ffmpeg install needed — WAV conversion uses PyAV (`av` on PyPI), which ships its own bundled codec libraries, including on Windows
- `webrtcvad-wheels` for the WebRTC VAD layer (falls back to the adaptive energy gate automatically if it can't install)
- A paired reSpeaker Clip device (BLE) for the actual recording — this part can't be exercised without the hardware
- For the **Live STT** tab: a Clip running firmware with **RTC live streaming** support (`AT+START=RTC`), and BLE transport (RTC streaming is BLE-only)

## Setup

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

Then open `http://localhost:5000`.

For WiFi transport instead of BLE (record tabs only — Live STT requires BLE):

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## Interface Overview

### Live STT (RTC streaming)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-6.jpg" alt="pir" width={800} height="auto"/></p>

The device card at the top is shared across all tabs — scan for nearby Clips, pick yours from the dropdown, then press **Connect**. If Connect fails with a Windows BLE pairing error, use **Re-pair & Connect** to clear the stale bond.

1. Add your **Groq API key** in the Live STT settings card.
2. **Connect** to the Clip (BLE auto-scan or a device you picked after scanning).
3. Press **Start Streaming**. Speak — each utterance (speech followed by silence) is transcribed and appears in the transcript box in real time. The indicator shows `listening` / `SPEAKING`.
4. Adjust the **WebRTC VAD aggressiveness** (0–3) and **energy threshold (dB)** sliders to tune how aggressively silence is rejected.
5. Press **Stop** to flush any pending utterance and end the stream.

No hardware handy? Tick **Demo (no device)** — bundled Opus packets replay through the exact same decode → VAD → Groq pipeline so you can verify keys and tuning first.

### Transcription

Add your Groq API key. Press the recording button, and once you want to stop, press stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization

Add your Speechmatics API key. Press the recording button, and once you want to stop, press stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary

Add your Groq API key. Press the recording button, and once you want to stop, press stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-4.jpg" alt="pir" width={800} height="auto"/></p>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
