---
description: 在多台 Jetson 设备上部署容器化的 Reachy Mini 舞蹈服务，并通过一台笔记本电脑上的 Web UI 控制整个机器人集群。
title: 在 Jetson 上通过集群舞蹈控制台控制多台 Reachy Mini 机器人
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_reachy_fleet_dance
last_update:
  date: 03/25/2026
  author: Youjiang
keywords:
  - Jetson
  - Reachy Mini
  - Docker
  - Robotics
  - Web UI
  - Fleet Control
createdAt: '2026-03-25'
url: https://wiki.seeedstudio.com/cn/ai_robotics_reachy_fleet_dance/
updatedAt: '2026-03-25'
---

# 在 Jetson 上通过集群舞蹈控制台控制多台 Reachy Mini 机器人

## 介绍

本教程展示如何使用 Reachy Mini 和 Jetson 设备搭建一个多机器人舞蹈演示。

在本项目中，每台 Jetson 都在 Docker 中运行一个本地 Reachy Mini 舞蹈服务，同时提供 Web UI 和 REST API。然后，一台单独的笔记本电脑上运行的集群控制仪表盘可以在同一局域网中发现多台 Jetson 的 IP，并向所有已连接的 Reachy Mini 机器人同时广播相同的舞蹈指令。

最终你将得到这样一个演示场景：

- 每台 Jetson 运行一台 Reachy Mini
- 在笔记本电脑上打开一个集中式浏览器仪表盘
- 动态添加多台 Jetson 的 IP 地址
- 同时启动或停止所有机器人的舞蹈
- 为整个机器人集群调整 BPM、舞蹈风格和能量
- 一次性在所有机器人上触发重音和归中动作

:::note
本项目包含两个层级：

- `reachy_bpm_dancer`：运行在每台 Jetson 上的单机器人服务
- `reachy_fleet_control`：运行在笔记本电脑上的集中式集群仪表盘
:::

## 目录

1. 硬件准备
2. 系统架构
3. 为 Reachy Mini 准备每台 Jetson
4. 部署容器化的 Reachy Mini 舞蹈服务
5. 在笔记本电脑上运行集群控制仪表盘
6. 控制多台 Reachy Mini 机器人
7. REST API 参考
8. 故障排查
9. 参考资料

## 硬件准备

### 设备清单

- 1 台处于同一局域网的 Windows 笔记本或控制 PC
- 1 台或多台 Jetson 设备
- 每台 Jetson 通过 USB 连接 1 台 Reachy Mini
- 1 个用于局域网接入的网络路由器或交换机

该工作流适用于基于 Jetson 的边缘设备，包括 Seeed reComputer Jetson 系列设备，只要目标系统能够运行 Docker 并通过 USB 串口访问 Reachy Mini 即可。

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Mini J501 Kit </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110839-nvidia-jetson-orin-nano-developer-kit.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://huggingface.co/reachy-mini">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### 接线与连接

对于每个机器人节点：

- 通过 USB 将 Reachy Mini 连接到 Jetson
- 打开 Jetson 电源
- 确保笔记本电脑和所有 Jetson 设备处于同一局域网

### 上电检查清单

在每台 Jetson 上，确认 Reachy Mini 串口设备可见：

```bash
ls /dev/ttyACM*
```

如果你能看到类似 `/dev/ttyACM0` 的设备，说明硬件连接已就绪。

## 系统架构

本演示采用星型（中心辐射）设计：

- 每台 Jetson 承载一个 Reachy Mini 舞蹈容器
- 每个容器在端口 `8042` 上暴露本地机器人 Web UI 和 REST API
- 笔记本电脑在端口 `8060` 上运行集群控制 Web 应用
- 笔记本电脑轮询所有 Jetson 的 API，并将相同的控制指令分发给所有在线机器人

:::info
Jetson 端服务专为低延迟符号化运动控制设计。它使用轻量级的 `set_target()` 循环，不依赖麦克风或摄像头输入。
:::

推荐的网络拓扑：

```text
Laptop (Fleet Control, port 8060)
    |- Jetson A -> Reachy Mini A -> http://<jetson-a-ip>:8042
    |- Jetson B -> Reachy Mini B -> http://<jetson-b-ip>:8042
    |- Jetson C -> Reachy Mini C -> http://<jetson-c-ip>:8042
```

## 为 Reachy Mini 准备每台 Jetson

在每一台将要控制 Reachy Mini 的 Jetson 上执行以下步骤。

```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
sudo systemctl daemon-reload && sudo systemctl restart docker
```

## 部署容器化的 Reachy Mini 舞蹈服务

### 下载并运行 docker 镜像
从[这里](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgB5HfoKnB8eSa-ERVUZ0J9hAUT572CBk0tShhJdqwQ_qMo?e=g2DHYe)下载 docker 镜像。

如果你收到的是类似 `reachy-bpm-dancer_20260323_linux-arm64.tar.gz` 的打包镜像：

```bash
docker load -i reachy-bpm-dancer_20260323_linux-arm64.tar.gz

docker run -d \
  --name reachy-bpm-dancer \
  --restart unless-stopped \
  -p 8042:8042 \
  -p 8000:8000 \
  --device /dev/ttyACM0:/dev/ttyACM0 \
  -e REACHY_SERIAL_PORT=/dev/ttyACM0 \
  reachy-bpm-dancer:20260323-arm64
```

### 验证 Jetson 端服务

打开本地单机器人 UI：

```text
http://<jetson-ip>:8042/
```

打开 API 文档：

```text
http://<jetson-ip>:8042/docs
```

在终端中检查机器人状态：

```bash
curl http://127.0.0.1:8042/api/status
```

启动机器人跳舞：

```bash
curl -X POST http://127.0.0.1:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":124,"style":"anthem","energy":1.15}'
```

停止机器人：

```bash
curl -X POST http://127.0.0.1:8042/api/dance/stop
```

:::note
Jetson 端服务提供：

- 端口 `8042` 上的 Web UI
- 端口 `8042` 上的 REST API
- 端口 `8000` 上的 Reachy Mini 守护进程
:::

## 在笔记本电脑上运行集群控制仪表盘

集群控制仪表盘单独运行在你的笔记本电脑上，让你可以通过一个浏览器管理所有 Jetson 节点。

### 准备本地 Python 环境

在笔记本电脑上：

```powershell
git clone https://github.com/yuyoujiang/reachy_fleet_control
cd reachy_fleet_control
python -m venv .venv
.\.venv\Scripts\python -m pip install -e .
```

:::info
本演示使用 Windows。如果你的电脑运行的是其他操作系统，请使用对应的命令来安装环境。
:::

### 启动集群控制 Web UI

```powershell
.\.venv\Scripts\python -m uvicorn reachy_fleet_control.main:app --host 0.0.0.0 --port 8060
```

然后打开：

```text
http://127.0.0.1:8060/
```

或者从局域网中的其他设备访问：

```text
http://<laptop-ip>:8060/
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_fleet_control/fleet_ui.png" />
</div>

### 集群仪表盘功能

仪表盘支持：

- 添加 Jetson IP、`host:port` 或完整 URL
- 移除离线或未使用的 Jetson 节点
- 监控每台机器人的在线状态和延迟
- 向每一台已注册的 Reachy Mini 广播舞蹈指令
- 将设备列表保存在本地状态文件中

设备列表在 Windows 上本地存储于：

```text
C:\Users\<username>\.reachy_fleet_control\fleet_state.json
```

## 控制多台 Reachy Mini 机器人

当两个层级都在运行后，多机器人工作流就非常简单。

### 步骤 1. 添加 Jetson 设备

在集群控制页面中：

- 输入一个 Jetson IP，例如 `192.168.1.130`
- 可选地添加一个标签
- 点击 **Add Device**

对局域网中的每台 Jetson 重复上述步骤。

### 步骤 2. 检查在线状态

每个设备卡片会显示：

- 端点
- 标签
- 在线或离线状态
- 当前 BPM
- 节拍计数
- 延迟

如果某个设备离线，仪表盘会将其保留在列表中并持续轮询，直到它重新上线。

### 步骤 3. 广播舞蹈指令

使用共享控制一次性更新所有机器人：

- **Start Dance**
- **Pause Dance**
- **Accent All**
- **Center All**
- BPM 预设：`82`、`124`、`135`
- 风格选择：`groove`、`bounce`、`sway`、`anthem`
- 能量滑块

### 步骤 4. 观察机器人集群

当广播成功时：

- 所有在线的 Reachy Mini 机器人都会切换到相同的目标 BPM
- 所选风格会应用到所有机器人
- 仪表盘中的活动设备数量会更新
- 每台 Jetson 会在本地持续生成动作，因此轻微的网络抖动不会中断舞蹈循环

## 效果演示

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NWoJMN_IWH0" title="Reachy Fleet Control" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## REST API 参考

本项目暴露了两层 API。

### Jetson 端单机器人 API

基础 URL：

```text
http://<jetson-ip>:8042
```

可用端点：

- `GET /api`
- `GET /api/status`
- `GET /api/styles`
- `GET /api/presets`
- `POST /api/settings`
- `POST /api/dance/start`
- `POST /api/dance/stop`
- `POST /api/dance/accent`
- `POST /api/dance/center`

示例：

```bash
curl -X POST http://<jetson-ip>:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":135,"style":"anthem","energy":1.2}'
```

### 笔记本端集群 API

基础 URL：

```text
http://<laptop-ip>:8060
```

可用端点：

- `GET /api`
- `GET /api/fleet/status`
- `POST /api/fleet/devices`
- `DELETE /api/fleet/devices?endpoint=<host:port>`
- `POST /api/fleet/settings`
- `POST /api/fleet/dance/start`
- `POST /api/fleet/dance/stop`
- `POST /api/fleet/dance/accent`
- `POST /api/fleet/dance/center`

添加一台 Jetson 设备：

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/devices" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"target":"192.168.1.130","label":"Stage Left"}'
```

启动所有机器人：

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/start" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"bpm":124,"style":"anthem","energy":1.15}'
```

停止所有机器人：

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/stop" `
  -Method Post
```

## 故障排查

### Jetson 上未检测到 Reachy Mini

检查 USB 串口节点是否存在：

```bash
ls /dev/ttyACM*
```

如有需要，更新 Docker 设备映射和 `REACHY_SERIAL_PORT` 的值。

### 端口 `8042` 或 `8060` 已被占用

在再次启动服务之前，先停止旧进程或选择其他端口。

### 设备在 Fleet Dashboard 中显示为离线

请检查以下内容：

- 笔记本电脑和 Jetson 位于同一局域网
- Jetson 服务正在运行
- Jetson 防火墙未阻止端口 `8042`
- 在仪表板中输入的 IP 地址正确

### 机器人不移动但 API 有响应

在 Jetson 上检查容器日志：

```bash
docker compose logs -f
```

同时确认：

- Reachy Mini 已连接到 Jetson
- 串口设备路径与容器设置一致
- 机器人未被其他进程占用

## 参考资料

- [在 Jetson 上配置 Docker](https://www.jetson-ai-lab.com/tutorials/ssd-docker-setup/)
- [Reachy Mini GitHub 仓库](https://github.com/pollen-robotics/reachy_mini)
- [Reachy Mini AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
