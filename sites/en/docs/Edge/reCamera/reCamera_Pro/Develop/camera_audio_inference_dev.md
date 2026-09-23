---
description: Develop camera capture, audio capture and playback, RKNN inference, and RTSP streaming pipelines in your own reCamera Pro applications.
title: Camera, Audio, and Inference Development
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - GStreamer
  - RKNN
  - ALSA
  - RTSP
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_media_dev
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_media_dev/
---

# Camera, Audio, and Inference Development

This page covers the building blocks of a native reCamera Pro application: camera capture with GStreamer, audio capture and playback with ALSA, RKNN inference, and RTSP video output. All facts here are drawn from working on-device projects — most examples come from the [Visual Wake and Offline Speech Recognition](/recamera_pro_visual_wake_stt/) application.

For environment setup and deployment, see [SDK and Minimal Application](/recamera_pro_sdk_setup/).

## Reference Pipeline

A complete on-device AI application chains the stages below. This is the actual pipeline of the Visual Wake project:

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

The key point for your own application: camera frames flow through GStreamer, each frame (or a downscaled copy) is fed to one or more RKNN models, and application logic consumes the model outputs. Audio capture starts only when the application logic requests it — the app does not record continuously.

## Camera Capture

- Camera device: `/dev/video13`, read by GStreamer (`v4l2src`)
- Default capture format: `1920x1080` at up to 30 fps; actual processing rate depends on inference time
- Firmware GStreamer elements used by working projects: `appsrc`, `videoconvert`, `jpegenc`, `rtpjpegpay`

Capture frames in your application through a GStreamer pipeline, then perform the exact preprocessing your model requires.

:::warning
Do not feed NV12 camera bytes directly to an RGB or BGR model. The pipeline or application must perform the NV12-to-RGB/BGR conversion and normalization required by the model; mismatched color order or normalization produces wrong colors and wrong inference results.
:::

## Audio Capture and Playback

### Microphone Input

The firmware provides a dedicated PCM audio device for applications:

- Device name: `ai_asr` — 16 kHz, S16_LE, four channels; channel 0 is typically selected
- Using `ai_asr` avoids competing with the vendor process that owns `hw:0,0`

Record a test clip directly on the device to verify the audio input path:

```bash
arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav
```

### Speaker Output

The onboard speaker is driven through the standard Linux ALSA interface. Play a WAV file with:

```bash
aplay test.wav
```

`aplay` is an ALSA PCM player: it can only play PCM/WAV data and cannot decode MP3. Convert first if needed:

```bash
ffmpeg -i test.mp3 test.wav
```

Volume control and device listing (`aplay -l`, `amixer`) are described in [Play Audio and Control Volume](/recamera_pro_speaker_usage/).

{/* TODO(verify): document how the vendor audio service coexists with user applications — which processes hold hw:0,0, how to release audio/camera resources safely, and how to restore vendor services after stopping them */}

## RKNN Inference

- Use the **RKNN Runtime C API** for native C/C++ applications; `rknn-toolkit-lite2` is not used for this workflow
- Toolkit and runtime version: **RKNN-Toolkit2 2.3.2 / RKNN Runtime 2.3.2**, target `rv1126b`
- Link against a board-compatible RKNN Runtime and use the runtime already installed on the device — your application should not replace it
- A successful model conversion does not guarantee correct inference: compare RKNN numerical output against the source ONNX model, and keep preprocessing explicit

Model conversion from ONNX (including FP16 and INT8 quantization with calibration images) is covered in [Develop with AI Coding Agents](/recamera_pro_development_cpp_skill/) and the model deployment section of this wiki.

## RTSP Video Output

Applications can publish an annotated video stream over RTSP for remote monitoring. The Visual Wake project runs an RTSP server with these defaults:

| Item | Default |
| --- | --- |
| Port | `8554` |
| Mount path | `/visual-wake` |
| Output resolution | `960x540` |
| Declared frame rate | 15 fps (actual rate depends on inference throughput) |

Play the stream from a host computer using TCP transport:

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

The stock firmware also provides its own RTSP stream for the WebUI-configured pipeline — see the RTSP documentation in the Build Your Own App section.

{/* TODO(verify): document whether a user application's RTSP server can run at the same time as the stock firmware's RTSP service, and which ports each uses by default */}

## Monitoring and Debugging Aids

Working applications expose status through multiple channels; adopt whichever fits your project:

- **Terminal events** — print actionable events (for example `VISUAL_WAKE track=1`, `STT_RESULT ...`) to stdout
- **Debug logging** — startup, per-frame pose, audio level, RTSP, and inference-performance logs behind a `--debug` flag
- **Web dashboard** — an HTTP/WebSocket service (default port `8080`, health endpoint `/health`) with no cloud dependency
- **Terminal dashboard** — an interactive in-terminal view (minimum 80×18 characters)

## Quick Troubleshooting

| Issue | Likely cause | Resolution |
| --- | --- | --- |
| No camera frames | Wrong video device | Verify `/dev/video13` exists and is not held by another process |
| Wrong colors or bad detections | NV12-to-RGB/BGR or normalization mismatch | Recheck the model contract; make preprocessing explicit |
| Audio capture fails | `ai_asr` unavailable or format differs | Run the `arecord` test command above on the device |
| RTSP cannot be played | Network, port, or GStreamer plugin issue | Use TCP playback and verify the required firmware GStreamer elements |

For device-wide issues, see [Troubleshooting](/recamera_pro_faqs/).

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
