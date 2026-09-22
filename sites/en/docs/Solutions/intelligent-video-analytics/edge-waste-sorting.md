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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Usage notice]
This is a **demo package, and it is not a compliance or regulatory classification system**. The Chinese four-way mapping is a table this project maintains, not an authority's certified ruling, and municipal definitions differ between cities — no output here should be the sole basis for a charging, penalty or compliance decision. **Nothing in this package has run on the target hardware.** Every accuracy figure comes from onnxruntime on an Apple M4 CPU; the Hailo-8 figures come from the Dataflow Compiler emulator, not from Hailo-8 silicon; the only real-device measurements are RK3588 runtime parity on an RK3588 development board, which has no deployment package here. **No preset carries `verified: [hardware]`.**
:::

## What this solution does

A trigger — a button, an HTTP call, or motion in the frame — makes the device capture **one image**, classify the item in it into one of **eight material classes**, look up the **Chinese four-way disposal category** from that class, and publish a single MQTT message. In parallel an async callback receives the four-way category so a flap, relay or lane indicator can act on it.

- **Two layers of answer from one head.** The model predicts paper, cardboard, glass, metal, plastic, textile, organic and residual. The four-way category (可回收物 / 厨余垃圾 / 有害垃圾 / 其他垃圾) is a **lookup table on top of the eight-class argmax, not a second head**, so adapting to a local authority's rules is a table edit rather than a retrain.
- **Trigger-on-demand, not a video stream.** Button, HTTP or motion, with an 800 ms debounce; a trigger arriving while one is in flight is merged rather than queued. A continuous mode exists, rate-limited, and it requires three identical top-1 predictions in a row before publishing.
- **A contract that is checked, not just documented.** Every payload is validated against the event schema before publishing, including the two rules a JSON Schema cannot express: `category` must equal `top3[0]`, and `confidence` must equal `top3[0].confidence`. A payload that fails is counted and dropped.
- **An optional open-vocabulary track.** A SigLIP 2 vision tower scored against constant text prototypes, selected per deployment with `model.track: open_vocab`. It adds classes without retraining, answers in Chinese or English from the same image embedding, and can score "this is not in my vocabulary".
- **An actuator interface with no pin binding.** The runtime calls back with a category; where that goes is integration work, which is why the same build runs on boards with different headers.

The image bytes never leave the device — the payload carries a path or an object-store URI only.

- Packaging source and deployment guide: [sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Material top-1 0.8877, Chinese four-way top-1 0.9500</h3>
                <p>On a deduplicated 7417-image validation split, measured with onnxruntime on an Apple M4 CPU. The full breakdown is in the appendix.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>The baseline is EfficientNet-Lite0, not MobileNetV3-Small</h3>
                <p>The original baseline collapsed under INT8 on all three edge chains tried; Lite0 does not, and it is marginally more accurate on the same split.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>One item per image</h3>
                <p>There is no detector in this chain. Two items in one frame produce one answer, and which one it describes is undefined.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Nothing has been measured on Jetson or Hailo-8 silicon</h3>
                <p>The Jetson preset is the only one with a model file, and no engine has ever been built on a Jetson; the Hailo preset carries a pending model badge.</p>
            </div>
        </li>
    </ul>
</div>

### What it looks like running on a device

Below is the drop area as seen by a reCamera PoE with the `waste-sorting` package installed. Nothing was placed in front of the camera on this run — it is a framing reference, not a classification result.

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="reCamera PoE framing of the drop area, with nothing placed in front of it on this run"/>
</div>

Results do not go into the picture; they go onto MQTT. Below are consecutive events captured while subscribed to `waste/recamera-cvi/results`:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Consecutive classification events on waste/recamera-cvi/results, each carrying the eight-class result, the four-way mapping and inference time"/>
</div>

<!-- TODO image: the drop point as installed (camera mounted above the bin) — needs a field shoot -->
<!-- TODO image: the local panel on 8080, MJPEG preview and top-3 list — needs a screenshot from a deployed device -->

### What the demo actually shows

The only asset shipped in this package's gallery is a schematic of the data path drawn for the solution. **No dataset-derived image is committed anywhere in the package** — both source datasets permit redistribution, but the upstream repository keeps every dataset-derived image out of version control and this package follows the same rule. `assets/models/` holds checksum manifests only; `SHA256SUMS.hef` is deliberately empty because no HEF ships with the package.

## What hardware you need

Three things at the bin: something that fires the trigger, a camera, and one host.

**① Trigger** — a button wired to the host, an HTTP call to `POST /trigger` on port 8080, or motion in the frame. All three share the same 800 ms debounce and produce the same event, distinguished by the `trigger` field in the payload.

**② Camera** — any USB, RTSP or file source looking down into the drop area. The design constrains the framing, not the camera model: one item must fill a meaningful part of the frame, and there must be only one item in it. Framing that leaves the item small degrades the classification, and none of the figures on this page were measured under such framing.

**③ Sorting host** — this is what decides which model paths are available to you, and most of the cost.

| Sorting host | Accelerator | Classifier as deployed | Open-vocabulary track | When to choose it |
|---|---|---|---|---|
| reComputer J3011 (Jetson Orin Nano 8GB) | Orin GPU | EfficientNet-Lite0 224², TensorRT FP16 | Not sized for this module | One drop-off point on the baseline classifier, lowest-cost Seeed host with a model file |
| reComputer J4012 (Jetson Orin NX 16GB) | Orin GPU | EfficientNet-Lite0 224², TensorRT FP16 | Offered — the only device class where it is | You expect to add item types later without retraining |
| reComputer R2000 series (Hailo-8) | Hailo-8 | EfficientNet-Lite0 224², INT8 HEF | No | You are preparing Hailo-8 hardware for this workload; the preset badge is `HEF pending` |

Both reComputer models exist in a fanless industrial enclosure (reComputer Industrial J3011 / J4012) with the same module and the same runtime, for cabinet or outdoor mounting.

**No figure on this page was taken on any of these boards.** The Jetson rows describe what the package ships, not what has been measured. The open-vocabulary column is a resource statement from the package's device catalogue: the SigLIP 2 vision tower is a 371 MB ONNX at 66.93 ms p50 per image on a CPU, so it needs an accelerator, and the Orin Nano 8GB module has not been sized for it.

**④ Everything else** — an MQTT consumer (the package brings up its own local broker on 1883), and, if a flap or lane indicator is in scope, the driver hardware plus the integration code for the GPIO callback, which ships with no pin binding. Nothing in the main chain needs internet access.

## How to deploy on site

Two phases: fix the optics and the trigger, then install the software. The deployment is rated **intermediate**, about **35 minutes** for a first install.

### One: frame the drop area and choose the trigger

:::tip[One item per image, and it has to be big in the frame]
There is no detector. Two items in one shot produce one answer and which one it describes is undefined, and an item that occupies a small part of the frame classifies worse — none of the measurements were taken under such framing. Mount the camera looking down into the drop area so a single item fills a meaningful part of the picture, and decide before deployment whether the trigger is a button, an HTTP call or motion.
:::

### Two: install the software

The per-device steps are on the reference design page, where answering a few questions about the site also gives you the matching application package to download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

The outline is the same on both presets:

1. **Pick a preset and a host.** `Camera + reComputer J30 / J40 (Orin)` or `Camera + reComputer R2000 series (Hailo-8)`.
2. **Deploy the waste-sorting runtime** (required). On the Orin path this builds the TensorRT engine on the device during deployment — an engine is tied to the exact GPU architecture and TensorRT version and cannot be shipped prebuilt. On the Hailo path the deploy step checks the three Hailo ABI gates and then **stops at the missing model file**: this preset prepares the board, it does not deliver a running classifier today.
3. **Watch the live classification** (optional). The local panel on port 8080 carries the MJPEG preview, the health counters and the recent events with their top-3 — this is where you confirm the framing before wiring anything.
4. **Wire the trigger and confirm one classification** (required). One button press, HTTP call or motion event must produce exactly one MQTT message on `waste/<stream-id>/results` whose `category` and `confidence` match `top3[0]`.
5. **Switch to the open-vocabulary track** (optional, Orin only) — covered further down.

## How to connect it to your own system

Data leaves the sorting host on two interfaces plus an in-process callback, with one optional MQTT side channel. All of them are served by the host itself.

- **An operations or record system** — subscribe to `waste/<stream-id>/results` on port 1883. One JSON message per classification, never one per class.
- **A kiosk UI, a PLC gateway or a test script** — `POST /trigger` on port 8080 fires one capture-and-classify; `/events` returns the recent results with their top-3.
- **A flap, relay or lane indicator** — the async GPIO callback carries the four-way category. It has no pin binding; supplying that binding is integration work.

### Full interface table

| Type | Where | Content | Notes |
|---|---|---|---|
| `mqtt` | 1883, `waste/<stream-id>/results` | `type`, `version`, `taxonomy_version`, `device`, `stream_id`, `frame_id`, `timestamp`, `trigger`, `inference_time_ms`, `pipeline_ms`, `category` (`class_id`, `class_name`, `china_category`, `china_category_zh`), `confidence`, `top3[]`, `image_ref`, `model` (name, backbone, input, `onnx_sha256`, accelerator) | One message per classification. Validated against the event schema before publishing |
| `http` | 8080, `/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` fires one capture-and-classify (trigger source `http`); MJPEG live view; health with inference time, trigger and debounce counters and MQTT counters; recent results with top-3 | Local panel, no auth |
| GPIO callback | in-process | The four-way category, asynchronously | `actuator.enabled` defaults to false. No pin binding |

Three field semantics that are easy to misuse:

- **The image is never in the payload.** `image_ref.kind` is `none`, `local` or `object_store`. Base64 image bytes in a payload are a contract violation and are rejected before publishing.
- **`category` always equals `top3[0]`, and `confidence` always equals `top3[0].confidence`.** Both are checked before publishing; a payload that fails the contract is counted and dropped rather than sent, so a consumer never has to reconcile the two.

The bundled MQTT broker allows anonymous connections — that is for local commissioning. A deployment that leaves the bench needs a broker with credentials.

## For engineers: implementation details

### Two tracks, one taxonomy

| Track | Model | Input | Size | Where it runs |
|---|---|---|---|---|
| Baseline (shipped) | EfficientNet-Lite0 (`m1c`), 8-class head | 224² | 13,477,056 B ONNX | Both presets; TensorRT FP16 on Orin, INT8 HEF on Hailo-8 |
| Baseline (superseded) | MobileNetV3-Small (`m1b`) | 224² | 6,118,606 B ONNX | Kept only as the INT8-collapse contrast |
| Open-vocabulary (optional) | SigLIP 2 ViT-B/16 vision tower + constant text prototypes | 224² | 371,695,898 B ONNX | Orin NX 16GB only, `model.track: open_vocab` |

Prototype banks plus the calibration report add about 155 KB. The eight-class head feeds a lookup table for the four-way category; the table is the extension point, not the head.

### Why the baseline changed, and what is still unproven

MobileNetV3-Small's INT8 graph collapsed on **every** edge chain tried — Hailo DFC emulator agreement 0.115, RK3576 0.10, RK3588 0.22, against roughly 0.98–1.00 for fp16 on the same chains. ORT post-training quantisation reproduced the same collapse, which rules out a compiler-specific bug: this is whole-network degradation, not a localised op issue.

A concrete defect exists in the training recipe: `AdamW(model.parameters(), weight_decay=1e-4)` applies weight decay to BatchNorm gamma and bias, and 4 of the 34 `BatchNorm2d` layers in the m1b checkpoint have `running_var` / `|gamma|` degraded to float32 denormal magnitude, at the same layers where the INT8 accuracy cliff appears. **This is not a proven root cause.** EfficientNet-Lite0 has the same weight-decay setting and the same kind of weight outliers (max `|w|` 35.70 against m1b's 52.35, only 32% lower) yet does not collapse — a drop that small does not explain a swing from 0.115 to 0.89+ agreement on its own. The more likely reading is that SE-gating and hard-swish are structurally more INT8-sensitive and the weight-decay defect amplifies that sensitivity rather than causing it. No ablation has been run to confirm either reading.

The cost of the swap is CPU-only: mean inference time rose from 1.886 ms to 16.796 ms, about 9×, because Lite0 has more FLOPs than MobileNetV3-Small. **On the NPUs actually tested the penalty does not carry over** — see the RK3588 table below, where Lite0 INT8 runs at 3.803 ms p50 against m1b's 4.70 ms.

### Trigger, debounce and the continuous mode

One classification per trigger. The 800 ms debounce merges a trigger that arrives while one is in flight rather than queueing it, so a rapid double press produces one answer, not two. The continuous mode is rate-limited and requires **three identical top-1 predictions in a row** before it publishes; trigger mode has no such smoothing, and a single shot is a single answer.

### Open-vocabulary track: two findings that shape how it is deployed

- **Use the hierarchical path, not direct four-way prediction.** English eight-class predictions mapped to the four categories score 0.9393; Chinese prompts predicting the four categories directly score 0.8478. "Recyclable" is not a visual concept; "glass bottle" is.
- **`residual` is the weakest thing in the setup.** Its leave-one-out AUROC is 0.5795, near chance: remove "general waste" from the vocabulary and some material word always catches those items with high confidence. It is a fallback definition, not a visual concept.

### Scope of the numbers above

- **Baseline and open-vocabulary accuracy and CPU latency** — onnxruntime 1.25.1, Apple M4 CPU, batch 1.
- **Baseline INT8 for Hailo-8** — built with DFC 3.31.0 / HailoRT 4.21.0, `--hw-arch hailo8`. The shipped `efficientnet_lite0_waste8_u8.hef` is quantised at `optimization_level=2` (quantisation-aware distillation finetune, 8 epochs, bias correction on) over 2048 class-balanced uint8 training crops, and compiling it needs a GPU visible inside the DFC container; it was measured on a Hailo-8 over the full 7417-image val set. The same graph at `optimization_level=1` scores 2.40 points below fp32 and is not deployed. The emulator comparison on 200 validation images (agreement 0.890) came from the earlier `efficientnet_lite0_waste8.hef` packaging.
- **Open-vocabulary SigLIP 2 tower** — `hailo parser` passes end to end, but `hailo optimize` (INT8 PTQ, 256 calibration images, `optimization_level=1`) fails at layer `ne_activation_mul_and_add78`, so there is no HEF for it.
- **Baseline fp16 and INT8 on RK3588** — an RK3588 development board, librknnrt 2.3.2, 50 validation images. No deployment package exists for that board.
- **Baseline on RK3576** — an RK3576 development board, m1b only; Lite0 has not been converted for RK3576.
- **Field accuracy** — both datasets are single-item photographs (TrashNet on a white poster board, GC3 with objects off-centre and often occluded), so collect a field set from your own bin and re-measure on it.

## Appendix: measured data {#measured-data}

Skip this section if you only need to deploy. **Most figures here are onnxruntime on an Apple M4 CPU**, and each table states where its numbers came from. Two classifiers were measured on the **same split**, same images, same 224² input, same post-processing, on the same machine.

### Baseline classifier — EfficientNet-Lite0 (m1c, shipped)

| Metric | Value | Conditions |
|---|---:|---|
| Material top-1 (8 classes) | **0.8877** | val, 7417 images; onnxruntime 1.25.1 CPU; ONNX `e9f9e847…`, 13,477,056 B |
| Material top-5 | 0.9833 | same |
| Chinese four-way top-1 | **0.9500** | same; lookup on top of the eight-class argmax |
| macro-F1 (7 classes with samples) | 0.8511 | `textile` excluded — zero samples |
| Material top-1, held-out test | 0.8802 | test, 7290 images, same split as m1b |
| Inference latency, single image, CPU | mean 16.796 ms / p50 14.724 ms / p95 28.718 ms | `session.run` only, Apple M4 CPU, batch 1 |
| Images below 0.5 confidence | 318 (4.3%) | val |
| ORT PTQ INT8 vs fp32 agreement | 0.965 | 200 val images, per-channel + MinMax — not a collapse |

Run directories: `evaluation/runs/2026-09-06-m1c-cpu`, `evaluation/runs/2026-09-06-m1c-int8-diag-quick`.

**Report both top-1 numbers together.** The four-way figure (0.9500) is much higher than the material figure (0.8877) because glass↔metal↔plastic confusion is absorbed — all three map to 可回收物. Quoting only the four-way number overstates what the model knows about materials.

### MobileNetV3-Small (m1b) — superseded, kept as the INT8-collapse contrast

Same split, same images, same CPU.

| Metric | Value | Conditions |
|---|---:|---|
| Material top-1 (8 classes) | 0.8792 | val, 7417 images; ONNX `51c7c0ed…` |
| Material top-5 | 0.9854 | same |
| Chinese four-way top-1 | 0.9519 | same |
| macro-F1 (7 classes with samples) | 0.8292 | `textile` excluded |
| Material top-1, held-out test | 0.8807 | test, 7290 images |
| Inference latency, single image, CPU | mean 1.886 ms / p50 1.769 ms / p95 2.276 ms | `session.run` only, Apple M4 CPU, batch 1 |
| Images below 0.5 confidence | 335 (4.5%) | val |
| **INT8 collapse — Hailo-8 emulator** | top-1 0.15, agreement 0.115 vs CPU/native | 200 val images; fp16 agreement on the same images is 1.000 |
| **INT8 collapse — RK3576 (real hardware)** | agreement 0.10 vs CPU golden | fp16 agreement 0.98 on the same device |
| **INT8 collapse — RK3588 (real hardware)** | agreement 0.22 vs CPU golden | fp16 agreement 0.98 on the same device |

Run directories: `evaluation/runs/2026-09-06-m1b-cpu`, `2026-09-06-m1b-hef`, `2026-09-06-rk3576-cat`, `2026-09-06-rk3588-radxa`.

### Open-vocabulary track — SigLIP 2 ViT-B/16

Same split, same images, same post-processing, same machine.

| Metric | Value | Conditions |
|---|---:|---|
| Material top-1 (8 classes) | 0.8501 | val, 7417 images; English prompt set `waste8-en/v1`, template `t02`, 16-shot α=0.8, temperature 0.0075 |
| Material top-5 | 0.9987 | same |
| Chinese four-way top-1 | 0.9393 | same; hierarchical path (eight classes, then mapped) |
| macro-F1 (7 classes) | 0.7460 | same |
| ECE (15 bins) | 0.0221 | same |
| Open-set AUROC | 0.7538 | mean over the 7 classes with samples, leave-one-class-out, score = `1 - max softmax` |
| Cross-lingual agreement (zh vs en, same image) | 0.8698 material / 0.9143 four-way | one visual embedding, three prototype banks — no preprocessing or sampling noise in this number |
| Material top-1, held-out test | 0.8620 | test, 7290 images; templates, α and temperature never searched on it |
| Inference latency, single image | p50 66.93 ms / p95 91.62 ms | Apple M4 CPU, batch 1, vision tower only |

Run directory: `evaluation/runs/2026-09-05-w1-cpu`.

### Baseline vs open-vocabulary, same split

The baseline column in this comparison is **MobileNetV3-Small**, the model that was baseline when the comparison was run — not the EfficientNet-Lite0 shipped today. Lite0 is marginally more accurate on this split (val 0.8877 against 0.8792), so the accuracy gap does not narrow; the latency multiple does, from 40× against MobileNetV3-Small's CPU p50 to roughly 4–5× against Lite0's own CPU p50 of about 14.7 ms. **Neither track has been re-measured against the other since the baseline swap.**

| Metric | Baseline (MobileNetV3-Small) | Open-vocab (SigLIP2-B/16) |
|---|---:|---:|
| Material top-1, val | **0.8792** | 0.8501 |
| Material top-1, test | **0.8807** | 0.8620 |
| Chinese four-way top-1, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| Open-set AUROC | not possible — a closed-set head cannot drop a class without retraining | **0.7538** |
| Cross-lingual agreement | no text side | **0.8698 / 0.9143** |
| Zero-shot new class | requires a retrain | **prompt edit** |
| CPU p50 latency | **1.57 ms** | 66.93 ms |

Both columns come from the same val/test files, the same 224² input and the same softmax / top-k / mapping code path. The baseline column was recomputed on this split for the comparison; its val top-1 matches the standalone m1b report to the digit.

### Hailo-8 — compiled and INT8-checked on the DFC emulator, **no Hailo-8 hardware**

| Path | Status |
|---|---|
| Baseline EfficientNet-Lite0 (m1c) → HEF | **Compiled successfully, one attempt, no fix needed.** `hailo optimize` and `compiler` both exit 0 on the first try — Lite0 has no Squeeze-Excite branch, so it never hits the `avgpool` shift-range issue m1b needed a model-script fix for. On 200 val images (DFC 3.31.0 / HailoRT 4.21.0 emulator): INT8 vs CPU/native top-1 agreement **0.890**, accuracy against ground truth **0.755** (native/CPU is 0.795 on the same images) — a 4-point drop, not a collapse. Cosine similarity to CPU: mean 0.948, min 0.441. **All from the x86 emulator on the compile host; no Hailo-8 PCIe card was used.** `evaluation/runs/2026-09-06-m1c-hef` |
| Baseline MobileNetV3-Small (m1b) → HEF | Compiled, but INT8 collapses: emulator agreement 0.115, accuracy 0.150 — near the 1/7 random baseline. Superseded for this reason |
| SigLIP 2 vision tower → HEF | `hailo parser` passes end to end with no unsupported op. `hailo optimize` (INT8 PTQ, 256 calibration images, optimization_level=1) **fails** with `NegativeSlopeExponentNonFixable` at layer `ne_activation_mul_and_add78` — "Desired shift is 16.0, but op has only 8 data bits". No optimized HAR, no compiler run, no HEF |

**What "0.89 agreement" does and does not support.** It supports: EfficientNet-Lite0 INT8-quantises without the pattern collapse MobileNetV3-Small showed on the same compile pipeline and the same calibration set, and `hailo optimize` needed no SE-branch workaround. It does **not** support: that the HEF classifies waste correctly on a real Hailo-8 — measure board-level latency, thermal behaviour and accuracy on your own unit. The calibration set (256 images) is also below the ~1024-image threshold the DFC documentation typically recommends, and was reused unchanged from the m1b run rather than resampled for Lite0.

The parse-stage numerical check did pass — the DFC native emulator matches CPU onnxruntime with cosine similarity 1.0 and identical top-1 on all 20 comparison images — so the ONNX→HAR translation introduces no error. That is the half of the question that can be answered without a Hailo-8; the INT8 half cannot. Equally, none of this supports the claim that SigLIP 2 cannot run on a Hailo-8: one attempt was made at one optimization level with one calibration set, and the error message names three possible causes, only one of which (calibration-set normalisation) has been checked and ruled out.

### RK3588 development board — real hardware, baseline INT8 usable

On-device measurement, not an emulator. Converted on `wsl2-local` with rknn-toolkit2 2.3.2, run on an RK3588 development board with librknnrt **2.3.2** (the symlink names it 2.3.0; the in-library version is what matters), 50 val images, `core_mask=AUTO`, per-channel quantisation.

| Model / precision | Latency p50 / p95 (mean) | Agreement with CPU golden | Accuracy vs ground truth | Conditions |
|---|---|---|---|---|
| **EfficientNet-Lite0 (m1c), fp16** | 7.906 ms / 8.129 ms (7.041 ms) | 1.00 | 0.78 | ONNX sha `e9f9e847…`, 50 val images |
| EfficientNet-Lite0 (m1c), int8 calib64+normal | 3.780 ms / 3.984 ms (3.807 ms) | 0.90 | 0.72 | 63-image calibration, `normal` algorithm |
| EfficientNet-Lite0 (m1c), int8 calib64+mmse | 3.785 ms / 3.981 ms (3.808 ms) | 0.98 | 0.78 | 63-image calibration, `mmse` algorithm |
| EfficientNet-Lite0 (m1c), int8 calib256+normal | 3.766 ms / 3.920 ms (3.500 ms) | 0.90 | 0.72 | 252-image calibration, `normal` algorithm |
| **EfficientNet-Lite0 (m1c), int8 calib256+mmse** — recommended | 3.803 ms / 4.003 ms (3.834 ms) | **1.00** | **0.78** | 252-image calibration, `mmse`; matches fp16 on both agreement and accuracy, **52% faster** |
| MobileNetV3-Small (m1b, superseded), fp16 | 4.44 ms / 6.32 ms | 0.98 | — | ONNX sha `aa181dd5…`, contrast only |
| MobileNetV3-Small (m1b, superseded), int8 | 4.70 ms / 11.04 ms | **0.22 — collapsed** | — | 64-image calibration, contrast only |

**Read the m1b contrast rows as runtime parity, not as accuracy.** That run used a MobileNetV3 ONNX with sha256 `aa181dd5…`, which is **not** the m1b file (`51c7c0ed…`) every m1b accuracy figure on this page refers to. The two must not be combined into an accuracy claim.

**Recommended config: `calib256+mmse`.** All four Lite0 INT8 variants land in a 0.90–1.00 agreement band; none collapse. `mmse` is 40–90× slower to convert than `normal` (17.3 min against 11.5 s at 256 calibration images) — a one-time conversion cost, not a runtime cost. m1b's int8 was *slower* than its own fp16 (4.70 ms against 4.44 ms), evidence that its execution never engaged the INT8 fast path. Run directories: `evaluation/runs/2026-09-06-m1c-rk3588-radxa`, `2026-09-06-rk3588-radxa`.

SigLIP 2 vision tower on the same device, unaffected by the m1c change:

| Model / precision | Latency p50 / p95 | Agreement with CPU golden | Conditions |
|---|---|---|---|
| SigLIP 2 vision tower, fp16 | 169.4 ms / 170.5 ms | embedding cosine mean **0.999617**, min 0.998841 | ONNX sha `6f664af0…`, 191 MB `.rknn` |

### RK3576 development board — real hardware, m1b only

| Model / precision | Latency p50 / p95 | Agreement with CPU golden | Conditions |
|---|---|---|---|
| MobileNetV3-Small (m1b), fp16 | 9.49 ms / 12.49 ms | top-1 **98%** (49/50) | `evaluation/runs/2026-09-06-rk3576-cat` |
| MobileNetV3-Small (m1b), int8 | 4.62 ms / 6.68 ms | top-1 **10%** (5/50) — unusable, worse than random | 64-image calibration from train |
| SigLIP 2 vision tower, fp16 | 152.51 ms / 176.59 ms | embedding cosine mean **0.99965**, min 0.99900 | same run |

**EfficientNet-Lite0 has not been converted or run on RK3576.** Do not assume the RK3588 INT8 result carries over: RK3576 and RK3588 are different NPU generations and behaved differently on the same MobileNetV3-Small graph (10% against 22% agreement), so a claim either way would be a guess.

### Platform support

| Platform | Status |
|---|---|
| Jetson Orin (TensorRT) | Deployment package shipped, baseline swapped to the EfficientNet-Lite0 ONNX; **an engine has never been built on any Jetson** |
| reComputer R2000 series | Deployment package shipped; baseline HEF compiled and INT8-checked on the DFC emulator only (agreement 0.890) — **no Hailo-8 hardware has run it**. SigLIP 2 tower still fails INT8 quantisation |
| RK3588 | **Inference parity verified on real hardware, fp16 and INT8 (m1c); no deployment package** — no compose file, no image, no preset. The conversion and the runtime work; the packaging does not exist |
| RK3576 | Inference parity verified on real hardware, fp16 and INT8 — **m1b only, not retested with the current baseline**; no deployment package |
| CPU (onnxruntime) | Every accuracy figure on this page |

### Deployment footprint

| Item | Size |
|---|---|
| Baseline ONNX (`efficientnet_lite0_waste8.onnx`, m1c, current) | 13,477,056 B |
| Baseline ONNX (`mobilenetv3s_waste8.onnx`, m1b, superseded) | 6,118,606 B |
| SigLIP 2 vision tower ONNX (`siglip2_vision_224.onnx`) | 371,695,898 B |
| Prototype banks + calibration report | ~155 KB total |

### Where it degrades, and what the numbers do not cover

- **`textile` has zero training and zero evaluation samples.** Neither source dataset contains a cloth or textile category — the GC3 export has no such label, contrary to a widely repeated secondary description of it. The eighth logit exists and the ONNX output is still `1×8` because the output shape is part of the contract, but nothing has trained or tested it, every table reports `n/a` for that class rather than 0, and the model has never predicted it once.
- **`hazardous` (有害垃圾) has no material class mapped to it.** It is in the enum so the schema stays stable; this build will never emit it.
- **Domain shift.** Both datasets are photographs of single items: TrashNet on a white poster board under daylight or indoor light, GC3 a detection dataset with objects off-centre and often occluded. Neither is a real bin — no wet, crushed, stacked, backlit or partially bagged waste is in the evaluation. **No field set has been collected, so there is no number for how much accuracy drops in a real bin.** Expect it to drop; the size of the drop is unknown.
- **`organic` dominates the data.** 48.9% of the training set and 47.1% of val, because GC3's `BIODEGRADABLE` class alone accounts for 45407 of 74090 original boxes. Its recall (0.9791) is well above every other class (0.70–0.88), and the confusion matrix shows the model pushing uncertain items toward it.
- **`residual` has 20 val samples.** No precision figure for that class should be quoted on its own — the open-vocabulary track's 0.2754 precision there is an artefact of the sample count as much as of the model.
- **Deduplication is why these numbers are accuracy rather than leakage.** GC3 reuses TrashNet source photographs. Grouping is by source batch + origin image + perceptual hash (dhash 8×8, Hamming ≤ 3), unioned into connected components: 430 near-duplicate merges, **183 of them across the two datasets**. Groups move between splits as a unit, and the split asserts that no group and no identical dhash spans two splits.

## Data and asset sources

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet), **MIT License, Copyright (c) 2017 Gary Thung**. Verified against two first-party sources: the repository's own `LICENSE` file at commit `6fa2b87`, and the `license` field of the official HuggingFace dataset card. **Correction on record:** the upstream project's own SPEC and its survey report both record this dataset as CC BY 4.0. That is wrong, and no first-party source states CC BY 4.0. MIT is more permissive — it requires the copyright and licence notice to be retained but imposes no share-alike term.
- **Garbage Classification 3 — Material Identification (Roboflow Universe)** — **CC BY 4.0**, stated verbatim in the export package's own `README.dataset.txt`. Project path `material-identification/garbage-classification-3` on Roboflow Universe.
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224), revision `75de2d55…`, Apache-2.0. Used by the optional open-vocabulary track only.
- **MobileNetV3-Small ImageNet starting weights** (torchvision) — BSD-3-Clause.
- **Upstream runtime code** — Apache-2.0.
- **Architecture diagram** — drawn for this page from the package's own device catalogue and output interfaces. No dataset imagery.

Attribution string, to be used verbatim in outward-facing material derived from these datasets:

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**No dataset-derived image is committed in this package.** Both licences permit redistribution, but the upstream repository keeps every dataset-derived image out of version control — `data/raw`, `data/cls`, `data/crops` and the evaluation overlays are all gitignored — and this package follows the same rule. `assets/models/` holds checksum manifests only.
