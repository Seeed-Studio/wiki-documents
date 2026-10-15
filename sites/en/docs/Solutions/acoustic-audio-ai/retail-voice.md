---
description: In-store speech to text with two paths — transcribe on an edge device and upload text JSON, or send reSpeaker Clip audio through SenseCraft Voice App and the gateway to voice-service for OpenVoiceStream ASR, redaction, storage and display in the retail backend. Hardware, pipeline and measured ASR capacity are documented separately from ingest latency.
title: 'Retail Voice: On-Device Transcription or a Redacting, Erasable Server Stack'
keywords:
  - retail voice
  - local voice transcription
  - offline speech to text
  - on-premise ASR
  - edge speech recognition
  - reSpeaker XVF3800
  - microphone array
  - RK3576
  - NPU
  - SenseVoice
  - Paraformer
  - CAM++ speaker embedding
  - Silero VAD
  - PII redaction
  - hard delete voice data
  - subject export
image: https://files.seeedstudio.com/wiki/reference-design/retail_voice/recordings-en-92369093.png
slug: /solutions/retail-voice
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/retail-voice/
generated_from: sensecraft-solutions@retail_voice
---


:::caution[Usage notice]
This is a reference implementation, not a certified transcription product or a compliance tool. Speaker labels are clustering results, not identities.
:::

Both modes write results to the retail backend. They differ in where ASR runs: the device transcribes and uploads only text JSON, or a Clip uploads audio through a phone and the server runs ASR.

- **On-device transcription**: the box runs ASR and uploads the final text JSON to the retail backend; WAV can optionally be kept locally.
- **Server stack**: an arm64 host adds pre-insert redaction, MySQL, MinIO, an admin console, per-subject export and hard-delete endpoints. Audio comes from a mic array on an edge collector, or from a phone app you already have.

A site that starts on the on-device preset can move to the server stack later without changing the array, host or recognizer.

## What this solution does

### Preset: On-Device Transcription


A mic array on the counter picks up the conversation, and a small box next to it turns the audio into text and uploads the final transcript JSON to the retail backend for storage and display. In Clip mode, SenseCraft Voice App sends the audio through the gateway to voice-service, which calls OpenVoiceStream for ASR and writes the result to the same backend.

Suited to: single stores or pilot stores where recordings must not leave the building; sites with an unreliable uplink; procurement rules that forbid third-party voice processing; validating the audio path and recognition quality on site before moving to the cloud.

- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/retail_voice)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Plug-and-play microphone</h3>
                <p>The reSpeaker XVF3800 enumerates as a standard USB audio device. Echo cancellation, beamforming and noise suppression run on the array's own DSP, not on the host CPU.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Audio can stay in the store</h3>
                <p>On-device transcription uploads only text JSON. WAV clips are written only when file output is on; with it off, the device keeps text only.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Redacted before insert, erasable per person</h3>
                <p>The server stack replaces names and phone numbers with placeholders before writing to the database. Erase by subject returns a residue count; export by subject is also available.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Works with your app and business systems</h3>
                <p>reSpeaker Clip with SenseCraft Voice App uploads audio directly; BI, CRM and ticketing systems read redacted text and call erase and export over HTTP.</p>
            </div>
        </li>
    </ul>
</div>

### Preset: Server Stack


Audio comes in and the redacted transcript is written to the database; stored content can be erased by subject, with a residue count returned. The package is a version-pinned Docker compose: recognition, voiceprint, the service that redacts and stores, MySQL, MinIO and the admin console, plus a WebSocket ASR endpoint for audio ingest.

There are two capture paths. In device-side transcription upload mode, a reSpeaker XVF3800 array on the edge box captures audio, runs voice activity detection and transcribes locally with OpenVoiceStream; the app then uploads only text JSON to the retail backend, and WAV can optionally stay on the device. In Clip mode, the reSpeaker Clip hands audio to SenseCraft Voice App, the app uploads it to the backend, and voice-service calls OpenVoiceStream and stores the result. The app uses the operator key from the deployment host's `.env`; database credentials and the JWT secret are generated by the deployment.

Use cases: staff and customers talk at the counter and the operator wants to know what was asked without keeping who asked it; deletion requests must be answered with proof that database rows, objects and voiceprints are gone; an app already captures audio and the back-end chain is missing; pilots that require audio to stay on site.

#### What the console shows

On the Server Stack preset, after signing in to the admin console, the recordings list shows each utterance's transcript, duration and source device in time order.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/retail_voice/login-zh-3ba8e8b6.png" alt="Console sign-in; the three role tokens are distinguished here"/>
</div>

The text in the list is already redacted: names and phone numbers are replaced with placeholders before insert, and the original is never stored.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/retail_voice/recordings-en-92369093.png" alt="Recordings list: redacted transcript, duration and source device per row"/>
</div>

## What hardware you need

### Preset: On-Device Transcription


Two devices per speaking zone, plus a writable directory.

**① Microphone array**: one reSpeaker XVF3800 on a USB host port. Echo cancellation, beamforming and noise suppression run on the array's XMOS DSP; the host receives one 16 kHz mono stream, and front-end processing costs no host CPU. The array enumerates as a standard USB audio device.

**② Transcription host**: determines whether you have measured data and whether punctuation and speaker labels can run alongside recognition.

| | Host | Where ASR runs | When to pick it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110110_preview-16.png" alt="reRouter CM4" width="110" /> | [reRouter CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)<br/>CPU-only box, BCM2711, 4 cores, 4 GB | 4 Cortex-A72 cores, Paraformer streaming | Budget comes first and the first site is a pilot |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576-30" width="110" /> | [reComputer RK3576-30](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>6 TOPS NPU, 8 GB | RK3576 NPU, SenseVoice RKNN fp16 | You need a host with measured data, or punctuation and speaker labels together |

**Coverage.** One array covers one speaking zone: with steady background noise at or below 70 dB, the XVF3800's beamforming covers speakers within 3 m. There is no multi-array mode; a second counter needs a second array and a second box.

Also needed: a free USB host port; a writable directory for transcripts (and optional audio) — the compose caps container log size and keeps models in named volumes, so only the transcript directory grows with use; a network for backend upload and the first-start model download.

### Preset: Server Stack


At most two things: the host that runs the stack, and a mic array on the edge-collector path.

**① Stack host**: any arm64 Linux host with Docker and 20 GB free. The pinned images are arm64 only, and the bundled recognition image is built for the RK3576 NPU; a host without an RKNN NPU needs the matching recognition image.

| | Host | Role | When to pick it |
|---|---|---|---|
| — | [reComputer RK3576-30](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html) (SKU 100052518) | Stack host; also the collector on the edge-collector path | The bundled images are built for this board, and recognition runs on the NPU |
| — | [reRouter CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html) (SKU 110110110) | Collector only | You already have a CM4; recognition runs on the CPU, and **the package ships no pinned image for this path**, so you supply it |

**② Mic array (edge-collector path only)**: [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html) (SKU 101991441). Noise suppression, echo cancellation and beamforming run on the array's DSP; the host receives one 16 kHz mono stream over USB.

**Start one stack host with 1–2 streams.** ASR-only concurrency is in the five-device table under "Performance and measured data".

Other prerequisites: the collector must reach the stack host's ASR port; put TLS termination in front when crossing an untrusted network, because the token may travel as a URL query parameter.

### Negative Selection Boundaries

- **Audio Channel Limit**: reComputer RK3576 is benchmarked for up to 12 concurrent audio streams. For retail stores with >16 counters, add a second gateway or scale to a Jetson server stack.
- **PII Redaction**: Transcripts retain raw numbers by default. For financial and GDPR compliance, explicitly enable the local redaction pipeline in the server tier.

## How to deploy on site

### Preset: On-Device Transcription


Place the array first, then bring up the two containers.

#### Part one — placing the array

:::tip[Keep speakers within 3 m and noise at or below 70 dB]
Speakers within **3 m** of the array, steady background noise at or below **70 dB** (roughly normal speaking level). Beyond that, the array's noise suppression cannot separate the speaker from the room, recognition errors rise, and a faster host does not help.
:::

Put the array on the counter facing the speaking zone, not behind a screen or under an overhang. It plugs into a USB host port on the box, so the two must be within cable length.

#### Part two — bringing up the software

Per-device steps are on the reference design page. The flow:

1. **Pick a configuration**: the page asks what the transcript must contain (text only / text with punctuation / plus speaker labels) and whether you need a host with measured data before go-live. The host and array follow from those two answers.
2. **Deploy the package**: both presets run the same two containers, the speech service and the speech client. Switching presets changes the image tag and profile, not the output format.
3. **Fill in the device inputs**: output directory, whether to keep WAV, whether to enable punctuation restoration and voiceprint vectors. Each of the last two loads a model; enabling both on a 4 GB CPU-only board reduces headroom.
4. **Verify**: send a short WAV to `POST /asr`. Correct text and a `backend` field naming the actual runtime mean the chain works. The local web page on port 8090 then shows live transcripts, microphone status and the voiceprint registry.

Time: about 40 minutes per deployment once models are downloaded. With the model volume already populated, restart-to-healthy on RK3576 measured about 25 s.

### Preset: Server Stack


Two presets, both rated intermediate, about 60 minutes, both ending in a manual acceptance step. Per-device operations are on the reference design page, where you pick a configuration for your site and download the matching application package.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/retail_voice" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />


**Server Stack + Mobile App**: deploy the stack on the arm64 host (Step 1), configure the app with `http://<deployment-device-IP>:18621` and the operator key from the host's `.env` (Step 2), open the admin console (Step 3), then verify (Step 4). For the Clip path, SenseCraft Voice App receives the Clip audio and posts a supported audio file to `POST http://<stt-host>:18621/v1/audio/transcriptions`; the backend transcribes, redacts, stores and displays the result.

**Server Stack + Edge Collector**: deploy the collector (Step 1); the pinned compose is one unit, so the collector brings the whole stack with it. Open the admin console (Step 2) and verify (Step 3).

**What manual acceptance checks.** That stored text is redacted and that nothing remains after deletion. Someone says a sentence containing a phone number into the app or the mic array. Then: read the row that landed (the number must show as a placeholder), call the erase endpoint for that subject and read the residue count it returns, and check the export.

**Before going into a store**: choose the device family and have the device and SSH access ready. The deployment generates database credentials, JWT secrets and the operator key. The operator key is stored as `OPERATOR_TOKEN` in the deployment directory's `.env`; use it with `http://<deployment-device-IP>:18621` in the app.

## Available interfaces

### Preset: On-Device Transcription


Device mode produces final transcript JSON and uploads it to the retail backend; Clip mode sends audio through the phone and gateway to voice-service. You provide the client backend URL and access key at deployment; the internal database and JWT secrets are generated automatically.

- **Text only**: read the JSON files. `<output dir>/cache/asr/` gets one file per segmented utterance with transcript, timestamps and language, plus a speaker label when voiceprint matching is on.
- **Live text**: connect to the WebSocket on 8621. Send 16 kHz mono PCM frames and end an utterance with an empty frame; each result carries transcript, punctuation and a 192-dim CAM++ vector.
- **Whole-file input**: `POST` a WAV to 8621. The acceptance step in the deployment guide calls this.

#### The full interface and payload table

| Interface / port | Content | Leaves the device? |
|---|---|---|
| `<output dir>/cache/asr/<id>.json` | `{"id","text","lang","start_ms","end_ms","speaker"}`, one file per segmented utterance | No |
| `<output dir>/voice/*.wav` | 16 kHz mono WAV clips, written only when file output is on | No |
| `ws://<device-IP>:8621/asr/stream?vad=none&punctuate=true&speaker_embedding=true` | Streaming ASR: PCM in, transcript, punctuation and 192-dim CAM++ vector out | No |
| `POST http://<device-IP>:8621/asr` | Whole-file transcription, e.g. `{"text":"这个多少钱","backend":"rk:sensevoice_rknn"}` | No |
| `http://<device-IP>:8090/` | Local page: live transcripts, microphone status, voiceprint registry; reachable on the store LAN only | No |

**The `speaker` field appears only when voiceprint matching is on.** It is a cluster label from the local registry and does not identify a person. The `backend` field in the offline response names the runtime that served the request, so you can tell SenseVoice on the NPU from a CPU fallback.

### Preset: Server Stack


All data is read from HTTP or WebSocket endpoints on the stack host. Tokens are `name:role:token` entries in `.env` (`VOICE_API_TOKENS`, `ASR_API_TOKENS`), and the role sets which routes a token can reach.

- **SenseCraft Voice App**: the app converts reSpeaker Clip audio to a supported format and uploads it with `POST /v1/audio/transcriptions`; the transcript JSON returns to the phone.
- **PCM streaming client**: WebSocket on 8080, operator role. Raw PCM binary frames in, JSON messages out.
- **BI or CRM system**: `GET /api/v1/recordings` on 8081, viewer role. The text is already redacted; no endpoint returns the original.
- **Privacy or ticketing workflow**: `POST /api/v1/privacy/erase` and `GET /api/v1/privacy/export` on 8081, admin role.
- **People**: the admin console on 3000.

#### Full interface and payload table

| Interface | Port | Path | Role | Content |
|---|---:|---|---|---|
| WebSocket | 8080 | `/ws?token=<operator>` | operator | Client→server: raw PCM binary frames, 16 kHz, mono, signed 16-bit little-endian, ≤ 2 MiB each. Server→client: JSON with `type` of `connection`, `vad`, `final`, `error` |
| HTTP | 8081 | `/api/v1/recordings` | operator (POST), viewer (GET) | Transcript upload and query; redaction happens before insert |
| HTTP | 8081 | `/api/v1/privacy/erase` | admin | Hard delete by subject / device / session |
| HTTP | 8081 | `/api/v1/privacy/export` | admin | Redacted-text JSON plus an audio manifest |
| HTTP | 3000 | `/` | viewer and above | Admin console: recordings, keywords, devices, export, erase |
| HTTP | 8621 | `/health` | — | OpenVoiceStream health check for orchestration probes |

One `final` message:

```json
{"type":"final","text":"我想找[[NAME]]咨询一下","timestamp":1757030400000,
 "textLength":12,"wordCount":2,"sessionID":"a1b2","audioID":"c3d4",
 "speaker":{"identified":true,"speaker_id":"spk-7","speaker_name":"staff-a","confidence":0.83}}
```

What three fields mean:

- **`text` is the redacted text.** The database stores the `[[NAME]]` placeholder itself; the original is not written anywhere and there is no encrypted copy.
- **`speaker.identified` is `false` in the default deployment.** Choose the voiceprint profile if you need speaker matching; the endpoint and key are delivered after deployment.
- **Tokens can go in a header.** Both `X-API-Token` and `Authorization: Bearer` are accepted; the `?token=` query parameter exists for browser WebSocket clients that cannot set custom headers.

Authentication separates two failures: missing credentials return 401, insufficient role returns 403, so an integrator knows whether to change the token or the role. Routes without an explicit rule require at least viewer, so new endpoints are not public by default; legacy tokens without a role are downgraded to viewer.

## Performance and measured data

### Preset: On-Device Transcription


#### Runtimes and key parameters

The OpenVoiceStream speech service repository is not public, so there is no GitHub link.

| Host | Recognition model | Precision | Runtime | How the model reaches the device |
|---|---|---|---|---|
| reRouter CM4 | Paraformer streaming | CPU | ONNX / sherpa-onnx on 4 Cortex-A72 cores | Downloaded at first start from the mirror chosen at deployment |
| reComputer RK3576 series | SenseVoice | fp16 | RKNN on the 6 TOPS NPU | Same; the `.rknn` is compiled for this SoC |

CT-Transformer punctuation and CAM++ voiceprint run on the CPU via sherpa-onnx on both hosts, so enabling both on a 4 GB CPU-only board competes with recognition for the same cores and memory.

- `vad` (stream URL parameter): where an utterance is split; `vad=none` leaves segmentation to the caller, which is the setting used in the measurements below.
- `punctuate=true`: loads CT-Transformer and returns punctuated sentences.
- `speaker_embedding=true`: loads CAM++ and emits a `speaker` label after matching against the local registry with a fixed threshold. Matching is heuristic, with no enrollment procedure, liveness check or confidence guarantee; do not use it for access control, payment or any decision about an individual.

#### reComputer RK3576 series measurements

| Metric | Value | Conditions |
|---|---|---|
| Offline transcription latency | 3.0 s audio → about 780 ms warm (RTF 0.26) | SenseVoice RKNN fp16 on the NPU; `POST /asr`, container warm |
| Memory | Container RSS 1.71 GiB | ASR + punctuation + voiceprint all loaded |
| Restart to healthy | About 25 s | Model volume populated |
| Short-utterance transcription | 5 short utterances (3 zh + 2 en) all returned `"backend":"rk:sensevoice_rknn"` with correct text; p50 678 ms, p95 810 ms (n=5, includes HTTP overhead) | This package's unmodified compose and `rk3576-sensevoice` profile, file input |
| Streaming recognition accuracy ▲ | Chinese CER 9.4%, English WER 34.6% | `bench/perf/corpus` short set (5 zh + 5 en), Paraformer hybrid RKNN encoder + RKNN decoder, `/asr/stream` live path |
| Speech end to final result ▲ | 326 ms / 347 ms (zh / en mean) | Same run, `/asr/stream` with 500 ms prepare lead |
| Voiceprint vector | RTF 0.09–0.13 (1 s → 125 ms, 3 s → 255 ms, 5 s → 428 ms) | CAM++ via sherpa-onnx CPU, 2 threads; 10-speaker clustering 1.45 ms |
| Voiceprint vector, A72-class ＊ | RTF about 0.10 (1 s → 114 ms, 3 s → 303 ms, 5 s → 508 ms), cold load 1.66 s | reComputer R10 series (Cortex-A72, 4 cores), same SoC generation as the CM4 in reRouter; CAM++ via sherpa-onnx CPU |

Reproduce: `assets/docker/docker-compose.local-rk3576.yml` (file header), `openvoicestream/docs/perf/paraformer-rk3576-streaming-ab-20260608.md`, `openvoicestream/docs/specs/diarization-capability.md`

▲ These two rows are from the **Paraformer** streaming profile, not the SenseVoice profile deployed here; their latency is not the current pipeline's latency. For the current pipeline's speech-end-to-final figures, see the five-device concurrency table in the Server Stack section.

＊ Different board, same SoC generation, so this row is derived: it shows the CPU cost of voiceprint vectors on A72-class cores.

#### Known degradation

- **Outside the pickup range.** Beyond about 3 m, or steady noise above about 70 dB, the array cannot separate the speaker and recognition errors rise; tuning the parameters above does not help.
- **English is weaker than Chinese on the Paraformer streaming profile.** On the same short set: English WER 34.6%, Chinese CER 9.4%.

### Preset: Server Stack


#### ASR capacity and latency: five devices compared

| Device family | Model | Recommended concurrent streams | p50 / p95 |
|---|---|---:|---:|
| reComputer J4012 | SenseVoice | 48 | 505 / 789 ms |
| reComputer J3011 | SenseVoice | 32 | 167 / 293 ms |
| reComputer RK3576 | SenseVoice | 12 | 583 / 1067 ms |
| reComputer RK3588 | SenseVoice | 8 | 659 / 902 ms |
| reComputer R2000 series | SenseVoice | 6 | 625 / 1173 ms |
| reComputer J4012 | Whisper base | 16 | 584 / 1177 ms |
| reComputer J3011 | Whisper base | 8 | 492 / 837 ms |
| reComputer RK3576 | Whisper base | 2 | 809 / 1380 ms |
| reComputer RK3588 | Whisper base | 4 | 655 / 1380 ms |
| reComputer R2000 series | Whisper base | 16 | 752 / 1465 ms |

Conditions: each clip under 4 s; SenseVoice with a 200-stream (Jetson) and 100-stream (RK) concurrency corpus, Whisper with 72 streams (Jetson/RK) and 100 streams (R2000). p50 / p95 are timed from ASR speech end to final result and exclude VAD, voiceprint, punctuation, upload, redaction and insert; this is ASR-only capacity.

Accuracy (on a separate 100-clip corpus, not mixed with the concurrency corpus): Chinese aggregate CER 4.82%; English WER 7.62% on J4012, 7.62% on J3011, 8.51% on RK3576, 7.50% on RK3588, 8.39% on R2000 series.

Reproduce: `openvoicestream/bench/asr_bench/build_unified_report.py`

#### Known boundaries

- **The original text is never stored.** Mobile numbers, ID numbers, names and addresses are replaced with typed placeholders before the MySQL write; only entities with confidence ≥ 0.85 are masked, and those below the threshold are flagged to a review queue without masking.
- **The redaction score is text-level.** On a 114-item gold set of Chinese and English written text: precision 0.98, recall 0.95. The score is computed on written text; in ASR output, transcription errors shift entity boundaries. Reproduce: `tools/pii_eval.py`
- **Spoken digit strings have a gap.** The `cn_mobile_spoken` rule covers 11-digit mobile numbers read out in Chinese numerals (including 幺); ID numbers, landline numbers and other numeric identifiers read out as Chinese numerals are not covered.
- **Audio is not redacted.** It is retained 24 hours by default, with 6 hours or 1 hour selectable at deployment; the export contains redacted-text JSON plus an audio manifest, not the audio itself.
- **Erase by subject leaves 0 residue** across the database, object store and local audio; what remains is a tombstone holding only the subject's SHA-256, plus an audit record. Reproduce: `assets/tools/delete_proof.sh`
- **Off-box analytics is off by default.** The `c4-cloud-analytics` container runs only when the `cloud-analytics` profile is chosen.

### Next steps

- Measure the server stack's full ingest chain on reComputer RK3576: 1 / 2 / 4 / 8 / 16 concurrent streams, and end of speech → redaction → insert latency (p50 / p95 / p99).
- Measure Chinese and English transcription accuracy (WER) on the server stack, and continuous capture for 1 / 10 / 60 / 240 minutes and 24 hours.
- Build the voiceprint container image, then measure speaker error rate.

## Data and asset sources

### Preset: On-Device Transcription


- **Recognition, punctuation, endpointing and voiceprint models**: SenseVoice and Paraformer for recognition, CT-Transformer for punctuation, CAM++ for voiceprint, Silero VAD for endpointing. Each follows its upstream licence; check the licence of each model you use before commercial deployment. Models are downloaded at first start from the mirror chosen at deployment.
- **Test corpora**: the accuracy rows use the `bench/perf/corpus` short set (5 zh + 5 en); the short-utterance row uses 5 utterances (3 zh + 2 en). Neither ships with the package.
- **Performance data sources**: `openvoicestream/docs/perf/paraformer-rk3576-streaming-ab-20260608.md`, `openvoicestream/docs/specs/diarization-capability.md`, `openvoicestream/docs/perf-test-runbook.md`. The OpenVoiceStream repository is not public, so these documents have no public link.
- **Architecture diagram**: generated from the approved product sticker catalog. The microphone node uses a generic role symbol, not the XVF3800's actual enclosure.

### Preset: Server Stack


- **PII gold set**: 114 Chinese and English samples behind the precision and recall figures; not shipped with the package.
- **Redaction word lists**: the *Hundred Family Surnames* and the list of Chinese provincial-level divisions, both public domain. Redaction uses no third-party model.
- **Stack services**: `sensecraft-asr-service`, `sensecraft-voice-client`, `sensecraft-voice-service` and `sensecraft-voice-web` are Seeed-owned; recognition uses OpenVoiceStream. MySQL is pulled under GPLv2 with the FOSS exception, and the current MinIO release is AGPLv3; check that licence before embedding the object store in a commercial product.
- The architecture diagram on the reference design page is rendered from structured IR in this repository.
