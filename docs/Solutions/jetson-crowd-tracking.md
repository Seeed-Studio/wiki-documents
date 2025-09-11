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

## ✨ Detection Result Retrieval
When deploying the service, a local MQTT broker is installed. Therefore, the recognition results can be obtained through the local MQTT.

### 📡 MQTT Message Push Topic

```bash
edgeai/result
```
### 🧩 MQTT Message Data Structure
```json
{
  "uuid": "0c7ef3d9-617d-4e6b-83f6-467f89b28d78", // result's uuid
  "info": {
    "person": 6 // object count
  },
  "line_crossing": {
    "enter": 1, // enter count
    "exit": 0   // exit count
  }
}
```
### 🔧 Node-RED Configuration
It may be necessary to calibrate the IP of the MQTT broker.
In this case, Node-RED is deployed in a container, so the docker0 address is used.
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered.png"/></div>
## 🔧 Node-RED Configuration (Full Flow)

It may be necessary to calibrate the IP of the MQTT broker.  
In this case, Node-RED is deployed in a container, so the `docker0` address is used.

```json
[{
  "id": "f7641cb7c6a84d23",
  "type": "mqtt in",
  "z": "827a3420678b76d2",
  "name": "",
  "topic": "edgeai/result",
  "qos": "2",
  "datatype": "auto-detect",
  "broker": "0f948328c1975515",
  "nl": false,
  "rap": true,
  "rh": 0,
  "inputs": 0,
  "x": 530,
  "y": 620,
  "wires": [
    ["c086c2dfcc39b708"]
  ]
},
{
  "id": "c086c2dfcc39b708",
  "type": "ui-template",
  "z": "827a3420678b76d2",
  "group": "e33e8e2eb3424d08",
  "page": "",
  "ui": "",
  "name": "human tracking",
  "order": 0,
  "width": 0,
  "height": 0,
  "head": "",
  "format": "<template>\n    <div>\n        <!-- Conditional Styling using Attribute Binding (\":\") -->\n        <!-- and rendering content inside <tags></tags> with {{ }} -->\n        <p> <span :style=\"{'color' : (count > 5 ? 'red' : 'green' )}\">Current Count: {{ msg.payload.info.person }}</span>\n            <span style=\"margin-left:20px\"><b v-if=\"msg.payload.info.person > 5\">Too many!</b> </span>\n        </p>\n        <!-- Computed Rendering using Vue Computed Variables -->\n        <p class=\"my-class\">enter: {{ msg.payload.line_crossing.enter }}</p>\n        <p class=\"my-class\">exit: {{ msg.payload.line_crossing.exit }}</p>\n        <!-- Conditional Rendering with \"v-if\" -->\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            // define variables available component-wide\n            // (in <template> and component functions)\n            return {\n                count: 0\n            }\n        },\n        watch: {\n            // watch for any changes of \"count\"\n            count: function () {\n                if (this.count % 5 === 0) {\n                    this.send({payload: 'Multiple of 5'})\n                }\n            }\n        },\n        computed: {\n            // automatically compute this variable\n            // whenever VueJS deems appropriate\n            formattedCount: function () {\n                return this.count + ' Apples'\n            }\n        },\n        methods: {\n            // expose a method to our <template> and Vue Application\n            increase: function () {\n                this.count++\n            }\n        },\n        mounted() {\n            // code here when the component is first loaded\n        },\n        unmounted() {\n            // code here when the component is removed from the Dashboard\n            // i.e. when the user navigates away from the page\n        }\n    }\n</script>\n<style>\n    /* define any styles here - supports raw CSS */\n    .my-class {\n        color: red;\n    }\n</style>",
  "storeOutMessages": true,
  "passthru": true,
  "resendOnRefresh": true,
  "templateScope": "local",
  "className": "",
  "x": 740,
  "y": 620,
  "wires": [[]]
},
{
  "id": "0f948328c1975515",
  "type": "mqtt-broker",
  "name": "",
  "broker": "172.17.0.1",
  "port": 1883,
  "clientid": "",
  "autoConnect": true,
  "usetls": false,
  "protocolVersion": 4,
  "keepalive": 15,
  "cleansession": true,
  "autoUnsubscribe": true,
  "birthTopic": "",
  "birthQos": "0",
  "birthPayload": "",
  "birthMsg": {},
  "closeTopic": "",
  "closePayload": "",
  "closeMsg": {},
  "willTopic": "",
  "willQos": "0",
  "willPayload": "",
  "willMsg": {},
  "userProps": "",
  "sessionExpiry": ""
},
{
  "id": "e33e8e2eb3424d08",
  "type": "ui-group",
  "name": "人流追踪",
  "page": "h1i2j3k4l5m6n7o8",
  "width": "8",
  "height": "8",
  "order": -1,
  "showTitle": true,
  "className": "",
  "visible": "true",
  "disabled": "false",
  "groupType": "default"
},
{
  "id": "h1i2j3k4l5m6n7o8",
  "type": "ui-page",
  "name": "Frigate Page",
  "ui": "f121584d21d465f1",
  "path": "/frigate",
  "icon": "",
  "layout": "grid",
  "theme": "6666b6af5668e7b2",
  "breakpoints": [
    {"name": "Default","px": "0","cols": "3"},
    {"name": "Tablet","px": "576","cols": "6"},
    {"name": "Small Desktop","px": "768","cols": "9"},
    {"name": "Desktop","px": "1024","cols": "12"}
  ],
  "order": 1,
  "className": "",
  "visible": "true",
  "disabled": "false"
},
{
  "id": "f121584d21d465f1",
  "type": "ui-base",
  "name": "My Dashboard",
  "path": "/dashboard",
  "headerContent": "page",
  "titleBarStyle": "default",
  "showReconnectNotification": true,
  "notificationDisplayTime": 5,
  "showDisconnectNotification": true,
  "allowInstall": true
},
{
  "id": "6666b6af5668e7b2",
  "type": "ui-theme",
  "name": "Default Theme",
  "colors": {
    "surface": "#ffffff",
    "primary": "#0094CE",
    "bgPage": "#eeeeee",
    "groupBg": "#ffffff",
    "groupOutline": "#cccccc"
  },
  "sizes": {
    "density": "default",
    "pagePadding": "12px",
    "groupGap": "12px",
    "groupBorderRadius": "4px",
    "widgetGap": "12px"
  }
},
{
  "id": "e9696690fa075863",
  "type": "global-config",
  "env": [],
  "modules": {
    "@flowfuse/node-red-dashboard": "1.26.0"
  }
}]
```
### 📊 Node-RED Dashboard Preview
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered%20preview.png"/></div>


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
- [SenseCraft-AI_Server Source Repository](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
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
