---
description: 该项目通过 Frigate-on-Jetson 提供实时枪支检测功能
title: 基于 Jetson 的 Frigate 与 Node-RED 枪支警报系统
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/Node-RED%20Gun%20Alerts1.webp
slug: /cn/solutions/frigate-on-jetson-nodered-gun-alerts
last_update:
  date: 09/05/2025
  author: lian
---

该项目通过 Frigate-on-Jetson 提供实时枪支检测功能，结合 Node-RED 构建可视化警报和通知系统，实现安全区域的自动威胁检测、事件警报和历史追溯。

> ⚠️ **合规声明**  
> 该系统仅用于防御性安全目的。用户必须确保遵守当地法律法规并获得相关监控许可。

---

## 📘 1. 系统概述

- 检测引擎：Frigate-on-Jetson（基于 YOLOv4-tiny-288 枪支检测模型，TensorRT 加速）
- 事件流：MQTT 消息推送 → Node-RED 处理
- 警报渠道：Node-RED Dashboard 实时警报面板 + Webhook 推送
- 硬件平台：NVIDIA Jetson 系列（Nano、Xavier、Orin）

## 🏗️ 2. 系统架构

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Architecture%20Diagram.png"/></div>
- Frigate 分析实时视频流并将枪支检测事件发布到 MQTT 主题。
- Node-RED 订阅 `frigate/reviews` 等主题，解析、记录并转发枪支事件。
- 前端 Dashboard 显示最新警报帧和历史记录。
- Webhook 提供即时消息推送到任何平台。

## ⚙️ 3. 安装与部署

## 3.1 Frigate-on-Jetson 安装

**GitHub 仓库：** [Seeed-Studio/frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)

### 3.1.1 环境要求

- NVIDIA Jetson 设备（Nano、Xavier、Orin）
- Ubuntu 22.04 + JetPack 6.x

### 3.1.2 一键安装

```bash
curl -sSL https://raw.githubusercontent.com/Seeed-Studio/frigate-on-jetson/main/install.sh | bash
```

### 3.1.3 访问 Web 界面

```cpp
http://<JETSON_IP>:5000
```

### 3.1.4 运行效果截图

- 主页视图：默认配置包含两个本地视频用于演示

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/homepage%20demo.png"/></div>
- 调试界面显示检测效果
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/test%20demo.png"/></div>

## 🟢 3.2 Node-RED 安装

### 3.2.1 Docker 部署

```bash
sudo docker run -d --restart=always -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

### 3.2.2 访问 Web 界面

```cpp
http://<JETSON_IP>:1880/
```

### 3.2.3 安装 Dashboard 插件
>
> 💡 **提示：** 以下步骤将启用简单的 Web 界面。

- 设置页面
- → 控制面板
- → 安装
- → 搜索 `@flowfuse/node-red-dashboard`  # 【用于提供简单界面】
- → 点击安装

## 🟠 3.3 Frigate 与 Node-RED 集成

### 3.3.1 预检查

- 确保 Frigate 可以正常访问
- 确保 MQTT 服务已启用且可访问
- 确保 Node-RED 服务正常运行且可访问

---

### 3.3.2 Node-RED 工作流介绍

- MQTT 监听（`frigate/reviews`）→ 解析枪支检测事件
- 事件提取（Extract Gun Event）→ 判断是否包含枪支对象
- 警报信息构建 → 缩略图路径拼接、时间格式化、计数器累加
- Dashboard 更新 → 最新图像、历史表格、计数器
- Webhook 推送 → 企业微信机器人

> 💡 **提示：** Webhook URL 可根据需要替换为您自己的通知系统。

---

### 3.3.3 Node-RED 工作流 JSON（第 1/3 部分）

> ⚠️ **重要：** 导入后，请务必根据实际情况调整相应参数。

```json
[{
  "id": "827a3420678b76d2",
  "type": "tab",
  "label": "Frigate Gun Detection",
  "disabled": false
}, {
  "id": "709efb48944e7b98",
  "type": "mqtt in",
  "z": "827a3420678b76d2",
  "name": "Frigate Reviews",
  "topic": "frigate/reviews",
  "qos": "2",
  "datatype": "auto-detect",
  "broker": "0f948328c1975515",
  "nl": false,
  "rap": false,
  "inputs": 0,
  "x": 80,
  "y": 180,
  "wires": [
    ["28fa2bd8baf1f87b", "c840be7a3c85bf4d"]
  ]
}, {
  "id": "28fa2bd8baf1f87b",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "Extract Gun Event",
  "func": "let after = msg.payload.after;\n\nif (!after || !after.data || !after.data.objects.includes(\"gun\")) {\n    return null;\n}\n\nlet count = flow.get(\"gun_count\") || 0;\ncount++;\nflow.set(\"gun_count\", count);\n\nlet history = flow.get(\"gun_history\") || [];\nhistory.unshift({\n    camera: after.camera,\n    start: new Date(after.start_time * 1000).toLocaleString(),\n    end: after.end_time ? new Date(after.end_time * 1000).toLocaleString() : \"---\",\n    thumb: \"http://192.168.118.111:5000\" + after.thumb_path.replace(\"/media/frigate\", \"\")\n});\nhistory = history.slice(0, 10);\nflow.set(\"gun_history\", history);\n\nmsg.payload = {\n    camera: after.camera,\n    start_time: new Date(after.start_time * 1000).toLocaleString(),\n    end_time: after.end_time ? new Date(after.end_time * 1000).toLocaleString() : \"---\",\n    thumb: \"http://192.168.118.111:5000\" + after.thumb_path.replace(\"/media/frigate\", \"\"),\n    url: \"http://192.168.118.111:5000\" + after.thumb_path.replace(\"/media/frigate\", \"\"),\n    count: count,\n};\n\nreturn msg;",
  "outputs": 1,
  "timeout": "",
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 330,
  "y": 240,
  "wires": [
    ["6861bbcee3c4a09f", "bc22b4eb2e47f012", "c05e97b33779bd4a"]
  ]
}, {
  "id": "319c9221c9a18dfc",
  "type": "ui-template",
  "z": "827a3420678b76d2",
  "group": "g1h2i3j4k5l6m7n8",
  "page": "",
  "ui": "",
  "name": "Gun Event Card",
  "order": 2,
  "width": "0",
  "height": "0",
  "format": "<template>\n  <div v-if=\"msg && msg.payload\">\n    <div v-for=\"(cam, name) in msg.payload\" :key=\"name\" style=\"margin-bottom:16px; padding:12px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); background:#fff;\">\n      <h3 style=\"color:#0094CE;\">摄像头：{{ name }} </h3>\n        <p style=\"font-size:14px; margin:0;\">\n          <strong>开始：</strong>{{ cam.start }}<br>\n          <strong>结束：</strong>{{ cam.end }}\n        </p>\n        <div :href=\"cam.thumb\" target=\"_blank\">\n          <img :src=\"cam.thumb\" style=\"max-width:100%; border-radius:8px; cursor: zoom-in;\" />\n        </div>\n    </div>\n  </div>\n  <div v-else>\n    <p>等待枪支检测数据...</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: ['msg']\n}\n</script>",
  "storeOutMessages": true,
  "passthru": true,
  "templateScope": "local",
  "className": "",
  "x": 1020,
  "y": 100,
  "wires": [[]]
}, {
  "id": "824bcb218744ed40",
  "type": "ui-text",
  "z": "827a3420678b76d2",
  "group": "g1h2i3j4k5l6m7n8",
  "order": 3,
  "width": "0",
  "height": "0",
  "name": "Gun Count",
  "label": "枪支检测次数",
  "format": "<span style='background:#ff4d4f; color:#fff; padding:4px 12px; border-radius:12px; font-weight:bold;'>{{msg.payload.count}}</span>",
  "layout": "",
  "style": false,
  "font": "",
  "fontSize": "",
  "color": "#000000",
  "wrapText": false,
  "className": "",
  "x": 1010,
  "y": 180,
  "wires": []
},
{
  "id": "6861bbcee3c4a09f",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "Gun Count Pass",
  "func": "msg.payload = msg.payload.count;\nreturn msg;",
  "outputs": 1,
  "timeout": "",
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 620,
  "y": 180,
  "wires": [
    ["824bcb218744ed40"]
  ]
}, {
  "id": "ab0188e1c37351c1",
  "type": "ui-table",
  "z": "827a3420678b76d2",
  "group": "g1h2i3j4k5l6m7n8",
  "name": "History Table",
  "label": "",
  "order": 4,
  "width": "0",
  "height": "0",
  "maxrows": "5",
  "autocols": false,
  "showSearch": true,
  "deselect": true,
  "selectionType": "none",
  "columns": [
    {
      "title": "摄像头",
      "key": "camera",
      "keyType": "key",
      "type": "text",
      "width": ""
    },
    {
      "title": "开始",
      "key": "start",
      "keyType": "key",
      "type": "text",
      "width": ""
    },
    {
      "title": "结束",
      "key": "end",
      "keyType": "key",
      "width": ""
    },
    {
      "title": "截图",
      "key": "thumb",
      "keyType": "key",
      "type": "image",
      "width": "",
      "align": "start"
    }
  ],
  "mobileBreakpoint": "sm",
  "mobileBreakpointType": "defaults",
  "action": "append",
  "x": 1010,
  "y": 300,
  "wires": [[]]
}, {
  "id": "bc22b4eb2e47f012",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "get history from flow",
  "func": "msg.payload = flow.get(\"gun_history\") || [];\nreturn msg;",
  "outputs": 1,
  "timeout": 0,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 640,
  "y": 300,
  "wires": [
    ["ab0188e1c37351c1"]
  ]
}, {
  "id": "c05e97b33779bd4a",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "prepare msg for alert",
  "func": "msg.payload = {\n    \"msgtype\": \"text\",\n    \"text\": {\n        \"content\": msg.payload.camera + \"检测到枪支\"\n    }\n}\nreturn msg;",
  "outputs": 1,
  "timeout": 0,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 640,
  "y": 240,
  "wires": [
    ["568e88e840e7b711"]
  ]
}, {
  "id": "c840be7a3c85bf4d",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "to cameras",
  "func": "let after = msg.payload.after;\nif (!after || !after.data || !after.data.objects.includes(\"gun\")) return null;\n\n// 读取全局摄像头数据\nlet cameras = flow.get(\"camera_data\") || {};\n\ncameras[after.camera] = {\n    start: new Date(after.start_time*1000).toLocaleString(),\n    end: after.end_time ? new Date(after.end_time*1000).toLocaleString() : \"---\",\n    thumb: \"http://192.168.118.111:5000\" + after.thumb_path.replace(\"/media/frigate\",\"\")\n};\n\n// 存回 Flow\nflow.set(\"camera_data\", cameras);\n\n// 传给 UI 模板渲染\nmsg.payload = cameras;\nreturn msg;",
  "outputs": 1,
  "timeout": 0,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 610,
  "y": 100,
  "wires": [
    ["319c9221c9a18dfc"]
  ]
}, {
  "id": "c2c2f98f485df73b",
  "type": "ui-button",
  "z": "827a3420678b76d2",
  "group": "g1h2i3j4k5l6m7n8",
  "name": "clear",
  "label": "Clear All Data",
  "order": 0,
  "width": 0,
  "height": 0,
  "emulateClick": false,
  "tooltip": "",
  "color": "",
  "bgcolor": "",
  "className": "",
  "icon": "",
  "iconPosition": "left",
  "payload": "{}",
  "payloadType": "str",
  "topic": "topic",
  "topicType": "msg",
  "buttonColor": "",
  "textColor": "",
  "iconColor": "",
  "enableClick": true,
  "enablePointerdown": false,
  "pointerdownPayload": "",
  "pointerdownPayloadType": "str",
  "enablePointerup": false,
  "pointerupPayload": "",
  "pointerupPayloadType": "str",
  "x": 110,
  "y": 420,
  "wires": [
    ["1f42f64aaa7aab78"]
  ]
}, {
  "id": "1f42f64aaa7aab78",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "clean all data in flow",
  "func": "flow.set(\"camera_data\", {});\nflow.set(\"gun_count\", 0);\nflow.set(\"gun_history\", []);\nreturn msg;",
  "outputs": 1,
  "timeout": 0,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 320,
  "y": 420,
  "wires": [
    ["22afdedff5a7e7fd", "beabb7e2f483249f", "44568dce857793da"]
  ]
}, {
  "id": "22afdedff5a7e7fd",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "clean history",
  "func": "msg.payload = []\nreturn msg;",
  "outputs": 1,
  "timeout": 0,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 610,
  "y": 460,
  "wires": [
    ["ab0188e1c37351c1"]
  ]
}, {
  "id": "beabb7e2f483249f",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "clean counter",
  "func": "msg.payload = 0\nreturn msg;",
  "outputs": 1,
  "timeout": 0,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 620,
  "y": 420,
  "wires": [
    ["824bcb218744ed40"]
  ]
}, {
  "id": "44568dce857793da",
  "type": "function",
  "z": "827a3420678b76d2",
  "name": "clean snapshot",
  "func": "msg.payload = {}\nreturn msg;",
  "outputs": 1,
  "timeout": 0,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 620,
  "y": 380,
  "wires": [
    ["319c9221c9a18dfc"]
  ]
},
{
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
  "x": 90,
  "y": 560,
  "wires": [
    ["c086c2dfcc39b708"]
  ]
}, {
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
  "x": 1020,
  "y": 560,
  "wires": [[]]
}, {
  "id": "568e88e840e7b711",
  "type": "http request",
  "z": "827a3420678b76d2",
  "name": "bot webhook send msg",
  "method": "POST",
  "ret": "txt",
  "paytoqs": "ignore",
  "url": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxx35b8-1198-486a-aaec-xxxxb122fd35",
  "tls": "",
  "persist": false,
  "proxy": "",
  "insecureHTTPParser": false,
  "authType": "",
  "senderr": false,
  "headers": [
    {
      "keyType": "other",
      "keyValue": "Content-Type",
      "valueType": "other",
      "valueValue": "application/json"
    }
  ],
  "x": 1050,
  "y": 420,
  "wires": [[]]
}, {
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
}, {
  "id": "g1h2i3j4k5l6m7n8",
  "type": "ui-group",
  "name": "Frigate Events",
  "page": "h1i2j3k4l5m6n7o8",
  "width": "10",
  "height": "17",
  "order": 1,
  "showTitle": true,
  "className": "",
  "visible": "true",
  "disabled": "false",
  "groupType": "default"
}, {
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
}, {
  "id": "h1i2j3k4l5m6n7o8",
  "type": "ui-page",
  "name": "Frigate Page",
  "ui": "f121584d21d465f1",
  "path": "/frigate",
  "icon": "",
  "layout": "grid",
  "theme": "6666b6af5668e7b2",
  "breakpoints": [
    {
      "name": "Default",
      "px": "0",
      "cols": "3"
    },
    {
      "name": "Tablet",
      "px": "576",
      "cols": "6"
    },
    {
      "name": "Small Desktop",
      "px": "768",
      "cols": "9"
    },
    {
      "name": "Desktop",
      "px": "1024",
      "cols": "12"
    }
  ],
  "order": 1,
  "className": "",
  "visible": "true",
  "disabled": "false"
}, {
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
}, {
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
}, {
  "id": "49e238604cea7858",
  "type": "global-config",
  "env": [],
  "modules": {
    "@flowfuse/node-red-dashboard": "1.26.0"
  }
}]```

- **MQTT Broker 地址** (默认: `172.17.0.1:1883`)  
- **Frigate 服务地址** (默认: `http://192.168.118.111:5000`)  

> ⚠️ **提醒：** 请务必修改为与您自己机器的 `JETSON_IP` 匹配。  

## 🔵 3.4 运行效果

在浏览器中访问以下 URL：

```cpp
http://JETSON_IP:1880/dashboard/frigate
```

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/frigateevents.png"/></div>

# 🟣 4. 功能说明

## 4.1 实时枪支检测

- Frigate 基于 YOLOv4-tiny-288 模型检测摄像头画面中的枪支  
- 检测阈值：`0.3`  
- 检测类别：人员 (0)、枪支 (1)  

> 📖 **参考：** 更多详情请参见 GitHub 中的相关配置文件：  
> `frigate-on-jetson/config/config.yml at main · Seeed-Studio/frigate-on-jetson · GitHub`  

---

## 4.2 警报和通知

- 显示最新捕获的画面  
- 历史警报记录（包括时间、摄像头、截图）  
- 实时 Webhook 推送（本 wiki 以企业微信为例）  
- 支持与其他 Webhook 集成  

---

## 4.3 历史记录和计数

- 记录最新的 10 个警报事件  
- 警报累计计数  
- 一键数据清除  

# 🟤 5. 应用场景

- 校园安全区域枪支威胁监控  
- 商场/地铁/交通枢纽防护  
- 周界防御和边界控制  
- 临时活动安全保障  

---

📦 **项目仓库：**  
[GitHub - Seeed-Studio/frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)
