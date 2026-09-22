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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Read this first]
This is a reference design in progress, not a finished product. The console — registration, gallery versioning, the management UI, the broker — is implemented, and the detector has been converted and measured on two boards. **The device-side process that would join detection, embedding, gallery lookup and MQTT publishing into one service does not exist upstream yet**, so there is no end-to-end counting accuracy, no shelf-slot accuracy and no soak run on this page. No preset carries `verified: [hardware]`. It is not a certified retail scale and makes no claim about a legally binding count or price.
:::

## What this solution does

A camera watches a checkout belt or a shelf face. Every product in the frame is boxed, cropped, turned into a 512-dimensional vector and looked up in a gallery of registered SKUs. At the checkout the result is a basket — a SKU-to-quantity list, aggregated by track id so one item passing the camera is counted once. On the shelf it is a slot state — ok, empty, wrong SKU or unknown — aggregated per planogram position. One MQTT message per frame carries all of it.

The interesting part is what happens when the store adds a product. **Nothing retrains.** You photograph the new SKU three to eight times, post the images to the console, and the gallery gains a new immutable version. The detector never learns about individual products — it is single-class, it only answers "there is a product here" — and the embedder is not updated either.

- Selection and deployment: [Reference design page](https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition)
- Upstream repository: not published. The package carries no `intro.links.github`; the code lives in an internal repository at packaging time.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>A new SKU costs 3–8 photographs, not a training run</h3>
                <p>Registration mints a new immutable gallery version. Going from one registration image to eight is worth 28 percentage points of top-1 accuracy (see the appendix).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Detection converts cleanly to the NPU</h3>
                <p>RKNN fp16 on RK3588 agrees with the CPU reference on 99.85% of boxes at 56.7 ms p50; the Hailo-8 INT8 HEF runs at 9.04 ms p50 with 94.77% agreement.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Embedding is a CPU cost of about 92 ms per crop</h3>
                <p>Measured on a reComputer R2000 series, four threads, dynamically quantised INT8 DINOv2-small — within 0.65 pp of the same model in fp32.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Nothing leaves the site</h3>
                <p>Camera, recognition host and console host are all local, and the broker runs in the console stack. The bundled broker is anonymous plaintext — add accounts and TLS before it leaves a bench.</p>
            </div>
        </li>
    </ul>
</div>

### What the console looks like

The upstream package ships four screenshots of the management UI — the event list, the per-box event detail, the product gallery and the checkout/shelf board. **All four were produced by the upstream `web_demo` tool against synthetic fixtures**: the SKUs, similarity scores and events in them are test data, not field results. They show the shape of the interface, and nothing about recognition quality.

### The three shelf states

Two runs on 2026-09-07, one on RK3588 and one on reComputer R2000 series with Hailo-8, exercised the shelf decision. Each slot gets one of three states: correct, empty, or wrong SKU.

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

The checkout chain produces per-person, per-item tracks rather than slot states:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="Item tracks and per-item recognition on the checkout view"/>
</div>

These frames come from the two hardware runs under `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*`. The products are physical items bought for the project, not dataset imagery.

## What hardware you need

Four things per site: a camera, a recognition host, a console host, and an x86_64 machine used once per model for conversion.

**① Camera** — any RTSP or USB camera over the checkout belt or facing the shelf. Nothing runs on it. The frame size that matters is the one compiled into the artifact: 640² for the checkout, 1280² for the shelf.

**② Recognition host** — this is where the presets differ, and where the measured ground is:

| | Host | Measured on this hardware | When to choose it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" alt="reComputer R2000 series 8GB" width="110" /> | [reComputer R2000 series 8GB](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) + [Raspberry Pi AI HAT+ (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html)<br/>Detector on the NPU, embedder on the four A76 cores | Both stages: 9.04 ms detection, 91.95 ms per crop embedding | You want both stages measured on the board you are actually holding |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector on the Rockchip NPU, embedder on its CPU | Detector only, on an RK3588 (reComputer RK3588 series reComputer RK3588 series): 99.85% box agreement at 56.7 ms | You already run Rockchip boards. RK3576 uses the same toolchain but has no measurements at all |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>TensorRT path | Nothing | You already run Jetson and accept that the backend has to be written first |

Latency figures are per stage on the hardware named in the row. There is no throughput or stream-count figure anywhere in this design, because no process runs the two stages back to back on a device yet.

**③ Console host** — your own amd64 or arm64 Linux box with Docker and no GPU, reachable from every recognition device. It runs three containers: the registration/query service, the management UI and an MQTT broker. **Neither container image has been pushed to a registry**; both are built on this host from the upstream repository, with the SPA built first (`npm --prefix web/ui ci && npm --prefix web/ui run build`) because the images do not run npm.

**④ An x86_64 machine for conversion** — neither rknn-toolkit2 nor the Hailo Dataflow Compiler runs on the target board. This is once per model, not once per deployment.

## How to deploy on site

Two parts: the physical install, which decides how many crops each frame costs, and the software, which is four steps per preset.

### 1. Mounting

:::tip[Pick the artifact before you pick the mount]
The input size is compiled into the artifact and is never changed at run time. A 640² artifact fed shelf imagery loses the distant products; moving to 1280² lifts small-object mAP50-95 on SKU-110K test from 17.49 to 26.88. Decide checkout or shelf first, then mount so that the products fill the frame accordingly.
:::

The second constraint is arithmetic, not optics. Embedding is one CPU pass per box. At the measured 91.95 ms per crop on a reComputer R2000 series, a five-item basket is about half a second, and a shelf frame at the measured density of 157.6 boxes is about 14 seconds. **Shelf deployments need frame skipping or slot-level sampling; that is a design decision, not a tuning parameter.**

### 2. Software, four steps

The per-device steps are on the reference design page. In outline, every preset does the same four things:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configure and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Bring up the console stack** — registration service, UI and broker on the console host, with the role token table written at deploy time. There is no default token and no anonymous read; the service refuses to start with an empty table.
2. **Place the embedding model** — the DINOv2 ONNX goes where the console mounts it, and `RETAIL_EMBEDDER` is switched off the placeholder. The upstream default is `fake`, which hashes image bytes into a vector; it is not reported by `GET /api/health`, so "registration works but every lookup returns the wrong SKU" is the only symptom.
3. **Register SKUs** — 3 to 8 photographs each, at minimum front, back and side in two lighting conditions. Fewer than three is refused; the same sku_id returns 409 unless `replace=true`.
4. **Convert and check the detector on the board** — convert on the x86_64 host, copy the artifact over, and run the parity check against the CPU reference. **This is where each preset currently stops**: there is no device-side service to start afterwards.

Budget about 90 minutes per preset for steps 1–4, plus the container build on the console host.

**How to tell this step worked.** One recognition leaves a full record in the event stream: slot, matched SKU, similarity and per-box coordinates. Use it to check that the embedding model is really wired in — under the `fake` implementation the similarity distribution is visibly wrong.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="The full field set of one recognition event: slot, matched SKU, similarity and per-box coordinates"/>
</div>

<!-- TODO image: shelf and camera as installed on site — needs a field shoot -->

## How to connect it to your own system

Everything comes out of the console host: MQTT on 1883 and two HTTP surfaces on 8089 and 8080, all on the local network, all behind the same token gate except the broker.

- **A till or POS** subscribes to `retail/v1/events` and reads `summary.items` — a SKU-to-quantity map for the frame. It does not need to parse the per-box array.
- **A replenishment or shelf-audit system** reads `summary.empty_slots` and `summary.wrong_slots` from the same message.
- **Anything that has to explain a decision** reads the `detections[]` array: per box, `track_id`, normalised `bbox`, `sku_id`, `similarity`, `top2_margin`, the `ocr` block and a `fallback` flag.

### The full topic and payload

| Interface / port | Payload | Notes |
|---|---|---|
| MQTT `retail/v1/events`, 1883 | `event_id`, `scene`, `timestamp`, `gallery.{version,sha256}`, `detections[]`, `summary.{items,empty_slots,wrong_slots}`, `models.{detector_sha256,embedder_sha256}` | One message per frame, never one per box |
| HTTP `/v1/gallery/skus`, 8089 | `POST` with sku_id, display name, aliases, a licence field and 3–8 images → a new immutable version | 409 on a duplicate sku_id unless `replace=true` |
| HTTP `/v1/gallery`, `/v1/gallery/{version}`, `/v1/gallery/current/download`, `/v1/gallery/rollback/{version}`, 8089 | Version listing, per-version manifest, a tar.gz with SHA256SUMS inside, and rollback that re-verifies the target SHA before switching | Rollback does not mint a new version |
| HTTP `/api/events`, `/api/events/{id}`, `/api/summary`, 8080 | Event list filtered by scene, SKU, device and time; per-box detail; the board summary | Read API behind the same token gate |

**The field most easily misread is `similarity`.** It is only interpretable together with `gallery.version`, `gallery.sha256` and the model hashes in the same message: vectors produced by two different embedders are not comparable, and the symptom of mixing them is "nothing is recognised". That is why every message carries all four.

Authorisation is `Bearer <token>` with viewer < operator < admin. The broker, by contrast, is anonymous plaintext in the bundled configuration — anyone who can reach 1883 can publish forged recognition events.

## For engineers: implementation details

### Two models, and why the split exists

A classifier would have to be retrained for every new product. This design splits the problem so that nothing learns product identity:

| Stage | Model | Output | Changes when a SKU is added? |
|---|---|---|---|
| Detection | YOLOX-Tiny, single class, 640² or 1280² | Boxes, no class | No |
| Embedding | DINOv2 fine-tuned with ArcFace on e-commerce product imagery — base (348 MB fp32) or small (23.5 MB INT8) | 512-d vector per crop | No |
| Identity | FAISS cosine lookup in a versioned gallery | SKU + similarity + top-2 margin | **Yes — a new immutable gallery version** |
| Aggregation | Track id (checkout) or planogram slot (shelf) | Basket, or ok / empty / wrong_sku / unknown | No |

### Runtime matrix

| Host | Detector | Embedder | Delivery |
|---|---|---|---|
| RK3588 / RK3576 | `.rknn` fp16 or INT8 on the NPU | onnxruntime on the CPU, no RKNN conversion exists | Converted on an x86_64 host with rknn-toolkit2 2.3.2, onnx pinned to 1.16.1, setuptools below 81; the toolkit version must match the board's `librknnrt.so` |
| reComputer R2000 series + Hailo-8 | INT8 `.hef` on the NPU | Dynamically quantised INT8 DINOv2-small on the CPU | Compiled with the Hailo Dataflow Compiler on an x86_64 host, copied to the Pi |
| Jetson Orin | Not implemented | Not implemented | `platforms/` upstream holds console, hailo and rknn only; the README's jetson entry was inherited from the donor project and points at files that were never copied across |

A version mismatch between rknn-toolkit2 and `librknnrt.so` **does not always fail loudly** — it can load and produce wrong numbers. The parity check against the CPU reference exists for exactly this reason and is not optional.

### The gallery version protocol

The gallery is the only mutable state, and it is mutated only by minting a new version:

| Property | Behaviour |
|---|---|
| Version directory | Immutable: vectors, SKU table, FAISS index, manifest, SHA256SUMS |
| Manifest | Records which embedding model and which preprocessing produced the vectors |
| Switch | Atomic, single-writer lock |
| Rollback | Re-verifies the target version's SHA before switching, and does not mint a new version |
| Download | `current/download` serves a tar.gz with SHA256SUMS inside |

**The console half of this is implemented; the device half is not.** The runtime that would fetch a version, verify its checksums and switch atomically does not exist yet, which is why a newly registered SKU does not reach a device today.

### What is specified and not implemented

- **OCR reranking.** The `top2_margin` field and the `ocr` block are in the message schema, and the reranking that would use them when the top-1 and top-2 similarities are close is not written.
- **A VLM fallback.** The `fallback` block is in the schema for the same reason.
- **The device-side pipeline**, for every platform.
- **A TensorRT backend**, for the Jetson preset.

## Appendix: measured data

Skip this section if you are not checking numbers. Everything below was measured on the hardware named with it; nothing is interpolated from a similar board, and every boundary file in the upstream evaluation tree carries `reproduced_by: null`.

### Detection, on hardware

| Host | Artifact | p50 / p95 | Box agreement vs CPU reference | Source |
|---|---|---:|---:|---|
| reComputer R2000 series + Hailo-8 | INT8 HEF, 640² | 9.04 / 9.10 ms | 94.77% (200 images), 94.68% (300 images) | `evaluation/runs/2026-09-06-det-hef/` |
| RK3588 (reComputer RK3588 series reComputer RK3588 series) | RKNN fp16, 640² | 56.7 / 89.5 ms | 99.85% | `evaluation/runs/2026-09-06-det-rk3588-radxa/` |
| RK3588 (reComputer RK3588 series reComputer RK3588 series) | RKNN INT8, 640² | 26.0 / 33.2 ms | 98.35% | same run |

Agreement is IoU ≥ 0.5 against the CPU reference. Hailo single-stream throughput is 110.4 fps, cross-checked independently with `hailortcli benchmark` at 110.64 fps and 8.21 ms of pure hardware time — the extra 0.8 ms is the Python vstream round trip. **End to end on the Pi, including letterboxing, output assembly, decode and NMS, is 18.74 ms p50 / 24.25 ms p95**: the pure-numpy per-class NMS over roughly 160 boxes costs more than the inference. No thermal throttling was observed over the run; Hailo die temperature and power draw could not be read on this platform and are recorded as unavailable rather than estimated.

### Embedding, on hardware

| Variant | Per crop p50 / p95 | Retrieval cost vs fp32 |
|---|---:|---|
| DINOv2-small, dynamically quantised INT8, 4 threads | 91.95 / 105.98 ms | within 0.65 pp across all seven measured configurations |
| DINOv2-small, fp32, 4 threads | 180.75 / 233.41 ms | baseline |
| DINOv2-small, static QDQ INT8 (activations quantised too) | — | **loses 3.78 to 9.96 points; not usable** |

Measured on a reComputer R2000 series CPU, `evaluation/runs/2026-09-06-embed-small/` §8. Weight-only quantisation is close to free here; quantising activations is not.

### Retrieval and detection accuracy, off-device

| Configuration | Result | Dataset |
|---|---:|---|
| DINOv2-base, 8 registration images per SKU | 84.67% top-1 / 96.66% top-5 | Grocery Store Dataset, 81 classes, fp32 |
| DINOv2-small, 8 registration images per SKU | 79.11% top-1 | same |
| DINOv2-small, 1 registration image per SKU | 51.11% top-1 | same |
| DINOv2-base, 8 images per SKU, held-out SKUs | 78.92% top-1 | Products-10K held-out split, many more classes |
| Detector, 640² preset | 52.84 mAP50-95, 88.26 mAP50 | SKU-110K test |
| Detector, 1280² preset | 56.32 mAP50-95 | SKU-110K test |

Both detector boundaries sit in the project's own failure tier, whose threshold is 60 mAP50-95. That 60 is a generic value this project applies to every metric, not one set from SKU-110K; published results on SKU-110K reach 58.0 (DenseDet, Cascade R-CNN + ResNeXt-101) and 58.7 (arXiv 2007.11946). mAP50 at 640² is 88.26: the boxes are found and not placed tightly. Small-object mAP50-95 rises from 17.49 at 640² to 26.88 at 1280², which is why the shelf preset exists as a separate artifact.

The single largest lever on this page is the number of registered views per SKU: 51.11% at one image, 79.11% at eight, on the same model and the same dataset.

## Data and asset sources

**No model weights and no dataset imagery ship with this package.** The constraints below are inherited by anything trained on the datasets, which is why a commercial deployment is a retraining task rather than a licensing conversation.

| Asset | Licence / scope | Note |
|---|---|---|
| Detector weights (trained on [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Trax licence: academic and non-commercial; clause (iii) forbids derivative works | `use_scope: academic-only`, `redistributable: false` |
| Embedder weights (fine-tuned on JD Products-10K) | Non-commercial research and education | `use_scope: non-commercial`, `redistributable: false` |
| `facebook/dinov2-base`, `facebook/dinov2-small` backbones | Apache-2.0 | The restriction comes from the training data, not the backbone |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Retrieval evaluation only; the only commercially usable dataset in the set |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / academic only / licence to be confirmed with the dataset owner | Appear in the upstream evaluation plan; non-commercial scope |
| Project code | Apache-2.0 | |

Per-artifact fields — `license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256` — are in the upstream model cards; the summary is in the package's `gallery/ATTRIBUTION.md`. The architecture diagram on the reference design page is drawn from the package's device catalogue and is our own asset.
