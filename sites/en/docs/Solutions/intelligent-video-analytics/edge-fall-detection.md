---
description: Building a local fall-alert system for elder care, assisted living and home care — what devices you need, how to deploy it, which interfaces it exposes, and measured data across seven devices
title: 'On-Device AI Fall Detection: Build, Deploy, and Measured Results'
keywords:
  - fall detection system
  - fall alert
  - nursing home fall alert
  - on-device AI
  - pose estimation
  - fall detection
  - edge AI
  - reCamera
  - reComputer
  - Jetson
  - Hailo-8
  - MQTT
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png
slug: /solutions/edge-fall-detection
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: seeed-solutions-hub
createdAt: '2026-09-01'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Usage notice]
Assistive alert only. Not a certified medical or life-safety device, and not a replacement for in-person rounds.
:::

## What this solution does

Install a camera in the room. When someone falls, a message reaches whoever needs to see it — the nursing station, a family member's Home Assistant, the NVR at the front desk, or your own system — within seconds. Built for fixed-room settings: nursing homes, rehab centers, home care, single-occupant dorms. Measured on a public dataset: 95.8% fall recall and 1.4 s on average from the fall to the message going out (details under "Performance and measured data" below).

- Open-source implementation: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Runs locally, no video to the cloud</h3>
                <p>Detection, decision and messaging all run on the on-site device; only a text message of a few hundred bytes crosses the network. Alerts keep working offline, and there is no per-camera cloud subscription.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Works out of the box</h3>
                <p>Install the app package for your device and alerts start. The model, runtime and decision thresholds ship frozen in the package; no training or tuning needed.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Use the cameras and systems you have</h3>
                <p>Existing IP cameras connect over RTSP with no change on the camera. Alerts go out over MQTT: Home Assistant picks them up via auto-discovery, and an NVR or nurse-call system subscribes to one topic.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source</h3>
                <p>Per-platform model conversion, Docker orchestration and decision-weight training scripts are all in the repo, so you can retrain the decision weights on footage from your own site.</p>
            </div>
        </li>
    </ul>
</div>

### Live demo

What the device actually outputs: a skeleton overlaid on the person, a box labeled with that person's track id and current state, and in the top right, how many of the three decision features currently hold.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="A confirmed fall on reComputer J30 / J40 — skeleton, tracking state and evidence count come from the live MQTT message"/>
</div>

`#12 FALLEN` is that person's track id and current state; `Evidence: 2/3` in the top left means two of the three decision features hold. The animated state transition is in [the setup steps below](#step-2-install-the-software).

### Alarm panel (optional component)

The alarm panel is bundled in the compose stack on the reComputer J30 / J40, RK and R2000 presets. On the two reCamera presets it is an optional component on a separate host.

Once the fall detector publishes events, the alarm panel handles what follows: each room is a zone with its own rules, an alarm opens, someone on duty confirms or dismisses it on a one-page console, and the confirmed alarm goes out as a webhook or an MQTT message with the operator's name on it. Built for assisted living, home care and any site where each alarm has to be traceable to a person afterwards.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Three alarm kinds, decided per zone</h3>
                <p>A fall event from the detector; a zone empty past its <code>no_person_timeout</code>; a person whose bbox centre has not moved past its <code>no_motion_timeout</code>. A bathroom and a bedroom get different timeouts.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Operator confirms before notifying</h3>
                <p>5 s evidence window, then 60 s for an operator. Confirm and dismiss are both recorded against whoever pressed them.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Delivery you can audit</h3>
                <p>A confirmed alarm not notified within 5 s moves to escalated and retries every 30 s. Measured on local replay: 3 of 3 queued alarms recovered after a 4 s outage, 0 duplicates.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>No video in the notification</h3>
                <p>Alarm id, kind, zone, stream id, timestamp, operator, idempotency key. Snapshot capture is a switch that is off by default.</p>
            </div>
        </li>
    </ul>
</div>

#### What the console shows

The operator works from the confirmation console only: the alarm list with each alarm's current state, the voice check-in verdict when that option is on, and confirm/dismiss buttons that write the operator's name into the audit trail. The alarm service serves the console on HTTP 8080.

The console screenshots below use **replayed data**: synthetic bbox and track data, with no camera footage and no people in frame.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="Confirmation console home: room list on the left, alarm stream on the right, each alarm with kind, zone and current state"/>
</div>

Opening one alarm gives its whole history — event time, state transitions, and who pressed confirm.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="Single room detail: zone configuration, current occupancy and the alarm history for that room"/>
</div>

## What hardware you need

Two things are on site: the camera that produces the picture, and the host that runs detection.

**① Camera** — Already have an IP camera? Use it as-is over RTSP; nothing on the camera side needs to change. If not, the reCamera 2002 / Pro combines camera and compute in one unit — plug it in and it's ready.

**② Detector host** — The device that runs detection and decision-making; it also decides how many streams you can run and what it costs. With an existing camera, this is a separate box; with reCamera, the camera is the detector host.

| | Detector host | Streams per unit | When to pick it |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Camera and compute in one unit | 1 | One room, the fastest way to get a single alert working |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | Already standardized on Rockchip boards |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | Need one box to handle many streams |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | Multiple rooms, and want headroom to grow |

Stream counts are derived from measured accelerator throughput (see "Stream counts" below).

Beyond that, all you need is a network — the device and the receiver just need to be on the same LAN; no internet access is required.

### Alarm panel host

Three things: whatever produces the detection events, one host that decides what becomes an alarm, and whatever receives the notification. The third is your own system, so the choice is really about the first two.

**① The event source** — either RTSP cameras you already own, in which case the detector is deployed onto the alarm host and points at your stream, or reCamera cameras that already run the detector themselves, in which case nothing about detection changes.

**② The alarm host** — this is the box that runs zones, timeouts, the state machine, the SQLite audit store, the confirmation page and the delivery queue. On two of the three packages it also runs the detector.

| | Alarm host | Detector runs | When to pick it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Detector, alarm service, broker and console on one Jetson | On this box, TensorRT engine built on first deploy | The cameras exist and the site has no gateway yet. Takes the most streams of the three packages |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Same stack, larger pose model | On this box, YOLO11m instead of YOLO11s | More rooms than one J3011 can watch, or a larger pose model is wanted. Same package, a different option in the deploy form |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Fanless industrial enclosure | On this box, pre-compiled HEF | The host goes in a cabinet or a riser: fanless, wide temperature, DIN rail or wall mount |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>All-in-one AI camera; the alarm service goes on a machine you already have | On the camera | There are no cameras yet, or the cameras are already detecting. The alarm service is brought up by hand — the deploy form has no device class for a gateway you supply |

Other prerequisites: an MQTT broker reachable on 1883 (the Orin and Hailo packages bring one up; the reCamera package can use the one the cameras already publish to), a fixed indoor view on the Orin and Hailo packages, and a webhook endpoint or an MQTT subscriber that will receive the notifications.

#### Voice check-in (optional, off by default)

When enabled, a raised fall alarm makes the service speak a prompt into the room and listen for a few seconds, in parallel with the evidence window. A call for help, no answer, or an unreadable answer confirms the alarm immediately; "I'm fine" does not close the alarm by default, it only flags it for review.

Hardware needed: a USB microphone and speaker on a LAN compute box, plus an OpenVoiceStream instance for TTS and streaming ASR. Audio does not go through the cameras: neither reCamera model has a confirmed usable microphone, and the SG2002 cannot run local ASR. Audio is never written to disk; only the verdict, confidence, latency and transcribed text are persisted, and `store_transcript: false` drops the text as well.

## How to deploy on site

Two steps: get the camera position right first, then install the software.

### Step 1: mount the camera {#step-1-mount-the-camera}

:::tip[Placement requirements]
Fix the mount, 2–3 m from the person, side-on or at an angle, with shoulders and hips visible. The fall itself has to happen on camera: if the person is already lying down when the device starts, it only reports the pose and doesn't fire an alert. Straight-down overhead angles, long-corridor wide shots, and furniture blocking most of the person all noticeably lower accuracy.
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="Camera placement: a 2–3 m side or oblique mount works; straight-down overhead, wide shots and occluded views don't"/>
</div>

### Step 2: install the software — four steps {#step-2-install-the-software}

Step-by-step instructions for each device are on the reference design page — pick a configuration for your site there and download the matching app package.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download the app package 🖱️</font></span></strong>
    </a>
</div><br />

The overall flow:

1. **Pick a configuration** — Answer three questions on the reference design page (do you have a camera, how far from the fall zone, how many streams), and it returns a matching device combination.
2. **Install the app package** — Download the package for that device and install it. The model, runtime and decision thresholds ship frozen in the package — the same configurations scored in the measured data below — so there's no training or tuning to do.
3. **Fill in two settings** — the video source address (skip this with reCamera) and a device name. The device name is the first segment of the message topic; name it by room or bed so multiple devices on the same receiver never overwrite each other. The screenshot below is the device management page in the deployment platform: choose "Embedded", then fill in the device IP and ADB port.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="Device management → Embedded → reCamera Pro, expanded to fill in address and ADB port"/>
</div>

4. **Check the preview to confirm framing** — Once installed, the app shows a live feed with a skeleton and state overlaid on the person. Confirm the camera actually sees what it needs to before wiring up notifications. The screenshot below is the reCamera Pro preview page. **The status labels come from a replay, not a measured run**; measured numbers are under "Performance and measured data".

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="The normal-to-fallen state transition, shown in the reCamera Pro App Center preview"/>
</div>

From install to running: about half an hour for reCamera. Jetson takes longer, because the inference engine has to be built on the device the first time (461 seconds and up, measured).

### Alarm panel: zones and installation

Two parts: put the cameras where the zones will work, then install and configure.

#### 1. Cameras and zones

:::tip[Zones are normalised rectangles over the camera frame]
Moving or re-aiming a camera invalidates the zone layout **with no error**: the rectangle still exists but covers a different part of the room. Re-check every zone after any physical change to a camera.
:::

On the Orin and Hailo packages you also need a fixed indoor view where a person stays visible along the expected fall path. The detector is the same EdgeFallKit detector, with the same placement requirements as above (a side or corner view at 2–3 m, shoulders and hips visible).

Two points when drawing zones, or the site produces extra alarms:

- **`no_motion` will fire during sleep** unless the zone excludes the bed or the timeout is longer than a normal nap. Motion is the displacement of a tracked person's bbox centre above `motion_threshold`, not optical flow or keypoint velocity, so small movements under a blanket do not count.
- **Occlusion raises a false `no_person`.** A zone only re-arms after the person is seen again, so one occlusion produces a single alarm.

#### 2. Software: four steps

Per-device steps are on the same reference design page above, where you can pick a configuration and download the matching application package.

1. **Pick a configuration** — the configurator asks what is on the wall and where the host goes, and returns one of the three packages.
2. **Install the package** — the Orin and Hailo packages deploy the detector and the alarm service together. The reCamera package installs nothing for detection; the alarm service is brought up by hand on a gateway you supply.
3. **Fill in the configuration** — zones and their `no_person_timeout` / `no_motion_timeout`, the state-machine windows, the webhook URL, and the device name that forms the first topic segment. Zones are drawn straight onto the picture and take effect on save:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="Drawing a zone on the live view; it is still in place after saving and reloading"/>
</div>

The configuration page shows that room's live view on the left and the zone's two timeouts on the right. When the camera is offline the view falls back to the last snapshot and the configuration is still editable.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-en-e238b3a7.png" alt="Zone configuration page: live view on the left, no-person and no-motion timeouts on the right"/>
</div>
4. **Verify** — raise a test alarm and watch it complete: the alarm appears in the console, an operator action is recorded against it, and the webhook endpoint receives one POST with an idempotency key. Below, one injected alarm goes from appearing to confirmed:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="An injected fall alarm appears in the console, enters the operator window, and turns notified once confirmed"/>
</div>

Detector and service state on the host itself are on the device console:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-en-76e94f0c.jpg" alt="Device console on the alarm host: detector and alarm service running state"/>
</div>

<!-- TODO image: on-site installation photo (camera mounted in a room) — needs a field shoot -->

Estimated time is **45 minutes**, rated **intermediate**. The Orin package is the longest because the first deploy builds a TensorRT engine on the device.

## Which interfaces it exposes

The device publishes events to the MQTT broker running on itself (port 1883); your system just subscribes. Three ways to hook in:

- **Home Assistant** — No configuration needed. The device broadcasts via the auto-discovery protocol, and four entities appear directly in HA: a fall sensor, current state, event id, and presence — wire them into your automations.
- **NVR / nurse-call systems** — Subscribe to `<device>/fall-detection/results`. If all you care about is "did someone fall", watch `fall_event` in the payload — it's set only once, at the moment the state enters "fallen", so one fall triggers it once, not repeatedly for as long as the person is on the floor.
- **Custom system / API** — Subscribe the same way; the payload also carries `person_count`, `fallen_count`, and each person's `track_id` / `state` / `bbox` — enough to build your own dashboard. reCamera additionally exposes RTSP 8554 `/live0` for the live feed.

`<device>` is the name you filled in earlier — name it by room or bed so multiple devices on the same broker never overwrite each other.

### Full topics and payload

| Topic / port | Payload | Retained |
|---|---|---|
| `<device>/fall-detection/results` (multi-stream: `.../results/{stream_id}`) | One JSON per frame: `state`, `fall_detected`, `fall_event`, `event_id`, `person_count`, `fallen_count`, plus `track_id` / `state` / `bbox` for each entry in `persons[]` | No |
| `<device>/fall-detection/status` | `online` / `offline`, published via the MQTT last will | Yes |
| `homeassistant/` | Auto-discovery config — fall sensor, state, event id, presence | Yes |
| RTSP 8554 `/live0` (reCamera) | Live video for preview and NVR | — |

The stream id is also written into the payload, so downstream consumers don't have to parse the topic to know the source.

The broker also lives on the detector host: reCamera uses its built-in one, and every reComputer configuration brings up `eclipse-mosquitto:2` alongside the detector, serving port 1883 from the host. No external broker is needed, and nothing in the chain needs internet access.

### Alarm panel interfaces

The alarm service is the only thing you integrate with, and it runs on the alarm host. Three ways in, by what you already have:

- **A nurse call system or a paging service** — take the webhook. One POST per confirmed alarm, carrying the alarm id, kind, zone, stream id, timestamp and operator. Deduplicate on the idempotency key, not on the timestamp.
- **An MQTT-based site** — turn the alarm bus on and subscribe to `eldercare/alarm/<zone-id>`. Same payload as the webhook. It is off by default.
- **Your own dashboard or record system** — poll or read `GET /api/alarms` on HTTP 8080 for the full alarm records including state history and the operator on each.

The idempotency key is `zone:kind:event_timestamp:global_event_id`. `stream_id` is read from the message payload and never parsed out of the topic, so a broker rewrite or a bridge prefix cannot silently reroute a zone. Alarm records (events, state transitions, operators and delivery receipts) are retained for 90 days.

#### The full topics and payloads

| Topic / port | Payload | Default |
|---|---|---|
| HTTP 8080 `GET /api/alarms`, page at `/` | Alarm records: `id`, `kind`, `zone_id`, `stream_id`, `state`, `event_timestamp`, `operator`. The same page serves confirm and dismiss | On |
| HTTP POST to your webhook URL | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` plus an idempotency header. No snapshot, no video | On once the URL is set |
| MQTT 1883 `eldercare/alarm/<zone-id>` | Same payload as the webhook | Off |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | The `fall_result_v1` stream this service consumes: `stream_id`, `person_count`, `fall_event`, per-person bbox | Input, published by the detector |

**The `state` field**: `escalated` means the notification deadline was missed; it does not revert to `notified` when a later retry succeeds. Don't show `escalated` as a delivery failure on a dashboard; it only means the deadline passed.

The broker runs on the alarm host in the Orin and Hailo packages, and on the cameras or the gateway in the reCamera package; nothing in the path needs the internet. The bundled broker allows anonymous connections and is meant for a trusted LAN; add credentials and TLS before the device is reachable from outside it.

## Performance and measured data {#appendix-measured-data}

Everything below is measured on devices against a public dataset. Raw per-clip reports and checksums are in the repo under [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation). The source includes per-platform model conversion, Docker orchestration and decision-weight training scripts.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Accuracy results

Averaged over six frozen configurations: **accuracy 85.8%, fall recall 95.8%, specificity 77.8%, F1 85.7%, mean alert latency 1.4 s**. Individual configurations land between 81.5% and 88.9%.

These six configurations are Jetson YOLO11s, Jetson YOLO11m, reCamera Pro, RK3576, RK3588, and Hailo-8, each with its own frozen configuration. The reCamera 2002's v0.2 baseline (74.1% accuracy) is excluded from the average — it runs an earlier generation of temporal weights. Per-configuration detail is in the repo's [unified accuracy table](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表).

Conditions: dataset [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos) (MIT), split by subject; held-out Subject 4 scored once, 27 clips (12 falls / 15 activities of daily living); all video at 15 FPS; an alert more than 0.5 s before the annotated fall onset counts as a false positive; every platform retrains and freezes decision weights from its own pose output, nothing shared across platforms.

Reproduce: `platforms/jetson/tools/evaluate_videos.py` (the dataset is not distributed with the repo — obtain it yourself).

**Accuracy does not separate the devices**: in a 27-clip test set one clip is 3.7 percentage points, and RK3576, RK3588 and Hailo land on the same score (88.9%). Model size doesn't correlate with the score either. Choose a device by stream count, existing hardware and video source.

### Devices tested

Seven devices, four accelerators. "End-to-end" means the full path from stream ingest to an alert was run and scored on the test set; "inference speed" means only detection speed was measured.

| Device | Accelerator | Model shipped | End-to-end | Inference speed |
|---|---|---|:-:|:-:|
| reCamera 2002 | Built-in NPU | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | Built-in NPU (RK) | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | RK3576 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | RK3588 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 Series | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | Orin Nano GPU | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | Orin NX GPU | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

Per-device per-frame latency, multi-stream throughput and test conditions are in [detailed performance results](#性能实测详表) below.

### Detailed performance results {#性能实测详表}

#### Per-frame latency and throughput

The same model on different devices: **YOLO11n-Pose, 640² input**. Per-frame figures are accelerator inference only (no RTSP decode, no post-processing); aggregate throughput is the highest total frame rate measured across 1–6 concurrent contexts. FP16 and INT8 are in separate tables. The Hailo-8 rows were measured on reComputer R2000 Series + Hailo-8 M.2 module (26 TOPS).

FP16:

| Platform | Pose model | Per-frame | Aggregate | Inference-bound streams | Recommended streams |
|---|---|---:|---:|---:|---:|
| reComputer RK3576 | YOLO11n | 56.1 ms | 29.2 FPS | 1 | 1 |
| reComputer RK3588 | YOLO11n | 51.4 ms | 51.4 FPS | 3 | 1 |
| reComputer J30 Series (J3011) | YOLO11n | 3.7 ms | 270.7 FPS | 18 | 7 |
| reComputer J40 Series (J4012) | YOLO11n | 3.3 ms | 306.2 FPS | 20 | 8 |

INT8:

| Platform | Pose model | Per-frame | Aggregate | Inference-bound streams | Recommended streams |
|---|---|---:|---:|---:|---:|
| reCamera 2002 | YOLO11n | 53.0 ms | 10.0 FPS | 1 | 1 |
| reCamera Pro | YOLO11n | 35.9 ms | 18.1 FPS | 1 | 1 |
| reComputer RK3576 | YOLO11n | 36.2 ms | 42.1 FPS | 2 | 1 |
| reComputer RK3588 | YOLO11n | 29.8 ms | 90.4 FPS | 6 | 2 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s ▲ | 6.9 ms | 393.9 FPS | 26 | 16 |

**▲ The Hailo row uses the s size: the n size is slower on this accelerator.** The hailo8 directory of official Model Zoo v2.15 ships only `yolov8s_pose` and `yolov8m_pose` — no n-size pose model at all. We compiled a YOLO11n-Pose ourselves with Hailo Dataflow Compiler 3.31.0 (640², INT8, 64-frame GMDCSA calibration) and measured **9.01 ms / 92.2 FPS** on the same board, against 6.87 ms / 393.9 FPS for the s size: per-frame latency is the same order (+31%), but throughput differs by 4.3×. The compiler split 11n into **3 contexts**, swapping weights every frame; the Model Zoo s model is single-context with weights resident. At 15 FPS per stream, 92.2 FPS still leaves roughly 6× headroom; the gap only affects multi-stream density. The result applies to this one HEF's compilation.

**Jetson INT8 uses calibrated engines and is listed separately.** The INT8 rows above are all YOLO11n; the calibrated Jetson INT8 engines so far exist only for YOLOv8s / YOLOv8m-Pose (entropy calibration on GMDCSA frames — 64 for s, 494 for m — with FP16 fallback for layers that have no INT8 implementation), so they are not the same model as the other platforms:

| Platform | Pose model | Precision | Per-frame | Aggregate |
|---|---|---|---:|---:|
| reComputer J30 (Orin Nano Super) | YOLOv8s-Pose | INT8 | 3.75 ms | 266 FPS |
| reComputer J40 (Orin NX Super) | YOLOv8s-Pose | INT8 | 3.34 ms | 300 FPS |
| reComputer J30 (Orin Nano Super) | YOLOv8m-Pose | Mixed (neck + head FP16) | 8.11 ms | 123 FPS |
| reComputer J40 (Orin NX Super) | YOLOv8m-Pose | Mixed (neck + head FP16) | 7.18 ms | 139 FPS |

Conditions: 640², batch 1, median of three 120 s runs, GPU compute only. YOLOv8s INT8 is 1.57× faster than FP16 on the same device. Full-INT8 YOLOv8m loses its fall output, hence mixed precision for m. Deployment evaluation on GMDCSA-24 Subject 4 (27 clips): YOLOv8s INT8 F1 66.7%, YOLOv8m mixed precision 87.0%. The presets still ship YOLO11s / YOLO11m FP16.

Reproduce: `tools/build_calibrated_int8.py`.

RK's INT8 was calibrated on 240 GMDCSA frames; on frames outside the calibration set its per-frame detection count matches FP16 exactly, so it is deployable.

#### Real-frame pipeline latency

Both tables above are fed **synthetic blank 640 frames** and measure accelerator inference only. Real footage is slower, because anything in frame has to go through raw-head decoding, DFL, keypoints and NMS:

| Platform | Pose model | Accelerator | Real-frame pipeline | Pre/post delta |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52.74 ms ◇ | 53.23 ms | 0.012 ms |
| reCamera Pro | YOLO11n INT8 | 35.2 ms ✦ | 36.6 ms | 1.4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69.6 ms | 70.8 ms | 1.2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54.4 ms | 54.8 ms | 0.4 ms |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s INT8 | 6.9 ms | 8.77 ms | 1.9 ms |
| reComputer J30 Series (J3011) | YOLO11n FP16 | 3.7 ms ◆ | 5.57 ms | 1.9 ms |
| reComputer J40 Series (J4012) | YOLO11n FP16 | 3.3 ms ◆ | 5.18 ms | 1.9 ms |

"Pipeline" = inference + preprocessing + raw-head decode / DFL / keypoints / NMS. It **excludes** RTSP decode, tracking, the temporal MLP and MQTT. The Orin NX figure of 5.18 ms comes from 400 measured frames, Orin Nano's 5.57 ms from 1359, and Hailo's 8.77 ms from 1951 (of which hardware inference is 6.87 ms and decode plus NMS account for only 0.052 ms).

- **◇ reCamera 2002 cannot separate an "accelerator only" column**: it exposes a single timer whose scope is exactly this table's pipeline definition, so 52.74 ms already includes pre- and post-processing (250 measured frames, with and without a person in view are nearly identical).
- **✦ The reCamera Pro row is measured with clocks locked** (NPU 950 MHz, CPU performance governor). The default `rknpu_ondemand` governor was measured settling at 800 MHz and 43.1 ms — a 23% difference on the same board from the frequency governor alone. RK3576 / RK3588 were measured always running at their top step and are unaffected.
- **◆ The Jetson column is `trtexec` pure GPU compute** (no host copies), while the RK column is `rknnlite.inference()`; the two time different things, so compare across platforms with the pipeline column. By that column Jetson is about 11× faster than RK3588 and about 14× faster than RK3576.

Reproduce: [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation).

#### Stream counts

"Inference-bound streams" = aggregate throughput ÷ 15 FPS. It counts the accelerator only and is a theoretical ceiling. "Recommended streams" discounts that — end-to-end throughput measured on RK reaches only 28%–44% of the inference ceiling, because RTSP decode, tracking, the state machine and MQTT also consume CPU and memory bandwidth. With other workloads still running on the board, end-to-end throughput measured about 8.6 FPS on RK3588 and about 4.9 FPS on RK3576.

### Runtimes and key parameters

Every platform runs the same 640² pose model family. What differs is the runtime and how the model reaches the device:

| Detector host | Pose model | Precision | Runtime | Model delivery |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | Camera NPU | Installed from the console as a camera app |
| reComputer J30 / J40 | YOLO11s (Orin Nano) / YOLO11m (Orin NX) | FP16 | TensorRT | Engine is **built on the device** — tied to that GPU architecture and TensorRT version, so it cannot ship prebuilt. Measured on Orin Nano: 461 s for YOLO11s |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` ships per board; a model compiled for RK3588 will not load on RK3576 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | Official prebuilt HEF, verified against a fixed digest |

The Hailo deployment is locked to **HailoRT 4.21**: GStreamer plugin, user library and kernel driver must all match, and no other process may hold the accelerator.

Parameters that change deployment behaviour (shipped default in parentheses):

- `max_fps` (15) — per-stream processing rate; the stream counts above are derived from it.
- `fall.temporal_confirmation_required` (true) — entering "fallen" requires confirmation from the temporal model, the main mechanism that keeps false positives down; set it to false and geometric features can confirm a fall on their own.
- `cooldown_sec` (3.00) — one fall counts once; `fall_event` fires only on entry to the fallen state.

Alarm panel:

- `statemachine.evidence_sec` (5.0) / `statemachine.confirm_window_sec` (60.0) — the evidence window and the operator window; together they set most of the time from alarm to notification.
- `statemachine.confirm_timeout_action` (treat as real and notify) — what happens when nobody answers inside the operator window.
- `publish_empty_frames` (true on the Orin package) — the Jetson detector publishes empty frames when nobody is in view; without them the `no_person` timeout gets no input. Set it again if you replace the shipped detector config with the device's own; the Hailo runtime has no such switch and needs none.

### Alarm panel measured data {#alarm-path-measured}

The alarm service does no detection itself; detection accuracy is under "Accuracy results" above. Alarm latency adds to the detection latency (per-platform mean 1.22–1.75 s).

| Metric | Value | Conditions |
|---|---:|---|
| Alert latency, event timestamp to notification sent | P50 2061 ms / P95 2093 ms | Local replay, a replayer standing in for the cameras, excluding inference and cross-machine network; 5 fall replays, 15 FPS × 12 s each; 1 s evidence + 1 s auto-confirm; single zone, single stream, loopback webhook |
| No-person detection lateness against the configured timeout | P50 65 ms / P95 77 ms | Local replay, 3 runs, 10 FPS × 11 s, 5 s timeout, 0.1 s tick, no broker |
| Outage recovery, unique successful deliveries over queued | 3 of 3, 0 duplicates, first delivery 96 ms after recovery | Local replay, webhook endpoint returning 503 for 4 s, 3 alarms queued, 2 s retry interval |
| False alarms | 0 over 0.02 camera-hours | 72 s of quiet replay, too short for a rate |
| Fall to webhook received | P50 2487 ms / P95 2751 ms | reCamera One (USB-RNDIS), real `fall-detection` frames + injected fall alarms through the device's own broker; first 5 of 10 injections (the rest were stopped by the notification rate limit, see known degradation); one real 60 s no-activity alarm was also delivered |
| Fall to webhook received, with Hailo-8 inference | P50 2830 ms / P95 3061 ms (min 2102 ms) | reComputer R2000 Series + Hailo-8 M.2 module, official YOLOv8s-Pose HEF, HailoRT 4.21.0; RTSP replay of a GMDCSA-24 fall clip (640×640, 15 FPS); 10 alarms, 1 s evidence + 1 s auto-confirm + 2 s re-arm; single zone, single stream; all 10 within the 5 s notification deadline |

Alert latency is roughly the sum of the two windows plus about 60 ms of dispatch. The windows in this table were shortened; with the shipped defaults (5 s evidence, 60 s operator) the same path starts at about 65 s (derived).

Reproduce: the three run directories dated 2026-09-05, 2026-09-06 and 2026-09-08 under `eldercare-alarm/evaluation/runs/`; the latency definition is in `evaluation/measure_alert_latency.py`.

### Known degradation

- **Camera placement.** The numbers above come from a fixed camera, mid-range framing, indoors, with shoulders and hips visible. A 2–3 m side or oblique mount works; overhead top-down, long-corridor wide shots and heavy furniture occlusion lower accuracy.
- **A different dataset lowers recall.** On the external dataset RealBiomFall (34 clips, all falls), measured recall is 58.8% on reCamera and 52.9% for the deployed YOLO11m on reComputer J30 / J40; most misses come from the pose model not detecting the person. On a new site, re-extract tracks from on-site footage, then retrain and re-freeze the decision weights.
- **Throughput drops when another workload holds the GPU.** The Jetson figures above were measured with co-resident workloads stopped; with its own inference workload running, Orin NX measured only 264.9 FPS aggregate (306.2 FPS stopped), below Orin Nano. Orin Nano measured the same either way (270.5 / 270.7 FPS) because its workload does not use the GPU.
- **Notifications are rate-limited.** At most 5 per 600 s; alarms beyond that are not notified and raise no error (from the 6th injection on reCamera One).

### Next steps

- Run the external RealBiomFall evaluation on the RK and Hailo routes.
- Record field video and pose traces on reCamera, and use annotated replay to evaluate the decision thresholds and retrain the temporal profile.

## Data and asset sources

- **GMDCSA-24 v2.1** — Both the accuracy evaluation and the demo footage come from this dataset, [ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos), MIT License. Faces in the demo images have been pixelated and Gaussian-blurred: the license covers the author's copyright, not the subjects' likeness rights.
- **RealBiomFall** — The testing subset used for the external generalization test, 34 clips, all falls, so only recall and latency are reported.
- Neither dataset is distributed with the `edgefallkit` repo — obtain them yourself to reproduce the evaluation.
- The camera-placement diagram is drawn in-house.
