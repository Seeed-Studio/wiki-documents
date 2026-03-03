---
description: Provide a tutorial for integrating reCamera with Wechat work. Dependent on Home Assistant.
title: Getting started in Wechat work
keywords:
  - reCamera
  - Wechat work
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png
slug: /getting_started_in_Wechat_work_with_recamera
sidebar_position: 8
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---

# Coupling reCamera Home Assistant Enterprise WeChat

## Introduction

A truly dynamic intelligent system is never merely about "seeing the world", but is capable of understanding events, triggering actions, and achieving cross-platform interconnection. In this solution, we will use AI-based ReCamera as the front-end sensing device, complete data parsing and formatting through Node-RED, and then use Home Assistant as the automation center to present the detection results in real time, make decisions, and further link with the enterprise WeChat robot to achieve immediate notifications. The entire chain forms a set of expandable, observable, and automatically responsive intelligent scene system.
ReCamera uses the YOLO model to detect objects such as humans and pets in real time; Node-RED processes the detection results and pushes them to Home Assistant; HA uses Webhook to automate the process of writing data to entities, performing condition judgments, and pushing alarm information to the enterprise WeChat group, achieving cross-platform real-time alerts. This architecture not only demonstrates the deep coupling capability of ReCamera and HA, but also reflects how to combine AI vision, automation rules, and enterprise-level notification systems in practical applications to build a truly "usable and intelligent" IoT integrated solution.

## Hardware Preparation

One reCamera (it can be any of the 2002 series, HQ POE version, or pan-tilt version, but note that the POE version does not have WiFi functionality and requires a switch with POE function to be connected in the same network segment)  
one reComputer (any version is fine, here I use reComputer AI R2130-12 as an example)  
one computer (Enterprise WeChat has been installed.)

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
  <th>reComputer AI R2000 Series</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 1.Configuration of Enterprise WeChat

### (1) Create an intelligent robot

Click Address Book-Intelligent Robot-Create Intelligent Robot

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat1.png" /></div>

### (2) Configure the robot

After completing the required items, click Save

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat2.png" /></div>

### (3) Create a new group chat

Pull the robot you just created and any colleague into the group (because more than 3 people can build the group, and you can move the colleague out of the group chat after the group building is successful)

### (4) Configure message push

The configuration steps are shown in the following figure. After filling in the name and introduction, click Save.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat3.png" /></div>

The Webhook address in this step will be useful when editing the configuration.yaml later.

Remember, be sure to **protect the webhook address of the good news push** to avoid leakage! Don't share to github, blogs and other places that can be publicly consulted, otherwise the bad guys can use your message push to send spam messages.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat4.png" /></div>

If you want to see the details of how to configure, please click "know how to configure", enterprise WeChat official provides a message format routine, so that you can better understand

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat5.png" /></div>

## 2. reComputer AI R2130-12 configuration

### (1) System Preparation

#### Update the system

```bash
sudo apt update && sudo apt upgrade -y
```

#### Install necessary dependencies

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

---

### (2) Install Docker

#### Official Script Installation

```bash
curl -fsSL https://get.docker.com | sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_docker.png" /></div>

#### Allow the current user to use docker

```bash
sudo usermod -aG docker $USER
```

#### Then restart the system to make the permissions take effect

```bash
sudo reboot
```

#### Verify Installation

```bash
docker run hello-world
```

If you see "Hello from Docker!" The words, indicating that the installation was successful

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

---

### (3) Install Home Assistant(Container Mode)

#### Create a mount directory

In order to persist the configuration file:

```bash
mkdir -p ~/homeassistant/config
```

#### Start the container

Run the following command to start the Home Assistant (this step will take a long time, depending on your network):

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

> Parameter description:

>>

> - '-- network = host':Home Assistant has direct access to the host network (required for automatic device discovery)

> - '-v ~/homeassistant/config:/config': save configuration file

> - '-- restart = unless-stopped': automatic restart

> - '-- privileged': enable hardware access (USB Zigbee/Z-Wave, etc.)

---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### (4) Access Home Assistant

#### View IP:

```bash
hostname -I
```

#### Visit the browser

Wait for 1 to 2 minutes after the container starts, and then access it in the browser:

```
http://<你的IP>:8123
```

Example:

```
http://192.168.1.88:8123
```

The first start will enter the initialization interface, start to create an account and configure smart home

------

### (5) find the configuration file path

Home Assistant All configurations are saved in:

```
/home/seeed/homeassistant/config/
```

Available through:

```bash
cd /home/seeed/homeassistant/config
ls
```

See:

```
automations.yaml  configuration.yaml  scripts.yaml ...
```

------

### (6) configuration automation to receive ReCamera data

#### Install the editor:

```bash
sudo apt install nano -y
```

#### Edit 'automations.yaml ':

```bash
sudo nano /home/seeed/homeassistant/config/automations.yaml
```

Replace the content:

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

Save and exit:

-**Ctrl O** → Enter (Save)

-**Ctrl X** (Exit)

#### Edit configuration.yaml:

```bash
sudo nano /home/seeed/homeassistant/config/configuration.yaml
```

Replace the content:

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

Save and exit:

-**Ctrl O** → Enter (Save)

-**Ctrl X** (Exit)

#### After saving and exiting, restart the Home Assistant:

```bash
docker restart homeassistant
```

------

## 3. reCamera the configuration of 2002w

### (1) After inserting the reCamera into the computer, access 192.168.42.1

If you have been stuck and cannot open the interface, please refer to the "Restore Factory Settings" section to reset the device. After resetting, visit 192.168.42.1 again. After resetting, you need to modify the password.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### (2) After logging in the interface, click the lower right corner to enter "Workspace"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### (3) Configure the node after entering the Workspace

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

These four new nodes have been added: debug1 and debug2 are used to observe the output information, whether it is necessary or not; function1 is used to process data; Http request node is used to send data to Home Assistant

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

Next, modify the original node "Model Info Handle" so that it only outputs the number of a certain detection target.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

Double-click to open the node and replace the code with the following:

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

Click "Finish" in the upper right corner after modification"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

This code only outputs the number of detected persons. If you want to modify it, you can modify the detected object.

You can see which types of objects can be detected by looking at the model node

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

Next, configure the function1 node and replace the original code:

```
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

Next, configure the http request node. Here we need to modify three places:

| Options | Set value |
| ------------ | ----------------------------------------- |
| **Request Method** | POST |
| **URL address** | 'http://YOUR_IP:8123/api/webhook/recamera_detection'|
| **Return** | JSON Object |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

After setting, click "Deploy" in the upper right corner, and a prompt will be provided after the deployment is successful.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

Here you still need to do one more step, that is, to connect the reCamera to WiFi, and to connect the reComputer to you under the same network.

Click "Network" in the upper left corner to configure the network

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
Please remember! Make sure to connect Recamera to the network!!! Otherwise, communication will not be possible.
:::

## 4. To View the Effect

At this time, the following effects should be seen in the enterprise micro:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png" /></div>

Accordingly, the overview screen of the Home Assistant should display the following:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

If you haven't seen the effect, first check whether the link is not working, that is, verify whether the Webhook is normal:

On any device (ReCamera, PC, etc.):

```bash
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

If successful, the following appears in the Home Assistant notification:

> **ReCamera Test Results**
>
> Test from curl

------

## System logic

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

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
