---
description: Guide for deploy Face_Regonition with internal MCP tool
title: Face Regonition with MCP
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
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 11/25/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---
# Extending Face Regonition with MCP

## Overview

This guide explains how to deploy a face-recognition workflow using **SenseCAP Watcher (Xiaozhi)** together with a **reComputer Raspberry Pi system**. The Watcher captures images and sends them to the reComputer for face matching against a local database using the internal MCP tool.

## Hardware Preparation

<table align="center">
  <tr>
    <th>SenseCAP Watcher for XiaoZhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Prerequisites
Follow this guide to install the reComputer Raspberry Pi system: [reComputer R2000 Series Getting Started](https://wiki.seeedstudio.com/r2000_series_getting_start/#flash-os)

## Execution Result

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## Source Code Repositories:

- [Xiaozhi face recognition firmware Code Repository](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)

- [Face Recognition API](https://github.com/suharvest/face_rec_api#)

## Deploy Process

### Step1. Note reComputer's IP address

- Connect the reComputer to your network, like router

- Obtain its IP address, example IP used here: 192.168.24.10

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>


### Step2. Flash the firmware onto Watcher

- Connect the PC to the Watcher using a Type-C cable at the bottom port

- Open ESP-IDF 5.5 CMD (version 5.5.1) and navigate to a suitable folder

- Clone the Watcher firmware repository

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

- Locate the code section for communication with the reComputer
    - File location : main/boards/sensecap-watcher/sscma_camera.cc (line 769)

```cpp
std::string face_rec_url = "http://192.168.10.131.80001/recognize"
```

- Change the IP address to your reComputer’s actual IP

    ```cpp
    std::string face_rec_url = <Your_reComputer_actual_IP>
    ```
    - example

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr4.png" style={{width:800, height:'auto'}}/></div>

- Compile and flash the firmware

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### Step3. SSH into reComputer and Prepare Environment

- Connect via SSH (replace username and IP as needed)

```bash
ssh <Your_reComputer's username>@<Your_reComputer's host IP>
# For example : ssh recomputer@192.168.24.10
```

:::note
We recommend using the **Remote - SSH** extension in VS Code for connecting to your reComputer.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>

:::

- Install Docker and set docker user

```bash
curl -sSL https://linuxmirrors.cn/docker.sh -o install_docker.sh
sudo bash install_docker.sh
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)

sudo groupadd docker
sudo usermod -aG docker $USER
```

- Update system software

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

- Install uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Step4. Clone the API and update dependencies

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```
- Install DKMS, HailoRT, add configuration, and reboot

```bash
sudo apt-get install dkms
sudo dpkg --install hailort-4.21.0/hailort_4.21.0_arm64.deb hailort-4.21.0/hailort-pcie-driver_4.21.0_all.deb
echo "options hailo_pci force_desc_page_size=4096" | sudo tee /etc/modprobe.d/hailo_pci.conf
```

- Check HailoRT status

```bash
sudo reboot
hailortcli scan
hailortcli fw-control identify
```
    - If you see information similar to the following, it means your driver has been installed successfully

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

### Step5. Add Photos and Start the Face Recognition Service

- Place photos in the photos/ folder

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

- Generate embeddings

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

- Give execution permission and start the service

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

- The service is now running. The Watcher can communicate with the reComputer to check if a face exists in the database. You can stop the service with `Ctrl + C`.

- You can add prompt like : "When a person is detected, use the face recognition tool to check name and confidence: if confidence is greater than 40%, greet them by name; otherwise, give a generic greeting."

### Step6. Update the Face Database

- After stop the service, add new photos to the `photos/` folder and regenerate embeddings and restart service.

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

### Step7. Clear the Face Database

- Delete all files in the `photos/` folder.  

- Remove the `embedding.json` file in the `data/` folder.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

- After clearing, run the service and you will see the same log

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## FAQ

**Q: How can I make the Xiaozhi AI call the face recognition API?**

**A:** Simply ask the Watcher a question like, "Check if I am in the face recognition system."  
The AI will automatically call the MCP tool to check the face database.

**Q: What should I do if the face recognition system cannot upload a photo?**

**A:** Please check that the IP address is correct and that the face recognition service is running properly.

**Q:Can I deploy the face recognition system on other devices?**

**A:** Yes. As long as the device runs a Linux-based system and can connect to the network, it can be used for deployment. However, the reComputer series offers better computing performance.

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
