---
description: Este proyecto proporciona capacidades de detección de armas en tiempo real a través de Frigate-on-Jetson
title: Frigate en Jetson con alertas de armas mediante Node-RED
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/Node-RED%20Gun%20Alerts1.webp
slug: /es/solutions/nodered-gun-alerts
last_update:
  date: 09/05/2025
  author: lian
---

Este proyecto proporciona capacidades de detección de armas en tiempo real a través de Frigate-on-Jetson, combinado con Node-RED para construir un sistema visual de alertas y notificaciones, permitiendo detección automática de amenazas, alertas de eventos y trazabilidad histórica en áreas seguras.

> ⚠️ **Aviso de Cumplimiento**  
> Este sistema está destinado únicamente para propósitos de seguridad defensiva. Los usuarios deben asegurar el cumplimiento con las leyes y regulaciones locales y obtener los permisos de monitoreo relevantes.

---

## 📘 1. Descripción General del Sistema

- Motor de Detección: Frigate-on-Jetson (basado en el modelo de detección de armas YOLOv4-tiny-288, acelerado por TensorRT)
- Flujo de Eventos: Envío de mensajes MQTT → Procesamiento Node-RED
- Canales de Alerta: Panel de alertas en tiempo real Node-RED Dashboard + Envío Webhook
- Plataforma de Hardware: Serie NVIDIA Jetson (Nano, Xavier, Orin)

## 🏗️ 2. Arquitectura del Sistema

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Architecture%20Diagram.png"/></div>
- Frigate analiza flujos de video en tiempo real y publica eventos de detección de armas a temas MQTT.
- Node-RED se suscribe a temas como `frigate/reviews`, analiza, registra y reenvía eventos de armas.
- El Dashboard frontend muestra los marcos de alerta más recientes y registros históricos.
- Webhook proporciona envío instantáneo de mensajes a cualquier plataforma.

## ⚙️ 3. Instalación y Despliegue

## 3.1 Instalación de Frigate-on-Jetson

**Repositorio GitHub:** [Seeed-Studio/frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)

### 3.1.1 Requisitos del Entorno

- Dispositivos NVIDIA Jetson (Nano, Xavier, Orin)
- Ubuntu 22.04 + JetPack 6.x

### 3.1.2 Instalación con Un Clic

```bash
curl -sSL https://raw.githubusercontent.com/Seeed-Studio/frigate-on-jetson/main/install.sh | bash
```

### 3.1.3 Acceder a la Interfaz Web

```cpp
http://<JETSON_IP>:5000
```

### 3.1.4 Capturas de Pantalla del Efecto de Ejecución

- Vista de la página principal: La configuración predeterminada incluye dos videos locales para demostración

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/homepage%20demo.png"/></div>
- Interfaz de depuración mostrando el efecto de detección
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/test%20demo.png"/></div>

## 🟢 3.2 Instalación de Node-RED

### 3.2.1 Despliegue con Docker

```bash
sudo docker run -d --restart=always -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

### 3.2.2 Acceder a la Interfaz Web

```cpp
http://<JETSON_IP>:1880/
```

### 3.2.3 Instalar Plugin Dashboard
>
> 💡 **Consejo:** Los siguientes pasos habilitarán una interfaz web simple.

- Página de configuración
- → Panel de Control
- → Instalar
- → Buscar `@flowfuse/node-red-dashboard`  # 【Usado para proporcionar una interfaz simple】
- → Hacer clic en Instalar

## 🟠 3.3 Integración de Frigate y Node-RED

### 3.3.1 Verificaciones Previas

- Asegurar que Frigate pueda ser accedido normalmente
- Asegurar que el servicio MQTT esté habilitado y accesible
- Asegurar que el servicio Node-RED esté ejecutándose normalmente y pueda ser accedido

---

### 3.3.2 Introducción al Flujo de Trabajo de Node-RED

- Escucha MQTT (`frigate/reviews`) → Analizar eventos de detección de armas
- Extracción de eventos (Extract Gun Event) → Determinar si contiene objetos de armas
- Construcción de información de alerta → Concatenación de ruta de miniatura, formato de tiempo, acumulación de contador
- Actualización de Dashboard → Imagen más reciente, tabla de historial, contador
- Envío Webhook → Bot de WeChat empresarial

> 💡 **Consejo:** La URL del Webhook puede ser reemplazada con su propio sistema de notificaciones según sea necesario.

---

### 3.3.3 JSON del Flujo de Trabajo de Node-RED (Parte 1/3)

> ⚠️ **Importante:** Después de importar, asegúrese de ajustar los parámetros correspondientes según la situación real.

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
}]

```

- **MQTT Broker Address** (default: `172.17.0.1:1883`)  
- **Frigate Service Address** (default: `http://192.168.118.111:5000`)  

> ⚠️ **Reminder:** Be sure to modify to match your own machine’s `JETSON_IP`.  

## 🔵 3.4 Running Effect

Access the following URL in your browser:

```cpp
http://JETSON_IP:1880/dashboard/frigate
```

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/frigateevents.png"/></div>

# 🟣 4. Function Description

## 4.1 Real-time Gun Detection

- Frigate detects guns in camera footage based on the YOLOv4-tiny-288 model  
- Detection threshold: `0.3`  
- Detection categories: Person (0), Gun (1)  

> 📖 **Reference:** For more details, see related configuration files in GitHub:  
> `frigate-on-jetson/config/config.yml at main · Seeed-Studio/frigate-on-jetson · GitHub`  

---

## 4.2 Alerts and Notifications

- Display the latest captured frame  
- Historical alert records (including time, camera, screenshot)  
- Real-time Webhook push (this wiki uses Enterprise WeChat as an example)  
- Supports integration with other Webhooks  

---

## 4.3 History Records and Counting

- Record the latest 10 alert events  
- Accumulative counting of alerts  
- One-click data clearing  

# 🟤 5. Application Scenarios

- Campus security area gun threat monitoring  
- Protection in shopping malls / subways / transportation hubs  
- Perimeter defense and boundary control  
- Security for temporary events  

---

📦 **Project Repository:**  
[GitHub - Seeed-Studio/frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)
