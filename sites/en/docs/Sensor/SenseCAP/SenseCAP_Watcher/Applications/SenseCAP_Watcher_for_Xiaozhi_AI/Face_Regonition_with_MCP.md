---
description: Guide for deploying face recognition with the internal MCP tool
title: Face Recognition with MCP
sidebar_position: 7
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - Face
  - Model
  - Context
  - protocol
  - recognition
  - MCP
  - reComputer
image: https://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 04/07/2026
  author: Spencer
createdAt: '2025-11-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/face_regonition_with_mcp/
---

# Extending Face Recognition with MCP

## Overview

This guide explains how to deploy a face-recognition workflow using **SenseCAP Watcher (Xiaozhi)** together with a **reComputer Raspberry Pi system**.

By flashing a customized firmware onto the **SenseCAP Watcher**, the Xiaozhi AI gains a face recognition ability powered by a **reComputer** with Hailo-8 acceleration. Once set up, simply ask the Watcher something like "check who this person is" and the AI will automatically capture a photo, identify the face against a local database on the reComputer, and respond with the person's name and confidence level.

## Hardware Preparation

<table align="center">
  <tr>
    <th>SenseCAP Watcher for Xiaozhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> Get One Now 🖱️</span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> Get One Now 🖱️</span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Prerequisites

- Install the reComputer Raspberry Pi system by following: [reComputer R2000 Series Getting Started](https://wiki.seeedstudio.com/r2000_series_getting_start/#flash-os)
- Source code repositories:
  - [Xiaozhi face recognition firmware](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)
  - [Face Recognition API](https://github.com/suharvest/face_rec_api)

## Deployment Process

### Step 1. Note the reComputer's IP Address

Connect the reComputer to your network (e.g. router) and obtain its IP address. The example IP used in this guide is `192.168.24.10`.

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>

### Step 2. Flash the Firmware onto Watcher

1. Connect the PC to the Watcher using a Type-C cable at the bottom port.

2. Open ESP-IDF 5.5 CMD (version 5.5.1) and clone the firmware repository:

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

3. Open `main/boards/sensecap-watcher/sscma_camera.cc`, search for `face_rec_url`, and change the IP to your reComputer's IP:

```cpp
// Before (default):
std::string face_rec_url = "http://192.168.10.131:8001/recognize";

// After (your reComputer IP):
std::string face_rec_url = "http://<reComputer_IP>:8001/recognize";
```

4. Compile and flash:

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### Step 3. Set Up the reComputer Environment

1. Connect via SSH:

```bash
ssh <username>@<reComputer_IP>
# Example: ssh recomputer@192.168.24.10
```

:::note
We recommend using the **Remote - SSH** extension in VS Code for connecting to your reComputer.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>
:::

2. Update system software:

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

3. Install Hailo runtime and drivers:

```bash
sudo apt install hailo-all
sudo reboot
```

4. After the reboot, reconnect via SSH and verify HailoRT:

```bash
hailortcli scan
hailortcli fw-control identify
```

If you see output similar to the following, the driver is installed successfully:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

5. Install uv:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
```

### Step 4. Clone the API and Install Dependencies

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```

### Step 5. Add Photos and Start the Service

1. Place photos in the `photos/` folder. Each file should be named after the person (the filename without extension is used as the person's name):

```
photos/
├── john_doe.jpg
├── jane_smith.png
└── alice_wang.jpg
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

2. Generate embeddings:

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

3. Start the service:

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

The service is now running on port **8001**. The Watcher can communicate with the reComputer to check if a face exists in the database. You can stop the service with `Ctrl + C`.

You can add a prompt like: "When a person is detected, use the face recognition tool to check name and confidence: if confidence is greater than 0.40, greet them by name; otherwise, give a generic greeting."

### Step 6. Update the Face Database

Add new photos to the `photos/` folder, then regenerate embeddings and restart the service:

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

:::tip
You can also update the database while the service is running by calling the reload endpoint:
```bash
curl -X POST http://localhost:8001/reload
```
:::

### Step 7. Clear the Face Database

1. Delete all files in the `photos/` folder.
2. Remove the `embeddings.json` file in the `data/` folder.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

After clearing, restart the service and you will see a clean log:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## Execution Result

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## FAQ

**Q: How can I make the Xiaozhi AI call the face recognition API?**

**A:** Simply ask the Watcher a question like "Check if I am in the face recognition system." The AI will automatically invoke the face recognition tool.

**Q: The service cannot connect or recognize faces. What should I check?**

**A:** Verify that:
- The reComputer's IP address in the firmware matches the actual IP.
- The face recognition service is running (`curl http://<reComputer_IP>:8001/health`).
- There are no firewall rules blocking port 8001.

**Q: Hailo is not detected after installing `hailo-all`. What should I do?**

**A:** Re-run `hailortcli scan` after a full reboot. If still not detected, check the PCIe connection with `lspci | grep Hailo` and `dmesg | grep -i hailo`.

**Q: Can I deploy the face recognition system on other devices?**

**A:** Yes, as long as the device runs a Linux-based system with Hailo-8 hardware. The reComputer series is recommended as this guide is validated on that platform.

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
