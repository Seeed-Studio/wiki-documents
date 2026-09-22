---
description: Building a local fall-alert system for elder care, assisted living and home care — what devices you need, how to set it up, measured data across seven devices, and implementation details for engineers
title: 'On-Device AI Fall Detection: Build, Deploy, and Measured Results'
keywords:
  - fall detection system
  - fall alert
  - nursing home fall alert
  - on-device AI
  - pose estimation
  - fall detection
  - edge AI
  - reCamera
  - reComputer
  - Jetson
  - Hailo-8
  - MQTT
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png
slug: /solutions/edge-fall-detection
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: seeed-solutions-hub
createdAt: '2026-09-01'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Usage notice]
This is an **assistive alert**, not a certified medical or life-safety device. It offers no guarantee against missed detections and does not replace in-person rounds. Real-world performance depends on camera placement and the actual population — verify with on-site footage before a production rollout.
:::

## What this solution does

Install a camera in the room. When someone falls, a message reaches whoever needs to see it — the nursing station, a family member's Home Assistant, the NVR at the front desk, or your own system — within seconds. Built for fixed-room settings: nursing homes, rehab centers, home care, single-occupant dorms.

- Open-source implementation: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Video never leaves the site</h3>
                <p>Detection, decision and messaging all happen on the on-site device. The only thing that crosses the network is a text message a few hundred bytes long — video never leaves the site.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>1.4 s mean alert latency</h3>
                <p>Measured on a public dataset across six frozen configurations: 95.8% fall recall, and an average of 1.4 seconds from the fall to the message going out. Full results are in the appendix at the end of the page.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>From one room to a dozen-plus streams</h3>
                <p>The all-in-one unit handles one room; swap in the Hailo-8 box and one host can run over a dozen cameras with exactly the same decision logic.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Works offline, no subscription</h3>
                <p>No cloud inference means no per-camera cloud subscription. Internet is only needed if you forward events somewhere external.</p>
            </div>
        </li>
    </ul>
</div>

### Live demo

What the device actually outputs: a skeleton overlaid on the person, a box labeled with that person's track id and current state, and in the top right, how many of the three decision features currently hold.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="A confirmed fall on reComputer J30 / J40 — skeleton, tracking state and evidence count come from the live MQTT message"/>
</div>

`#12 FALLEN` is that person's track id and current state; `Evidence: 2/3` in the top left means two of the three decision features hold. The animated state transition is in [the setup steps below](#step-2-install-the-software).

## What hardware you need

Two things are on site: the camera that produces the picture, and the host that runs detection.

**① Camera** — Already have an IP camera? Use it as-is over RTSP; nothing on the camera side needs to change. If not, the reCamera 2002 / Pro combines camera and compute in one unit — plug it in and it's ready.

**② Detector host** — The device that runs detection and decision-making; it also decides how many streams you can run and what it costs. With an existing camera, this is a separate box; with reCamera, the camera is the detector host.

| | Detector host | Streams per unit | When to pick it |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Camera and compute in one unit | 1 | One room, the fastest way to get a single alert working |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | Already standardized on Rockchip boards |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | Need one box to handle many streams |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | Multiple rooms, and want headroom to grow |

Stream counts are derived from measured throughput; only single-stream has been measured end to end — load-test your own site before committing to a number.

Beyond that, all you need is a network — the device and the receiver just need to be on the same LAN; no internet access is required.

## How to deploy on site

Two steps: get the camera position right first, then install the software.

### Step 1: mount the camera — placement sets the ceiling {#step-1-mount-the-camera}

:::tip[Camera placement matters more than the hardware]
Fix the mount, 2–3 m from the person, side-on or at an angle, with shoulders and hips visible. The fall itself has to happen on camera — if the person is already lying down when the device starts, it only reports the pose and doesn't fire an alert. Straight-down overhead angles, long-corridor wide shots, and furniture blocking most of the person all noticeably hurt accuracy.
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="Camera placement: a 2–3 m side or oblique mount works; straight-down overhead, wide shots and occluded views don't"/>
</div>

### Step 2: install the software — four steps {#step-2-install-the-software}

Step-by-step instructions for each device are on the reference design page — pick a configuration for your site there and download the matching app package.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download the app package 🖱️</font></span></strong>
    </a>
</div><br />

The overall flow:

1. **Pick a configuration** — Answer three questions on the reference design page (do you have a camera, how far from the fall zone, how many streams), and it returns a matching device combination.
2. **Install the app package** — Download the package for that device and install it. The model, runtime and decision thresholds ship frozen in the package — the same configurations scored in the measured data below — so there's no training or tuning to do.
3. **Fill in two settings** — the video source address (skip this with reCamera) and a device name. The device name is the first segment of the message topic; name it by room or bed so multiple devices on the same receiver never overwrite each other. The screenshot below is the device management page in the deployment platform: choose "Embedded", then fill in the device IP and ADB port.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="Device management → Embedded → reCamera Pro, expanded to fill in address and ADB port"/>
</div>

4. **Check the preview to confirm framing** — Once installed, the app shows a live feed with a skeleton and state overlaid on the person. Confirm the camera actually sees what it needs to before wiring up notifications. The screenshot below is the reCamera Pro preview page, used to demonstrate the panel's state transitions — **the status label is a replay, not evaluation evidence**; see "measured data" below for the actual numbers.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="The normal-to-fallen state transition, shown in the reCamera Pro App Center preview"/>
</div>

From install to running: about half an hour for reCamera. Jetson takes longer, because the inference engine has to be built on the device the first time (461 seconds and up, measured).

## How to connect it to your own system

The device publishes events to the MQTT broker running on itself (port 1883); your system just subscribes. Three ways to hook in:

- **Home Assistant** — No configuration needed. The device broadcasts via the auto-discovery protocol, and four entities appear directly in HA: a fall sensor, current state, event id, and presence — wire them into your automations.
- **NVR / nurse-call systems** — Subscribe to `<device>/fall-detection/results`. If all you care about is "did someone fall", watch `fall_event` in the payload — it's set only once, at the moment the state enters "fallen", so one fall triggers it once, not repeatedly for as long as the person is on the floor.
- **Custom system / API** — Subscribe the same way; the payload also carries `person_count`, `fallen_count`, and each person's `track_id` / `state` / `bbox` — enough to build your own dashboard. reCamera additionally exposes RTSP 8554 `/live0` for the live feed.

`<device>` is the name you filled in earlier — name it by room or bed so multiple devices on the same broker never overwrite each other.

### Full topics and payload

| Topic / port | Payload | Retained |
|---|---|---|
| `<device>/fall-detection/results` (multi-stream: `.../results/{stream_id}`) | One JSON per frame: `state`, `fall_detected`, `fall_event`, `event_id`, `person_count`, `fallen_count`, plus `track_id` / `state` / `bbox` for each entry in `persons[]` | No |
| `<device>/fall-detection/status` | `online` / `offline`, published via the MQTT last will | Yes |
| `homeassistant/` | Auto-discovery config — fall sensor, state, event id, presence | Yes |
| RTSP 8554 `/live0` (reCamera) | Live video for preview and NVR | — |

The stream id is also written into the payload, so downstream consumers don't have to parse the topic to know the source. `fall_event` is set only once, at the moment of the state transition, so an automation fires once per fall rather than repeatedly for as long as the person is on the floor.

The broker also lives on the detector host: reCamera uses its built-in one, and every reComputer configuration brings up `eclipse-mosquitto:2` alongside the detector — port 1883 is served by the host itself. No external broker is needed, and no step in this chain requires internet access.

## For engineers: implementation details

The source includes per-platform model conversion, Docker orchestration and decision-weight training scripts.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

What follows is what you need to know without reading the source.

### Pose estimation: one model, four runtimes

Every platform runs the same 640² pose model family with identical thresholds (`score_threshold` 0.35, `keypoint_threshold` 0.25, `nms_threshold` 0.45, `max_fps` 15). What differs is the runtime and how the model reaches the device:

| Detector host | Pose model | Precision | Runtime | Model delivery |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | Camera NPU | Installed from the console as a camera app |
| reComputer J30 / J40 | YOLO11s (Orin Nano) / YOLO11m (Orin NX) | FP16 | TensorRT | Engine is **built on the device** — tied to that GPU architecture and TensorRT version, so it cannot ship prebuilt. Measured on Orin Nano: 461 s for YOLO11s |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` ships per board; a model compiled for RK3588 will not load on RK3576 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | Official prebuilt HEF, verified against a fixed digest |

The accuracy figures were produced on an Orin Nano (JetPack 6.2, TensorRT 10.3, CUDA 12.6, SM87). The Jetson image ships without CUDA, TensorRT, OpenCV and GStreamer — the host's copies are mounted read-only, which is why the image is about 206 MB instead of several GB. The RK image mounts `librknnrt.so` from the host. The Hailo deployment is ABI-locked to **HailoRT 4.21**: GStreamer plugin, user library and kernel driver must all match.

### Decision logic: why a quick sit-down doesn't trigger a false alarm

Pose output alone cannot separate "a fall" from "sitting down quickly". The decision layer is per-person tracking plus a state machine, identical in design across platforms:

| Stage | Trigger | Configured value |
|---|---|---|
| Track association | IoU or centre distance to an existing track | `iou_threshold` 0.20, `center_distance_threshold` 0.25, `max_missed_frames` 8 |
| normal → suspected | At least 2 features hold simultaneously | torso angle > 55°, bbox aspect ratio > 1.25, hip drop velocity > 0.25 within a 0.75 s window |
| suspected → fallen | The features keep holding **and the temporal model confirms** | `confirmation_sec` 0.80, `temporal_confirmation_required` true; if they stop holding, the state expires after `suspected_timeout_sec` 1.50 |
| Occlusion | Track survives a brief disappearance | `occlusion_grace_sec` 0.75 |
| fallen → recovering | Back to a standing pose | torso angle < 35° and aspect ratio < 1.10, held for 2.00 s |
| Repeat suppression | One fall counts once | `cooldown_sec` 3.00; `fall_event` fires only on the entry transition |

A small temporal model sits on top of these features. Its weights are **re-extracted and re-frozen per platform** from that platform's own real pose output (`temporal_profile: auto`) — never borrowed across platforms, because a different pose model produces different tracks.

**Geometric features alone cannot confirm a fall.** The shipped configuration sets `fall.temporal_confirmation_required: true`: geometric features can only advance the state to "suspected" and drive recovery; entering "fallen" requires a positive from the temporal model on a live track. A lost or expired track cannot trigger an event, and a person already lying down in the first frame doesn't count as one either. This is the main mechanism that keeps false positives down — turn it off, and geometric features confirm falls on their own.

## Appendix: measured data

This section is for anyone who wants to double-check the numbers — skip it and the deployment steps still work. Everything below is measured on a public dataset. **It is not a medical or life-safety certification** — real-world performance depends on camera placement and the actual population. Raw per-clip reports and checksums live in the repo under [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation) — every number on this page traces back to a specific run recorded there.

### Accuracy results

Averaged over six frozen configurations: **accuracy 85.8%, fall recall 95.8%, specificity 77.8%, F1 85.7%, mean alert latency 1.4 s**. Individual configurations land between 81.5% and 88.9%.

These six configurations are Jetson YOLO11s, Jetson YOLO11m, reCamera Pro, RK3576, RK3588, and Hailo-8, each with its own frozen configuration. The reCamera 2002's v0.2 baseline (74.1% accuracy) is excluded from the average — it runs an earlier generation of temporal weights. Per-configuration detail is in the repo's [unified accuracy table](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表).

**How it was measured**

- Dataset [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos) (MIT), split by subject.
- Subject 1–2 train the temporal model; Subject 3 alone selects features, hidden-layer width, regularization, the probability threshold and the confirmation-frame count; after the configuration is frozen, weights are refit on Subject 1–3.
- Subject 4 is the held-out test set and is **read exactly once**. Ten clips previously used for pipeline smoke tests were removed, leaving **27 clips** (12 falls / 15 activities of daily living).
- All video is resampled to 15 FPS, with tracking and temporal state reset before each clip.
- An alert firing more than 0.5 s before the annotated fall onset counts as a false positive, not a hit.
- Every platform re-extracts tracks and retrains and freezes decision weights from its own real pose output — nothing is borrowed across platforms, because a different pose model produces different tracks.
- Reproduce with: `platforms/jetson/tools/evaluate_videos.py`. The dataset is not distributed with the repo — obtain it yourself.

**Why there's no accuracy comparison across devices**: the 27-clip test set has a resolution of 3.7 percentage points — one clip is one step — and RK3576, RK3588 and Hailo all land on exactly the same score (88.9%). Model size doesn't correlate with the score either. **Pick a device by stream count, existing hardware and video source — not by accuracy.**

### Which devices we tested

Seven devices, four accelerators. "End-to-end" means the full path from stream ingest to an alert was run and scored on the test set; "inference benchmark" means only detection speed was measured.

| Device | Accelerator | Model shipped | End-to-end | Inference benchmark |
|---|---|---|:-:|:-:|
| reCamera 2002 | Built-in NPU | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | Built-in NPU (RK) | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | RK3576 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | RK3588 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 Series | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | Orin Nano GPU | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | Orin NX GPU | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

Per-device per-frame latency, multi-stream throughput and measurement scope are in [detailed performance results](#性能实测详表) below.

### Detailed performance results {#性能实测详表}

#### How fast is each device

The same model on different devices: **YOLO11n-Pose, 640² input**. Per-frame figures are accelerator inference only (no RTSP decode, no post-processing); aggregate throughput is the highest total frame rate measured across 1–6 concurrent contexts. Different precisions are never compared in the same table. The Hailo-8 rows were measured on a Raspberry Pi 5 + Hailo-8 M.2 bench; the tables name R2035-12, the reComputer R2000 Series model that carries the same Hailo-8 (26 TOPS).

FP16:

| Platform | Pose model | Per-frame | Aggregate | Inference-bound streams | Recommended streams |
|---|---|---:|---:|---:|---:|
| reComputer RK3576 | YOLO11n | 56.1 ms | 29.2 FPS | 1 | 1 |
| reComputer RK3588 | YOLO11n | 51.4 ms | 51.4 FPS | 3 | 1 |
| reComputer J30 Series (J3011) | YOLO11n | 3.7 ms | 270.7 FPS | 18 | 7 |
| reComputer J40 Series (J4012) | YOLO11n | 3.3 ms | 306.2 FPS | 20 | 8 |

INT8:

| Platform | Pose model | Per-frame | Aggregate | Inference-bound streams | Recommended streams |
|---|---|---:|---:|---:|---:|
| reCamera 2002 | YOLO11n | 53.0 ms | 10.0 FPS | 1 | 1 |
| reCamera Pro | YOLO11n | 35.9 ms | 18.1 FPS | 1 | 1 |
| reComputer RK3576 | YOLO11n | 36.2 ms | 42.1 FPS | 2 | 1 |
| reComputer RK3588 | YOLO11n | 29.8 ms | 90.4 FPS | 6 | 2 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s ▲ | 6.9 ms | 393.9 FPS | 26 | 16 |
| reComputer J30 Series (J3011) | YOLO11n ＊ | 2.7 ms | 363.9 FPS | 24 | 9 |
| reComputer J40 Series (J4012) | YOLO11n ＊ | 2.5 ms | 408.0 FPS | 27 | 10 |

**▲ The Hailo row uses the s size because the n size is slower on this accelerator.** The hailo8 directory of official Model Zoo v2.15 ships only `yolov8s_pose` and `yolov8m_pose` — no n-size pose model at all. We compiled a YOLO11n-Pose ourselves with Hailo Dataflow Compiler 3.31.0 (640², INT8, 64-frame GMDCSA calibration) and measured **9.01 ms / 92.2 FPS** on the same board, against 6.87 ms / 393.9 FPS for the s size: per-frame latency is the same order (+31%), but throughput differs by 4.3×. The compiler split 11n into **3 contexts**, swapping weights every frame; the Model Zoo s model is single-context with weights resident. At the 15 FPS this design needs per stream, 92.2 FPS still leaves roughly 6× headroom — the gap only shows up in multi-stream density. This result reflects that HEF's compilation, not the ceiling of YOLO11n on Hailo-8.

**＊ Jetson INT8 is not deployable today; it is a speed reference only.** The engine is built straight from `trtexec --int8` with no calibrator and no calibration set, so the dynamic ranges are arbitrary: the kernel speed is real, the detections are not usable. Upstream `build_engine.sh` passes `--fp16` only. RK's INT8 is the opposite — calibrated on 240 GMDCSA frames, and on frames outside the calibration set its per-frame detection count matches FP16 exactly, so it is deployable.

#### Real footage runs slower

Both tables above are fed **synthetic blank 640 frames** and measure accelerator inference only. Real footage is slower, because anything in frame has to go through raw-head decoding, DFL, keypoints and NMS:

| Platform | Pose model | Accelerator | Real-frame pipeline | Pre/post delta |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52.74 ms ◇ | 53.23 ms | 0.012 ms |
| reCamera Pro | YOLO11n INT8 | 35.2 ms ✦ | 36.6 ms | 1.4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69.6 ms | 70.8 ms | 1.2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54.4 ms | 54.8 ms | 0.4 ms |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s INT8 | 6.9 ms | 8.77 ms | 1.9 ms |
| reComputer J30 Series (J3011) | YOLO11n FP16 | 3.7 ms ◆ | 5.57 ms | 1.9 ms |
| reComputer J40 Series (J4012) | YOLO11n FP16 | 3.3 ms ◆ | 5.18 ms | 1.9 ms |

"Pipeline" = inference + preprocessing + raw-head decode / DFL / keypoints / NMS. It **excludes** RTSP decode, tracking, the temporal MLP and MQTT. The Orin NX figure of 5.18 ms comes from 400 measured frames, Orin Nano's 5.57 ms from 1359, and Hailo's 8.77 ms from 1951 (of which hardware inference is 6.87 ms and decode plus NMS account for only 0.052 ms).

- **◇ reCamera 2002 cannot separate an "accelerator only" column**: it exposes a single timer whose scope is exactly this table's pipeline definition, so 52.74 ms already includes pre- and post-processing (250 measured frames, with and without a person in view are nearly identical).
- **✦ The reCamera Pro row is measured with clocks locked** (NPU 950 MHz, CPU performance governor). The default `rknpu_ondemand` governor was measured settling at 800 MHz and 43.1 ms — a 23% difference on the same board from the frequency governor alone. RK3576 / RK3588 were measured always running at their top step and are unaffected.
- **◆ The Jetson column is `trtexec` pure GPU compute** (no host copies), while the RK column is `rknnlite.inference()`; the two scopes differ by definition. The comparable column is the pipeline one. On that basis Jetson is about 11× faster than RK3588 and about 14× faster than RK3576.

#### How to read the stream counts

"Inference-bound streams" = aggregate throughput ÷ 15 FPS. It counts the accelerator only and is a theoretical ceiling. "Recommended streams" discounts that — end-to-end throughput measured on RK reaches only 28%–44% of the inference ceiling, because RTSP decode, tracking, the state machine and MQTT also consume CPU and memory bandwidth. With other workloads still running on the board, end-to-end throughput measured about 8.6 FPS on RK3588 and about 4.9 FPS on RK3576.

**Measurement conditions**: both Jetsons were measured with co-resident workloads stopped. That step is necessary — if a co-resident workload occupies the accelerator the numbers invert: Orin NX measured 264.9 FPS while running its own inference workload, lower than Orin Nano and the opposite of their relative compute; with it stopped, 306.2 FPS. Orin Nano measured identically either way (270.5 vs 270.7) because its workload does not touch the GPU.

### Known limits

- **Framing decides accuracy.** The numbers above come from a fixed camera, mid-range framing, indoors, with shoulders and hips visible. A 2–3 m side or oblique mount works; overhead top-down, long-corridor wide shots and heavy furniture occlusion all perform worse.
- **A different dataset lowers recall.** On the independent external dataset RealBiomFall (34 clips, all falls), measured recall drops to 58.8% on reCamera and 52.9% for the deployed YOLO11m on reComputer J30 / J40 — the limiting factor is the pose model's person-detection rate, not the fall decision. Before a production rollout, re-extract tracks from on-site footage, retrain and re-freeze the temporal weights.
- **The fall itself must happen on camera.** If someone is already lying down when the detector starts, it reports the pose but produces no event.
- **Only single-stream has been measured end to end.** The stream counts above are derived figures — load-test your own site for anything beyond one stream.

## Alarm panel (merged in from the retired Eldercare Alarm design)

The alarm panel ships as part of this design: bundled in the compose stack on the reComputer J30 / J40, RK and R2000 presets, and an optional extra host on the two reCamera presets. Everything below was written for the standalone Eldercare Alarm page and applies unchanged to the panel here.

:::caution[Usage notice]
This is an **assistive alarm**, not a medical device and not a certified emergency-response product. It does not diagnose, treat, or replace a carer's judgement, and it offers no guarantee against missed alarms. An alarm is a prompt; the decision and the response stay with a person. See [Appendix: measured data](#appendix-measured-data) for what the numbers cover before you quote any of them.
:::

### What this solution does

A fall detector already publishes events. This adds the part between "the camera saw something" and "a person dealt with it": each room is a zone with its own rules, an alarm opens, someone on duty confirms or dismisses it on a one-page console, and the confirmed alarm goes out as a webhook or an MQTT message with the operator's name on it. Built for assisted living, home care and any site where an alarm has to be defensible afterwards.

- Open-source implementation: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Three alarm kinds, decided per zone</h3>
                <p>A fall event from the detector; a zone empty past its <code>no_person_timeout</code>; a person whose bbox centre has not moved past its <code>no_motion_timeout</code>. A bathroom and a bedroom get different timeouts.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>A confirmation step, not just a push</h3>
                <p>5 s evidence window, then 60 s for an operator. Confirm and dismiss are both recorded against whoever pressed them.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Delivery you can audit</h3>
                <p>A confirmed alarm not notified within 5 s moves to escalated and retries every 30 s. Measured on local replay: 3 of 3 queued alarms recovered after a 4 s outage, 0 duplicates.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>No video in the notification</h3>
                <p>Alarm id, kind, zone, stream id, timestamp, operator, idempotency key. Snapshot capture is a switch that is off by default.</p>
            </div>
        </li>
    </ul>
</div>

#### What the console shows

The confirmation console is the operator's whole surface: the alarm list with each alarm's current state, the voice check-in verdict when that option is on, and confirm/dismiss buttons that write the operator's name into the audit trail. It is a React app on `@sensecraft/ui-kit`, served by the alarm service itself on HTTP 8080.

The published screenshot of that console was **taken against replayed demo data** — `evaluation/replay/replayer.py --scenario fall` driving synthetic bbox and track data. There is no camera footage in it and no real or dataset-derived person. Treat it as a UI reference, not as evidence of field performance.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="Confirmation console home: room list on the left, alarm stream on the right, each alarm with kind, zone and current state"/>
</div>

Opening one alarm gives its whole history — event time, state transitions, and who pressed confirm.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="Single room detail: zone configuration, current occupancy and the alarm history for that room"/>
</div>

### What hardware you need

Three things: whatever produces the detection events, one host that decides what becomes an alarm, and whatever receives the notification. The third is your own system, so the choice is really about the first two.

**① The event source** — either RTSP cameras you already own, in which case the detector is deployed onto the alarm host and points at your stream, or reCamera cameras that already run the detector themselves, in which case nothing about detection changes.

**② The alarm host** — this is the box that runs zones, timeouts, the state machine, the SQLite audit store, the confirmation page and the delivery queue. On two of the three packages it also runs the detector.

| | Alarm host | Detector runs | When to pick it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Detector, alarm service, broker and console on one Jetson | On this box, TensorRT engine built on first deploy | The cameras exist and the site has no gateway yet. Takes the most streams of the three packages |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Same stack, larger pose model | On this box, YOLO11m instead of YOLO11s | More rooms than one J3011 can watch, or a larger pose model is wanted. Same package, a different option in the deploy form |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Fanless industrial enclosure | On this box, native C++ hot path, pre-compiled HEF | The host goes in a cabinet or a riser: fanless, wide temperature, DIN rail or wall mount |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>All-in-one AI camera; the alarm service goes on a machine you already have | On the camera | There are no cameras yet, or the cameras are already detecting. The alarm service is brought up by hand — the deploy form has no device class for a gateway you supply |

**How to read the capacity claim.** "Takes the most streams of the three" comes from the upstream package description, not from a measurement made here — no multi-stream load test has been run on any of the three devices. Size the host from your own load test.

Other prerequisites: an MQTT broker reachable on 1883 (the Orin and Hailo packages bring one up; the reCamera package can use the one the cameras already publish to), a fixed indoor view on the Orin and Hailo packages, and a webhook endpoint or an MQTT subscriber that will receive the notifications.

### How to deploy on site

Two parts: put the cameras where the zones will work, then install and configure.

#### 1. Cameras and zones

:::tip[Zones are normalised rectangles over the camera frame]
Moving or re-aiming a camera invalidates the zone layout **without raising any error**. The rectangle still exists; it just covers a different part of the room. Re-check every zone after any physical change to a camera.
:::

On the Orin and Hailo packages you also need a fixed indoor view where a person stays visible along the expected fall path — the detector underneath is the same EdgeFallKit detector documented in the fall-detection wiki, with the same placement constraints (a side or corner view at 2–3 m, shoulders and hips visible).

Two zone-shaping decisions decide how much noise the site produces:

- **`no_motion` will fire during sleep** unless the zone excludes the bed or the timeout is longer than a normal nap. Motion is the displacement of a tracked person's bbox centre above `motion_threshold`, not optical flow or keypoint velocity, so small movements under a blanket do not count.
- **Occlusion can raise a false `no_person`.** A zone only re-arms after the person is seen again, so one occlusion produces one alarm rather than a repeating series — but it still produces one.

#### 2. Software: four steps

Per-device steps are on the reference design page, where answering a few questions about the site also gives you the matching application package to download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />


1. **Pick a configuration** — the configurator asks what is on the wall and where the host goes, and returns one of the three packages.
2. **Install the package** — the Orin and Hailo packages deploy the detector and the alarm service together. The reCamera package installs nothing for detection; the alarm service is brought up by hand on a gateway you supply.
3. **Fill in the configuration** — zones and their `no_person_timeout` / `no_motion_timeout`, the state-machine windows, the webhook URL, and the device name that forms the first topic segment. Zones are drawn straight onto the picture and take effect on save:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="Drawing a zone on the live view; it is still in place after saving and reloading"/>
</div>

The configuration page shows that room's live view on the left and the zone's two timeouts on the right. When the camera is offline the view falls back to the last snapshot and the configuration is still editable.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-en-e238b3a7.png" alt="Zone configuration page: live view on the left, no-person and no-motion timeouts on the right"/>
</div>
4. **Verify** — raise a test alarm and watch it complete: the alarm appears in the console, an operator action is recorded against it, and the webhook endpoint receives one POST with an idempotency key. Below, one injected alarm goes from appearing to confirmed:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="An injected fall alarm appears in the console, enters the operator window, and turns notified once confirmed"/>
</div>

Detector and service state on the host itself are on the device console:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-en-76e94f0c.jpg" alt="Device console on the alarm host: detector and alarm service running state"/>
</div>

<!-- TODO image: on-site installation photo (camera mounted in a room) — needs a field shoot -->

Estimated time is **45 minutes**, rated **intermediate**. The Orin package is the longest because the first deploy builds a TensorRT engine on the device.

:::caution[The alarm service image is not published yet]
As of packaging it exists only as a local build from the upstream project's `docker/Dockerfile`. Build and retag it, or push it, before an Orin or Hailo deploy can succeed. The detector image digests are recorded as pending in `eldercare-alarm/release/PINNING.md`.
:::

### How to connect it to your own system

The alarm service is the only thing you integrate with, and it runs on the alarm host. Three ways in, by what you already have:

- **A nurse call system or a paging service** — take the webhook. One POST per confirmed alarm, carrying the alarm id, kind, zone, stream id, timestamp and operator. Deduplicate on the idempotency key, not on the timestamp.
- **An MQTT-based site** — turn the alarm bus on and subscribe to `eldercare/alarm/<zone-id>`. Same payload as the webhook. It is off by default.
- **Your own dashboard or record system** — poll or read `GET /api/alarms` on HTTP 8080 for the full alarm records including state history and the operator on each.

**Naming.** `<device-name>` is the first segment of the detector's result topic and is yours to set in the deploy form. Name it by room, floor or site so several devices on one broker stay separable. `stream_id` is read from the message payload and never parsed out of the topic, so a broker rewrite or a bridge prefix cannot silently reroute a zone.

#### The full topics and payloads

| Topic / port | Payload | Default |
|---|---|---|
| HTTP 8080 `GET /api/alarms`, page at `/` | Alarm records: `id`, `kind`, `zone_id`, `stream_id`, `state`, `event_timestamp`, `operator`. The same page serves confirm and dismiss | On |
| HTTP POST to your webhook URL | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` plus an idempotency header. No snapshot, no video | On once the URL is set |
| MQTT 1883 `eldercare/alarm/<zone-id>` | Same payload as the webhook | Off |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | The `fall_result_v1` stream this service consumes: `stream_id`, `person_count`, `fall_event`, per-person bbox | Input, published by the detector |

**The field most easily misused is `state`.** `escalated` means the notification deadline was missed; it does not revert to `notified` when a later retry succeeds. A dashboard that treats `escalated` as a failure state will show alarms that were, in fact, delivered — that is the point of the field.

The broker runs on the alarm host in the Orin and Hailo packages, and on the cameras or the gateway in the reCamera package. Nothing in the path needs the internet. The bundled broker allows anonymous connections for commissioning on a trusted LAN; put credentials and TLS on it before the device is reachable from anywhere else.

### For engineers: implementation details

The alarm service is the upstream project's own code; the detector under it is EdgeFallKit, consumed only through its published output contract.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong>
    </a>
</div><br />

#### One decision layer, three runtimes underneath

The alarm logic is identical on all three packages — same state machine, same SQLite schema, same delivery queue. What differs is where the detector runs and what runs it.

| Alarm host | Detector location | Pose model | Runtime | Model delivery |
|---|---|---|---|---|
| reComputer J30 (Orin Nano 8GB) | Same host | YOLO11s-Pose | TensorRT | Engine built on the device during the first deploy |
| reComputer J40 (Orin NX 16GB) | Same host | YOLO11m-Pose | TensorRT | Engine built on the device during the first deploy |
| reComputer R2000 Series industrial (R2035-12) | Same host | YOLOv8s-Pose | HailoRT 4.21, native C++ hot path | Pre-compiled HEF downloaded, not built on device |
| Gateway you supply | On the reCamera cameras | Whatever the camera's App Center detector ships | Camera NPU | Not managed by this package |

Platform constraints worth knowing before you commit:

- **Hailo is ABI-locked to HailoRT 4.21** — plugin, user library and driver all move together, and no other process may hold the accelerator.
- **The Jetson detector must publish empty frames.** Its default is to send nothing when nobody is in view, which starves the `no_person` timeout of input. The Orin package sets `publish_empty_frames: true`; if you replace the shipped detector config with the device's own, set it again. The Hailo runtime has no such switch and needs none.
- **Confirm the exact reCamera topic and payload shapes on your own device**, along with the Hailo per-frame publishing behaviour and the Jetson override above.

#### The state machine: why one event is not one notification

A raw `fall_event` is not an alarm. The layer between them is what makes the output defensible.

| Stage | Trigger | Configured value |
|---|---|---|
| Evidence window | Alarm opens, further detector frames are gathered before anyone is asked | `statemachine.evidence_sec` 5.0 |
| Operator window | Console shows the alarm and waits for confirm or dismiss | `statemachine.confirm_window_sec` 60.0 |
| Timeout behaviour | Nobody answered inside the operator window | `statemachine.confirm_timeout_action` — default is to treat as real and notify |
| Notification deadline | Confirmed alarm must be delivered inside this or it escalates | `notify_deadline_sec` 5.0 |
| Retry | `escalated` alarms keep retrying, and stay `escalated` | `retry_interval_sec` 30.0 |
| Zone: empty | `person_count` stays 0 past the zone's timeout | `no_person_timeout`, per zone |
| Zone: motionless | Tracked bbox centre displacement stays below the threshold past the zone's timeout | `no_motion_timeout` per zone, `motion_threshold` 0.02 normalised |

**The necessary gate is the idempotency key**, not any of the windows. It is `zone:kind:event_timestamp:global_event_id`, and both the alarm table and the notification table carry unique indexes on it. Remove that and a replayed event stream produces duplicate alarms and duplicate deliveries; every other parameter in the table above only changes timing.

Retention is 90 days for events, state transitions, operators and delivery receipts; 7 days with a daily purge for media, if media is ever enabled.

#### Voice check-in (optional, off)

When enabled, a raised fall alarm makes the service speak a prompt into the room and listen for a few seconds, **in parallel with** the evidence window rather than after it. The asymmetry is deliberate: a call for help, no answer, or an unreadable answer confirms the alarm immediately and skips the remaining operator window, while "I'm fine" does *not* close the alarm by default — it flags it for review and lets the normal timing continue. A mis-heard "I'm fine" would suppress a real fall; a confirmed alarm nobody needed costs an operator a few seconds.

Audio hardware is a USB microphone and speaker on the LAN compute box plus an OpenVoiceStream instance for TTS and streaming ASR. The cameras are not the audio path — neither reCamera model has a confirmed usable microphone, and the SG2002 cannot host local ASR at all.

**Privacy.** Audio is never written to disk. Raw PCM lives in memory for one listening window and is released when the verdict is produced. Persisted are the verdict, the confidence, the latency and the transcribed text; `store_transcript: false` drops the text as well.

### Appendix: measured data {#appendix-measured-data}

This section is for anyone checking the numbers; skipping it does not affect deployment. **Nothing here constitutes a medical or safety certification.**

#### The alarm path, measured on local replay {#alarm-path-measured}

Everything in this table was measured on a laptop with a replayer standing in for the cameras — **local replay, not a device**.

| Metric | Value | Conditions | Source record |
|---|---:|---|---|
| Alert latency, event timestamp to notification sent | P50 2061 ms / P95 2093 ms | 5 fall replays, 15 FPS × 12 s each, 1 s evidence + 1 s auto-confirm, single zone, single stream, loopback webhook | `boundary.alert_latency.yaml` |
| No-person detection lateness against the configured timeout | P50 65 ms / P95 77 ms late | 3 replays, 10 FPS × 11 s, 5 s timeout, 0.1 s tick, in-process, no broker | `boundary.inactivity.yaml` |
| Outage recovery, unique successful deliveries over queued | 3 of 3, 0 duplicates, first delivery 96 ms after recovery | Webhook endpoint returning 503 for 4 s, 3 alarms queued, 2 s retry interval | `boundary.offline_recovery.yaml` |
| False alarms | 0 over 0.02 camera-hours | 72 s of quiet replay | Not a rate — the intended run is 24 h |

**How it was measured**

- Date 2026-09-05, run directory `evaluation/runs/2026-09-05-smoke/` in the eldercare-alarm project. Raw outputs under `raw/`, conditions in `conditions.yaml`, one `boundary.<metric>.yaml` per row.
- Host: MacBook, macOS 15 (Darwin 25.5.0), arm64. Loopback network. No container — the service ran directly.
- The scripts drive the real `AlarmService` — real state machine, real SQLite, real HTTP webhook — with only the camera replaced by a replayer. The numbers therefore describe the alarm path and **exclude inference time and any cross-machine network**.
- The state-machine windows were shortened for the run: 1 s evidence + 1 s auto-confirm instead of the shipped 5 s + 60 s. The alert latency is therefore a property of that configuration, not of a site — with the defaults the same path takes just over a minute, by design rather than as overhead.
- Every `boundary.*.yaml` has values in the `stable` tier only. `degrading` and `failure` are `null`: nothing was loaded to the point of degradation, so no boundary was found.
- `reproduced_by: null` — one person, one run, not independently reproduced.

The alert latency is essentially the sum of the two configured windows plus about 60 ms of dispatch. Read the false-alarm row as what it is: 72 seconds of quiet, listed so that it cannot be quoted as a rate.

#### One device session, not a site

On 2026-09-06 the loop closed once on a standard (non-PoE) reCamera One over USB-RNDIS: real `fall-detection` MQTT frames, an injected fall alarm and a real 60 s no-activity alarm both reached a webhook through the device's own mosquitto broker. Alert latency across the first 5 of 10 injected trials was **P50 2487 ms / P95 2751 ms**; from the 6th, the notifier's own rate limit (5 per 10 minutes) silently stopped further sends — by design, not a fault. The direct network route was intercepted by a local network tool, so the traffic went through an SSH tunnel; that is a host-environment artefact, not a device issue. USB-disconnect recovery was not attempted. Record: `eldercare-alarm/evaluation/runs/2026-09-06-recamera-one/results.md`.

This is one lab session on one device. It is evidence that the path works end to end; it is not a performance characterisation and it says nothing about the Orin and Hailo packages.

#### One Hailo-8 run with real inference in the loop

On 2026-09-08 the Hailo package ran end to end once on a Raspberry Pi 5 + Hailo-8 M.2 bench (named on this page as reComputer R2000 Series, R2035-12, Hailo-8). The `fall-detection` container ran real inference with the official YOLOv8s-Pose HEF on HailoRT 4.21.0, fed by an RTSP replay of GMDCSA-24 `subject-4/Fall/01.mp4` (640×640, 15 FPS, 4.68 s, looped); the alarm service delivered to a minimal HTTP sink on the same device.

| Metric | Value | Conditions | Source record |
|---|---:|---|---|
| Fall to webhook received, real Hailo-8 inference in the loop | P50 2830 ms / P95 3061 ms (min 2102 ms) | 10 independent `kind=fall` alarms from one looped clip; 1 s evidence + 1 s auto-confirm + 2 s re-arm; single zone, single stream; sink on the same device, so no cross-machine clock | `eldercare-alarm/evaluation/runs/2026-09-08-harvest-pi-acceptance/results.md`, `boundary.hailo_alarm.yaml` |

- Latency is webhook arrival wall-clock time minus `payload.event_timestamp_ms`, the same definition as `evaluation/measure_alert_latency.py`. All 10 alarms completed within `notify_deadline_sec` (5 s); none entered the retry queue.
- The windows were shortened from the shipped 5 s / 60 s / 120 s. With the defaults the same path has a floor of about 65 s; that was not measured.
- Deployed by hand over SSH, not through the installer, and the device's existing broker on 1883 was used instead of the bundled one.
- Alarms arrived in bursts: 5 in about 45 s, then about 9 minutes with none, then 5 in about 40 s. The cause was not located.

#### Detection accuracy is the base project's

This design detects nothing itself, so its accuracy is whatever the EdgeFallKit detector underneath achieves. Those figures — GMDCSA-24 v2.1, split by subject, held-out Subject 4 read once, 27 clips — are published in the Fall Detection reference design, where the frozen per-platform accuracy runs from **74.1% to 88.9%** and mean alert latency from **1.22 s to 1.75 s**. Quote them as base data with their conditions attached. They are not re-measured here, and the alarm layer adds its own confirmation windows on top of that detection latency.

#### What has not been shown at all

- **Confirm on your own device**: the Jetson `publish_empty_frames` override, the Hailo per-frame publishing behaviour, and the exact reCamera topic and payload shapes.
- **"Takes the most streams" is a package-level statement** from the upstream description, not a measured capacity — size it with your own run.
- **The false-alarm rate comes from your own site**; the intended run is 24 hours of quiet.
- **No boundary.** Nothing was loaded to the point of degradation, so the `degrading` and `failure` tiers of every boundary file are `null`.

Treat every deployment as a commissioning exercise until you have watched a real alarm complete on your own site.

#### Scope of the numbers above

- **The alarm path** — state machine, SQLite, webhook delivery and outage recovery: measured on local replay with a replayer standing in for the cameras, not on a device.
- **A single reCamera One closed loop** — one lab session, 2026-09-06, not a site.
- **Detection accuracy** — it is the base EdgeFallKit project's number, not this design's.
- **False alarms** — 0 over 0.02 camera-hours (72 s of quiet replay). The intended run is 24 h of quiet; run it on your own site before quoting a rate.
- **Robustness under darkening and occlusion** — the script exists and needs GMDCSA clips plus on-device inference to run.
- **A single Hailo-8 run** — 2026-09-08, one bench device, one replayed clip, shortened confirmation windows; not a site.
- **The three packages on their own hardware** — all three target devices were offline on the 2026-09-05 measurement date; measure them on your own units.

## Data and asset sources

- **GMDCSA-24 v2.1** — Both the accuracy evaluation and the demo footage on this page come from this dataset, [ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos), MIT License. Faces in the demo images have been pixelated and Gaussian-blurred: the license covers the author's copyright, not the subjects' likeness rights.
- **RealBiomFall** — The testing subset used for the external generalization test, 34 clips, all falls, so only recall and latency are reported.
- Neither dataset is distributed with the `edgefallkit` repo — obtain them yourself to reproduce the evaluation.
- The camera-placement diagram is drawn in-house for this solution.
</content>
