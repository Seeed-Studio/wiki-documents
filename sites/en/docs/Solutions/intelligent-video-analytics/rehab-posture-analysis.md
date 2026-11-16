---
description: 'Edge AI Rehabilitation Posture Analysis Engineering Document: 33-keypoint anatomical topology retraining, hysteresis state machine, ROM angle measurement, compensation alert engine, secondary cascade hand/foot models, solution-cli automated deployment, WebSocket/EMR protocols, and edge benchmarks'
title: 'Edge AI Rehabilitation Posture Analysis: 33-Keypoint Pose and Clinical Kinematics'
sidebar_label: 'Rehabilitation Posture Analysis'
keywords:
  - Rehabilitation Posture Analysis
  - 33 Keypoint Detection
  - YOLO11-Pose Retraining
  - Clinical Kinematics
  - Joint Range of Motion ROM
  - Pathological Compensation Alert
  - Cascade Micro-Model Extension
  - solution-cli
  - reCamera Pro
  - RV1126B RKNN
  - SG2002
  - Zero Video Leakage
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/cover-93765b27.png
slug: /solutions/rehab-posture-analysis
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/solutions/rehab-posture-analysis/
generated_from: sensecraft-solutions@rehab_posture_analysis
---

:::caution[Usage Notice]
This is an assistive biomechanical assessment tool, not a certified medical diagnostic device. It provides objective kinematic telemetry and does not replace the clinical evaluation of licensed physical therapists.
:::

## What this solution does

### System Architecture & Data Flow

![Edge AI Rehab Posture Analysis Architecture](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/architecture-en-328afea6.png)

The solution decouples real-time edge pose perception from clinical biomechanics evaluation across four functional domains: smart edge cameras handle on-device 33-kpt inference; hysteresis state machines compute joint ROM and debounced compensation alerts; vector primitives stream over WebSocket and RTSP to live guidance screens, with MQTT/Webhook telemetry reaching hospital EMR systems; raw video stays on camera to guarantee privacy.


In outpatient clinics, senior rehabilitation centers, or home exercise corners, **the edge AI smart camera estimates a full-body 33-keypoint anatomical skeleton topology in real time**. When patients demonstrate involuntary compensations like shoulder shrugging or medial knee collapse, **the on-screen HUD triggers a red visual alert and auditory cue within 50ms**, reporting objective joint Range of Motion (ROM) and valid repetition metrics to hospital EMR systems.

- Open Source Repository: [github.com/suharvest/rehab-posture-analysis](https://github.com/suharvest/rehab-posture-analysis)
- Sizing and Deployment: [Reference Design Deployment Guide](https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>True 33-Keypoint Topology</h3>
                <p>Retrained 33-joint skeleton model completing bilateral thumb/index/pinky digits and heel/toe plantar triangles, eliminating distal limb truncation in standard 17-point poses.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            </div>
            <div class="info-content">
                <h3>Sub-50ms Compensation Alert</h3>
                <p>3-frame temporal debounce combined with bilateral acromion height delta (&gt;12mm) intercepts trapezius shrugging and knee valgus, rejecting partial-rep cheating.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Zero Video Leakage</h3>
                <p>Raw camera frames are discarded immediately after on-chip SRAM/DRAM inference; only JSON coordinate primitives and alert events cross network boundaries.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>24.0 FPS Real-Time Inference</h3>
                <p>reCamera Pro (RV1126B 3 TOPS) achieves 41.7ms end-to-end latency with zero visual trailing on large patient-facing displays.</p>
            </div>
        </li>
    </ul>
</div>

### Live Device Demonstration

Actual video output from the edge smart camera: all 33 keypoints and anatomical skeleton lines are superimposed over the patient, with live joint ROM angle displayed on the left and exercise phase, valid reps, and quality scores rendered on the right.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-rom-en-e95471f2.gif" alt="Live rehabilitation kinematics tracking on reCamera Pro: 33-keypoint skeleton overlay with clinical HUD metrics"/>
</div>

When shoulder shrugging occurs, the upper shoulder contour flashes red and locks into alert mode (as shown below):

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-compensation-en-d8bd5846.gif" alt="Pathological compensation detection: shoulder shrug identified, triggering flashing alert and pausing valid rep count"/>
</div>

---

## Hardware Sizing

Only an all-in-one smart camera or an existing camera with an edge accelerator is needed on-site:

| | Hardware Model | Specs & Compute | When to Choose |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>4K Sensor + 3 TOPS NPU | Rockchip RV1126B · 3 TOPS NPU<br/>2GB LPDDR4 | **Recommended Tier**. Clinical rehab rooms and physical therapy gyms requiring full 24 FPS and 33-kpt tracking |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>1/2.8" Sensor + 1 TOPS TPU | SOPHGO SG2002 · 1 TOPS TPU<br/>512MB DDR3 | **Cost-Optimized Tier**. Senior community centers, home training spaces with single-cable PoE |

---

## Deployment and Setup

### 1. Mounting and Optical Placement
- **Mounting Height**: **1.2 ~ 1.4 m** (chest level), pitch angle within 0° ~ 5°; avoid high ceiling downward angles;
- **Working Distance**: **2.0 ~ 3.5 m** for standing full-body exercises; **1.5 ~ 2.5 m** for seated upper-extremity training;
- **Lighting**: Recommended illumination ≥ 150 Lux; avoid harsh backlight from windows.

### 2. Software Installation: Recommended Official Toolchain

This solution is integrated with the official Seeed automation framework. The primary recommended method uses **`solution-cli` (or AI Solution Assistant)** for automated precheck and deployment, with GUI options also supported:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>View Field Deployment Guide 🖱️</font></span></strong>
    </a>
</div><br />

#### Recommended: Automated Deployment with `solution-cli` (CLI Best Practice)
`solution-cli` is Seeed's unified deployment and sizing toolkit for industrial edge AI solutions (see [Deployment Guide](https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy)). Deploy with three steps without manually extracting tarballs:

```bash
# 1. Install or run solution-cli (skip if already available)
npm install -g @seeed-studio/solution-cli
# Or run on the fly via npx: npx @seeed-studio/solution-cli doctor

# 2. Diagnose local environment and scan network for reCamera hardware
solution-cli doctor
solution-cli device scan

# 3. Query solution details and deploy to target camera
solution-cli hub get rehab_posture_analysis --locale en
solution-cli deploy --solution rehab_posture_analysis --target recamera --host 192.168.42.1
```
> **Tip**: If you are using AI agents like Claude Code, Codex, or Antigravity, prompt directly: *"Please deploy reference design rehab_posture_analysis to my connected reCamera Pro using solution-cli"*. The agent invokes the built-in skill to run pre-flight checks and mount the pipeline automatically.

#### Alternative: GUI Installation (SenseCraft Web / App Center)
1. Connect your PC to the reCamera hotspot or local IP, open `http://<camera_ip>` in a browser;
2. Navigate to **App Center**, search for `rehab_posture_analysis`;
3. Click **Install / Run**; the device automatically downloads the pre-compiled INT8 engine and kinematics pipeline;
4. Click **Open Live HUD** to display the real-time interactive screen on a local display or tablet.

---

## 33-Keypoint Model Retraining vs Standard 17-Keypoint

### 1. Why Retrain a 33-Keypoint Topology?
Conventional COCO 17-keypoint models suffer from significant limitations in physical therapy:
- **Distal Limb Truncation**: Truncating at wrists prevents tracking forearm pronation/supination and finger grasp extension, losing the true biomechanical lever arm endpoint;
- **Loss of Plantar Support Triangle**: A single ankle landmark cannot form a foot support base. In squat analysis, it fails to capture heel lifting compensations and ankle overpronation.

This solution retrained a **YOLO11n-Pose 33-Keypoint model** adhering to the MediaPipe / BlazePose anatomical standard:

```
                    0: Nose
              1-3: Left Eye   4-6: Right Eye
                 7: Left Ear   8: Right Ear
                 9: Mouth (L) 10: Mouth (R)
                        │
            11: L Shoulder ───┴─── 12: R Shoulder
             │                      │
            13: L Elbow            14: R Elbow
             │                      │
            15: L Wrist            16: R Wrist
         ┌───┼───┐              ┌───┼───┐
     17:Pinky 19:Index 21:Thumb 18:Pinky 20:Index 22:Thumb
                        │
            23: L Hip ─────┴───── 24: R Hip
             │                      │
            25: L Knee             26: R Knee
             │                      │
            27: L Ankle            28: R Ankle
         ┌───┴───┐              ┌───┴───┐
     29:Heel   31:Toe       30:Heel   32:Toe
```

### 2. Standard 17-Point vs Custom 33-Point Retrained Model

| Dimension | Standard COCO 17-Point | Custom 33-Point Retrained | Clinical Advantage |
|---|---|---|---|
| **Distal Extremity Resolution** | Truncated at wrists & ankles | 6 hand landmarks + 4 plantar landmarks | Finger extension and foot support triangles fully resolved |
| **Compensation Detection Rate** | ~68% (frequent false negatives on shrugging & heel lift) | **94.2%** (acromion height delta + plantar angle) | Accurately catches trapezius shrugs and knee collapse |
| **Edge Compute Latency** | 35.0 ms (RV1126B) | **41.7 ms** (RV1126B INT8) | Adding 16 points adds only 6.7ms, maintaining 24 FPS throughput |
| **Model Size (INT8)** | 3.8 MB | **4.2 MB** | Minimal increase, comfortably fits 512MB-2GB embedded memory |

---

## Developer Extension: Two-Stage Cascade Model Architecture

The modular architecture allows developers to cascade specialized secondary micro-models on top of the 33-keypoint backbone:

```
Full Video Stream (1080p)
   │
   ▼ [Stage 1: Primary Localization] YOLO11n-Pose 33-kpt Detector
   │                                 Outputs full skeleton and joint bounding boxes
   │
   ├──▶ Branch A: [Fine Hand Therapy] Crop wrist ROI (128×128)
   │                                  Cascade 21-point Hand Landmark model (finger flexion / squeeze ball)
   │
   ├──▶ Branch B: [Foot & Gait Analysis] Crop ankle/foot ROI (128×128)
   │                                     Cascade 6-point plantar contact classifier (flat foot / heel strike)
   │
   └──▶ Branch C: [Head & Cervical Kinematics] Crop head/face ROI (160×160)
                                               Cascade Head-Pose 3D Euler angle model (cervical spine ROM)
```

### Implementation Guide:
1. **Crop ROI**: Extract wrist coordinates `[15, 17, 19, 21]` from `keypoints_33` and expand by 15% convex hull margin;
2. **Lightweight Inference**: Feed the cropped tensor into a secondary MobileNetV4 / ShuffleNet on the NPU/TPU (latency ~4–6ms);
3. **Temporal Fusion**: Synchronize the sub-model results with the primary state machine to deliver composite biomechanical evaluations.

---

## Benchmarks and Telemetry

Evaluated across 50 clinical physical therapy recording sessions:

### 1. Hardware Performance Matrix
| Platform | Model & Runtime | Resolution | Latency | FPS | Accelerator Utilization |
|---|---|---|---|---|---|
| **reCamera Pro** | YOLO11n-Pose 33kpt INT8 (RKNN) | 640×640 | 38.2 ms | **24.0 FPS** | ~65% |
| **reCamera 2002** | YOLO11n-Pose 33kpt INT8 (CVI TPU) | 512×512 | 62.5 ms | **14.2 FPS** | ~82% |

### 2. Clinical Measurement Accuracy
- **ROM Accuracy**: Compared against gold-standard VICON optical capture, shoulder abduction MAE is **±2.1°**;
- **Compensation Recall**: Trapezius shrugging **95.2%**, knee valgus **93.8%**;
- **Debounce Stability**: 3-frame debounce filters out 98.6% of tremor-induced partial repetitions.

---

## Interfaces and Output Protocols

### 1. Live Rehabilitation Display (WebSocket)
- **Endpoint**: `ws://<camera_ip>:8124/ws/kinematics`
- **Payload Schema**:
```json
{
  "timestamp": 1793339665120,
  "phase": "PEAK_HOLD",
  "valid_reps": 5,
  "rom_degrees": 92.4,
  "quality_score": 95.0,
  "compensation": {
    "detected": true,
    "type": "SHOULDER_SHRUG",
    "deviation_val": 14.2
  },
  "keypoints_33": [
    {"id": 0, "name": "nose", "x": 0.512, "y": 0.185, "conf": 0.94}
  ]
}
```

### 2. Hospital EMR / HIS System Integration (MQTT)
- **Broker**: `mqtt://<camera_ip>:1883`
- **Topic**: `rehab/telemetry/<camera_sn>/session`
- Publishes structured exercise session reports and continuous compensation logs upon repetition completion.
