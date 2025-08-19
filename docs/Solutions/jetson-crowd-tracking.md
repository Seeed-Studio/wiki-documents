---
description: Introduces an AI demo of Jetson crowd tracking
title: Crowd Tracking & Counting
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
---

This guide is for **NVIDIA Jetson Ubuntu 22 + JetPack 6.x** environments, helping you quickly complete the deployment.

## 📋 Environment Requirements

- **Device**: NVIDIA Jetson series (Nano, Xavier, Orin, etc.)
- **System**: Ubuntu 22.x + JetPack 6.x
- **Network**: Able to access GitHub and Docker Hub
- **Permissions**: `sudo` privileges

> If your device is not yet installed with the proper system environment, please refer to the official flashing guide for system installation and environment preparation:  
> [JetPack Flashing Tutorial (Seeed Studio)](/flash/jetpack_to_selected_product/)

## ⚡ One-Click Deployment

Run the following command on your Jetson device terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 The script supports **idempotent execution**, meaning it is safe to run multiple times.

## 🔍 Deployment Process

The script automatically performs the following steps:

1. **Install Docker (27.x)**  
   - Check if Docker is installed  
   - If installed but not version 27.x → automatically uninstall and reinstall  
   - Configure NVIDIA Container Toolkit  
   - Set Docker default runtime to `nvidia`

2. **Install MQTT Broker**  
   - Install `mosquitto` and `mosquitto-clients`  
   - Configure to allow external access:  

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **Deploy SenseCraft AI Server**  
   - Clone the specified branch to `~/sensecraft-ai_server`  
   - Run `scripts/run.sh` to start the service  
   - Download YOLOv11 model to `~/sensecraft-ai_server/models/yolo11n.pt`

---

## 🛡 Exception Handling

- **Idempotent execution**:  
  - **Most issues** (e.g., network interruptions, partial installation failures) can be fixed by **simply re-running the script**  
  - The script checks software versions and configurations, only installing missing or incorrect parts  
- **Rare issues** (e.g., permanent apt source failure, unreachable external repository) require manual intervention

---

## 🖥 Starting & Accessing the Service

1. **Start the service**  

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

### 📷 Command Line Output (Example)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command"/></div>

2. **Access the main page**  
   - In your browser:  

     ```bash
     http://<JETSON_IP>:46654
     ```

   - Default parameters are preconfigured; start to see results

### 📷 Web Interface (Example)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png"/></div>

3. **Access the configuration page**  
   - In your browser:  

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - Here you can adjust video sources, models, inference parameters, etc., and save them to the server

## ⚙ Configuration Page Overview

### 📷 Configuration Page (Example)

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png"/></div>

### Video Source

- Supports **local video files**, **USB cameras** (default first device), **RTSP streams**
- Supports MP4, AVI, MOV, MKV uploads
- View and delete uploaded video sources

### AI Model

- Select from available AI inference models
- Supports `.pt`, `.pth`, `.onnx`, `.engine` formats
- View and delete uploaded models

### Inference Parameters

- **Confidence threshold**: 0.1–1.0
- **Max detections**: 1–1000
- **Half-precision inference**: boosts speed (minimal difference for small models)

### Display

- Show detection boxes (customizable color, default orange)
- Timestamp & FPS always enabled

### Tracking

- Enable multi-object tracking
- Show trajectory lines with customizable length, thickness, and color

### Tripwire Detection

- Supports horizontal or vertical tripwire (vertical recommended)
- Draw start/end points; enable display for real-time debugging
- Tolerance: 1–20 pixels
- Customizable color & thickness
- Show/hide and reset counter (resets when service restarts)

### Configuration Management

- Save current config to the server (loaded at runtime)
- Export/import configuration files
- Restore default settings

---

## 🛠 Common Issues

| Issue                        | Cause                      | Solution                                                              |
| ---------------------------- | -------------------------- | --------------------------------------------------------------------- |
| `Docker installation failed` | Unstable network or source | Check network and re-run the script                                   |
| Mosquitto cannot connect     | Firewall/config issue      | Ensure `/etc/mosquitto/mosquitto.conf` contains `listener 1883 0.0.0.0` |
| YOLO model not downloaded    | Network interruption       | Delete `~/sensecraft-ai_server/models/yolo11n.pt` and re-run the script |

---

## 📦 Uninstalling the Service

```bash
# Uninstall MQTT
sudo apt remove -y mosquitto mosquitto-clients

# Uninstall Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove service directory
rm -rf ~/sensecraft-ai_server
```

---

## 📚 References

- [Jetson Flashing Guide](/flash/jetpack_to_selected_product/)
- [SenseCraft-AI\_Server Source Repository](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [NVIDIA Jetson Docker Guide](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Mosquitto Official Documentation](https://mosquitto.org/man/mosquitto-conf-5.html)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
