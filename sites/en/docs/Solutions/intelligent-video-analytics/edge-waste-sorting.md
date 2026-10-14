---
description: On-device waste sorting at the drop-off point — one trigger, one image, eight material classes and the Chinese four-way disposal category over MQTT, with a GPIO callback for a flap. Hardware, deployment outline, output contracts and the full measured boundaries.
title: 'Edge Waste Sorting: Material Classes, the Chinese Four-Way Category and MQTT'
keywords:
  - waste sorting
  - waste classification edge AI
  - material classification MQTT
  - China four-way waste category
  - smart bin
  - EfficientNet-Lite0
  - SigLIP2 open vocabulary
  - reComputer
  - Jetson Orin
  - Hailo-8
  - RK3588
  - INT8 quantisation
image: https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg
slug: /solutions/edge-waste-sorting
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-14'
url: https://wiki.seeedstudio.com/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Usage notice]
The Chinese four-way mapping is a table maintained by this project, not a ruling by any authority, and city rules differ; the output must not be the sole basis for fees, penalties or compliance decisions.
:::

## What this solution does

One trigger (a button, an HTTP call, or motion in the frame) makes the device take **one image**, classify the item into one of **eight material classes**, look up the **Chinese four-way household-waste category** from that class, and publish one MQTT message. An asynchronous callback receives the four-way result at the same time, so a flap, relay or lane indicator can act on it.

- **One head, two levels of answer.** The model predicts eight classes: paper, cardboard, glass, metal, plastic, textile, organic, residual. The four-way category (recyclable / kitchen waste / hazardous / other) is a table lookup on the eight-class argmax, so adapting to a local rule means editing the table, not retraining.
- **One trigger, one capture.** Button, HTTP or motion detection with an 800 ms debounce; a trigger that arrives while the previous one is still running is merged, not queued. A continuous mode also exists; it is rate-limited and publishes only after three consecutive frames agree on top-1.
- **Payloads are validated before publishing.** Every payload passes the event schema, plus two rules JSON Schema cannot express: `category` must equal `top3[0]`, and `confidence` must equal `top3[0].confidence`. Failures are counted and dropped.
- **An optional open-vocabulary track.** A SigLIP 2 vision tower scored against constant text prototypes, selected at deploy time with `model.track: open_vocab`. It adds classes without retraining, answers in Chinese or English from the same image embedding, and yields a "not in my vocabulary" score.
- **Actuator interface with no pin binding.** The runtime calls back with a category; which pin it drives is decided by integration code, so one build runs on boards with different headers.

Image bytes never leave the device; the payload carries only a path or an object-store URI.

- Packaging source and deployment guide: [sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Ready to run on the device</h3>
                <p>Install the application package and it runs; a first deploy takes about 35 minutes. Measured on reComputer R2000 series (R2035-12, Hailo-8) over 7417 validation images: material top-1 0.8889, four-way top-1 0.9507 (see performance and measured data).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source</h3>
                <p>Runtime code is Apache-2.0; the training data, TrashNet (MIT) and GC3 (CC BY 4.0), both permit redistribution.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Your own camera, systems and actuators</h3>
                <p>USB / RTSP camera or a file source; results go out over MQTT, `POST /trigger` can be called by a kiosk or PLC gateway, and a GPIO callback drives a flap or indicator.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Runs entirely on site</h3>
                <p>Capture, classification, lookup and the MQTT broker all run on the host; images stay on the device and the main chain needs no internet access.</p>
            </div>
        </li>
    </ul>
</div>

### What it looks like running on a device

Below is the drop-area framing seen by a reCamera PoE after the `waste-sorting` application package was installed. Nothing is placed in front of the camera; the image is a framing reference only.

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="reCamera PoE framing of the drop area, with nothing placed in front of it"/>
</div>

Classification results go straight to MQTT. Below are consecutive events captured by subscribing to `waste/recamera-cvi/results`:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Consecutive classification events on waste/recamera-cvi/results, each carrying the eight-class result, the four-way mapping and inference time"/>
</div>

## What hardware you need

Three things at the drop point: a trigger, a camera, a host. With reCamera or reCamera Pro, the camera and the sorting host are the same device.

**① Trigger** — a button wired to the host, `POST /trigger` on port 8080, or motion in the frame. All three share one 800 ms debounce, produce the same event, and are told apart by the `trigger` field in the payload.

**② Camera** — any USB, RTSP or file source looking down on the drop area; any model will do. A single item must take up a usable share of the frame, with only one item in view. Items that are too small reduce classification quality, and none of the numbers under performance and measured data come from such framing.

**③ Sorting host** — decides which model paths you can use.

| | Sorting host | Accelerator | Classifier as deployed | Open-vocabulary track | When to choose it |
|---|---|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Jetson Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Entry AI host | Orin GPU | EfficientNet-Lite0 224², TensorRT FP16 | Not offered | One drop point, baseline classifier only |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Jetson Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>High-performance AI host | Orin GPU | EfficientNet-Lite0 224², TensorRT FP16 | Offered (the only device class that offers it) | You expect to add item classes later without retraining |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Fanless industrial box | Hailo-8 | EfficientNet-Lite0 224², INT8 HEF | Not offered | A camera is already there and the host goes in a cabinet; the HEF is compiled off-device and downloaded at deploy time, and the Hailo runtime versions must match |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Cost-effective edge board | RK3588 NPU | EfficientNet-Lite0 224², INT8 | Not offered | A camera is already there, lowest hardware cost, host in the bin housing or a kiosk; the model is converted off-device and no engine is built on the device |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002 (SG2002)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>All-in-one smart camera | The camera's own TPU | EfficientNet-Lite0 224², BF16 | Not offered | No camera at the drop point yet, lowest hardware cost; the classifier runs on the camera, no separate host |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/0/100021896main_4.jpg" alt="reCamera Pro" width="110" /> | [reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-p-5984.html)<br/>High-performance smart camera | The camera's own NPU (RV1126B) | EfficientNet-Lite0 224², INT8 | Not offered | No camera yet and cost is not the first concern; the classifier runs on the camera |

Both reComputer models come in a fanless industrial enclosure (reComputer Industrial J3011 / J4012) with the same module and runtime, for a control cabinet or outdoor housing.

The open-vocabulary column comes from the resource notes in the device catalogue: the SigLIP 2 vision tower is a 371 MB ONNX at p50 66.93 ms per image as a CPU onnxruntime offline baseline and needs an accelerator.

**④ Everything else** — an MQTT consumer (the package runs a local broker on 1883); if the design has a flap or lane indicator, the driver hardware plus integration code for the GPIO callback, which ships bound to no pin. The main chain needs no internet access.

### Negative Selection Boundaries

- **Zero-Shot Open Vocabulary**: If you need to add new waste categories dynamically without retraining, do not choose J3011 (track not supported); choose J4012 (16GB).
- **Conveyor Motion Blur**: If the conveyor moves faster than 1.5 m/s, rolling shutter cameras produce motion blur; use industrial global-shutter cameras.

## How to deploy on site

Settle the framing and trigger first, then install the software. Rated **intermediate**, about **35 minutes** for a first deploy.

### One: install the hardware, framing and trigger

:::tip[One item per image, large enough]
There is no detector in this chain. Two items in one frame produce one answer, and which item it describes is undefined; items that take up too small a share of the frame classify worse. Mount the camera looking down on the drop area so a single item fills a usable share of the frame, and decide before deployment whether the trigger is a button, HTTP or motion detection.
:::

### Two: install the software

Per-device steps are on the reference design page, where picking a configuration for your site also gives you the matching application package to download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

There are five presets: `Camera + reComputer J30 / J40 (Orin)`, `Camera + reComputer R2000 series (R2035-12, Hailo-8)`, `Camera + reComputer RK3588`, `reCamera (SG2002)` and `reCamera Pro`. The steps below cover the Orin and Hailo-8 presets; the steps for the other three are on the deployment page.

1. **Pick a preset and a host.** `Camera + reComputer J30 / J40 (Orin)` or `Camera + reComputer R2000 series (R2035-12, Hailo-8)`.
2. **Deploy the waste-sorting runtime** (required). On Orin the TensorRT engine is built on the device during deployment (68 s on J4012); the engine is tied to the GPU architecture and TensorRT version and cannot be precompiled for distribution. On Hailo the deployment steps check three Hailo ABI gates and then download the HEF.
3. **Watch live classification** (optional). The local panel on port 8080 has an MJPEG preview, health counters and the top-3 of recent results. Confirm the framing here before wiring anything.
4. **Wire the trigger and confirm one classification** (required). One button press, HTTP call or motion event should produce exactly one MQTT message on `waste/<stream-id>/results`, with `category` and `confidence` matching `top3[0]`.
5. **Switch to the open-vocabulary track** (optional, Orin only). Set `model.track: open_vocab` at deploy time.

## What interfaces are available

The sorting host exposes two interfaces and one in-process callback, all served by the host itself.

- **Operations or record-keeping system** — subscribe to `waste/<stream-id>/results` on port 1883. One JSON per classification.
- **Kiosk UI, PLC gateway or test script** — `POST /trigger` on port 8080 triggers one capture and classification; `/events` returns recent results with their top-3.
- **Flap, relay or lane indicator** — an asynchronous GPIO callback carries the four-way result. It is bound to no pin; the binding code is integration work.

### Full interface table

| Type | Where | Content | Notes |
|---|---|---|---|
| `mqtt` | 1883, `waste/<stream-id>/results` | `type`, `version`, `taxonomy_version`, `device`, `stream_id`, `frame_id`, `timestamp`, `trigger`, `inference_time_ms`, `pipeline_ms`, `category` (`class_id`, `class_name`, `china_category`, `china_category_zh`), `confidence`, `top3[]`, `image_ref`, `model` (name, backbone, input, `onnx_sha256`, accelerator) | One per classification. Validated against the event schema before publishing |
| `http` | 8080, `/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` fires one capture and classification (trigger recorded as `http`); live MJPEG; a health endpoint with inference time, trigger and debounce counts and MQTT counts; recent results with top-3 | Local panel, no auth |
| GPIO callback | In process | Four-way result, asynchronously | `actuator.enabled` defaults to false. Bound to no pin |

Two things to watch when reading fields:

- **The image is never in the payload.** `image_ref.kind` is `none`, `local` or `object_store`. Base64 image bytes in a payload violate the contract and are rejected before publishing.
- **`category` always equals `top3[0]`, and `confidence` always equals `top3[0].confidence`.** Both are checked before publishing and failing payloads are counted and dropped, so consumers do not need to reconcile them.

```json
{
  "type": "waste_classification",
  "version": "1.0.0",
  "device": "waste-sorting-station-01",
  "stream_id": "cam_inlet_01",
  "timestamp": 1729000000.789,
  "trigger": "sensor",
  "inference_time_ms": 3.53,
  "pipeline_ms": 4.12,
  "category": {
    "class_id": 3,
    "class_name": "plastic_bottle",
    "china_category": "recyclable",
    "china_category_zh": "可回收物"
  },
  "confidence": 0.942,
  "top3": [
    {"class_id": 3, "class_name": "plastic_bottle", "confidence": 0.942},
    {"class_id": 5, "class_name": "glass_bottle", "confidence": 0.038},
    {"class_id": 1, "class_name": "metal_can", "confidence": 0.012}
  ]
}
```

The bundled MQTT broker allows anonymous connections for local commissioning; use a broker with credentials in a production deployment.

## Performance and measured data {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_waste_sorting</font></span></strong>
    </a>
</div><br />

### Measured on device: baseline classifier (EfficientNet-Lite0)

| Device | Precision | Validation images | Material top-1 | Four-way top-1 | Difference from CPU fp32 on the same images | Inference p50 / p95 |
|---|---|---:|---:|---:|---:|---|
| reComputer R2000 series (R2035-12) + Hailo-8 | INT8 (uint8-input HEF) | 7417 | **0.8889** | **0.9507** | +0.12 pp | 3.166 ms / 3.249 ms |
| reComputer RK3588 series | INT8 (calib256+mmse) | 7417 | **0.8882** | 0.9507 | +0.05 pp | 3.165 ms / 3.857 ms |
| reComputer RK3588 series | fp16 | 7417 | 0.8882 | 0.9505 | +0.05 pp | 5.962 ms / 12.566 ms |
| reCamera Pro (RV1126B NPU) | INT8 | 1060 | 0.8764 | 0.9566 | +0.19 pp | 5.824 ms / 6.047 ms |
| reCamera (SG2002 TPU) | BF16 | 1060 | 0.8792 | 0.9566 | +0.47 pp | 24.276 ms / 24.323 ms |

Conditions: inference only, excluding capture and preprocessing, single stream back to back; preprocessing is shortest side 256 → centre crop 224, with normalisation baked into the model so the device takes uint8. 7417 images is the full validation set; 1060 images is every seventh image, a subset on which CPU fp32 top-1 is 0.8745 (0.8877 on the full set), so compare top-1 across image sets through the "difference from CPU fp32" column. reCamera Pro was measured with the camera's built-in application stopped; reCamera peaks at 11.6 MB resident memory.

- Both NPU hosts have the same p50 (3.2 ms); on Hailo-8 p95 is only 0.08 ms above p50, on RK3588 INT8 it is 0.69 ms above.
- On RK3588, INT8 and fp16 give the same material top-1 and INT8 is 1.9× faster. INT8 uses 252 calibration images, the `mmse` algorithm and per-channel quantisation; on a 50-image sample, `normal` agreed with the CPU on 0.90 and `mmse` on 0.98–1.00. `mmse` conversion takes 40–90× as long as `normal` (17.3 minutes vs 11.5 seconds at 256 calibration images), paid once at conversion.
- The Hailo-8 HEF is compiled with DFC 3.31.0 at `optimization_level=2` (quantisation-aware fine-tuning); the earlier `optimization_level=1` HEF was 2.40 pp below CPU fp32, and the gap disappears with the current HEF.
- On reCamera Pro, INT8 is 2.9× faster than fp16 and 4.2× faster than reCamera; INT8, fp16 and CPU fp32 are within 0.2 pp of each other on the same 1060 images.

Reproduce: `evaluation/runs/2026-09-07-hailo-quant-tuning`, `evaluation/runs/2026-09-07-devices/results-rk3588.md`, `evaluation/runs/2026-09-06-m1c-rk3588-radxa`, `evaluation/runs/2026-09-07-recamera-pro`, `evaluation/runs/2026-09-07-devices/results-recamera-sg2002.md`

### Measured on device: Orin engine build and trigger to answer

| Item | Result | Device | Conditions |
|---|---|---|---|
| TensorRT engine build | 68 s / 72 s | reComputer J40 series (J4012) / J30 series (J3011) | FP16, built on the device at deploy time |
| Trigger to answer | **4.122 ms** | reComputer J40 series (J4012) | `pipeline_ms` in the MQTT event for one `POST /trigger`, of which inference is 3.533 ms |
| Inference p50 / p95 | 0.992 ms / 1.265 ms | reComputer J40 series (J4012) | The deployed engine, 1060-image validation subset, single stream back to back |
| Material top-1 | 0.8755, 99.91% agreement with the CPU | reComputer J40 series (J4012); J30 series (J3011) re-measured bit-identical | Same 1060-image subset, CPU fp32 0.8745 |

Reproduce: `evaluation/runs/2026-09-08-orin-nx-acceptance`, `evaluation/runs/2026-09-08-orin-nx-acceptance-2`, `evaluation/runs/2026-09-08-orin-nano-acceptance`

### Baseline classifier: CPU reference accuracy

| Metric | Value | Conditions |
|---|---:|---|
| Material top-1 (8 classes) | **0.8877** | val, 7417 images; onnxruntime 1.25.1 CPU; ONNX `e9f9e847…`, 13,477,056 B |
| Material top-5 | 0.9833 | Same |
| China four-way top-1 | **0.9500** | Same; lookup on the eight-class argmax |
| macro-F1 (7 classes with samples) | 0.8511 | `textile` excluded — zero samples |
| Material top-1, held-out test | 0.8802 | test, 7290 images |
| Per-image inference latency, CPU | mean 16.796 ms / p50 14.724 ms / p95 28.718 ms | `session.run` only, CPU offline baseline, batch 1, not a device figure |
| Images with confidence below 0.5 | 318 (4.3%) | val |
| ORT PTQ INT8 vs fp32 agreement | 0.965 | 200 val images, per-channel + MinMax, no collapse |

Four-way top-1 (0.9500) is higher than material top-1 (0.8877) because confusion among glass, metal and plastic all lands in recyclables; four-way alone overstates how well the model tells materials apart.

Reproduce: `evaluation/runs/2026-09-06-m1c-cpu`

### Open-vocabulary track: SigLIP 2 ViT-B/16

| Metric | Value | Conditions |
|---|---:|---|
| Material top-1 (8 classes) | 0.8501 | val, 7417 images; English prompt set `waste8-en/v1`, template `t02`, 16-shot α=0.8, temperature 0.0075 |
| Material top-5 | 0.9987 | Same |
| China four-way top-1 | 0.9393 | Same; hierarchical path (eight classes, then mapping) |
| macro-F1 (7 classes) | 0.7460 | Same |
| ECE (15 bins) | 0.0221 | Same |
| Open-set AUROC | 0.7538 | Mean over the 7 classes with samples, leave-one-class-out, score = `1 - max softmax` |
| Chinese–English agreement (same image) | material 0.8698 / four-way 0.9143 | One visual embedding, three prototype banks |
| Material top-1, held-out test | 0.8620 | test, 7290 images |
| Per-image inference latency | p50 66.93 ms / p95 91.62 ms | CPU offline baseline, batch 1, vision tower only, not a device figure |

Against the baseline (same split):

| Metric | Baseline (MobileNetV3-Small) | Open vocabulary (SigLIP2-B/16) |
|---|---:|---:|
| Material top-1, val | **0.8792** | 0.8501 |
| Material top-1, test | **0.8807** | 0.8620 |
| China four-way top-1, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| Open-set AUROC | None (a closed-set head cannot drop a class without retraining) | **0.7538** |
| Chinese–English agreement | No text side | **0.8698 / 0.9143** |
| Zero-shot new classes | Retraining required | **Edit the prompt** |
| CPU p50 latency | **1.57 ms** | 66.93 ms |

The baseline in this comparison is the superseded MobileNetV3-Small. The shipped EfficientNet-Lite0 reaches val top-1 0.8877 on this split at a CPU p50 of about 14.7 ms, which shrinks the latency ratio from 40× to 4–5×.

Reproduce: `evaluation/runs/2026-09-05-w1-cpu`

The SigLIP 2 vision tower measured on Rockchip NPUs (fp16, rknn-toolkit2 / librknnrt 2.3.2; the RK3588 model is a 191 MB `.rknn`):

| Device | Per-image p50 / p95 | Embedding cosine vs CPU, mean / min |
|---|---|---|
| reComputer RK3588 series | 169.4 ms / 170.5 ms | 0.999617 / 0.998841 |
| reComputer RK3576 series | 152.51 ms / 176.59 ms | 0.99965 / 0.99900 |

Reproduce: `evaluation/runs/2026-09-06-m1c-rk3588-radxa`, `evaluation/runs/2026-09-06-rk3576-cat`

### Deployment footprint

| Item | Size |
|---|---|
| Baseline ONNX (`efficientnet_lite0_waste8.onnx`) | 13,477,056 B |
| SigLIP 2 vision tower ONNX (`siglip2_vision_224.onnx`) | 371,695,898 B |
| Prototype banks + calibration report | about 155 KB total |

### Runtimes and key parameters

| Device | Model | Precision | Runtime | How the model reaches the device |
|---|---|---|---|---|
| reComputer J30 / J40 series | EfficientNet-Lite0 224² | FP16 | TensorRT | Engine built on the device at deploy time, tied to GPU architecture and TensorRT version; cannot be precompiled for distribution |
| reComputer J40 series (optional open-vocabulary track) | SigLIP 2 ViT-B/16 vision tower + constant text prototypes | — | — | `model.track: open_vocab` |
| reComputer R2000 series + Hailo-8 | EfficientNet-Lite0 224² | INT8 (uint8 input, normalisation inside the HEF, `optimization_level=2`) | HailoRT 4.21.0 | HEF compiled off-device with DFC 3.31.0, downloaded at deploy time |
| reComputer RK3588 series | EfficientNet-Lite0 224² | INT8 (calib256+mmse) | librknnrt 2.3.2 | Converted off-device with rknn-toolkit2 2.3.2 |
| reCamera Pro | EfficientNet-Lite0 224² | INT8 | Camera NPU (RV1126B), RKNN | Converted off-device with rknn-toolkit2 2.3.2, installed on the camera at deploy time |
| reCamera (SG2002) | EfficientNet-Lite0 224² | BF16 | Camera TPU, cvimodel | Converted off-device with TPU-MLIR, installed on the camera at deploy time |

- Trigger debounce: **800 ms**; a trigger arriving while the previous one is still running is merged, not queued
- Continuous mode: publishes only when top-1 is the same for **3 frames** in a row; trigger mode gives one answer per shot
- `actuator.enabled`: default `false`; the GPIO callback is not bound to any pin

### Known degradation

- `textile` has zero training and evaluation samples: neither source dataset has a fabric class. The eighth logit is kept (ONNX output stays `1×8`), but the model has never predicted it, and every table reports `n/a` for it.
- No material class maps to `hazardous`; it stays in the enum for schema stability and the current build never emits it.
- `organic` makes up 48.9% of train and 47.1% of val; its recall (0.9791) is far above the other classes (0.70–0.88), and the model pushes uncertain items toward it.
- `residual` has only 20 val samples; the open-vocabulary track reaches 0.2754 precision and leave-one-out AUROC 0.5795 on it, close to chance.
- On the open-vocabulary track, predicting the four-way class directly from Chinese prompts gives only 0.8478; the hierarchical path (eight classes, then mapping) gives 0.9393.
- The superseded MobileNetV3-Small collapses under INT8 on all three edge chains: Hailo DFC emulator agreement 0.115, reComputer RK3576 series 0.10, reComputer RK3588 series 0.22 (fp16 0.98–1.00); this is why the baseline moved to EfficientNet-Lite0. RK3588 INT8 results do not carry over to RK3576.
- The SigLIP 2 vision tower fails INT8 quantisation for Hailo-8 (`hailo optimize` errors at layer `ne_activation_mul_and_add78`), so there is no HEF; the open-vocabulary track does not run on the reComputer R2000 series.
- Both datasets are single-item photos (TrashNet on a white board, GC3 off-centre and often occluded), with no wet, crushed, stacked, backlit or partly bagged waste; accuracy at a live drop-off point will be lower than the figures in the tables.

## Data and asset sources

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet), **MIT License, Copyright (c) 2017 Gary Thung**. Based on two first-party sources: the repository's `LICENSE` file at commit `6fa2b87`, and the `license` field of the official HuggingFace dataset card. MIT requires the copyright and licence notice to be kept and has no share-alike clause.
- **Garbage Classification 3 — Material Identification (Roboflow Universe)** — **CC BY 4.0**, stated verbatim in the `README.dataset.txt` shipped with the export. The project path on Roboflow Universe is `material-identification/garbage-classification-3`.
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224), revision `75de2d55…`, Apache-2.0. Used by the optional open-vocabulary track only.
- **MobileNetV3-Small ImageNet starting weights** (torchvision) — BSD-3-Clause.
- **Upstream runtime code** — Apache-2.0.
- **Architecture diagram** — drawn from the package's device catalogue and output interfaces; contains no dataset images.

External material derived from these datasets must use the following attribution string verbatim:

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**No dataset-derived image is committed to this package.** Both licences permit redistribution.
