---
description: Learn how to build your own reSpeaker Clip applications with the Python SDK for transcription, diarization, and summary workflows. This tutorial covers BLE and Wi-Fi communication, audio recording, file synchronization, device configuration, and more.

title: Build Your Own App for reSpeaker Clip with Transcription, Diarization, and Summary Using Python SDK
keywords:
  - reSpeaker clip
  - Transcribe
  - diarization
  - STT
  - Summary
  - sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 07/21/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-07-21'
url: https://wiki.seeedstudio.com/respeaker_clip_python_build_app/
---

## Introduction 

**reSpeaker STT Web** transforms the reSpeaker Clip into an intelligent, AI-powered voice and meeting assistant, connecting embedded audio hardware with modern web and cloud AI technologies. Using BLE or Wi-Fi, it continuously synchronizes recordings from the device and processes them through powerful speech and language AI pipelines. With dedicated workflows for **speech transcription, speaker diarization, and AI-generated meeting summaries**, users can turn conversations into structured, actionable information. Built with Python and a modular architecture, the project provides a flexible foundation for developers and embedded engineers to build next-generation voice and AI applications with the reSpeaker Clip.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## How it works

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


## API keys

Each tab has its own Settings card — Groq key on the Transcription and Summary tabs (shared — set it once, usable by both), Speechmatics key on the Diarization tab. Nothing is hardcoded or committed. Keys live in memory for the life of the server process. Check "Remember on this machine" to also persist them to `app/settings.local.json` (gitignored) so they survive a restart.

- **Groq:** get a key at https://console.groq.com — used for both transcription (`whisper-large-v3-turbo`, fast single synchronous call) and summarization (`openai/gpt-oss-20b` chat completions).
- **Speechmatics:** get a key at https://portal.speechmatics.com — uses the batch REST API with `diarization: "speaker"` (submit → poll → fetch JSON transcript → group into speaker turns), `enhanced` operating point by default. See [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) in their docs.

## Project structure

```
respeaker-stt-web/
├── clip/                   # vendored Clip SDK (BLE/WiFi device control)
├── app/
│   ├── main.py              # FastAPI app: device control + recording + pipeline orchestration
│   ├── audio_convert.py     # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py            # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py          # STTProvider interface
│   │   ├── groq_provider.py         # transcribe() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html       # UI — three tabs, each with recording controls, settings, results
├── recordings/               # synced audio + meta.json + transcript.json per session (gitignored)
└── requirements.txt
```

## Requirements

- Python 3.10+
- No separate ffmpeg install needed — WAV conversion uses PyAV (`av` on PyPI), which ships its own bundled codec libraries, including on Windows
- A paired reSpeaker Clip device (BLE) for the actual recording — this part can't be exercised without the hardware

## Setup

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

Then open `http://localhost:5000`.

For WiFi transport instead of BLE:

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```
## Interface Overview

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
