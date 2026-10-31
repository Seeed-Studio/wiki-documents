---
description: License plate recognition and whitelist barrier opening with your existing gate cameras and one edge host — hardware, deployment, interfaces and measured data on Jetson and RK hosts
title: Edge License Plate Recognition — Selection, Deployment and Measured Data
sidebar_label: 'Edge License Plate Recognition'
keywords:
  - license plate recognition
  - ANPR
  - parking barrier whitelist
  - automatic gate opening
  - edge ANPR
  - Jetson Orin Nano
  - Jetson Orin NX
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg
slug: /solutions/edge-license-plate-recognition
sidebar_position: 20
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/solutions/edge-license-plate-recognition/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Before you use it]
Supports mainland China single-row blue plates (7 characters) and green new-energy plates (8 characters); two-row, special-purpose and overseas plates are not supported. The licence of the detection and recognition weights is not yet confirmed; confirm it before commercial distribution.
:::

## What this solution does

Keep the network cameras already mounted at the gate and add one recognition host on site to read plates. When a whitelisted vehicle arrives, the gate controller sends the barrier one opening signal; every vehicle leaves a record with its plate number, confidence and a snapshot. It fits residential, campus and staff car-park gates, and can also run without a barrier as an entry/exit log.

- Deployment package (Docker Compose and configuration): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_plate_recognition)
- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/edge-anpr-plate-recognition)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Plates and video stay on site</h3>
                <p>Recognition runs on the host on site. Snapshots stay there for 7 days by default and leave only when fetched by link.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>30 fps at 1080p</h3>
                <p>reComputer J30 Series and RK3576 Series both process 1080p at 29–30 fps; see "Performance and measured data".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Keep your cameras</h3>
                <p>Existing 1080p network cameras connect over RTSP; the host pulls the stream across the LAN.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>One record per vehicle</h3>
                <p>Each vehicle is reported once with plate number, plate type, confidence and a snapshot link; a parking system subscribes to one MQTT topic.</p>
            </div>
        </li>
    </ul>
</div>

### On a real device

The recognition host's own browser preview page: the plate is boxed and labelled with its number and confidence, and the last five reads are listed on the right.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg" alt="Plate preview on a reComputer J30 Series: blue plate 皖A62599 read at 0.98, with the last five reads on the right"/>
</div>

The input frames are stills from the CCPD public test set (MIT licence) looped over RTSP, not site footage.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-2-jetson-green-front-20261009-a3ab0b16.jpg" alt="reComputer J30 Series reading the green new-energy plate 皖AF10528 at 0.87"/>
</div>

## Hardware you need

Three things on site: the gate camera, one recognition host, and, for automatic opening, a gate controller plus an interposing relay.

**① Gate camera**: your existing network camera, 1080p or better, with an RTSP stream.

**② Recognition host**: pick one; one host per gate camera.

| | Recognition host | Measured (1080p input) | Choose it when |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin Nano, JetPack 6.2 | 30 fps | Default choice |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Jetson Orin NX, JetPack 6.2 | Same package as J30 | The host also runs other models |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>On-board NPU | Deployment and output measured | The site standardises on Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Series](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>On-board NPU | 29–30 fps | Cost comes first |

**③ Gate controller (optional)**: [reComputer R1100 Series (R1124-10)](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html). It runs the MQTT broker, holds the whitelist, and signals the barrier from a digital output through a DIN-rail interposing relay. Closing stays with the barrier's own loop or radar.

Camera, recognition host and gate controller sit on the same LAN; wired connections are recommended.

## Deploying on site

### 1. Mount the camera

:::tip[The plate must be legible in the picture]
Mount the camera 3–8 m from the lane at a fixed position, aimed where plates pass. Recognition only runs inside a configured region of the picture (the lower middle by default); check that region again whenever the camera moves.
:::

### 2. Install the software: three steps

Device-by-device steps are on the reference design page; this is the outline.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge-anpr-plate-recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Choose a setup and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Gate controller (optional)**: install the MQTT broker and the gate service on the R1124-10, upload the whitelist CSV, and confirm the barrier moves with the test-open endpoint.
2. **Recognition host**: enter the camera's RTSP address and the MQTT broker address, then deploy. The first deployment downloads the runtime and models; after that it runs offline.
3. **Check**: open the preview page on port 8080 of the host; passing vehicles show a boxed plate, and the plate topic carries one record per vehicle.

Before going live, check the reads against real plates using daytime and night footage from your own gate.

## Interfaces

Results go over MQTT to the broker you entered at deployment (usually the R1124-10); snapshots and status use HTTP.

- **Parking or billing system**: subscribe to the plate topic, one record per vehicle; reconcile on `plate_normalized`.
- **Barrier**: the R1124-10 checks each plate record against the whitelist and publishes the result on the gate topic. The same plate arriving again within the cooldown is logged as `suppressed` and does not reopen.
- **Your own system**: fetch the snapshot by the link in the record, or monitor the service through the health endpoint.

| Topic / port | Content |
|---|---|
| MQTT `<site>/parking/<camera>/plate` | Plate number, plate type (`cn_blue` / `cn_green`), confidence, voting frames, position in the picture, snapshot link |
| MQTT `<site>/parking/<camera>/gate` | Gate record: `open_pulse` (opened) or `suppressed`, with the matching plate record and whitelist label |
| MQTT `<root>/status` | Service status, published periodically; the last one stays on the broker if the host goes offline |
| HTTP 8080 `/snapshots/{seq}.jpg` | Snapshot linked from the plate record, kept 7 days by default |
| HTTP 8081 `/whitelist` (R1124-10) | GET returns the whitelist CSV, PUT replaces it (a 400 names the failing line); `POST /gate/test` fires one test opening |
| HTTP 8099 `/healthz` | Service status including processing speed |

Snapshots are not embedded in records; a record carries only the link and the snapshot's sha256.

## Performance and measured data

### Processing speed

| Device | Processing speed | Plate detection per frame | Conditions |
|---|---:|---:|---|
| reComputer J30 Series (Orin Nano) | 29.9 fps (measured) | p50 5.6 ms (measured) | 1080p RTSP at 30 fps |
| reComputer RK3576 Series | 29–30 fps (measured) | p50 23.1 ms, recognition 1.8 ms (measured) | Same |

Reproduce: `sensecraft-solutions/solutions/edge_plate_recognition` (deployment package) with input clip `plate-labeled40-1080p-120s.mp4`

### Plate reads

Input is CCPD test-set plate stills, each held for several seconds, streamed at 1080p over RTSP. Ground truth comes from the CCPD file names.

| Device | Input | Result |
|---|---|---|
| reComputer J30 Series | 40 stills | 56 plate records published, 50 match the ground truth (measured) |
| reComputer RK3576 Series | 40 stills | 57 plate records published, 51 match the ground truth (measured) |
| reComputer J30 Series | 8 stills | 5 read correctly, 3 produced no record, 0 wrong plates (measured) |
| reComputer RK3588 Series | 8 stills | 5 read correctly, 3 produced no record, 0 wrong plates (measured) |

One still can produce more than one record while it stays on screen, so record counts exceed still counts. When a plate cannot be read the host publishes nothing: neither device published a wrong plate on the 8 stills.

Reproduce: `sensecraft-solutions/solutions/edge_plate_recognition/gallery/ATTRIBUTION.md` (file names and ground truth of the 8 stills)

### Models and runtimes

| Device | Detection | Recognition | Runtime |
|---|---|---|---|
| reComputer J30 / J40 Series | YOLOX-Tiny, 640×640, FP16 | PlateRecNet (in-house), 96×32, FP16 | TensorRT, hardware decode |
| reComputer RK3588 / RK3576 Series | YOLOX-Tiny, 640×640, INT8 | PlateRecNet, 96×32, INT8 (FP16 output layer) | RKNN runtime 2.3.2, MPP hardware decode |

Parameters that affect results (deployment package `config/plate.json`):

- `plate.roi`: recognition region, lower middle of the picture by default. Redraw it after the camera moves.
- `plate.vote`: up to 7 frames vote per vehicle; a record is published when at least 3 agree with confidence 0.6 or higher.
- `plate.dedup_s`: the same plate is published at most once in 30 s.

### Known degradation

- **Unsupported plate types**: Supports single-row blue (7-character) and new-energy green (8-character) plates only. Double-row yellow, trailers, police and overseas plates are not supported.
- **Camera angle and speed**: Vehicles must enter at an angle ≤ 30° with plate width > 96 pixels in the frame. Acute entry angles (> 45°) or speeds over 30 km/h degrade detection.
- **Glare and headlight overexposure**: Direct glare or high-beam headlights at night can wash out characters. Even supplemental lighting (~5000K) is recommended in unlit gates.

## Data and asset sources

- CCPD (Xu, Z. et al., ECCV 2018): [github.com/detectRecog/CCPD](https://github.com/detectRecog/CCPD), MIT License, Copyright (c) 2017 CCPD. The screenshots on this page use its test-set images; the plates are real plates from the public dataset.
- Detection model code YOLOX: Apache-2.0. The recognition model structure is in-house code. The licence of both sets of trained weights is not yet confirmed; confirm it before commercial distribution.
