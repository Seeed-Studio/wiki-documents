---
description: 介绍 Jetson 人群跟踪的 AI 演示
title: 人群跟踪与计数
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /cn/solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
---

本指南适用于 **NVIDIA Jetson Ubuntu 22 + JetPack 6.x** 环境，帮助您快速完成部署。

## 📋 环境要求

- **设备**: NVIDIA Jetson 系列（Nano、Xavier、Orin 等）
- **系统**: Ubuntu 22.x + JetPack 6.x
- **网络**: 能够访问 GitHub 和 Docker Hub
- **权限**: `sudo` 权限

> 如果您的设备尚未安装合适的系统环境，请参考官方刷机指南进行系统安装和环境准备：  
> [JetPack 刷机教程（Seeed Studio）](/cn/flash/jetpack_to_selected_product/)

## ⚡ 一键部署

在您的 Jetson 设备终端中运行以下命令：

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 脚本支持**幂等执行**，意味着多次运行是安全的。

## 🔍 部署过程

脚本自动执行以下步骤：

1. **安装 Docker (27.x)**  
   - 检查是否已安装 Docker  
   - 如果已安装但不是 27.x 版本 → 自动卸载并重新安装  
   - 配置 NVIDIA Container Toolkit  
   - 设置 Docker 默认运行时为 `nvidia`

2. **安装 MQTT Broker**  
   - 安装 `mosquitto` 和 `mosquitto-clients`  
   - 配置允许外部访问：  

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **部署 SenseCraft AI Server**  
   - 克隆指定分支到 `~/sensecraft-ai_server`  
   - 运行 `scripts/run.sh` 启动服务  
   - 下载 YOLOv11 模型到 `~/sensecraft-ai_server/models/yolo11n.pt`

---

## 🛡 异常处理

- **幂等执行**：  
  - **大多数问题**（如网络中断、部分安装失败）可以通过**简单地重新运行脚本**来修复  
  - 脚本检查软件版本和配置，只安装缺失或不正确的部分  
- **罕见问题**（如永久性 apt 源故障、无法访问外部仓库）需要手动干预

---

## 🖥 启动和访问服务

1. **启动服务**  

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

### 📷 命令行输出（示例）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command"/></div>

2. **访问主页面**  
   - 在浏览器中：  

     ```bash
     http://<JETSON_IP>:46654
     ```

   - 默认参数已预配置；启动即可看到结果

### 📷 Web 界面（示例）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png"/></div>

3. **访问配置页面**  
   - 在浏览器中：  

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - 在这里您可以调整视频源、模型、推理参数等，并将其保存到服务器

## ⚙ 配置页面概览

### 📷 配置页面（示例）

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png"/></div>

## ✨ 检测结果获取

部署服务时会安装本地 MQTT broker。因此，可以通过本地 MQTT 获取识别结果。

### 📡 MQTT 消息推送主题

```bash
edgeai/result
```

### 🧩 MQTT 消息数据结构

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

### 🔧 Node-RED 配置

可能需要校准 MQTT broker 的 IP。
在这种情况下，Node-RED 部署在容器中，因此使用 docker0 地址。
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered.png"/></div>
## 🔧 Node-RED 配置（完整流程）

可能需要校准 MQTT broker 的 IP。  
在这种情况下，Node-RED 部署在容器中，因此使用 `docker0` 地址。

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

### 📊 Node-RED 仪表板预览

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered%20preview.png"/></div>

### 视频源

- 支持**本地视频文件**、**USB 摄像头**（默认第一个设备）、**RTSP 流**
- 支持 MP4、AVI、MOV、MKV 上传
- 查看和删除已上传的视频源

### AI 模型

- 从可用的 AI 推理模型中选择
- 支持 `.pt`、`.pth`、`.onnx`、`.engine` 格式
- 查看和删除已上传的模型

### 推理参数

- **置信度阈值**: 0.1–1.0
- **最大检测数**: 1–1000
- **半精度推理**: 提升速度（对小模型差异很小）

### 显示

- 显示检测框（可自定义颜色，默认橙色）
- 时间戳和 FPS 始终启用

### 跟踪

- 启用多目标跟踪
- 显示轨迹线，可自定义长度、粗细和颜色

### 绊线检测

- 支持水平或垂直绊线（推荐垂直）
- 绘制起始/结束点；启用显示进行实时调试
- 容差：1–20 像素
- 可自定义颜色和粗细
- 显示/隐藏和重置计数器（服务重启时重置）

### 配置管理

- 将当前配置保存到服务器（运行时加载）
- 导出/导入配置文件
- 恢复默认设置

---

## 🛠 常见问题

| 问题                        | 原因                      | 解决方案                                                              |
| ---------------------------- | -------------------------- | --------------------------------------------------------------------- |
| `Docker 安装失败` | 网络不稳定或源问题 | 检查网络并重新运行脚本                                   |
| Mosquitto 无法连接     | 防火墙/配置问题      | 确保 `/etc/mosquitto/mosquitto.conf` 包含 `listener 1883 0.0.0.0` |
| YOLO 模型未下载    | 网络中断       | 删除 `~/sensecraft-ai_server/models/yolo11n.pt` 并重新运行脚本 |

---

## 📦 卸载服务

```bash
# Uninstall MQTT
sudo apt remove -y mosquitto mosquitto-clients

# Uninstall Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove service directory
rm -rf ~/sensecraft-ai_server
```

---

## 📚 参考资料

- [Jetson 刷机指南](/cn/flash/jetpack_to_selected_product/)
- [SenseCraft-AI_Server 源代码仓库](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [NVIDIA Jetson Docker 指南](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Mosquitto 官方文档](https://mosquitto.org/man/mosquitto-conf-5.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
