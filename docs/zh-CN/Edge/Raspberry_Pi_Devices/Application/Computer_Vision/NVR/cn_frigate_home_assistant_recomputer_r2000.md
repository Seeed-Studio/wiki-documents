---
description: 使用 Frigate NVR 和 Hailo AI 加速器在 reComputer R2000 上打造 DIY AI 驱动的家庭监控系统。无缝集成 Home Assistant，实现实时智能警报、目标检测以及高效的本地视频边缘处理。

title: Frigate NVR 和 Hailo 在 reComputer R2000 上连接 Home Assistant

keywords:
- 树莓派
- 边缘 AI 计算机
- reComputer R2000
- Frigate
- Home Assistant
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /cn/r2000_series_frigate_and_home_assistant
last_update:
  date: 2025/6/18
  author: Kasun Thushara
---

#  Frigate NVR 和 Hailo 在 reComputer R2000 上连接 Home Assistant

## 简介

Frigate NVR 是一个开源的网络视频录像机 (NVR)，专为使用 AI 模型进行实时目标检测而设计。它轻量级、功能强大，并通过 RTSP 协议与摄像头无缝协作。

Home Assistant (HA) 是一个开源的智能家居自动化平台，能够控制和自动化家中的设备。

在本指南中，我们将向您展示如何在配备 **Hailo PCIe** 的 **reComputer AI 设备** 上安装 **Frigate**，并通过 **MQTT** 将其连接到您现有的 **Home Assistant** 设置，操作简单快捷。

## 前置条件

### 硬件要求

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI 工业版 R2000</th>
        <th>reComputer AI R2000</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>    
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 安装 Hailo PCIe 驱动

### 第 1 步：配置树莓派

```bash
sudo apt update
sudo raspi-config
```

* 导航到 `6 Advanced Options > A8 PCIe Speed`
* 选择 `Yes` 以启用 PCIe Gen 3
* 退出并选择 `Finish`
  

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/pcie.png" 
    style={{ width: 600}} 
  />
</div>

在 `/boot/firmware/config.txt` 文件末尾添加以下行：

```bash
dtoverlay=pciex1-compat-pi5,no-mip
```

### 第 2 步：安装 PCIe 驱动

```bash
sudo apt update
sudo apt install dkms
```

```bash
git clone https://github.com/hailo-ai/hailort-drivers
cd hailort-drivers/linux/pcie
git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
sudo make install_dkms
```

### 第 3 步：安装固件

```bash
cd ../..
./download_firmware.sh
sudo mkdir -p /lib/firmware/hailo
sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

### 第 4 步：修复 PCIe 描述符大小问题

创建 `/etc/modprobe.d/hailo_pci.conf` 文件，并添加以下内容：

```bash
options hailo_pci force_desc_page_size=4096
```

### 第 5 步：重启并验证

```bash
sudo reboot
ls /dev/hailo*
```

预期输出：

```bash
/dev/hailo0
```

## 安装 Frigate NVR 使用 Docker

### 前置条件

确保您的摄像头已配置为以 1920x1080 分辨率进行 RTSP 流媒体传输。

### 更新系统

```bash
sudo apt update
```

### 安装 Docker

```bash
curl -fsSL get.docker.com | bash
sudo usermod -aG docker $USER
sudo reboot
```

### 拉取 Frigate 镜像

```bash
docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
```

### 创建目录结构

```bash
mkdir -p ~/frigate/config
mkdir -p ~/frigate/data/db
mkdir -p ~/frigate/data/storage
cd ~/frigate
```

### 创建 Docker Compose 文件 (frigate.yml)

```bash
nano frigate.yml
```

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    shm_size: 1024mb
    devices:
      - /dev/hailo0:/dev/hailo0
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
```

### 创建 Frigate 配置文件 (config/config.yml)

```bash
nano config/config.yml
```

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  enabled: False

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1
```

### 启动 Frigate

```bash
docker compose -f frigate.yml up -d
```

### 访问 Web 界面

访问: `http://<your-device-ip>:5000`

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/frigate_web.png" 
    style={{ width: 600}} 
  />
</div>

## Home Assistant 集成

### 第一步: 设置 HACS

假设您正在运行 Home Assistant（HA Green、HA Yellow 或类似的独立设备）：

- 如果尚未安装，请安装 [HACS](https://hacs.xyz/docs/use/)。
- 在 HACS 中，从社区商店安装 **Frigate 集成**。

使用您的 Frigate AI 盒子的 IP 和端口进行配置。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/config_frigate.PNG" 
    style={{ width: 600}} 
  />
</div>

### 第二步: 安装 MQTT 插件

按照 [官方 MQTT 集成指南](https://www.home-assistant.io/integrations/mqtt/) 安装并配置 MQTT 代理插件。

### 第三步: 更新 Frigate 配置以支持 MQTT

```bash
mqtt:
  host: <HA IP>
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: <HA User Name>
  password: <HA Password>
```

示例：

```bash
mqtt:
  host: 10.0.0.136
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook
```

完整示例：

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  host: core-mosquitto
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1
```

### 第四步: 重启 Frigate

```bash
docker compose -f frigate.yml down
sudo docker compose -f frigate.yml up -d
```

### 第五步: 确认 MQTT 是否正常工作（可选）

* 检查 HA 日志或 MQTT 插件日志，验证是否收到来自 Frigate 的消息。
* 在 HA 中，您现在可以在自动化中使用 Frigate 事件，例如运动警报、检测到的对象等。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/HA_interface.PNG" 
    style={{ width: 600}} 
  />
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>