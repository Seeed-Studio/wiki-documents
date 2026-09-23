---
description: Supermarket product recognition on the edge — a single-class detector, an embedding gallery that registers a new SKU from photographs instead of a training run, what hardware it needs, how it is deployed, the measured per-board data, and implementation details for engineers
title: 'Edge Product Recognition: Build, Deploy, and Measured Results'
keywords:
  - edge product recognition
  - checkout product recognition without barcode
  - shelf audit empty slot detection
  - SKU registration without retraining
  - FAISS product gallery
  - image retrieval embedding ArcFace
  - YOLOX single class detector
  - DINOv2 embedding INT8
  - RKNN fp16 parity
  - Hailo-8 HEF
  - MQTT
  - RK3588
  - reComputer R2000 series
image: https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png
slug: /solutions/edge-product-recognition
sidebar_position: 6
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Read this first]
In the packaged version (cbbfa60) the upstream does not yet join detection, embedding, gallery lookup and MQTT publishing into one device-side service, so there is no end-to-end counting accuracy, shelf-slot accuracy or soak data here. Recognition results are not a legal measurement and cannot be used as the basis for pricing or a legally binding count.
:::

## What this solution does

A camera watches a checkout belt or a shelf face. Every product in the frame is boxed, cropped, turned into a 512-dimensional vector and looked up in a gallery of registered SKUs. At the checkout the output is a basket (SKU-to-quantity, aggregated by track id so one item passing the camera is counted once); on the shelf it is a slot state (ok, empty, wrong_sku, unknown, aggregated per planogram position). One MQTT message per frame carries the results.

Adding a product in store needs no retraining: photograph the new SKU three to eight times, post the images to the console, and the gallery gains a new immutable version. The detector is single-class and only answers "there is a product here", so it never learns individual products; the embedder is not updated either.

- Selection and deployment: [Reference design page](https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition)
- Upstream repository: not published. The package carries no `intro.links.github`; the code lives in an internal repository at packaging time.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>Add a SKU with 3–8 photos, no retraining</h3>
                <p>Registration creates a new immutable gallery version. Going from one registration image to eight raises top-1 by 28 percentage points (see performance and measured data).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Detection runs on the NPU</h3>
                <p>RKNN fp16 on RK3588 agrees with the CPU reference on 99.85% of boxes at 56.7 ms p50; the Hailo-8 INT8 HEF runs at 9.04 ms p50 with 94.77% agreement.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Your own cameras and store systems</h3>
                <p>Any RTSP / USB camera. The POS reads SKU-to-quantity from MQTT, a replenishment system reads empty and wrong slots, and an HTTP API serves event queries and gallery management.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Data stays on site</h3>
                <p>Camera, recognition host and console host are all local, and the broker runs in the console stack. The bundled broker is anonymous plaintext; add accounts and TLS before going live.</p>
            </div>
        </li>
    </ul>
</div>

### The console

The upstream package ships four screenshots of the management UI: the event list, the per-box event detail, the product gallery and the checkout/shelf board. All four were produced by the upstream `web_demo` tool against synthetic fixtures; the SKUs, similarity scores and events in them are test data and show only the interface layout.

### The three shelf states

The shelf decision was measured on the reComputer RK3588 series and on the reComputer R2000 series + Hailo-8. Each slot gets one of three states: correct, empty, or wrong SKU.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="Shelf board with every slot matching the gallery, marked correct"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="One item removed from the same shelf; that slot turns empty"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="An item that does not belong in the slot; it is marked wrong SKU with the SKU actually matched"/>
</div>

The three states in sequence:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="The same shelf moving through correct, empty and wrong-SKU states"/>
</div>

The checkout chain outputs per-item tracks:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="Item tracks and per-item recognition on the checkout view"/>
</div>

These frames come from two hardware runs, `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*`, using products the project bought; none come from a dataset.

## What hardware you need

Four things per site: a camera, a recognition host, a console host, and an x86_64 conversion machine (used once per model).

**① Camera** — any RTSP / USB camera mounted above the checkout or facing the shelf; nothing runs on it. The input size is compiled into the artifact: 640² for checkout, 1280² for shelf.

**② Recognition host** — this is where the three presets differ:

| | Host | Measured on this hardware | When to pick it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Detector on the NPU, embedder on the four A76 cores | Both stages: 9.04 ms detection, 91.95 ms per crop embedding | You need measured data for both detection and embedding |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector on the Rockchip NPU, embedder on the CPU | Detector only, on reComputer RK3588 series: 99.85% box agreement at 56.7 ms | You already run Rockchip boards. RK3576 uses the same toolchain |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>TensorRT path | Checkout replay | You already run Jetson |

All latencies are single-stage measurements on the hardware in that row.

**③ Console host** — your own amd64 or arm64 Linux machine with Docker, no GPU needed, reachable by every recognition device. It runs three containers: the registration/query service, the management UI and the MQTT broker. **Both container images are built on this host from the upstream repository**, not pulled from a registry.

**④ An x86_64 conversion machine** — neither rknn-toolkit2 nor the Hailo Dataflow Compiler runs on the target board. Each model is converted once; deployments do not repeat it.

## How to deploy on site

Settle the artifact and camera position first, then install the software in four steps per preset.

### 1. Mounting: choose the artifact, then the camera position

:::tip[Input size is fixed at conversion]
The input size is compiled into the artifact and cannot change at runtime. A 640² artifact looking at a shelf misses distant products; moving to 1280² raises small-object mAP50-95 on SKU-110K test from 17.49 to 26.88. Decide checkout or shelf first, then mount the camera so products take up a suitable share of the frame.
:::

Embedding is one CPU inference per box. At the 91.95 ms per crop measured on the reComputer R2000 series, a five-item basket takes about half a second; a shelf frame at the measured density of 157.6 boxes takes about 14 seconds. **Shelf deployments must subsample frames or sample per slot.**

### 2. Software, four steps

Per-device steps are on the reference design page; this section lists the flow. All three presets follow the same four steps:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configure and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Bring up the console** — the registration service, UI and broker run on the console host, with a role token table written at deploy time. There is no default token and no anonymous read; with an empty table the service refuses to start.
2. **Put the embedding model in place** — place the DINOv2 ONNX where the console mounts it and switch `RETAIL_EMBEDDER` away from the placeholder. The upstream default is `fake`, which hashes image bytes into a vector; `GET /api/health` does not report this, and the only symptom is that registration works but every lookup returns the wrong SKU.
3. **Register SKUs** — 3 to 8 photos each, at least front, back and side, under two lighting conditions. Fewer than three is rejected; a repeated sku_id returns 409 unless `replace=true` is set.
4. **Convert and check the detector on the board** — convert on the x86_64 host, copy the artifact to the board, and run a consistency check against the CPU reference.

Allow about 90 minutes per preset for the four steps, plus container build time on the console host.

**Confirm the embedding model is wired in.** One recognition leaves a full record in the event stream: slot, matched SKU, similarity and per-box coordinates. With the `fake` implementation the similarity distribution is visibly abnormal.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="The full field set of one recognition event: slot, matched SKU, similarity and per-box coordinates"/>
</div>

<!-- TODO image: shelf and camera as installed on site — needs a field shoot -->

## What interfaces are available

Every output is on the console host: MQTT on 1883 and two HTTP interfaces on 8089 and 8080, all on the local network, and all except the broker behind the same token check.

- **Checkout / POS** subscribes to `retail/v1/events` and reads `summary.items`, the frame's SKU-to-quantity map, without parsing the per-box array.
- **Replenishment or shelf audit** reads `summary.empty_slots` and `summary.wrong_slots` from the same message.
- **A system that needs to trace a decision** reads `detections[]`: each box carries `track_id`, a normalised `bbox`, `sku_id`, `similarity`, `top2_margin`, an `ocr` block and a `fallback` flag.

### The full topic and payload

| Interface / port | Content | Notes |
|---|---|---|
| MQTT `retail/v1/events`, 1883 | `event_id`, `scene`, `timestamp`, `gallery.{version,sha256}`, `detections[]`, `summary.{items,empty_slots,wrong_slots}`, `models.{detector_sha256,embedder_sha256}` | One per frame, not one per box |
| HTTP `/v1/gallery/skus`, 8089 | `POST` a sku_id, display name, aliases, licence fields and 3–8 images → a new immutable version | Same sku_id returns 409 unless `replace=true` |
| HTTP `/v1/gallery`, `/v1/gallery/{version}`, `/v1/gallery/current/download`, `/v1/gallery/rollback/{version}`, 8089 | Version list, per-version manifest, tar.gz with SHA256SUMS, and rollback that re-verifies the target's SHAs before switching | Rollback does not create a new version |
| HTTP `/api/events`, `/api/events/{id}`, `/api/summary`, 8080 | Event list filtered by scene / SKU / device / time, per-box detail, board summary | Read-only API, same token check |

**Read `similarity` together with `gallery.version`, `gallery.sha256` and the model hashes in the same message.** Vectors from two different embedders are not comparable, and mixing them shows up as nothing being recognised; every message carries all four for this reason.

Authentication is `Bearer <token>` with roles viewer < operator < admin. The broker ships anonymous and plaintext, so anyone who can reach port 1883 can publish forged recognition events.

## Performance and measured data

### Detection, measured on device

| Device | Artifact | p50 / p95 | Box agreement with CPU reference |
|---|---|---:|---:|
| reComputer R2000 series + Hailo-8 | INT8 HEF, 640² | 9.04 / 9.10 ms | 94.77% (200 images), 94.68% (300 images) |
| reComputer RK3588 series | RKNN fp16, 640² | 56.7 / 89.5 ms | 99.85% |
| reComputer RK3588 series | RKNN INT8, 640² | 26.0 / 33.2 ms | 98.35% |

Conditions: agreement is matched against the CPU reference at IoU ≥ 0.5. Hailo single-stream throughput 110.4 fps (`hailortcli benchmark` 110.64 fps, pure hardware time 8.21 ms; the extra 0.8 ms is the Python vstream round trip). **End-to-end on the reComputer R2000 series (letterbox, output concatenation, decode and NMS included) is p50 18.74 ms / p95 24.25 ms**: pure-numpy per-class NMS over about 160 boxes takes longer than inference itself.

Reproduce: `evaluation/runs/2026-09-06-det-hef/`, `evaluation/runs/2026-09-06-det-rk3588-radxa/`

### Embedding, measured on device

| Variant | Per-crop p50 / p95 | Retrieval cost vs fp32 |
|---|---:|---|
| DINOv2-small, dynamic-quantised INT8, 4 threads | 91.95 / 105.98 ms | Within 0.65pp at all 7 measured operating points |
| DINOv2-small, fp32, 4 threads | 180.75 / 233.41 ms | Baseline |

Conditions: reComputer R2000 series CPU. Quantising weights only costs almost no retrieval accuracy; quantising activations as well costs a lot.

Reproduce: `evaluation/runs/2026-09-06-embed-small/` §8

### Retrieval and detection accuracy (off-device)

| Configuration | Result | Dataset |
|---|---:|---|
| DINOv2-base, 8 registration images per SKU | top-1 84.67% / top-5 96.66% | Grocery Store Dataset, 81 classes, fp32 |
| DINOv2-small, 8 registration images per SKU | top-1 79.11% | Same |
| DINOv2-small, 1 registration image per SKU | top-1 51.11% | Same |
| DINOv2-base, 8 per SKU, held-out SKUs | top-1 78.92% | Products-10K held-out set, far more classes |
| Detector, 640² | mAP50-95 52.84, mAP50 88.26 | SKU-110K test |
| Detector, 1280² | mAP50-95 56.32 | SKU-110K test |

Published SKU-110K results range from mAP50-95 58.0 (DenseDet, Cascade R-CNN + ResNeXt-101) to 58.7 (arXiv 2007.11946). At 640², mAP50 is 88.26 while mAP50-95 is 52.84: boxes are found but localisation is loose. The number of registration views matters most for retrieval: same model, same dataset, 51.11% with 1 image per SKU and 79.11% with 8.

Reproduce: `evaluation/runs/` (embedding evaluation: `evaluation/eval_embedder.py`)

### Runtimes and key parameters

| Device | Detector | Embedder | How the model reaches the device |
|---|---|---|---|
| reComputer RK3588 / RK3576 series | `.rknn` on the NPU, fp16 or INT8 | onnxruntime on the CPU; no RKNN conversion | Converted on an x86_64 host with rknn-toolkit2 2.3.2; the toolkit version must match `librknnrt.so` on the board |
| reComputer R2000 series + Hailo-8 | INT8 `.hef` on the NPU | Dynamic-quantised INT8 DINOv2-small on the CPU | Compiled on an x86_64 host with the Hailo Dataflow Compiler, then copied to the board |
| reComputer J40 series (Jetson Orin) | TensorRT fp16 (GPU) | TensorRT fp16 (GPU) | Full replay — detection, embedding, retrieval and reporting — runs on J4012 and J3011 |

The detector is a single-class YOLOX-Tiny (640² or 1280²); the embedder is DINOv2 fine-tuned with ArcFace on e-commerce product images, base (348 MB fp32) or small (23.5 MB INT8), producing one 512-dimensional vector per crop; SKU identity lives only in the FAISS cosine search over the versioned gallery.

- Input size: **640²** for checkout, **1280²** for shelves; compiled into the artifact and fixed at runtime
- Registration images: **3–8** per SKU; fewer than three are rejected
- `RETAIL_EMBEDDER`: upstream default is `fake` (hashes image bytes into a vector); switch it to the DINOv2 ONNX at deploy time

### Known degradation

- Embedding is one CPU inference per box: at 91.95 ms per crop, a five-item basket takes about half a second and a shelf frame (157.6 boxes) about 14 seconds, so shelf deployments must sample frames or sample by slot.
- Static QDQ INT8 (activations quantised too) loses 3.78–9.96 percentage points of retrieval and is unusable.
- A mismatch between rknn-toolkit2 and `librknnrt.so` can load normally and return wrong values; check agreement against the CPU reference after every conversion.
- A 640² artifact on a shelf misses distant products; SKU-110K small-object mAP50-95 is 17.49 at 640² and 26.88 at 1280².
- Vectors from two different embedders are not comparable; mixing them shows up as nothing being recognised.
- The device-side runtime that pulls a gallery version, verifies it and switches atomically is not implemented, so newly registered SKUs do not reach devices automatically.
- OCR re-ranking and VLM fallback are not implemented: the message already carries `top2_margin`, `ocr` and `fallback` blocks, but the code is not implemented.

### Next steps

- Add the reComputer J40 series (J4012 / J3011) TensorRT results for detection, embedding and checkout replay to "Performance and measured data" and to the runtime table.
- Measure checkout counting accuracy and shelf-slot accuracy as the acceptance metrics.
- Implement the device-side runtime that pulls a gallery version, verifies it and switches atomically, so newly registered SKUs reach devices automatically.

## Data and asset sources

**The package contains no model weights and no dataset images.** The restrictions below carry over to anything trained on this data; commercial deployment requires retraining the detector and embedder on commercially usable data.

| Asset | Licence / scope | Notes |
|---|---|---|
| Detector weights (trained on [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Trax licence: academic and non-commercial; clause (iii) prohibits derivative works | `use_scope: academic-only`, `redistributable: false` |
| Embedder weights (fine-tuned on JD Products-10K) | Non-commercial research and education | `use_scope: non-commercial`, `redistributable: false` |
| `facebook/dinov2-base`, `facebook/dinov2-small` backbones | Apache-2.0 | The backbones are commercially usable; the restriction comes from the training data |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Retrieval evaluation only; the only commercially usable dataset in this set |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / academic only / licence to be confirmed with the dataset owner | Appear in the upstream evaluation plan; non-commercial scope |
| Project code | Apache-2.0 | |

Per-artifact fields (`license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256`) are in the upstream model cards; a summary is in the package's `gallery/ATTRIBUTION.md`. The architecture diagram on the reference design page is drawn by us from the package's device list.
