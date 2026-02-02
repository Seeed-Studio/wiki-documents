---
title: AI Parking Slot Monitoring Demo with reCamera
description: This wiki introduces an AI-based parking slot monitoring demo using reCamera, showcasing real-time parking availability detection and visualization.
keywords:
    - Parking Slot Detection
    - reCamera
    - AI Edge Vision
    - Smart Parking
slug: /ai_parking_slot_monitoring_demo_with_recamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2025-12-17
    author: John Xiang
---

# AI Parking Management Demo with reCamera

## Introduction

Parking availability is a common requirement in scenarios such as **commercial parking lots**, **residential garages**, **industrial parks**, and **campus parking management**, where operators and users want to quickly understand which bays are occupied or available.

This project provides an out-of-the-box demo that focuses on the following application capabilities:

- **Parking Slot Detection**: Detects the occupancy status of each parking bay in the camera view.
- **Anti-shake / Stabilization**: Reduces visual jitter and short-term detection fluctuations to make results more stable.
- **Counting & Summary**: Automatically summarizes the current parking status, such as the number of available slots.
- **On-screen Visualization**: Displays the detection results and slot status directly on the preview interface for quick verification and demonstration.


## Hardware Preparation

To run this parking management demo, only **one reCamera device** is required.  
All reCamera variants are supported.

You can choose **any version of reCamera** based on your deployment needs:

- reCamera 2002 Series (Wi-Fi)
- reCamera Gimbal (Pan-Tilt)
- reCamera HQ PoE (Ethernet + PoE)

> **Note:**  
> The PoE version does not support Wi-Fi and must be connected to the same local network via a PoE-enabled switch.

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Setup Demo 
### Step 1: Configure reCamera

First, please follow the official getting started guide to complete the basic configuration of reCamera: [reCamera Basic Configuration](https://wiki.seeedstudio.com/recamera_getting_started/)

After completing the initial setup, make sure that the device is powered on and connected to the network correctly.  
Then, access the reCamera management interface and enter the **Node-RED workflow** page.

If you can successfully access the Node-RED workflow interface as shown below, it means the configuration has been completed successfully.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### Step 2: Download and Upload the Workflow File

This demo provides a **pre-configured workflow file**, in which all required nodes and connections have already been set up.  
You do **not** need to manually create or configure any Node-RED nodes.

Please download the workflow file from our **SenseCraft AI platform**, and then import it directly into reCamera. For Sensecraft AI tutorial, please refer to the link [Access SenseCraft AI reCamera Dashboards](https://wiki.seeedstudio.com/recamera_getting_started/#access-recamera-preview-dashboard).  

After importing the workflow:

- All detection, visualization, and data processing nodes will be ready to use.
- No additional parameter configuration is required.
- The demo can be launched immediately after deployment.

Once the workflow is successfully uploaded and deployed, reCamera will automatically start running the parking slot monitoring demo in the background. This workflow is designed as an **end-to-end parking slot monitoring pipeline**, running entirely on reCamera. The high-level logic is as follows:

1. **Video Input**  
   The camera continuously captures video frames and sends them to the AI inference node.

2. **AI Detection**  
   The detection model identifies parking-related objects and outputs bounding boxes with class labels (`free` / `car`) and confidence scores.

3. **Slot Association & Stabilization**  
   - Detected boxes are matched across frames using **IoU (Intersection over Union)**.
   - Each slot enters a *stable state* only after being consistently detected for a fixed number of frames.
   - Short-term misses are tolerated to prevent false state changes.

4. **Slot Pool Management**  
   - Each parking slot is stored in a slot pool with its position, state history, and stability counter.
   - Slots that disappear for too long are automatically removed.

5. **Visualization Layer**  
   - Bounding boxes, center markers, labels, and status panels are rendered as SVG overlays.
   - The visualization updates in real time via WebSocket.

6. **Automatic Background Execution**  
   Once deployed, the workflow runs automatically in the background without manual triggering.

Detection results are illustrated below:

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test1.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test2.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test3.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test4.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test5.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test6.jpg" />
</div>


From the displayed results, you can observe the following elements:

- **Bounding Boxes**  
  Each parking slot is associated with a detected region. The system classifies each region as either `free` or `car` based on the AI model output.

- **Center Marker (Circle)**  
  A circle is drawn at the center of each *stable* parking slot.  
  - **Green circle** indicates a free slot  
  - **Red circle** indicates an occupied slot  

- **Slot Labels and Coordinates**  
  Each slot is labeled (e.g., `Slot1`, `Slot2`, `Slot3`) along with its center coordinates `(x, y)`.  
  These labels are mapped from the slot name list you provide via Node-RED.

- **Status Panel (Top-Left Corner)**  
  The overlay panel summarizes the overall status:
  - **Monitoring Slots**: All slots currently being tracked
  - **Free Slots**: Slots that are confirmed as free after multi-frame validation

The system uses a multi-frame stabilization mechanism to avoid flickering results caused by temporary occlusion, lighting changes, or detection noise.
:::note
The current parking slot detection logic is specifically designed for **three adjacent parking slots arranged side by side**. In this demo, **reCamera is installed in front of the parking spaces**, facing the vehicles directly, rather than using a top-down (bird’s-eye) view.  

As a result, slot association, center point positioning, and stability logic are optimized for a **front-view perspective**. If you plan to use an overhead camera or a different parking layout, the slot mapping and detection logic may need to be adjusted accordingly.
:::


## Tech Support & Product Discussion

Thank you for choosing our products! If you need guidance on specific customization goals or want to extend the workflow further, feel free to reach out. We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
