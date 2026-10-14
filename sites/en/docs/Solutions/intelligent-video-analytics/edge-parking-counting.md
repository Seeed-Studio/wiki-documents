---
description: Count car-park entries and exits with your existing gate cameras and publish live free spaces — hardware, deployment, interfaces and measured data on Jetson and RK hosts
title: Parking Entry/Exit Vehicle Counting — Selection, Deployment and Measured Data
keywords:
  - parking vehicle counting
  - entry exit counting
  - free parking spaces
  - parking guidance sign
  - line crossing counter
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg
slug: /solutions/edge-parking-counting
sidebar_position: 21
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/solutions/edge-parking-counting/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Before you use it]
One set takes one camera, covering one entrance. Counting relies on vehicles crossing a line drawn on the picture; vehicles that are hidden or do not cross the line are not counted.
:::

## What this solution does

Know how many spaces are left without burying loops in every lane or fitting barrier counters. After deployment you drag a counting line onto the picture in a browser; each vehicle crossing it counts as an entry or exit, and vehicles inside and free spaces go live to your MQTT broker, ready to drive a free-space sign or a parking system. It fits mall and office car parks as well as campus and factory gates.

- Deployment package (Docker Compose and configuration): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_counting)
- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/parking-entry-exit-counting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Video stays on site</h3>
                <p>The picture is analysed on the host next to the gate; only counts leave it.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Counts on the crossing</h3>
                <p>On a reComputer J30 Series all 41 crossings were counted in the right direction; see "Performance and measured data".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Use the cameras you have</h3>
                <p>Existing RTSP network cameras at the gate connect directly; no loops, no barrier changes.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>In and out, by vehicle type</h3>
                <p>Each crossing record carries the direction and the vehicle type (car, motorcycle, bus, truck).</p>
            </div>
        </li>
    </ul>
</div>

### On a real device

The counting host's own browser preview page: the yellow vertical line is the counting line, each vehicle carries a track ID and confidence, and the right panel shows vehicles inside, free spaces and today's totals.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-1-before-20261009-e25d0080.jpg" alt="Entry/exit counting on a reComputer J30 Series: vehicle #48 before the line, 1/120 inside, 24 in and 23 out today"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg" alt="The same vehicle after crossing: today's exits become 24, 0/120 inside"/>
</div>

The two screenshots are 3 s apart. The input is a synthetic test clip (one vehicle image moving back and forth on a grey background), not site footage.

## Hardware you need

Three things on site: the gate camera, one counting host, and an MQTT broker (one already on site, or install Mosquitto).

**① Gate camera**: an existing network camera with an RTSP stream in H.264 or H.265, fixed on the lane.

**② Counting host**: pick one; one host per camera.

| | Counting host | Measured speed | Choose it when |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 Series (J3011)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano, JetPack 6.2 | 30 fps | Vehicles drive through at normal speed |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 Series (J4012)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX, JetPack 6.2 | Same package as J30 | The host also runs other models |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Series](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>On-board NPU | 30 fps | Normal-speed traffic, cost comes first |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>On-board NPU | about 3 fps | Barrier gates where vehicles slow down or stop |

J30 and RK3576 speeds were measured with 640×360 input at 30 fps; RK3588 with 1280×720 input at 5 fps.

The counting host, camera and MQTT broker share a LAN or can reach each other. The first deployment downloads the app (about 0.5–0.7 GB) and models; after that it runs offline.

## Deploying on site

### 1. Mount the camera

:::tip[Vehicles must pass fully across the line]
Fix the camera on the lane so vehicles enter on one side of the picture and leave on the other. On an RK3588 host a vehicle has to stay in view for about 1 s or longer around the line to be counted reliably, which suits gates with a barrier.
:::

### 2. Install the software: three steps

Device-by-device steps are on the reference design page; this is the outline.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/parking-entry-exit-counting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Choose a setup and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Deploy the counting host**: enter the camera's RTSP address, the MQTT broker and the total number of spaces; deployment checks the board's runtime libraries.
2. **Draw the counting line**: drag the line on the preview page, pick which side means "in", and save.
3. **Check**: after a vehicle crosses, the in or out count on the preview page goes up by one and a crossing record arrives over MQTT.

## Interfaces

Counts go over MQTT to your broker; status uses HTTP.

- **Free-space sign / parking system**: subscribe to the lot-status topic and read free spaces; switch to "Full" at zero.
- **Traffic statistics**: subscribe to the crossing topic and count by direction and vehicle type.
- **Several entrances**: deploy one set per entrance and sum them by site ID upstream.

| Topic / port | Content |
|---|---|
| MQTT `<site>/parking/<entrance>/crossing` | One per crossing: direction (in / out), vehicle type, confidence, vehicles inside and free spaces after the crossing |
| MQTT `<site>/parking/<entrance>/occupancy` | Vehicles inside, total spaces, free spaces, today's entries and exits; sent after every crossing |
| HTTP 8080 `/preview` | Browser preview: picture, counting line, inside and free counts |
| HTTP 8099 `/healthz` | Whether frames are arriving and the processing rate |

## Performance and measured data

### Counts and processing speed

| Device | Input | Processing speed | Count result |
|---|---|---|---|
| reComputer J30 Series (Orin Nano) | 640×360, 30 fps | 29.98 fps, per-frame analysis p50 3.6 ms (measured) | All 41 crossings counted, every direction correct (measured) |
| reComputer RK3576 Series | 640×360, 30 fps | 30.0 fps, container CPU 14.9%, memory 95 MiB (measured) | 19 crossing events: 9 in, 10 out (measured) |
| reComputer RK3588 Series | 1280×720, 5 fps | 3.0 fps, per-frame analysis p50 17.8 ms (measured) | 107 crossing events (measured) |

All inputs are a synthetic test clip: one vehicle image crossing back and forth on a grey background. The RK3588 processes about 3 fps, below the 5 fps input, so a vehicle has to stay near the line for about 1 s or longer.

Reproduce: `sensecraft-solutions/solutions/edge_parking_counting` (deployment package) with the synthetic clip `count-synthetic-120s.mp4`

### Models and runtimes

| Device | Vehicle detection | Runtime |
|---|---|---|
| reComputer J30 / J40 Series | YOLOX, 416×416, FP16 | TensorRT |
| reComputer RK3588 / RK3576 Series | YOLOX, 416×416, INT8 (w8a8) | RKNN, MPP hardware decode |

Parameters that affect counting (deployment package `config/counting*.json`):

- `counting.line` / `in_side`: line position and which side counts as "in"; change them on the preview page after deployment.
- `counting.min_track_frames`: a vehicle must be tracked for at least 3 consecutive frames before it counts, so at low frame rates it needs to stay in view longer.
- `counting.capacity`: total spaces; free spaces = total − vehicles inside.

### Known degradation

- **Tailgating and parallel occlusion**: When following distances are under 1 m or two vehicles cross simultaneously side by side, bounding boxes can merge or occlude, causing undercounts or flipped direction vectors. Physical lane dividers are recommended.
- **Pedestrian and bike interference**: The model is trained on motor vehicles. Dense pedestrian crossings or motorbikes passing tightly beside a car can fragment tracking IDs.
- **Speed and tracking frames**: Crossing the counting line requires at least 3 tracked frames. Gate lanes should have an advisory speed limit ≤ 15 km/h; high-speed drive-throughs can cause missed counts.

## Data and asset sources

- Screenshots and count results use a synthetic test clip; the original source of the vehicle image is still to be confirmed.
- Detection model code YOLOX: Apache-2.0.
