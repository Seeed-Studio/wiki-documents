---
description: On-device steel surface defect inspection — six defect classes, an OK/NG verdict delivered to the PLC over Modbus TCP and to the MES over MQTT, on Jetson Orin or a reComputer R2000 series with a Hailo-8. Hardware, deployment outline, output contracts and measured data.
title: 'Edge Surface Defect Inspection: Six Classes, Modbus and MQTT'
keywords:
  - surface defect inspection
  - steel strip defect detection
  - Modbus TCP inspection
  - MQTT MES inspection event
  - edge AI inspection
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - D-FINE
  - RT-DETRv2
  - EfficientAD anomaly detection
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg
slug: /solutions/edge-surface-defect-inspection
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/edge-surface-defect-inspection/
generated_from: sensecraft-solutions@edge_inspection_surface
---

:::caution[Usage notice]
The pre-bundled NEU-DET weights (ONNX / HEF) serve as reference design benchmarks for evaluation and pipeline verification. For commercial production, we recommend retraining or recalibrating models on site-specific defect images. This is not a certified quality or safety instrument.
:::

## What this solution does

A fixed camera looks at steel strip or a part. The device decides frame by frame whether the surface has a defect and sends the OK/NG verdict down two paths at once: a Modbus TCP coil a PLC can latch, and one MQTT JSON message per frame carrying every detection box in that frame.

- **Six defect classes** — crazing, inclusion, patches, pitted surface, rolled-in scale, scratches.
- **Detection, the OK/NG rule and both outputs run on the device.** Images stay on the device. The MQTT broker, the Modbus TCP server and a read-only debug page run on the same host.
- **Detector and accelerator options.** On Jetson: YOLOX-Tiny (default), D-FINE-S or RT-DETRv2-S; on the reComputer R2000 series (Hailo-8): YOLOX-Tiny INT8.

- Packaging source and deployment guide: [sensecraft-solutions / solutions/edge_inspection_surface](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/edge_inspection_surface)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Ready to run on the device</h3>
                <p>Install the application package on a reComputer J30 / J40 series and it runs; a first deploy takes about 40 minutes. Measured on Orin NX 16GB: frame capture to coil write P50 9.3 ms, none of 3000 samples above 20 ms.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source</h3>
                <p>Runtime code is Apache-2.0; the default detector is YOLOX (Apache-2.0), and no Ultralytics code or weights are used anywhere.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Your own camera, PLC and MES</h3>
                <p>Any RTSP camera. The PLC reads coils and registers on Modbus TCP unit 1 directly and the MES subscribes over MQTT, with no middleware.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Runs entirely on site</h3>
                <p>Images stay on the device; the main chain needs no internet access.</p>
            </div>
        </li>
    </ul>
</div>

### What the demo shows

The package ships no dataset-derived imagery. Its only asset is a diagram drawn for this solution (data path, device names, protocol names and port numbers), with no photographs and no detector output.

To see the detector's output, open the bundled debug page on your own footage: `/preview.mjpg` on port 8080 draws the boxes onto a live MJPEG stream, and `/events` lists recent verdicts.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg" alt="Steel surface defect real-time inference detection overlay comparison"/>
</div>

## What hardware you need

Two things on site: a camera and a host.

**① One RTSP camera** — fixed on the strip or part, with defects taking up a usable share of the frame. All measured data was taken at 640×640, 10 FPS. Lighting must be stable: the model was trained under one dataset's lighting only.

**② Inspection host** — decides how many cameras you can run and which detectors you can choose:

| | Host | Streams measured | When to pick it |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-p-5590.html) (Jetson Orin Nano 8GB)<br/>Entry host for a single camera | 1–2 stable | One camera, cost-sensitive. Measured capture→coil P50 10.56 ms |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) (Jetson Orin NX 16GB)<br/>The measured host | 8 stable | More than one camera; all data below was measured on this host |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110191.jpg" alt="reComputer Industrial J4012" width="110" /> | [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) (Orin NX 16GB, fanless) | same as J4012 | The host goes in a control cabinet; same module and runtime, different enclosure |

A third host is the **reComputer R2000 series with a Hailo-8**. Deployment steps exist for it; the configurator does not quote it yet.

Stream capacity was measured on Orin NX 16GB, 640² / 10 FPS per stream: **8 stable, 12 degrading, 24 failing**. From 12 streams on, total throughput stays at 110–112 FPS: the accelerator context is not thread-safe and inference runs serially, so more compute does not add streams.

You also need a PLC or line controller on the same network that can act as a Modbus TCP master (optional; the register map is fixed at unit 1), and mains power next to the line or in the cabinet. The main chain needs no internet access.

### Negative Selection Boundaries

- **Concurrency and Memory Limit**: If connecting more than 2 industrial cameras or chaining defect classification models, avoid the 8GB J3011. Choose the 16GB J4012 to prevent video buffer OOM.
- **Operator Compatibility**: On the reComputer R2000 with Hailo-8, custom non-standard ONNX operators unsupported by Hailo will fall back to the host CPU, adding significant latency.

## How to deploy on site

Fix the camera and lighting first, then install the software.

### One: install the hardware, camera and light first

:::tip[Do not change the camera or lighting after setup]
The training data comes from one dataset under one lighting condition. Accuracy under a different lamp, angle or surface finish has not been evaluated, and no threshold compensates for it. Keep the camera and light source as installed.
:::

Framing requirements:

1. **Defects must take up a usable share of the 640×640 frame.** In a wide field of view a scratch is a few pixels wide, and the accuracy data below does not apply.
2. **Fixed mounting.** Re-aiming or refocusing changes the scale the measurements assumed.
3. **Line rate configured at 10 FPS.** The runtime can go faster; accuracy and latency were measured at 10 FPS.

### Two: install the software

Per-device steps are on the reference design page; this section lists the flow.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_inspection_surface" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download the app package 🖱️</font></span></strong>
    </a>
</div><br />

1. **Pick a configuration** — how many cameras per host, and whether the host sits beside the line or in a cabinet. These two answers decide the module and the enclosure.
2. **Install the application package** — container image, model and the frozen score threshold (0.35) are all in the package. On Jetson the first deploy builds the TensorRT engine on the device, measured at **291 s** on Orin NX 16GB + TensorRT 10.3; the engine is tied to the GPU architecture and TensorRT version and is not distributed separately. The reComputer R2000 series downloads an INT8 HEF, with no build on the board.
3. **Fill in the configuration** — RTSP URL, `device_name` and `stream_id` (to tell sources apart when several lines share one broker or one host runs several cameras), source frame rate, Modbus unit id, and on Jetson the **Detector Track**: YOLOX-Tiny (default, with measured data), D-FINE-S or RT-DETRv2-S. The score threshold comes in three steps, 0.25 / 0.35 / 0.45; 0.35 is the deployment value, calibrated for YOLOX.
4. **Verify** — open `/preview.mjpg` on port 8080 and confirm boxes appear on your own footage, then check inference time, capture→coil latency and the MQTT / Modbus counters in `/healthz`.

Allow **40 minutes** for a first deploy. On Orin most of it is the engine build; the Hailo path has three prerequisites: a matching Python minor version; HailoRT 4.21.x at the same version across driver, library and Python bindings; and the kernel parameter `hailo_pci force_desc_page_size=4096`. The deployment steps check each one.

## What interfaces are available

All data is served by the inspection host itself: Modbus TCP 502, MQTT 1883, HTTP 8080. There is no cloud step in the main chain.

- **PLC or line controller** — read Modbus TCP unit 1 directly. Coil 0 is NG, coil 1 is OK, mutually exclusive. The registers are updated atomically **before** the coil is written, so when the PLC sees the coil flip, HR 0–7 already hold the class, defect count, primary box and heartbeat of the same frame. Poll the registers first and use the coil as the trigger.
- **MES or historian** — subscribe to `<device-name>/inspection/<stream-id>/results`. One JSON per frame, with verdict, reason, defect count and every box in that frame in one payload. With several streams on one host this is the only per-stream source: Modbus holds only the last verdict written.
- **Commissioning laptop or shop-floor dashboard** — port 8080 serves `/preview.mjpg` (MJPEG with boxes), `/healthz` (inference time, capture→coil latency, MQTT and Modbus counters) and `/events` (recent verdicts), read-only.

`<device-name>` and `<stream-id>` are set in the deployment steps; `stream_id` is also in the payload, so downstream code does not parse the topic.

### Full interface table

| Topic / port | Content | retained |
|---|---|---|
| Modbus TCP 502, unit 1, coils 0–1 | Coil 0 = NG, coil 1 = OK, mutually exclusive, written after the registers | n/a (register state) |
| Modbus TCP 502, unit 1, HR 0–7 | HR 0 primary class ID; HR 1 defect count; HR 2–5 primary box cx/cy/w/h normalised ×10000; HR 6–7 heartbeat, Unix seconds as a uint32 high and low word | n/a |
| `<device-name>/inspection/<stream-id>/results` | `type`, `version`, `device`, `stream_id`, `frame_id`, `verdict`, `verdict_reason`, `defect_count`, `primary_class_id`, `coordinate_space`, `inference_time_ms`, `pipeline_ms`, `detections[]` (`slot`, `class_id`, `class_name`, `score`, `bbox`) | no |
| HTTP 8080 `/preview.mjpg` `/healthz` `/events` `/snapshot.jpg` | MJPEG preview with boxes, health counters, recent verdicts, single-frame snapshot | n/a |

Two fields to note: **`slot` is the index within the frame, sorted by score**; the pipeline does no tracking, so `slot 0` in two adjacent frames is not necessarily the same physical defect. With the optional anomaly module on, **`anomaly_score` is a separate additional field** and does not feed the top-level `verdict`.

Every MQTT message is validated against the contract schema on the publish path; failures are counted and dropped. The packaged broker is configured `allow_anonymous true`; point a production line at a broker with credentials.

## Performance and measured data {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_surface</font></span></strong>
    </a>
</div><br />

### Speed and latency

| Device | Model / precision | Detector throughput | Full pipeline | End-to-end capture → Modbus coil |
|---|---|---:|---:|---|
| reComputer J40 series (J4012, Orin NX 16GB) | YOLOX-Tiny 640², TensorRT 10.3 FP16 | 113.7 FPS (`detect()` P50 8.797 ms, P95 9.097, P99 9.223) | 9.999 FPS with 0 dropped when throttled to 10 FPS; 76.5–104.3 FPS unthrottled | P50 9.298 / P95 9.441 / P99 9.549 ms; 3000 samples, max 9.926 ms |
| reComputer J30 series (J3011, Orin Nano 8GB) | YOLOX-Tiny 640², TensorRT 10.3 FP16 | 105.2 FPS (pure compute 198.5 FPS, GPU 5.03 ms) | 9.999 FPS with 0 dropped when throttled to 10 FPS; 75.3 FPS unthrottled | P50 10.56 / P95 10.82 / P99 11.10 ms; stable cadence, 18.2 W MAXN |
| reComputer R2000 series + Hailo-8 | YOLOX-Tiny 640², HailoRT INT8 HEF | Hardware 106.75 FPS (`hailortcli run`, hardware latency 8.47 ms); application 91.49 FPS (P50 10.93 ms, P95 13.19 ms) | 46.14 FPS unthrottled | P50 11.61 / P95 14.99 / P99 16.63 ms |

Conditions: the input is a synthetic video stitched from 290 validation images at 640×640 / 10 FPS, with no temporal continuity between frames. Orin detector figures are 500 `detect()` calls over 60 pre-decoded frames, including letterbox, execute and CPU NMS; engine execution is about 5.0–5.6 ms (about 178–198 FPS) of that. Unthrottled, capture→coil P50 rises to 35.90 ms (J4012) / 41.3 ms (J3011); the extra ~26–30 ms is queueing in a depth-2 queue. Hailo application figures were measured on bare metal, not in the container, RSS about 126 MB.

| Multi-stream level | Streams | FPS per stream | Dropped | P95 latency |
|---|---:|---:|---:|---:|
| Stable | 8 | 9.989 | 0.02% | 72.3 ms |
| Degrading | 12 | 9.306 | 6.83% | 104.0 ms |

Multi-stream: reComputer J40 series, 640² / 10 FPS per stream, five minutes per level. 24 streams is the failing level: 4.593 FPS per stream and 53.95% dropped. The process does not crash, but more than half the input is silently dropped and those parts are never inspected.

Reproduce: `solutions/edge_inspection_surface/evaluation/runs/2026-09-05-m2-orin/results.md` (Orin), `evaluation/runs/2026-09-06-rpi-hailo/results.md` (Hailo-8)

### Detection accuracy

| Metric | Value | Conditions |
|---|---:|---|
| mAP50, reComputer J40 series, TensorRT FP16 | **0.7577** | 290 validation images / 706 boxes, single inference pass at score 0.01 |
| Precision / recall at deploy threshold 0.35 | **P 0.7652 / R 0.6969** | Post-filtered from the same pass. TP 492 / FP 151 / FN 214; 7 of 290 frames produce no output at all |
| Recall at threshold 0.6 | 0.5807 | FN 214 → 296, fully missed frames 7 → 39 (13.4%); precision rises to 0.865 |
| Recall at threshold 0.9 | 0.0241 | 273 of 290 frames output nothing (94%); crazing and rolled-in scale recall 0 |
| TensorRT FP16 vs CPU onnxruntime, box by box | mAP50 difference 0.0003 | 643 matched pairs, mean IoU 0.9972 (min 0.8311), mean score difference 0.0011; no frame's verdict changed |
| mAP50, reComputer R2000 series + Hailo-8, INT8 HEF | **0.7091** | Same 290 images; CPU reference 0.7574, −0.0483 |
| Hailo vs CPU reference box match rate | 86.66% | 523 of 684 boxes matched at IoU ≥ 0.5 |
| mAP50, Hailo Dataflow Compiler emulator, INT8 level-1 (shipped build) | 0.7266 | 20 validation images / 45 boxes, CPU on the same subset 0.7228; not directly comparable with the 290-image rows |

Dataset: NEU6 (a re-hosted copy of NEU-DET, licence at the end of the page), split 70/15/15 grouped by source so adjacent frames of one strip never cross a split. The threshold rows are post-filters of one pass, not separate tests.

Per-class AP50 from the same pass:

| Class | Boxes | AP50 | Recall at 0.35 |
|---|---:|---:|---:|
| scratches | 95 | 0.9685 | 0.9263 |
| pitted_surface | 70 | 0.9301 | 0.8857 |
| patches | 122 | 0.9065 | 0.8689 |
| inclusion | 184 | 0.7658 | 0.6902 |
| rolled-in_scale | 104 | 0.6149 | 0.5481 |
| crazing | 131 | 0.3603 | 0.3969 |

Reproduce: `solutions/edge_inspection_surface/evaluation/runs/`

### Detector track comparison

| Detector | mAP50 | P / R at frozen 0.35 | Fully missed frames |
|---|---:|---|---:|
| YOLOX-Tiny (default) | 0.7574 | 0.7632 / 0.6983 | 7/290 |
| D-FINE-S | 0.7499 | 0.4956 / 0.8017 | **0/290** |
| RT-DETRv2-S | 0.7317 | 0.4575 / 0.7847 | 1/290 |

Conditions: CPU onnxruntime reference, not a device figure; the same 290 validation images, 640×640 static batch-1 input, one seed per track. The 0.35 threshold is calibrated on YOLOX's `obj × cls` score distribution; DETR scores are distributed differently, hence the unbalanced P/R. At matched precision (P ≈ 0.81–0.87), D-FINE recall is 2–7 points above YOLOX and fully missed frames fall from 38 to 20.

Reproduce: `solutions/edge_inspection_surface/evaluation/runs/`

### Optional anomaly module (EfficientAD-S)

| Metric | Value | Conditions |
|---|---:|---|
| Pixel AUROC | **0.8752** | DeepPCB `pcb` OK/anomaly split: 205 OK val + 213 OK test + 213 defect test |
| Pixel AUPRO (FPR ≤ 0.30) | 0.6494 | Same run, 1177 connected defect regions |
| Image AUROC | **0.5201** | Same run; 0.5 is chance |
| Recall on unseen defect classes (leave-one-out, pixel/region level) | 0.225 – 0.955 | Wide per-class spread (open 0.955, spur 0.225) |
| Dual-path latency overhead (detector + EfficientAD, CPU reference) | +139 ms P95 per frame | queue=2, 500 ms timeout (package defaults); 120/120 frames merged |

Pixel/region scoring is usable, image-level is not: twelve ways of reducing the heatmap to one score all give image AUROC 0.495–0.530. The OK set above (scanned templates) and the defect set (photos of real boards) come from different sources.

Reproduce: `solutions/edge_inspection_surface/evaluation/runs/`

### Deployment footprint

| Item | Value | Conditions |
|---|---|---|
| TensorRT engine build on the device | 291 s | reComputer J40 series, JetPack 6.2, TensorRT 10.3, YOLOX-Tiny 640² FP16, static shape |
| Jetson image | 375 MB | Host TensorRT and CUDA are mounted into the container, not packed into the image |
| Added footprint on the reComputer R2000 series | about 452 MB | 443 MB runtime image + 8.9 MB HEF + config |

### Runtimes and key parameters

| Device | Model | Precision | Runtime | How the model reaches the device |
|---|---|---|---|---|
| reComputer J30 / J40 series | YOLOX-Tiny 640² (optional D-FINE-S, RT-DETRv2-S) | FP16 | TensorRT 10.3 | Engine built on the device at first deploy (measured 291 s), tied to GPU architecture and TensorRT version, not distributed separately |
| reComputer R2000 series + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.0 | HEF compiled off-device with Dataflow Compiler 3.31.0 at `optimization_level=1`, downloaded at deploy time |

D-FINE-S and RT-DETRv2-S are available on Jetson only: Hailo Dataflow Compiler 3.31.0 does not support their deformable-attention operators (`GridSample`, `GatherElements`, `TopK`).

- `min_score`: deploy value **0.35**; the deploy step offers 0.25 / 0.35 / 0.45
- `min_defects`: default 1; a frame with at least this many detections is NG
- `anomaly.enabled`: default `false`; `anomaly_score` is a separate MQTT field and does not enter the top-level `verdict`

### Known degradation

- Change the lighting and the figures above no longer apply: the model was trained and evaluated under one dataset's lighting.
- Crazing AP50 is 0.30–0.36 on all three architectures (YOLOX 0.360, D-FINE 0.302, RT-DETRv2 0.310) and does not move with threshold or detector head; a line whose main defect is crazing needs retraining on its own images.
- INT8 on the reComputer R2000 series loses 0.0483 mAP50; the largest losses are the two weakest classes (crazing AP50 0.3873, rolled-in_scale 0.4483).
- The stream ceiling is in the inference loop: from 12 streams total throughput stays at 110–112 FPS; the accelerator context is not thread-safe and inference runs serially, so more compute does not add streams.
- All streams share one Modbus register block, and the last verdict wins; per-stream results come from MQTT.
- Image-level anomaly scores are near chance. Before enabling `anomaly.enabled`, collect your own OK images with the actual inspection camera and recalibrate `anomaly.threshold` on them.

### Next steps

- Rerun the detector comparison with three seeds per track to confirm D-FINE-S's recall advantage at matched precision.

## Data and asset sources {#data-and-asset-sources}

- **NEU-DET (Northeastern University surface defect database), via Roboflow copy** — training and validation data for the shipped baseline detector and the source of accuracy figures above. Pre-converted model weights are hosted on the official CDN for reference design evaluation and end-to-end pipeline verification. Production deployments should retrain models on actual line images to match target workpieces and lighting conditions.
- **DeepPCB** —— [github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB), MIT licence. Used only by the optional unsupervised-anomaly track, and distinct from NEU-DET. The MIT licence permits redistribution and commercial use and requires the copyright notice to travel with copies and derivative works.
- **YOLOX** —— [github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX), Apache-2.0. The default detection backbone, chosen over Ultralytics to avoid AGPL terms. No Ultralytics code or weights are used anywhere in this solution.
- **D-FINE** —— [github.com/Peterande/D-FINE](https://github.com/Peterande/D-FINE), Apache-2.0, and **RT-DETRv2** —— [github.com/lyuwenyu/RT-DETR](https://github.com/lyuwenyu/RT-DETR), Apache-2.0. The two optional detector tracks, fine-tuned only from their COCO-licensed checkpoints. No Objects365-trained weights are downloaded or distributed, since upstream itself states that licence is unconfirmed. Licence and commit pinning are in `tracks/detector/PROVENANCE.md`.
- **anomalib EfficientAD-S** —— Apache-2.0, including its pretrained teacher weights (`tracks/anomaly/PROVENANCE.md`, anomalib `lib/v2.6.0`).
- **Architecture diagram** —— drawn from the package's device catalogue and output interfaces; contains no dataset content.

The runtime code is Apache-2.0. Shipped weights serve as evaluation baselines; production deployments should retrain on site-specific data.
