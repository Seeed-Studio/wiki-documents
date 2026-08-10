---
description: Learn how to build a reSpeaker Clip application with a Memory layer using the Python SDK. This tutorial covers BLE and Wi-Fi communication, audio recording, transcription, diarization, summarization, and local memory matching for repeated discussions.
title: Build Your Own App for reSpeaker Clip Adding Memory Layer Using Python SDK
keywords:
  - reSpeaker Clip
  - memory layer
  - Python SDK
  - transcription
  - diarization
  - summary
  - Firebase
  - SQL
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg
slug: /respeaker_clip_python_build_app_with_memory
sku: 100020126
last_update:
  date: 07/31/2026
  author: Kasun Thushara
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/respeaker_clip_python_build_app_with_memory/
---

## Introduction

This guide shows how to turn the reSpeaker Clip into a voice-powered assistant that not only transcribes, diarizes, or summarizes recordings, but also remembers what was said before. By adding a memory layer on top of the Python SDK workflow, your app can compare new transcripts with past conversations and notify you when it detects a similar discussion.

The result is a practical foundation for building smart meeting assistants, personal note takers, or voice-driven knowledge apps with the reSpeaker Clip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="reSpeaker Clip memory app" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## How it works

1. Connect to the Clip over BLE (default) or Wi-Fi.
2. Start a recording from the app. Audio streams from the device in the background while you speak.
3. Stop the recording. Once syncing is complete, the app:
   - encodes the merged audio to `.ogg` (Opus),
   - converts it to a 16kHz mono `.wav` using PyAV,
   - runs the selected pipeline for transcription, diarization, or summarization,
   - runs the memory layer on the resulting transcript text,
   - sends the result and any memory notification to the browser over the existing WebSocket.
4. Each recording is stored with playback and processing controls, and the memory check is run again if you reprocess the recording.

## What makes this version different

The memory layer adds a new step after speech processing:

```text
reSpeaker Clip -> record -> STT / diarization / summary
                                  |
                                  v
                            embed transcript locally
                                  |
                                  v
                    compare with previous recordings
                                  |
                         match found or no match
```

Key capabilities:

- No audio is stored for the memory layer. Only transcript text, embeddings, timestamps, and match metadata are kept.
- The default local vector store uses JSON and NumPy files under the `data/` folder, so it works without cloud services.
- If a similar recording is found, the app can display a corner toast such as “you discussed this before.”
- The memory layer is additive. It does not block the transcript or summary itself if no match is found.

## Supported workflows

The app supports four workflow patterns:

- **Transcription tab** — Groq-based plain text transcription.
- **Diarization tab** — Speechmatics-based speaker-labeled transcript.
- **Summary tab** — Groq transcription plus AI-generated meeting minutes.
- **Memory layer** — runs on every recording, regardless of which tab was used.

## API keys

Each tab uses its own provider settings:

- **Groq** — used for transcription and summarization.
- **Speechmatics** — used for diarization and speaker labeling.
- **Firebase** — optional if you want to switch to a Firestore-backed storage option for the memory layer.

Keys are not hardcoded. They can be stored temporarily in memory for the current server session, or persisted locally for future use.

## Requirements

- Python 3.10+
- A paired reSpeaker Clip device for real recording and streaming
- No separate ffmpeg install is needed because PyAV bundles codecs
- Optional cloud integration is available for teams that want to explore Firebase or other database-backed memory storage

## Setup

### Linux / macOS

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env
python app/main.py
```

### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

Copy-Item .env.example .env
python app/main.py
```

Then open `http://localhost:5000`.

For Wi-Fi transport instead of BLE:

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## Project structure

```text
respeaker-stt-memory/
├── clip/                     # vendored Clip SDK for BLE and Wi-Fi device control
├── app/
│   ├── main.py               # FastAPI app for device control, recording, and memory hooks
│   ├── audio_convert.py      # converts audio to 16kHz mono WAV
│   ├── config.py             # runtime settings and provider keys
│   ├── llm/
│   ├── stt/
│   ├── memory/               # memory layer implementation
│   │   ├── config.py         # threshold and model settings
│   │   ├── embeddings.py     # local embedding generation
│   │   ├── local_store.py    # local vector store
│   │   └── memory_service.py # matching and memory orchestration
│   └── static/
├── data/                     # local memories.json and memories.npy
├── recordings/               # synced audio and transcript outputs
├── requirements.txt
```

## Memory layer tuning

You can adjust the behavior of the memory layer by tuning the similarity threshold and search limit:

- **MEMORY_SIMILARITY_THRESHOLD** — raise it if you want fewer matches, lower it if you want more recall.
- **MEMORY_SEARCH_LIMIT** — controls how many nearest neighbors are considered before applying the threshold.

These values should be tuned from real usage rather than guessed.

## Extending beyond the local store

The default implementation uses a local JSON and NumPy-based store, which makes it easy to try the idea without cloud dependencies. If you want a more centralized or searchable backend later, the design is also compatible with the broader idea of Firebase-backed storage or SQL-based persistence for teams that want structured long-term memory.

This makes the project a good starting point for both prototypes and more production-oriented voice applications.

## Interface overview

Add your Groq API key or Speechmatics API key, start recording, and stop when you are done. The app will then display a brief toast notification with the session result.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip_memory_demo.png" alt="Transcription interface" width={800} height="auto" /></p>

## Firebase overview

If you want to explore a cloud-backed memory experience, Firebase can be used as an optional extension for storing and sharing memories across devices. In practice, you only need to prepare the cloud side and configure the backend to use it. The app’s local memory workflow remains the default, and switching to Firebase requires a small backend adjustment to point the memory layer at the cloud store instead of the local files.

For more information, [see](https://github.com/KasunThushara/reSpeaker_Clip_Memory/tree/main/firebase)

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
