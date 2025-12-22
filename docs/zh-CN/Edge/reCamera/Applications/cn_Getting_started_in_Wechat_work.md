---
description: 提供将 reCamera 与企业微信集成的教程。依赖于 Home Assistant。
title: 企业微信入门指南
keywords:
  - reCamera
  - Wechat work
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png
slug: /cn/getting_started_in_Wechat_work_with_recamera
sidebar_position: 8
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---

# 耦合 reCamera Home Assistant 企业微信

## 简介

一个真正动态的智能系统绝不仅仅是"看世界"，而是能够理解事件、触发动作并实现跨平台互联。在这个解决方案中，我们将使用基于 AI 的 ReCamera 作为前端感知设备，通过 Node-RED 完成数据解析和格式化，然后使用 Home Assistant 作为自动化中心来实时呈现检测结果、做出决策，并进一步与企业微信机器人链接以实现即时通知。整个链条形成了一套可扩展、可观察、自动响应的智能场景系统。
ReCamera 使用 YOLO 模型实时检测人类和宠物等物体；Node-RED 处理检测结果并将其推送到 Home Assistant；HA 使用 Webhook 自动化将数据写入实体、执行条件判断并将报警信息推送到企业微信群的过程，实现跨平台实时警报。这种架构不仅展示了 ReCamera 和 HA 的深度耦合能力，还反映了如何在实际应用中结合 AI 视觉、自动化规则和企业级通知系统来构建真正"可用且智能"的物联网集成解决方案。

## 硬件准备

一台 reCamera（可以是 2002 系列、HQ POE 版本或云台版本中的任何一种，但请注意 POE 版本没有 WiFi 功能，需要连接具有 POE 功能的交换机在同一网段内）  
一台 reComputer（任何版本都可以，这里我使用 reComputer AI R2130-12 作为示例）  
一台计算机（已安装企业微信）

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera 云台</th>
  <th>reCamera HQ POE</th>
  <th>reComputer AI R2000 系列</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 1.企业微信配置

### (1) 创建智能机器人

点击通讯录-智能机器人-创建智能机器人

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat1.png" /></div>

### (2) 配置机器人

完成必填项后，点击保存

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat2.png" /></div>

### (3) 创建新群聊

将刚创建的机器人和任意同事拉入群中（因为超过 3 人才能建群，建群成功后可以将同事移出群聊）

### (4) 配置消息推送

配置步骤如下图所示。填写名称和介绍后，点击保存。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat3.png" /></div>

此步骤中的 Webhook 地址在稍后编辑 configuration.yaml 时会很有用。

记住，一定要**保护好消息推送的 webhook 地址**以避免泄露！不要分享到 github、博客等可以公开查阅的地方，否则坏人可以利用你的消息推送发送垃圾消息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat4.png" /></div>

如果你想查看如何配置的详细信息，请点击"了解如何配置"，企业微信官方提供了消息格式例程，让你能够更好地理解

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat5.png" /></div>

## 2. reComputer AI R2130-12 配置

### (1) 系统准备

#### 更新系统

```bash
sudo apt update && sudo apt upgrade -y
```

#### 安装必要依赖

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

---

### (2) 安装 Docker

#### 官方脚本安装

```bash
curl -fsSL https://get.docker.com | sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_docker.png" /></div>

#### 允许当前用户使用 docker

```bash
sudo usermod -aG docker $USER
```

#### 然后重启系统使权限生效

```bash
sudo reboot
```

#### 验证安装

```bash
docker run hello-world
```

如果你看到"Hello from Docker!"字样，表示安装成功

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

---

### (3) 安装 Home Assistant（容器模式）

#### 创建挂载目录

为了持久化配置文件：

```bash
mkdir -p ~/homeassistant/config
```

#### 启动容器

运行以下命令启动 Home Assistant（此步骤需要很长时间，取决于你的网络）：

```bash
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Asia/Shanghai \
  -v ~/homeassistant/config:/config \
  -v /etc/localtime:/etc/localtime:ro \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```

> 参数说明：

>>

> - '--network=host'：Home Assistant 直接访问主机网络（自动设备发现所需）

> - '-v ~/homeassistant/config:/config'：保存配置文件

> - '--restart=unless-stopped'：自动重启

> - '--privileged'：启用硬件访问（USB Zigbee/Z-Wave 等）

---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### (4) 访问 Home Assistant

#### 查看 IP：

```bash
hostname -I
```

#### 访问浏览器

容器启动后等待 1 到 2 分钟，然后在浏览器中访问：

```
http://<你的IP>:8123
```

示例：

```
http://192.168.1.88:8123
```

首次启动将进入初始化界面，开始创建账户并配置智能家居

------

### (5) 查找配置文件路径

Home Assistant 所有配置都保存在：

```
/home/seeed/homeassistant/config/
```

可通过以下方式查看：

```bash
cd /home/seeed/homeassistant/config
ls
```

查看：

```
automations.yaml  configuration.yaml  scripts.yaml ...
```

------

### (6) 配置自动化以接收 ReCamera 数据

#### 安装编辑器：

```bash
sudo apt install nano -y
```

#### 编辑 'automations.yaml'：

```bash
sudo nano /home/seeed/homeassistant/config/automations.yaml
```

替换内容：

```yaml
- alias: "ReCamera Detection"
  description: "接收来自 ReCamera 的检测结果并更新实体和推送企业微信"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    # 1️⃣ 更新 input_text 实体（UI 上显示）
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

    # 2️⃣ 条件判断：人数 >= 2 时推送企业微信
    - condition: template
      value_template: >
        {% set payload = trigger.json.payload %}
        {% set num = payload | regex_findall_index('[0-9]+') | first | int %}
        {{ num >= 2 }}

    - service: rest_command.recamera_wechat_notify
      data:
        message: "ReCamera 检测到多人！当前人数：{{ trigger.json.payload }}"

  mode: single
```

保存并退出：

-**Ctrl O** → Enter（保存）

-**Ctrl X**（退出）

#### 编辑 configuration.yaml：

```bash
sudo nano /home/seeed/homeassistant/config/configuration.yaml
```

替换内容：

```yaml
# ==========================
# Home Assistant 基础配置
# ==========================

# 加载默认集成（请勿删除）
default_config:

# 加载前端主题
frontend:
  themes: !include_dir_merge_named themes

# 加载独立配置文件
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera 实体配置部分
# ==========================

# 1️⃣ 定义一个 input_text 实体，用于保存 ReCamera 最新检测结果
input_text:
  recamera_people_raw:
    name: ReCamera 原始检测结果
    max: 255
    icon: mdi:account-group  # 可选：显示为“多人”图标

# 2️⃣ 定义一个模板传感器，用于展示 ReCamera 检测结果
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera 检测人数"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline


# ==========================
# 企业微信机器人推送
# ==========================
rest_command:
  recamera_wechat_notify:
    url: "https://xxxxxx"  #此处填写你在群聊中配置的Webhook地址
    method: POST
    headers:
      Content-Type: "application/json"
    payload: |
      {
        "msgtype": "text",
        "text": {
          "content": "{{ message }}",
          "mentioned_list": ["@all"]
        }
      }

```

保存并退出：

-**Ctrl O** → Enter（保存）

-**Ctrl X**（退出）

#### 保存并退出后，重启 Home Assistant：

```bash
docker restart homeassistant
```

------

## 3. reCamera 2002w 的配置

### （1）将 reCamera 插入电脑后，访问 192.168.42.1

如果您一直卡住无法打开界面，请参考"恢复出厂设置"部分重置设备。重置后，再次访问 192.168.42.1。重置后，您需要修改密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### （2）登录界面后，点击右下角进入 "Workspace"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### （3）进入 Workspace 后配置节点

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

这四个新节点已添加：debug1 和 debug2 用于观察输出信息，是否必要；function1 用于处理数据；Http request 节点用于向 Home Assistant 发送数据

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

接下来，修改原始节点 "Model Info Handle"，使其仅输出某个检测目标的数量。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

双击打开节点并将代码替换为以下内容：

```
let currentModel = "Current People";
const object = 'person';

const labels = msg.payload?.data?.labels ?? [];

if (!Array.isArray(labels)) {
    return { payload: '' };
}

const num = labels.filter(label => String(label).toLowerCase() === object).length;
currentModel += ` number: ${num}`;

return { payload: currentModel };
```

修改后点击右上角的 "Finish"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

此代码仅输出检测到的人数。如果您想修改它，可以修改检测对象。

您可以通过查看模型节点来了解可以检测哪些类型的对象

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

接下来，配置 function1 节点并替换原始代码：

```
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

接下来，配置 http request 节点。这里我们需要修改三个地方：

| 选项 | 设置值 |
| ------------ | ----------------------------------------- |
| **Request Method** | POST |
| **URL address** | 'http://YOUR_IP:8123/api/webhook/recamera_detection'|
| **Return** | JSON Object |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

设置后，点击右上角的 "Deploy"，部署成功后会提供提示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

这里您还需要再做一步，即将 reCamera 连接到 WiFi，并将 reComputer 连接到同一网络下。

点击左上角的 "Network" 来配置网络

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
请记住！确保将 reCamera 连接到网络！！！否则将无法通信。
:::

## 4. 查看效果

此时，应该在企业微信中看到以下效果：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png" /></div>

相应地，Home Assistant 的概览屏幕应显示以下内容：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

如果您没有看到效果，首先检查链接是否不工作，即验证 Webhook 是否正常：

在任何设备上（reCamera、PC 等）：

```bash
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

如果成功，Home Assistant 通知中会出现以下内容：

> **reCamera 测试结果**
>
> 来自 curl 的测试

------

## 系统逻辑

```
┌────────────────────────────────────────────────────────────────────────┐
│ ReCamera (AI Camera)                                                   │
│ └─ YOLO Model Detects Objects (e.g., person, cat)                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Node-RED Flow                                                          │
│                                                                        │
│ [Model Info Handle]                                                    │
│ └─ Parse detection results, count objects                              │
│    Output:                                                             │
│    payload = "Current people number: 1"                                │
│                                                                        │
│ [Function Node]                                                        │
│ └─ Pack into JSON format:                                              │
│    payload = { payload: "Current people number: 1" }                   │
│                                                                        │
│ [HTTP Request Node]                                                    │
│ └─ POST → HA Webhook                                                   │
│    URL: http://<HA_IP>:8123/api/webhook/recamera_detection             │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Home Assistant (HA)                                                    │
│                                                                        │
│ [Webhook Trigger]                                                      │
│ └─ Receive data sent from Node-RED                                     │
│                                                                        │
│ [Automation]                                                           │
│ ├─ Write payload into input_text.recamera_people_raw                   │
│ │    → Display detected people count in real time on HA frontend       │
│ │                                                                      │
│ ├─ Condition check: if count ≥ 2                                       │
│ │      → Trigger rest_command to call WeCom Bot                        │
│ │                                                                      │
│ └─ Call rest_command.recamera_wechat_notify                            │
│       POST detection information to WeCom Webhook                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ WeCom Bot (Group Chat)                                                 │
│                                                                        │
│ Message received:                                                      │
│   "ReCamera detected multiple people! Current count:                   │
│    Current people number: 3"                                           │
│                                                                        │
│ → Instant alert to group members                                       │
└────────────────────────────────────────────────────────────────────────┘

```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
