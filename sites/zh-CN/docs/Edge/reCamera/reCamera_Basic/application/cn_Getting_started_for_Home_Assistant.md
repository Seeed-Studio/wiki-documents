---
description: 提供一个将 reCamera 与 Home Assistant 集成的教程。Home Assistant 安装在 reComputer 上。
title: Home Assistant 入门指南
keywords:
  - reCamera
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/HA.png
slug: /getting_started_for_home_assistant_with_recamera_bak
sku: 102991896, 108990119, 100029708, 114993560
sidebar_position: 6
last_update:
  date: 11/11/2025
  author: Xinrui Wu
createdAt: '2025-11-11'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/getting_started_for_home_assistant_with_recamera_bak/
---

# 使用 reCamera 的 Home Assistant 入门指南

## 介绍

Home Assistant 是一个开源的智能家居平台系统，用户可以轻松地将自己的物联网设备接入系统进行统一管理。然而，Home Assistant 的主要特点不仅仅是实现对各种传感设备的查看，更重要的是实现跨平台设备的自动联动，只有这样的智能家居平台才足够有生命力。

## 硬件准备

一台 reCamera（可以是 2002 系列、HQ POE 版本或云台版本中的任意一款，但需要注意的是，POE 版本不具备 WiFi 功能，需要通过带有 POE 功能的交换机接入同一网段）  
一台 reComputer（任意版本均可，这里以 reComputer AI R2130-12 为例）  
一台电脑

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 安装 Home Assistant（以 reComputer AI R2130-12 为例）

### 系统准备

如果已经安装了 Home Assistant，请直接跳转到“查找配置文件路径”步骤进行后续配置。

1. 更新系统

```bash
sudo apt update && sudo apt upgrade -y
```

2. 安装必要依赖

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

### 安装 Docker

1. 官方脚本安装

```bash
curl -fsSL https://get.docker.com | sh
```

2. 允许当前用户使用 Docker

```bash
sudo usermod -aG docker $USER
```

3. 重启系统使权限生效

```bash
sudo reboot
```

4. 验证安装

```bash
docker run hello-world
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

如果你看到 "Hello from Docker!" 这行字，就说明安装成功了。

### 安装 Home Assistant（容器模式）

1. 创建挂载目录
用于持久化配置文件：

```bash
mkdir -p ~/homeassistant/config
```

2. 启动容器
运行以下命令启动 Home Assistant  
（此步骤可能需要一段时间，速度取决于你的网络情况）

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

参数说明：
- `--network=host`：Home Assistant 可以直接访问宿主机网络（自动发现设备所必需）
- `-v ~/homeassistant/config:/config`：保存配置文件
- `--restart=unless-stopped`：自动重启
- `--privileged`：启用硬件访问（USB Zigbee/Z-Wave 等）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### 访问 Home Assistant

1. 查看 IP

```bash
hostname -I
```

2. 通过浏览器访问

Docker 启动后，等待 1 到 2 分钟，然后在浏览器中访问：

```bash
http://<your IP>:8123
```

例如：

```bash
http://192.168.1.88:8123
```

首次启动会进入初始化界面，你可以开始创建账号并配置你的智能家居。

### 查找配置文件路径

Home Assistant 的所有配置都保存在：

```bash
/homeassistant/config/
```

你可以通过以下指令查看：

```bash
cd /homeassistant/config
ls
```

你会看到这些文件：

```bash
automations.yaml  configuration.yaml  scripts.yaml ...
```

### 配置自动化以接收 reCamera 数据

1. 安装 nano 编辑器

```bash
sudo apt install nano -y
```

2. 编辑 `automations.yaml`：

```bash
sudo nano /homeassistant/config/automations.yaml
```

将内容替换为：

```yaml
- alias: "ReCamera Detection"
  description: "Receive the detection results from ReCamera"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

  mode: single
```

保存并退出：

- **Ctrl + O** → 回车（保存）
- **Ctrl + X**（退出）

3. 编辑 configuration.yaml：

```bash
sudo nano /homeassistant/config/configuration.yaml
```

将内容替换为：

```yaml
# ==========================
# Basic Configuration of Home Assistant
# ==========================

# Load default integration (do not delete)
default_config:

# Load the front-end theme
frontend:
  themes: !include_dir_merge_named themes

# Load the independent configuration file
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera Physical Configuration Section
# ==========================

# Define an "input_text" entity to store the latest detection results from ReCamera.
input_text:
  recamera_people_raw:
    name: Original detection result of ReCamera
    max: 255
    icon: mdi:account-group  # Optional: Display as "Group" icon

# Define a template sensor to display the detection results of ReCamera
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera Personnel Counting Function"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline
```

保存并退出：

- **Ctrl + O** → 回车（保存）
- **Ctrl + X**（退出）

4. 保存并退出后，重启 Home Assistant

```bash
docker restart homeassistant
```

## reCamera 的配置（以 2002w 版本为例）

### 将 reCamera 插入电脑后，访问 192.168.42.1

如果多次尝试仍无法打开界面，请参考 [Factory Reset](https://wiki.seeedstudio.com/cn/recamera_getting_started/#Factory-Reset) 部分对设备进行重置。重置完成后再次访问 192.168.42.1。重置后会提示你修改密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### 登录后，点击右下角进入 "Workspace"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### 进入 Workspace 后，配置节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

新增了四个节点："debug1"、"debug2"、"function1" 和 "HTTP request"。  
debug1 和 debug2 用于观察输出信息，可选；function1 用于处理数据；HTTP request 节点用于向 Home Assistant 发送数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

接下来，我们需要修改原有的 "Model Info Handle" 节点，使其只输出某个特定检测目标的数量。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

双击打开该节点，并将代码替换为以下内容：

```javascript
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

修改完成后，点击右上角的 "Finish" 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

这段代码只输出检测到的人员数量。如果你想进行修改，可以更改检测对象。  
你可以通过查看模型节点来了解可以检测哪些类型的对象。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

接下来，配置 function1 节点，并将原始代码替换为以下内容：

```javascript
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

接下来，我们将配置 HTTP request 节点。在这里，我们需要修改三个区域：

| **选项**| **设置值**|
|-----------|-----------|
| **请求方法**| POST|
| **URL 地址**| `http://<your IP>:8123/api/webhook/recamera_detection`|
| **响应**| JSON 对象|

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

设置完成后，点击右上角的 "Deploy" 按钮。部署成功后会有提示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

这里你还需要执行一步操作，就是将 reCamera 连接到 WiFi。它应与您为 reComputer 设置的网络处于同一网络中（注意，POE 版本不具备 WiFi 功能，需要使用带 POE 功能的交换机连接到同一网段）。  

点击左上角的 "Network" 按钮来配置网络。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
请记住！一定要确保 Recamera 已连接到网络！！！否则将无法通信。
:::

## 查看 Home Assistant 的概览界面

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

如果还没有看到效果，首先检查链接是否未正确连接。也就是说，确认 Webhook 是否正常工作：  
在任意设备（ReCamera 或电脑）的终端中执行：

```shell
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

如果成功，Home Assistant 通知将显示：
> **ReCamera Detection Results**  
Test from curl

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
