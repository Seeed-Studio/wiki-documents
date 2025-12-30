---
description: Edge AI gun detection system based on Frigate-on-Jetson and Node-RED, supporting Jetson and reComputer R2000 (Hailo) platforms.
title: AI Gun Detection Solution for Real-Time Edge Alerts
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/scene_3.webp
slug: /solutions/frigate-on-jetson-nodered-gun-alerts
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Spencer Y
---

:::note[Notice]
This project is provided **for educational and demonstration purposes only**.  
If you intend to deploy it in a real environment, please **ensure compliance with local regulations** and obtain **any required authorizations** before doing so.
:::

## Overview

The Frigate + Node-RED Gun Detection Solution is an edge AI video analytics stack that detects firearms in live camera streams and orchestrates alerting, review, and integrations. Built for privacy-preserving, low‑latency deployments on **AI Boxes**, the NVIDIA **Jetson** series and **reComputer R2000**, it combines an optimized detection engine (Frigate) with a visual automation layer (Node‑RED) and optional LLM‑assisted review.

<div align="center">
  <img class='img-responsive' width={680} src="https://www.seeed.cc/wp-content/uploads/2025/09/archi_2-1.png" alt="solution diagram"/>
</div>

It delivers a complete AI NVR[^nvr] experience that:

- Detects firearms from live RTSP/HTTP streams in real time.  
- Automates event alerts, logging, and notifications.  
- Operates locally to ensure privacy, low latency, and reliability.  

[^nvr]: AI NVRs leverage advanced machine learning models to provide **real-time insights and automation capabilities**, while traditional NVRs primarily focus on recording and storing video footage.
`

Follow this guide to deploy the solution if your device isn’t from Seeed’s bundle or you’d like to tailor it to your own setup.

<table class="table-center">
  <tr>
      <th>Campus Safety Management</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://www.seeed.cc/wp-content/uploads/2025/08/scene_3.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/campus-safety-management" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Solution Bundle 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Features

Traditional NVRs rely on human monitoring, which is slow, inconsistent, and hard to scale. This solution addresses these challenges by focusing on measurable outcomes that deliver immediate value.
<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Faster Response Time</h3>
                <p>Achieve instant situational awareness with automated alerts and real-time dashboards, bypassing the delays of manual monitoring.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Lower False Positives</h3>
                <p>Utilize optional LLM-assisted verification to intelligently review alerts, significantly reducing false alarms and focusing operator attention.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Data Sovereignty & Privacy</h3>
                <p>All inference and data processing happens on-premise with no cloud dependency, ensuring complete data privacy and control.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Scalable Multi-Stream Support</h3>
                <p>Leverage powerful hardware decoding on Jetson and Hailo platforms to monitor multiple camera streams concurrently without performance loss.</p>
            </div>
        </li>
    </ul>
</div>

## System Architecture

The solution is composed of several key modules that work in concert:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Architecture%20Diagram.png" alt="system architecture"/>
</div>

- **Frigate** processes live video and publishes detection events via MQTT.
- **Node-RED** subscribes to these events, orchestrates alerting workflows, and updates the dashboard.
- **Real-time Dashboard** provides visual monitoring, event review, and system configuration.
- **Webhooks** enable integration with any third-party systems for notifications and data export.

## Deployment Guide

### Prerequisites

- **AI Boxes/Edge Hardware:** reComputer J3011/J4012 (Jetson Nano/Xavier/Orin Series).
- **Network Cameras:** RTSP/HTTP streams accessible on the same network.
- Basic familiarity with Docker, Node-RED, and Frigate configuration.

<!-- 
This is a ready-to-use AI NVR solution that unifies hardware and software.

- Pre-installed **Frigate** detection engine with a baseline gun model.  
- Built-in **Node-RED Dashboard** for alert visualization and event management.  
- Web-based access — configure RTSP streams and start monitoring immediately.   -->

In this page, we'll use the **reComputer J4012 (Jetson Orin™ NX 16GB)** as an example platform. However, the steps are similar for other supported hardware.

### Step 1: Frigate Installation

:::note[Notice]
Run the following command to install `curl` if it is not already installed:

```bash
sudo apt update && sudo apt install -y curl
```

⚠️ Do not run `sudo apt upgrade`, as it may break Jetson-specific dependencies.
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/frigate-on-jetson" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>frigate-on-jetson</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Use the pre-configured one-click installation script to deploy **Frigate** automatically on your Jetson device.

```shell
curl -sSL https://raw.githubusercontent.com/Seeed-Studio/frigate-on-jetson/main/install.sh | bash
```

Once the installation is complete, open your browser and visit `http://<your_jetson_ip>:5000` to access the Frigate web UI and configure your cameras.

If it didn't work, check if you have lack of permission to run Docker without `sudo`. Refer to the [FAQ section](#docker-permission-denied) for troubleshooting steps. And then rerun the command above.

<div style={{textAlign:'center'}}>
  <img alt="Frigate Homepage" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/homepage%20demo.png" />
</div>

On NodeRED, we will subscribe to Frigate's MQTT topics to receive detection events and orchestrate alerting workflows. You can refer to the [Frigate MQTT documentation](https://docs.frigate.video/integrations/mqtt) for more details on the available topics and payloads.

### Step 2: Node-RED Setup

We use NodeRED as the orchestration layer to handle programming.

#### Node-RED Installation

If you haven't installed Node-RED yet, follow the steps below to set it up on your Jetson device.

Run Node-RED in a container with the following command:

```bash
sudo docker run -d --restart=always -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

After the container starts, open your browser and visit `http://<your_jetson_ip>:1880` to access the Node-RED editor.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-panel.png" alt="nodered-panel"/>
</div>

#### Node Installation

Before we begin, make sure to install the following Node-RED nodes from the "Manage palette" option in the Node-RED editor:

- `node-red-dashboard` for building the simple fronted dashboard.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-install-dashboard.png" alt="nodered-install-dashboard"/>
</div>

## Applications

In environments such as campuses, transportation hubs, industrial parks, and public venues, operators need instant response to firearm risks. This solution is designed for:

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>
            </div>
            <div class="info-content">
                <h3>Campus & Education</h3>
                <p>Enable proactive alerts for security teams and facilitate rapid incident review with logged event data and snapshots.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5M5.625 13.5a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0zm12.75 0a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Public Transport Hubs</h3>
                <p>Deploy multi-camera monitoring across stations and integrate alerts directly into a Security Operations Center (SOC) via webhooks.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.625-6.25a3.75 3.75 0 00-6.25-.625l-6.402 6.401a3.75 3.75 0 000 5.304m7.496-9.191a3.75 3.75 0 015.304 0l6.401 6.402a3.75 3.75 0 010 5.304l-6.401 6.402a3.75 3.75 0 01-5.304 0l-6.401-6.402a3.75 3.75 0 010-5.304l6.401-6.402z" /></svg>
            </div>
            <div class="info-content">
                <h3>Industrial Parks & Logistics</h3>
                <p>Secure perimeters, access points, and sensitive zones with automated monitoring that never gets tired or distracted.</p>
            </div>
        </li>
    </ul>
</div>

<br />

The following sample demos guide you through the process of deploying and customizing the solution.

### Demo 1 — Gun Detection Alert

This demo shows how to build a Node-RED flow that listens for gun detection events from **Frigate** via **MQTT**, then triggers *real-time alerts* both on a dashboard and through webhook notifications.

#### Data Pipeline

Frigate (detect gun) → MQTT (publish) → Node-RED (filter/alert) → Dashboard + Webhook

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/security/nodered-sample-gun-shot.png" alt="Node-RED gun detection sample"/>
  <br/>
</div>

#### Node-RED Flow Setup

You can import the sample flow directly into your Node-RED editor using the provided flow configuration file ([gist flow.json](https://gist.github.com/Love4yzp/2fccdfa6a2d8e64e2740cd566b9b991c)).

> **Note:** Update the IP address and webhook URL in the flow to match your Frigate instance and notification endpoint.

The dashboard entry path is configured as `/frigate`.
Access the dashboard at: `http://<your_jetson_ip>:1880/dashboard/frigate`

For example: `http://192.168.101.100:1880/dashboard/frigate`.

#### Flow Overview

- MQTT Listener – Subscribes to a specified topic (e.g., frigate/reviews) to receive detection events.
- Event Filter – Passes through only events labeled as “gun.”
- Alert Builder – Constructs a detailed alert message including a thumbnail, timestamp, and counter.
- Dashboard Update – Updates the dashboard with the latest image, event history, and detection counters.
- Webhook Notification – Sends HTTP POST requests to external endpoints, such as Telegram bot, Slack, or custom APIs.

#### Results

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/frigateevents.png" alt="Frigate event visualization"/>
</div>

After setting up this flow, **Node-RED** will automatically respond to **Frigate’s gun detection events** by updating your dashboard and sending immediate webhook notifications.

Proceed to the [Frigate Configuration section](#frigate-config) for instructions on setting up the detection parameters.

## Default Frigate Config {#frigate-config}

Quickly navigate to the Frigate configuration page at `http://<your_jetson_ip>:5000/config` to see your current setup.

Frigate uses a YAML file called `config.yml` to define how it runs.
This file tells Frigate where to find your camera streams, which AI model to use, and how to send detection results through MQTT.
By adjusting it, you can control how objects are detected, recorded, and displayed.

### Storage Location

By default, Frigate stores video recordings and snapshots under: `/media/frigate` on your Jetson device.

For example:

```bash
seeed@desktop:/$ docker exec -it frigate /bin/sh
root@274103ae951b:/opt/frigate# cd /media/frigate/
root@274103ae951b:/media/frigate# ls
clips  exports  handgun.mp4  machinegun.mov  recordings
```

If you plan to keep videos for longer periods, mount this directory to an **external SSD or network drive** to prevent your Jetson’s internal storage from filling up.

### Camera Configuration

In Frigate, each camera needs to be defined under the `cameras:` section.
Every camera block describes where the video stream comes from and how it is decoded before being analyzed by the detection model.

```YAML
cameras:
  handgun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/handgun.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
  machinegun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/machinegun.mov
          input_args: -stream_loop -1 -re
          roles:
            - detect
```

**Explanation:**

- `enabled`: Enables or disables this camera.
- `ffmpeg`: Defines how Frigate uses FFmpeg to read and decode the video stream.
  - FFmpeg is a media framework that converts and streams video from files, RTSP cameras, or other sources.
- `hwaccel_args`: Enables hardware acceleration (e.g., H.264 decoding on Jetson).
- `inputs`: Lists one or more video inputs.
  - `path`: The actual video source.
    - In this example, it’s a local demo file like `/media/frigate/handgun.mp4`.
    - In real deployments, you can replace it with a live camera stream, such as: `path: rtsp://user:password@192.168.1.21:554/stream1`
- `input_args`: Extra FFmpeg parameters.
  - `-stream_loop -1` loops the demo video endlessly.
  - `-re` ensures playback matches real-time speed.
- `roles`: Defines how this input is used.
  - `detect` means the stream is used for object detection.
  - Other possible roles include `record` or `rtmp` for streaming.

:::tip
Each camera can have multiple inputs — for example, one for detection and another for high-quality recording.
Frigate automatically manages decoding and frame extraction through FFmpeg for all defined sources.
:::

### AI Model and Detection Settings

After defining the cameras, the next step is to tell Frigate which AI model to use and how to process each video frame.
This section defines the detector type, model file path, and detection behavior such as frame size, object tracking, and threshold.

```YAML
detectors:
  tensorrt:
    type: tensorrt
    device: 0

model:
  path: /config/model_cache/tensorrt/yolov4-tiny-288_gun_v3.trt
  width: 288
  height: 288
  labelmap_path: /config/guns.txt
  input_tensor: nchw
  input_pixel_format: rgb
```

**Explanation:**

- `detectors`: Defines which AI backend Frigate uses for inference.
  - `type`: tensorrt tells Frigate to use NVIDIA TensorRT acceleration (optimized for Jetson).
  - `device`: Specifies the GPU index. For most Jetson devices, use 0.
- `model`: Points to the AI model file and describes its input format.
  - `path`: Path to your .trt (TensorRT engine) file.
  - `width` / height: Input resolution of the model (must match what the model expects).
  - `labelmap_path`: File that maps class indices to labels, e.g. guns.txt → contains "gun".
  - `input_tensor`: Defines the tensor layout; nchw = batch, channel, height, width.
  - `input_pixel_format`: Specifies the pixel format, usually rgb.

:::tip
TensorRT models are compiled versions of trained networks, optimized for fast GPU inference.
You can replace this file with your own model if you train a new one — just make sure the width, height, and labels match.
:::

### Object Tracking Configuration

Frigate can detect and track specific types of objects.
For this project, we only track guns, which keeps the system efficient and focused.

```YAML
objects:
  track:
    - gun
  filters:
    gun:
      threshold: 0.3
```

**Explanation:**

- `track`: List of objects to detect and track.
  - Here it’s only "gun", but you could add more labels (e.g., person, car, etc.) if your model supports them.
- `filters`: Fine-tune the detection confidence for each object type.
- `threshold`: Minimum confidence value (0.0–1.0).
  - A lower value (like 0.3) is more sensitive but may include false positives.
  - A higher value (like 0.5) makes detection stricter.

:::tip
If you notice too many false detections, try increasing the threshold to 0.5 or higher.
For smaller objects that are often missed, you can lower it slightly — but balance between accuracy and noise.
:::

### Recording Settings

Once Frigate detects an object, it can record videos and save snapshots for further analysis or alert display.
These settings control how long recordings are stored and what information is shown in captured images.

```YAML
record:
  enabled: true
  retain:
    days: 3
    mode: all
```

**Explanation:**

- `enabled`: Turns on video recording.
- `retain`: Controls how long to keep recorded files and which type of footage is stored.
  - `days`: Number of days to keep recordings before automatic deletion.
  - `mode`:
    - `all` – continuously record (useful for testing).
    - `motion` – only record when motion is detected.
    - `events` – record only when tracked objects (e.g., guns) appear.

:::tip
For real deployments, use `mode: events` or `mode: motion` to save storage space while keeping useful recordings.
:::

### Snapshot Settings

```YAML
snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95
```

**Explanation:**

- `enabled`: Enables snapshot saving when a detection event occurs.
- `clean_copy`: Saves an additional version without detection boxes.
- `timestamp`: Adds the time and date overlay on the snapshot.
- `bounding_box`: Draws a box around detected objects.
- `crop`: When true, saves only the cropped detection area.
- `retain.default`: Number of days to keep snapshots.
- `quality`: Sets the image quality (1–100). Higher = better detail but larger file size.

:::tip
Snapshots are ideal for alerts or dashboards, as they are much smaller than video clips and easy to send via webhook or MQTT.
:::

### Birdseye View

Frigate also supports a Birdseye view, which displays multiple camera feeds together for a quick overview.

```YAML
birdseye:
  enabled: true
  mode: objects
```

**Explanation:**

- `enabled`: Turns on the Birdseye composite view.
- `mode`:
  - `objects` – only show cameras where objects are currently detected.
  - `continuous` – always show all camera feeds.

### MQTT Configuration

Frigate communicates its detection events through MQTT, which allows other services — such as Node-RED, Home Assistant, or custom dashboards — to receive real-time updates whenever an object is detected.
It also provides logging options to help monitor system performance and debug detection issues.

```YAML
mqtt:
  enabled: true
  host: 172.17.0.1
  port: 1883
```

**Explanation:**

- `enabled`: Turns on MQTT communication.
- `host`: The IP address of your MQTT broker.
  - When using Docker on Jetson, `172.17.0.1` usually refers to the host machine.
  - Replace with your actual MQTT server IP if you run it on another device.
- `port`: Default MQTT port, typically 1883.

For more advanced MQTT settings, refer to the [Frigate MQTT documentation](https://docs.frigate.video/integrations/mqtt).

With MQTT enabled, Frigate becomes part of a real-time event network — sending gun detection alerts directly to Node-RED or Home Assistant, where they can trigger dashboards, notifications, or custom workflows.

## Performance & Sizing

| Hardware Platform | Model | FPS (Total) | Stable Streams (≥15 FPS) | Remarks |
| ----------------- | ----- | ----------- | ------------------------- | ------- |
| reComputer R2000 (Raspberry Pi + Hailo-8) | YOLOv11-s | 30 | 2 | Compact AI NVR; efficient low-power edge device |
| reComputer J3011 (Jetson Orin Nano 8 GB) | YOLOv4-tiny-288 | 90 | 6 | Entry-level Jetson; FPS stabilizes after warm-up |
| reComputer J4012 (Jetson Orin NX 16 GB) | YOLOv4-tiny-288 | 120 | 8 | NVDEC concurrency limit reached; compute headroom remains |

## Resources & Next Steps

- **Solution Bundle:** [Frigate + Node-RED Gun Detection on Jetson](https://www.seeed.cc/solutions/campus-safety-management)
- **Frigate Documentation:** [https://docs.frigate.video/](https://docs.frigate.video/)
- **GitHub Repository:** [Seeed-Studio / frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)
- **Node-RED Dashboard Add-on:** [@flowfuse/node-red-dashboard](https://flows.nodered.org/node/@flowfuse/node-red-dashboard)

<!-- Summary

The **Frigate + Node-RED Gun Detection Solution** delivers real-time firearm detection and intelligent alerting on edge AI hardware — from Raspberry Pi + Hailo systems to Jetson Orin series. It offers a modular, open, and production-ready framework for security integrators, enabling private on-premise analytics, instant visualization, and LLM-driven verification while keeping video data under full control.

| Module | Purpose / Value | Key Capabilities |
| ------ | ---------------- | ---------------- |
| Real-time Video Monitoring | Observe scene context before and after detection | Multi-RTSP/HTTP stream input; split-screen or carousel views; zoom and PTZ control |
| Gun Detection Visualization | Confirm detection accuracy visually | Real-time bounding boxes with confidence overlay; frame pause, magnify, and annotate |
| Event / Alert Queue | Deliver instant alerting and logging | Adjustable confidence and ROI thresholds; popup, sound, light, webhook, email, or SMS actions |
| Event Replay & Retrieval | Support evidence review and playback | Filter by time, camera, or alert type; jump to pre-event and post-event footage |
| Detection Log & Export | Enable third-party analytics and reporting | Timestamp, camera, confidence, snapshot metadata; export in CSV or JSON formats |
| LLM-based Analysis | Reduce false positives and generate summaries | False-positive review for gun/not-gun decisions; semantic summarization and querying (for example, rifle alerts last week); contextual response suggestions for operators | -->

## FAQ

### 1. I cannot install Docker on my Jetson device. What should I do?

If you encounter issues with the default Docker installation script, you can use the following alternative script:

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

For more information, please visit: https://linuxmirrors.cn

### 2. How to know my Jetpack version?

Run the following command on your Jetson device:

```bash
dpkg -l | grep nvidia-jetpack
```

The output will show the installed Jetpack version.

### 3. How to update my Jetpack version?

Follow the instructions in [your specific product wiki](/NVIDIA_Jetson).

### 4. “Permission Denied” When Running Docker {#docker-permission-denied}

You don’t have permission to access the Docker daemon.
Run:

```shell
sudo usermod -aG docker $USER
newgrp docker
```

> Logging out and back in again also applies the new group permissions.

Then verify:

```shell
docker ps
```
