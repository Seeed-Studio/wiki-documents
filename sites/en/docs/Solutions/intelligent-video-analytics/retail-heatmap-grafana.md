---
description: Building a local people-flow heatmap for stores and exhibition spaces — what devices you need, how to deploy it, which interfaces it exposes, and measured frame rates on three devices
title: 'Retail People-Flow Heatmap: Build, Deploy, and Measured Results'
keywords:
  - people flow heatmap
  - footfall analytics
  - dwell time
  - entry exit counting
  - on-device AI
  - people counting
  - heatmap
  - edge AI
  - reCamera
  - reComputer
  - Hailo-8
  - RK3588
  - MQTT
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png
slug: /solutions/retail-heatmap-grafana
sidebar_position: 3
last_update:
  date: 09/17/2026
  author: seeed-solutions-hub
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/solutions/retail-heatmap-grafana/
generated_from: sensecraft-solutions@recamera_heatmap_grafana
---

:::caution[Usage notice]
The heatmap records only **where people are**. It does not identify anyone and does no face matching. Detection accuracy has not been evaluated; see [Performance and measured data](#appendix-measured-data).
:::

## What this solution does

A camera looks down over the floor, locates every person in the frame and keeps tracking them, then writes where people stop, how long they stay and how many enter and leave into a local database, shown on a Grafana dashboard and a heatmap. Built for retail stores, chain-store pilots, exhibition halls, and any indoor space where layout decisions depend on where people walk.

Sites that already have IP cameras keep them and add one AI host that does the detection. Sites with no cameras use a reCamera, where detection runs inside the camera. Video is processed on site and the backend stores only numbers. On a live RTSP stream, reComputer R2000 series (Hailo-8) measured 14.3 FPS (15 FPS source), and reComputer RK3588 / RK3576 series measured 13.2 / 13.3 FPS.

- Open-source implementation (reCamera route): [github.com/xr686/reCamera-with-Heatmap](https://github.com/xr686/reCamera-with-Heatmap)
- Open-source implementation (IP camera + Jetson route): [github.com/bleaaach/yolo11-grafana-influxdb](https://github.com/bleaaach/yolo11-grafana-influxdb)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/recamera_heatmap_grafana)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Processed on site, backend stores numbers</h3>
                <p>Detection runs on the camera or the AI host. What reaches the backend is positions as percentages, counts and dwell times. Live preview goes through the local video gateway and stays on your network.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Use the cameras you have</h3>
                <p>Any IP camera with an RTSP stream works, whatever the brand; nothing on the wall needs replacing. With no cameras, a reCamera with the retail analytics app installed starts producing data.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Five hardware paths, one dashboard</h3>
                <p>reCamera 2002, reCamera Pro, Rockchip, Hailo-8 and Jetson all publish the same message format. Several stores can mix hardware and still report to one backend.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>No internet needed once deployed</h3>
                <p>Broker, database and dashboard all run on the local backend. The internet is used only during deployment to pull images and models.</p>
            </div>
        </li>
    </ul>
</div>

### What the devices actually output

Results from every detector land on one Grafana dashboard: the live camera feed on the left, and panels aggregating occupancy, dwell states and entry/exit counts over time.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png" alt="Grafana dashboard: live camera feed plus people-flow, dwell and entry/exit panels aggregated by hour, day and week"/>
</div>

The same position data also draws a heatmap. Darker areas are where people stayed longer or passed more often. By default it overlays the camera view; after calibration it can overlay your store floor plan.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/heatmap-demo-c6a45c6f.png" alt="Spatial heatmap: tracked positions accumulated into heat zones, overlaid on the camera view"/>
</div>

## What hardware you need

Three things: a camera that sees the floor, something that detects people, and one backend that stores the data and draws it. The backend is shared by every route.

**① Camera** — if you already have IP cameras with an RTSP stream, keep them; any brand works and nothing on the wall changes. If you have none, reCamera 2002 / reCamera Pro put the camera and the compute in one unit, running detection, tracking, dwell states and entry/exit counting inside the camera.

**② Detection host** — needed only on the IP-camera routes. Every host runs the same tracking and dwell logic; the difference is the accelerator.

**③ Dashboard backend** — runs the MQTT broker, InfluxDB, Grafana and the video gateway. It can be an always-on computer or a reComputer R1100; on the IP-camera routes it can share the box with the detector.

| | Device | What it does | When to pick it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-64GB-p-6252.html)<br/>camera and compute in one, 1080P | Detection + tracking + counting | Close to the counted area, small coverage, fastest way to get one stream running |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>camera and compute in one, 4K | Detection + tracking + counting | Farther away, large coverage, where distant people still need enough pixels to box |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>the same preset also supports reComputer RK3576 series | Detection host | You already run Rockchip boards; video decode runs in hardware |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrial-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer R2000 series (R2035-12, Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | Detection host | A fanless industrial box for a cabinet or a utility closet |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 series (J4012)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>and reComputer J50 series | Detection host | Several cameras on one host |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-113991334--recomputer-r1125-10-45font.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 series (R1124-10)](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html) | Dashboard backend | No always-on computer on site to run the dashboard |

Other prerequisites: Docker on the backend machine, at least 2 GB of free disk, ports 1883, 3000, 8080 and 8086 free, and cameras and backend on the same network segment so ONVIF camera discovery works.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/architecture-en-0432d229.png" alt="People flow heatmap device composition: IP cameras send RTSP to a reComputer AI host, the host and reCamera 2002 / Pro publish MQTT to a reComputer R1100 backend, and the Grafana dashboard opens over HTTP"/>
</div>

Device layout: IP cameras hand RTSP video to the AI host, while a reCamera runs detection inside the camera; detectors output only position percentages and counts, no images; every detector reports to one backend (MQTT broker, InfluxDB, Grafana, go2rtc video gateway), so one dashboard covers every camera. Live preview is the browser pulling from the camera through the local video gateway, not through the backend database.

### Negative Selection Boundaries

- **Mounting Height and Field of View**: reCamera 2002 is suited for 3–4 m ceilings; for heights above 5 m or large atriums, do not pick 2002, pick reCamera Pro with 4K resolution.
- **Identity Tracking**: This solution generates anonymous density heatmaps only, not face recognition or person re-identification.

## Installing on site

Two parts: mount the camera correctly, then install the software.

### 1. Mounting the camera

:::tip[Placement requirements]
Mount the camera high, looking down at the area to count, 3–5 m from the target. People should take up at least about 30 × 30 pixels in the frame, otherwise they cannot be boxed. Eye-level views, angles with heavy mutual occlusion, and distant shots where people are too small all cause missed detections.
:::

### 2. Installing the software — three to four steps

Per-device instructions live on the reference design page, where you answer a few questions about the site and download the matching application package.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/recamera_heatmap_grafana" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configure and download the app package 🖱️</font></span></strong>
    </a>
</div><br />

1. **Bring up the backend** — start the broker, InfluxDB, Grafana and the video gateway on the always-on machine. This step discovers ONVIF cameras on the same segment; for cameras on another segment, enter the RTSP URLs in the deployment form.
2. **Make the detector publish** — on the reCamera routes, install the retail analytics app on the camera; on the IP-camera routes, deploy the detector to the AI host. Both ask for three things: the MQTT broker address (the machine from step 1), an **installation name** and a **camera ID**. Use one installation name per store and one ID per camera; that is how the dashboard tells devices apart.
3. **Calibrate the floor plan (optional)** — open the heatmap on port 8080, upload a camera snapshot and the store floor plan, and click four matching points on each. Pick widely spaced landmarks such as pillars, doorways and wall corners. Calibration is saved on the server, and several cameras can share one plan. Skip this if the camera view is all you need.
4. **Open the dashboard** — Grafana on port 3000, the live heatmap on 8080, the video gateway on 1984.

Upstream states **15 minutes** end to end. The Jetson route is the exception: the first deployment builds a TensorRT engine on the device, which takes 2–5 minutes and is reused afterwards.

## Which interfaces it exposes

Every detector publishes the same message format to the backend broker. Three ways in, depending on what you already run:

- **The built-in dashboard is enough** — nothing to integrate. The Grafana panels already cover people-flow trends by hour, day and week, plus dwell and entry/exit counts, and panel data can be exported directly.
- **An existing BI or analytics system** — subscribe to the MQTT results topic for live data, or query InfluxDB on the backend for history.
- **Your own system or API** — subscribe as above; the payload carries zone counts plus each tracked person's position and dwell time, enough to draw your own panels. Live frames come from the local video gateway on port 1984.

### Full topic and payload reference

| Topic / port | Content | Retained |
|---|---|---|
| `<site>/retail-vision/results/<camera-id>` | One batched JSON per second: zone counts (occupancy, browsing, engaged, needs assistance, entries, exits, average dwell) plus each tracked person's `track_id`, position and dwell time | No |
| `<site>/retail-vision/status` | `online` / `offline` | Yes |
| MQTT broker 1883 | Results from every detector | — |
| Grafana 3000 | People-flow trends by hour, day and week; dwell and entry/exit counts | — |
| Live heatmap 8080 | Heat overlay on the camera view or on your floor plan; the gear icon opens calibration | — |
| Video gateway 1984 | Camera discovery and live preview | — |

`<site>` and `<camera-id>` are set in the deployment form and accept letters, digits, hyphens and underscores only.

**Positions are published as percentages of the frame.** Each detector converts the centre of the tracked box into a percentage before publishing, so one floor-plan calibration holds at any camera resolution; swapping in a higher-resolution camera does not require recalibrating.

**Messages are batched once per second.** On reCamera this is `--mqtt-interval-ms 1000`; without it the app publishes per frame (about 10 messages per second per camera). On the AI-host routes it is `publish_hz: 1.0` in the detector config. With several cameras on one site, whether the broker keeps up depends on this parameter.

**reCamera Pro does not output average dwell time**, so the Avg Dwell panel stays empty on that route. Other metrics are unaffected.

## Performance and measured data {#appendix-measured-data}

All four AI-host routes run the same tracking and dwell logic; the detection model and runtime differ per accelerator.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/xr686/reCamera-with-Heatmap" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reCamera-with-Heatmap</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

What follows is measured device data for throughput and message rate, from single-stream live sources on the RK and Hailo routes.

### Which devices were measured

| Device | Accelerator | Model delivered | Verification status |
|---|---|---|---|
| reComputer RK3588 series | RK3588 NPU | YOLO11n rawhead FP16 | ✅ Live stream on hardware |
| reComputer RK3576 series | RK3576 NPU | YOLO11n rawhead FP16 | ✅ Live stream on hardware |
| reComputer R2000 series (R2135-12, Hailo-8) | Hailo-8 | YOLOv8n INT8 | ✅ Live stream on hardware |
| reCamera 2002 | SG2002 NPU | YOLO11n INT8 | Deployment verified |

### Performance detail {#performance-detail}

#### End-to-end frame rate on a live stream

The input is real RTSP footage. The measurement covers the **full path from camera frame to results arriving at the backend**: decode + detection + tracking + dwell logic + MQTT publish, one stream per host.

| Detection host | Model | Tracking rate | MQTT message rate | Source |
|---|---|---:|---:|---|
| reComputer R2000 series (R2135-12, Hailo-8) | YOLOv8n INT8 | **14.3 FPS** | 0.94 msg/s | Measured (440 frames / 30.7 s) |
| reComputer RK3588 series | YOLO11n FP16 | **13.2 FPS** | 1.00 msg/s | Measured |
| reComputer RK3576 series | YOLO11n FP16 | **13.3 FPS** | 1.00 msg/s | Measured |

- **The two RK boards**: MPP hardware decode was active and the message rate was 1.00 msg/s.
- **The Hailo 14.3 FPS is limited by the source frame rate.** Unpaced, the same pipeline reached **234 FPS**, roughly 15× the 15 FPS source.
- **The difference between 0.94 and 1.00 msg/s comes from how it was averaged**: both target one message per second, and 0.94 is the average over a 30.7 s window.
- **Reproduction**: End-to-end and standalone inference benchmarks are located in repository `benchmarks/run_heatmap_bench.sh`; run `./run_heatmap_bench.sh --profile rk3588`.

#### Standalone inference speed

| Detection host | Model | Per inference | Source |
|---|---|---:|---|
| reComputer J40 / J50 series | YOLO11n FP16 (TensorRT) | 9.7 ms | Standalone inference figure provided upstream |
| reCamera 2002 | YOLO11n INT8 | about 10 FPS | In-camera rate stated in the upstream app notes |

These two rows do not compare directly with the end-to-end table above: 9.7 ms excludes decode, tracking and publishing, and about 10 FPS is the in-camera processing rate, not the rate at which results reach the backend.

#### Multi-stream

Every number above came from one host watching one camera. "Several cameras on one host" is the division of labour between presets (the Jetson route takes that role). One backend can accept any number of detectors at the protocol level, separated by installation name and camera ID; the limit is on the AI-host side.

### Runtimes and key parameters

| Detection host | Detection model | Precision | Runtime | How the model is delivered |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n (`yolo11n_detection_cv181x_int8.cvimodel`) | INT8 | SG2002 camera NPU | Shipped with `retail-vision_1.5.1_riscv64.deb`, verified by sha256 |
| reCamera Pro | Bundled with the App Center `retail-vision` app | Set by the app | Camera NPU | **Not included in the package**; install it from the device App Center first |
| reComputer RK3576 / RK3588 series | `yolo11n_pose_rawhead_fp16.<board>.rknn` | FP16 | RKNN | Delivered per board and verified by sha256; the wrong board model will not load |
| reComputer R2000 series (R2135-12, Hailo-8) | YOLOv8n (`yolov8n.hef`) | INT8 | HailoRT 4.21 + GStreamer | Fetched from the Hailo Model Zoo v2.15.0 hailo8 directory, pinned by sha256 |
| reComputer J40 / J50 series | YOLO11n (`yolo11n.engine`) | FP16 | TensorRT | The engine is **built on the device** (`ultralytics` export, `half=True`, `imgsz=640`): 2–5 minutes the first time, reused afterwards |

- **Hailo is locked to HailoRT 4.21.** Deployment checks the libraries on the board and stops, printing the installed version, if they do not match. One Hailo-8 runs one application at a time; if another Hailo app holds the accelerator, the detector will not start.
- **RK boards need the NPU driver present** (`/usr/lib/librknnrt.so`).
- **On reCamera the analytics app takes the camera exclusively**: installing it disables Node-RED autostart, and the two cannot run together.

Parameters that change deployment behaviour (shipped values on the RK and Jetson routes):

- `dwell_min_duration` (1.5 s) — a person counts as dwelling only after moving slower than `dwell_speed_threshold` (10.0) for this long, so turning around in front of a shelf does not count.
- `dwell_assistance_threshold` (20.0 s) — dwell time beyond this enters the needs-assistance state.
- `avg_person_height_m` (1.7) — converts the speed threshold from pixels to real distance. Where the average height of the people on camera differs substantially from 1.7 m, dwell detection becomes looser or stricter across the board.

### Known degradation

- **Placement.** The camera must be mounted high, 3–5 m from the target, with people at least about 30 × 30 pixels in frame. Eye-level views, distant shots and heavy occlusion all prevent people from being boxed, and a person who is not detected leaves the heatmap blank with no error raised.
- **Floor-plan calibration is four manually clicked points.** Reference points that are close together or collinear amplify positional error. Moving or re-aiming the camera invalidates the calibration and it has to be redone — **a wrong calibration raises no error**, it just draws the heat somewhere else.
- **reCamera Pro's Avg Dwell is always empty**, because the app does not output that field.
- **On RK, hardware decode falls back to software decode when it is not active.** A clearly low frame rate together with a saturated CPU is the symptom; the Jetson route does not fall back (`fallback: none`).

## Sources and licences

- **Detection models** — the Hailo route uses `yolov8n.hef` from the [Hailo Model Zoo](https://github.com/hailo-ai/hailo_model_zoo) v2.15.0 hailo8 directory, pinned by digest rather than re-hosted. The RK route reuses `yolo11n_pose_rawhead_fp16.<board>.rknn` already published by fall_detection. The Jetson route exports `yolo11n.engine` on the device with `ultralytics`.
- **Model licensing** — the detectors use YOLO-family models (YOLO11n, YOLOv8n). Ultralytics YOLO models are AGPL-3.0 unless commercially licensed, so confirm model licences, or substitute a compatibly licensed model, before shipping a product.
- **Backend components** — the MQTT broker, InfluxDB, Grafana and the go2rtc video gateway are deployed from their official images. Grafana's default credentials are `admin` / `admin`; change them right after commissioning.
- **Images** — the Grafana dashboard and heatmap screenshots come from the upstream solution asset library; the architecture diagram is drawn in-house. No identifiable person appears in the demo imagery.
