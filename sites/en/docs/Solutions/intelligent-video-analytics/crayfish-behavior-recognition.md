---
description: 'Aquaculture Crayfish Behavior & Fighting Recognition Engineering Document: 4-stage funnel pipeline, 8-frame temporal mosaic network, multi-frame sex voting, solution-cli automated deployment, runtime matrix, MQTT/WS protocols, and field benchmarks'
title: 'Aquaculture Crayfish Behavior Recognition: 4-Stage Pipeline and Edge Benchmarks'
sidebar_label: 'Crayfish Behavior Recognition'
keywords:
  - Crayfish Fighting Recognition
  - Aquaculture Edge AI
  - Cherax quadricarinatus
  - solution-cli
  - reCamera Pro
  - SG2002 cvimodel
  - Temporal Behavior Classification
  - YOLO11
  - Cannibalism Early Warning
  - MQTT
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png
slug: /solutions/crayfish-behavior-recognition
sidebar_position: 2
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/solutions/crayfish-behavior-recognition/
generated_from: sensecraft-solutions@crayfish_behavior_recognition
---

:::caution[Usage Notice]
This is an assistive aquaculture monitoring and early warning system, not a sealed industrial automation safety cutoff device. Integration with dissolved oxygen sensors and automated feeding systems is advised.
:::

## What this solution does

### System Architecture & Topology

![Aquaculture Crayfish Behavior Recognition Architecture](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/architecture-en-5ac111ce.png)

Two things are required: the edge AI camera monitoring the tank, and the dashboard receiving events. Everything runs locally on the camera over standard IoT protocols without centralized GPU servers.


In high-density recirculating aquaculture systems (RAS) or breeding tanks, Australian freshwater crayfish (*Cherax quadricarinatus*) frequently suffer limb loss or fatal cannibalism during molting periods due to aggressive attacks. **An edge AI smart camera mounted above the tank tracks each crayfish in real time**. When two individuals approach and engage in combat, **the camera confirms aggression within an 8-frame temporal window and publishes an MQTT alert to the farm dashboard**, prompting automated feeding or staff intervention to protect soft-shell individuals.

- Open Source Repository: [github.com/suharvest/crayfish-fight](https://github.com/suharvest/crayfish-fight)
- Sizing and Deployment: [Reference Design Deployment Guide](https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>4-Stage Funnel Pipeline</h3>
                <p>Detection → Proximity Trigger → Single-frame Filter → 8-frame Temporal Mosaic, pruning &gt;90% of redundant calculations to preserve edge compute headroom.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Resolving 2D Overlap</h3>
                <p>8-frame interaction crops are synthesized into a spatiotemporal mosaic, eliminating false contact triggers caused by vertical depth overlaps in top-down views.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Multi-Frame Sex Voting</h3>
                <p>Claw morphology is sampled across the first 10 track frames with multi-frame voting, achieving 82.0% Top-1 accuracy to automate tank sex-ratio audits.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Edge Standalone &amp; IP67</h3>
                <p>On-camera NPU/TPU execution with single-cable PoE support; preserves local recording and event buffering even when external networks drop.</p>
            </div>
        </li>
    </ul>
</div>

### Live Device Demonstration

Top-down video telemetry: each crayfish in the frame receives a ByteTrack ID and sex classification tag (e.g. `#3 male 91%`). When individuals `#2` and `#5` initiate aggressive engagement, the contact zone highlights in flashing red with a `FIGHT (temporal confirmed)` overlay.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png" alt="Aquaculture tank fighting recognition demonstration: multi-target tracking, sex classification, and combat zone alerting"/>
</div>

---

## Hardware Sizing

Only an all-in-one IP67 smart camera is mounted over the tanks and connected to the aquaculture LAN:

| | Hardware Model | Specs & Compute | When to Choose |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>4K Sensor + 3 TOPS NPU | Rockchip RV1126B · 3 TOPS NPU<br/>2GB RAM · Linux 5.10 | **Recommended Tier**. Broad RAS tanks and breeding pools requiring full 4-stage funnel and temporal mosaic classification |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>1/2.8" Sensor + 1 TOPS TPU | SOPHGO SG2002 · 1 TOPS TPU<br/>512MB RAM · Native C++ | **Cost-Optimized Tier**. Dense small-tank rollouts focusing on detection and initial proximity triage |

---

## Deployment and Setup

### 1. Mounting and Optical Placement
- **Mounting Height & Angle**: Mount **0.8 ~ 1.5 m** directly above the tank at a vertical top-down angle (80°~90°);
- **Water Depth & Clarity**: Suitable for depths 20~80 cm with visibility ≥ 25 cm; avoid placing aerators directly under the camera lens;
- **Diffused Lighting**: Uniform LED strip lighting (≥ 100 Lux) is recommended to prevent surface ripples from generating specular reflections.

### 2. Software Installation: Recommended Official Toolchain

This solution is integrated with the official Seeed automation framework. The primary recommended method uses **`solution-cli` (or AI Solution Assistant)** for automated precheck and deployment, with GUI options also supported:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>View Field Deployment Guide 🖱️</font></span></strong>
    </a>
</div><br />

#### Recommended: Automated Deployment with `solution-cli` (CLI Best Practice)
`solution-cli` is Seeed's unified deployment and sizing toolkit for industrial edge AI solutions (see [Deployment Guide](https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy)). Deploy with three steps without manually managing containers or tarballs:

```bash
# 1. Install or run solution-cli (skip if already available)
npm install -g @seeed-studio/solution-cli
# Or run on the fly via npx: npx @seeed-studio/solution-cli doctor

# 2. Diagnose local environment and scan network for reCamera hardware
solution-cli doctor
solution-cli device scan

# 3. Query solution details and deploy to target camera
solution-cli hub get crayfish_behavior_recognition --locale en
solution-cli deploy --solution crayfish_behavior_recognition --target recamera --host 192.168.42.1
```
> **Tip**: If you are using AI agents like Claude Code, Codex, or Antigravity, prompt directly: *"Please deploy reference design crayfish_behavior_recognition to the reCamera mounted over tank RAS-01 using solution-cli"*. The agent invokes the built-in skill to run pre-flight checks and mount the pipeline automatically.

#### Alternative: GUI Installation (SenseCraft Web / App Center)
1. Open `http://<camera_ip>` in a browser;
2. Navigate to **App Center**, search for `crayfish_behavior_recognition`;
3. Click **Install**; the camera automatically configures detection and temporal pipelines;
4. In settings, configure the farm MQTT Broker address (e.g. `192.168.1.100:1883`) and enable the daemon.

---

## Algorithm Architecture: 4-Stage Funnel & Temporal Mosaic

```
Camera Sensor (1080p @ 10-15fps)
   │
   ▼ [Stage 1] Object Detection     YOLO11n (640×640) → Bounding Boxes + ByteTrack
   │
   ▼ [Stage 2] Proximity Trigger    Center distance < 1.1× body length or IoU > 0 for ≥ 3 frames;
   │                                Crop interaction zone with 20% margin
   │
   ▼ [Stage 3] Single-Frame Triage  YOLO11n-cls (224×224) binary filter weeds out normal swimming
   │
   ▼ [Stage 4] Temporal Confirmation YOLO11n-cls (448×448 mosaic) validates 8-frame spatiotemporal matrix;
   │                                Completely eliminates 2D vertical overlap false alarms
   │
   ▼ Event Exit                     Publishes to MQTT/WS only on state transition (start / change / end)
```

### Parallel Branch: Multi-Frame Sex Classifier
Within the first 10 frames of a new track ID, crops of the claw and abdomen are classified with YOLO11n-cls (128×128) via multi-frame voting, outputting `male` / `female` / `unknown` with **82.0% Top-1** accuracy.

---

## Benchmarks and Field Telemetry

Evaluated on over 2,000 annotated field video frames across aquaculture research facilities:

### 1. Model Precision & Recall
| Model | Resolution | Task | Benchmark Metric | Runtime Target |
|---|---|---|---|---|
| `det_v2_n` | 640×640×3 | Crayfish Detection | **mAP50: 0.950** (P: 0.914, R: 0.880) | RV1126B RKNN / SG2002 TPU |
| `behavior_temporal`| 448×448×3 | 8-frame Fight Verification | **Recall: 0.950** (Precision: 0.905) | RV1126B RKNN INT8 |
| `behavior_cls` | 224×224×3 | Single-frame Filter | Recall: 0.775, Precision: 0.816 | RV1126B RKNN / SG2002 TPU |
| `sex_cls` | 128×128×3 | Sex Classification | **Top-1: 0.820** (10-frame voting) | RV1126B RKNN / SG2002 TPU |

### 2. Edge Hardware Execution
- **reCamera Pro**: **10~15 FPS** (Full 4-stage closed loop, ~18% CPU);
- **reCamera 2002**: **12~15 FPS** (Detection + proximity alert, ~25% CPU).

---

## Telemetry Interfaces and Protocols

### 1. Farm Monitoring Dashboard (MQTT)
- **Broker**: `mqtt://<camera_ip>:1883`
- **Topic**: `crayfish/tank/<tank_id>/event`
- **Aggression Alert Payload**:
```json
{
  "timestamp": 1793339665200,
  "tank_id": "RAS_04",
  "event_type": "FIGHT_CONFIRMED",
  "severity": "CRITICAL",
  "actors": [
    {"track_id": 2, "sex": "male", "box": [210, 140, 320, 260]},
    {"track_id": 5, "sex": "unknown", "box": [260, 160, 370, 280]}
  ],
  "duration_sec": 4.5
}
```

### 2. Periodic Tank Inventory & Sex Ratio Audits
- **Topic**: `crayfish/tank/<tank_id>/stats`
- Publishes hourly inventory counts, sex ratios, and aggression frequencies to assist automated feeding schedules.
